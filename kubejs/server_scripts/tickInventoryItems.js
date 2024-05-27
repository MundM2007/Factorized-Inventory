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


function tickHopper(inventory, slotIndex, countProcess, directionExtract, directionInsert, type){

    let slotExtract = getSlotInDirection(slotIndex, directionExtract, type)
    let item = getExtractItem(inventory, slotExtract)
    if(item.isEmpty()) return
    if(item.count > countProcess) item = item.copyWithCount(countProcess)
    let slotInsert = getSlotInDirection(slotIndex, directionInsert, type)
    if(slotInsert != null && canInsert(inventory, slotInsert, item)){
        extractItem(inventory, slotExtract, item)
        insertItem(inventory, slotInsert, item)
    }
}


function tickSimpleMachine(inventory, machine, slotIndex, countProcess, type, tier){
    let machineItem = inventory.getItem(slotIndex)
    if(machineItem.nbt.fuel >= 20) machineItem.nbt.fuel -= 20
    else {machineItem.nbt.fuel = 0, machineItem.nbt.CustomModelData = 0}
    
    let inputSlotIndex = getSlotInDirection(slotIndex, "up", type)
    let recipe = getRecipe(machine, inputSlotIndex, inventory)
    if(Object.keys(recipe).length == 0) return

    let resultSlotIndex = getSlotInDirection(slotIndex, "down", type)
    let outputItem = Item.of(recipe.output)
    if(resultSlotIndex == null || !canInsert(inventory, resultSlotIndex, outputItem)) return

    let inputItem = Item.of(recipe.input)
    if(machineItem.nbt.currentInputItem == "minecraft:air"){
        machineItem.nbt.currentInputItem = inputItem.id
    }else if(!inputItem.is(machineItem.nbt.currentInputItem)){
        machineItem.nbt.recipeProgress = 0
        machineItem.nbt.currentInputItem = inputItem.id
    }

    if(machineItem.nbt.recipeProgress >= recipe.cookingTime){
        extractItem(inventory, inputSlotIndex,  inputItem)
        insertItem(inventory, resultSlotIndex, outputItem)
        machineItem.nbt.recipeProgress = 0
        if(!canExtract(inventory, inputSlotIndex, inputItem) || !canInsert(inventory, resultSlotIndex, outputItem)){
            machineItem.nbt.currentInputItem = "minecraft:air"
            return
        }
    }

    if(tier == "1"){
        if(machineItem.nbt.fuel < 20){
            let fuel, slot
            for(let direction of ["left", "right"] ){
                slot = getSlotInDirection(slotIndex, direction, type)
                fuel = getFuel(inventory, slot)
                if(!fuel.isEmpty()) break
            }
            if(fuel.isEmpty()){
                machineItem.nbt.currentInputItem = "minecraft:air"
                machineItem.nbt.CustomModelData = 0
                machineItem.nbt.recipeProgress = 0
                machineItem.nbt.fuel = 0
                return
            }
            extractItem(inventory, slot, fuel.copyWithCount(1))
            machineItem.nbt.fuel = fuelItems[fuel.id]
            machineItem.nbt.CustomModelData = 1
        }
        machineItem.nbt.recipeProgress += 20
    }
}


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
        tickSimpleMachine(inventory, "furnace", data.slotIndex, data.count, type, item.charAt(item.length - 1))
    }
}