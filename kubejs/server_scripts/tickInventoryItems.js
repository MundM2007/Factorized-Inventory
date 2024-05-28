global.tickInventoryItem = function(inventory, data, type){
    let item = data.item
    if(/kubejs:inventory_hopper_tier_.$/.test(item)){
        tickHopper(inventory, data.slotIndex, data.count, "up", "down", type)
    }else if(/kubejs:inventory_hopper_left_facing_tier_.$/.test(item)){
        tickHopper(inventory, data.slotIndex, data.count, "right", "left", type)
    }else if(/kubejs:inventory_upper_tier_.$/.test(item)){
        tickHopper(inventory, data.slotIndex, data.count, "down", "up", type)
    }else if(/kubejs:inventory_hopper_right_facing_tier_.$/.test(item)){
        tickHopper(inventory, data.slotIndex, data.count, "left", "right", type)
    }else if(/kubejs:inventory_furnace_tier_.$/.test(item)){
        tickSimpleMachine(inventory, "furnace", data, type, item.charAt(item.length - 1))
    }
}


function getSlotInDirection(slot, direction, type) {
    if(type == "player") {
        if(direction == "up") {
            if(Math.floor(slot / 9) == 1) return null
            if(slot >= 18) return slot - 9
            return slot + 27
        }else if(direction == "down") {
            if(Math.floor(slot / 9) == 0) return null
            if(slot <= 26) return slot + 9
            return slot - 27
        }else if(direction == "left") {
            if(slot % 9 == 0) return null
            return slot - 1
        }else if(direction == "right") {
            if(slot % 9 == 8) return null
            return slot + 1
        }
    }else if(type == "block") {
        if(direction == "up") {
            if(Math.floor(slot / 9) == 0) return null
            return slot - 9
        }else if(direction == "down") {
            if(Math.floor(slot / 9) == 5) return null
            return slot + 9
        }else if(direction == "left") {
            if(slot % 9 == 0) return null
            return slot - 1
        }else if(direction == "right") {
            if(slot % 9 == 8) return null
            return slot + 1
        }
    }
    return null
}


function resetMachineItemNbt(machineItem, fully){
    if(!fully) fully = false
    if(fully){
        machineItem.nbt.fuel = 0
        machineItem.nbt.CustomModelData = 0
    }
    machineItem.nbt.recipeProgress = 0
    machineItem.nbt.currentInputItem = "minecraft:air"
}


function tickHopper(inventory, slotIndex, countProcess, directionExtract, directionInsert, type){
    let slotExtract = getSlotInDirection(slotIndex, directionExtract, type)
    let item = getExtractItem(inventory, slotExtract)
    if(item.isEmpty()) return
    if(item.count > countProcess) item = item.copyWithCount(countProcess)
    let slotInsert = getSlotInDirection(slotIndex, directionInsert, type)
    let canInsert = getAmountCanInsert(inventory, slotInsert, item)
    if(canInsert < item.count) item = item.copyWithCount(canInsert)
    if(item.count > 0){
        extractItem(inventory, slotExtract, item)
        insertItem(inventory, slotInsert, item)
    }
}


function tickSimpleMachine(inventory, machine, data, type, tier){
    if(tier == "1" || tier == "2"){
        let {slotIndex, countProcess, ticksPerTick, fuelPerTick} = data
        let canProcess = countProcess
        let recipe, slotItem

        // reduce fuel
        let machineItem = inventory.getItem(slotIndex)
        if(machineItem.nbt.fuel >= fuelPerTick) machineItem.nbt.fuel -= fuelPerTick
        else {machineItem.nbt.fuel = 0, machineItem.nbt.CustomModelData = 0}

        // get recipe
        let inputSlotIndex = getSlotInDirection(slotIndex, "up", type)
        if(inputSlotIndex == null){
            recipe = {}
        }else{
            slotItem = inventory.getItem(inputSlotIndex)
            recipe = getRecipe(machine, slotItem)
        }
        if(Object.keys(recipe).length == 0){resetMachineItemNbt(machineItem); return}

        // checks if how much of the input item can be extracted
        let inputItem = Item.of(recipe.input)
        if(slotItem.count < canProcess * inputItem.count) canProcess = Math.floor(slotItem.count / inputItem.count)

        // checks if the output can be inserted and how much
        let outputItem = Item.of(recipe.output)
        let resultSlotIndex = getSlotInDirection(slotIndex, "down", type)
        let canInsert = getAmountCanInsert(inventory, resultSlotIndex, outputItem.copyWithCount(canProcess * outputItem.count))
        if(canInsert < canProcess * outputItem.count) canProcess = Math.floor(canInsert / outputItem.count)

        if(canProcess == 0){resetMachineItemNbt(machineItem); return}

        // check current input item and reset progress if it's different
        if(machineItem.nbt.currentInputItem == "minecraft:air"){
            machineItem.nbt.currentInputItem = inputItem.id
        }else if(!inputItem.is(machineItem.nbt.currentInputItem)){
            machineItem.nbt.recipeProgress = 0
            machineItem.nbt.currentInputItem = inputItem.id
        }

        // processes recipe if done
        if(machineItem.nbt.recipeProgress >= recipe.cookingTime){
            extractItem(inventory, inputSlotIndex,  inputItem.copyWithCount(canProcess * inputItem.count))
            insertItem(inventory, resultSlotIndex, outputItem.copyWithCount(canProcess * outputItem.count))
            machineItem.nbt.recipeProgress = 0
            if(canProcess < countProcess || !canExtract(inventory, inputSlotIndex, inputItem) || !canInsert(inventory, resultSlotIndex, outputItem)){
                machineItem.nbt.currentInputItem = "minecraft:air"
                return
            }
        }

        // adds fuel if needed, and progresses recipe
        if(machineItem.nbt.fuel < fuelPerTick){
            let fuel, slot, fuelRequired
            for(let direction of ["left", "right"] ){
                slot = getSlotInDirection(slotIndex, direction, type)
                fuel = getFuel(inventory, slot)
                if(!fuel.isEmpty()) break
            }
            if(fuel.isEmpty()){resetMachineItemNbt(machineItem, true); return}
            if(fuelItems[fuel.id] < fuelPerTick - machineItem.nbt.fuel){
                fuelRequired = Math.ceil((fuelPerTick - machineItem.nbt.fuel) / fuelItems[fuel.id])
                if(fuelRequired > fuel.count){resetMachineItemNbt(machineItem, true); return}
            }else{
                fuelRequired = 1
            }
            extractItem(inventory, slot, fuel.copyWithCount(fuelRequired))
            machineItem.nbt.fuel = fuelItems[fuel.id] * fuelRequired
            machineItem.nbt.CustomModelData = 1
        }
        machineItem.nbt.recipeProgress += ticksPerTick
    }
}