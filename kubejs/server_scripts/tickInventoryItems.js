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
    }else if(/kubejs:inventory_macerator_tier_.$/.test(item)){
        tickSimpleMachine(inventory, "macerator", data, type, item.charAt(item.length - 1))
    }else if(/kubejs:inventory_compressor_tier_.$/.test(item)){
        tickSimpleMachine(inventory, "compressor", data, type, item.charAt(item.length - 1))
    }else if(/kubejs:inventory_cutting_machine_tier_.$/.test(item)){
        tickSimpleMachine(inventory, "cuttingMachine", data, type, item.charAt(item.length - 1))
    }else if(/kubejs:inventory_wiremill_tier_.$/.test(item)){
        tickSimpleMachine(inventory, "wiremill", data, type, item.charAt(item.length - 1) + 1)
    }else if(/kubejs:inventory_polarizer_tier_.$/.test(item)){
        tickSimpleMachine(inventory, "polarizer", data, type, item.charAt(item.length - 1) + 2)
    }else if(/kubejs:inventory_coke_oven_tier_.$/.test(item)){
        tickSimpleMachine(inventory, "cokeOven", data, type, item.charAt(item.length - 1))
    }else if(/kubejs:inventory_blast_furnace_tier_.$/.test(item)){
        tickBlastFurnace(inventory, data, type, item.charAt(item.length - 1))
    }else if(/kubejs:inventory_mixer_tier_.$/.test(item)){
        tickMixer(inventory, data, type, item.charAt(item.length - 1))
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


function resetSimpleMachineItemNbt(machineItem, fully){
    if(!fully) fully = false
    if(fully){
        machineItem.nbt.fuel = 0
        machineItem.nbt.CustomModelData = 0
    }
    machineItem.nbt.recipeProgress = 0
    machineItem.nbt.currentInputItem = "minecraft:air"
    machineItem.nbt.currentTime = 0
}


function resetRecipeIndexedMachineItemNbt(machineItem, fully){
    if(!fully) fully = false
    if(fully){
        machineItem.nbt.fuel = 0
        machineItem.nbt.CustomModelData = 0
    }
    machineItem.nbt.recipeProgress = 0
    machineItem.nbt.currentRecipe = -1
    machineItem.nbt.currentTime = 0
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
        let recipe, slotItem

        // reduce fuel
        let machineItem = inventory.getItem(slotIndex)
        if(machineItem.nbt.fuel >= fuelPerTick) machineItem.nbt.fuel -= fuelPerTick
        else {machineItem.nbt.fuel = 0, machineItem.nbt.CustomModelData = 0}

        // get recipe
        let inputSlotIndex = getSlotInDirection(slotIndex, "up", type)
        if(inputSlotIndex == null){resetSimpleMachineItemNbt(machineItem); return}
        else{
            slotItem = inventory.getItem(inputSlotIndex)
            recipe = getRecipeSimpleMachine(machine, slotItem)
            if(recipe.length == 0){resetSimpleMachineItemNbt(machineItem); return}
            slotItem = recipe[0]
            recipe = recipe[1]
        }

        // checks if the output can be inserted
        let outputItem = Item.of(recipe.output)
        let resultSlotIndex = getSlotInDirection(slotIndex, "down", type)
        let amountCanInsert = getAmountCanInsert(inventory, resultSlotIndex, outputItem.copyWithCount(countProcess * outputItem.count))
        if(amountCanInsert == 0){resetSimpleMachineItemNbt(machineItem); return}

        // check current input item and reset progress if it's different
        let inputItem = Item.of(recipe.input)
        if(machineItem.nbt.currentInputItem == "minecraft:air"){
            machineItem.nbt.currentInputItem = inputItem.id
            machineItem.nbt.currentTime = recipe.time
        }else if(!inputItem.is(machineItem.nbt.currentInputItem)){
            machineItem.nbt.recipeProgress = 0
            machineItem.nbt.currentInputItem = inputItem.id
            machineItem.nbt.currentTime = recipe.time
        }

        // adds fuel if needed, and progresses recipe
        if(machineItem.nbt.fuel < fuelPerTick){
            let fuel, slot, fuelRequired
            for(let direction of ["left", "right"] ){
                slot = getSlotInDirection(slotIndex, direction, type)
                fuel = getFuel(inventory, slot)
                if(!fuel.isEmpty()) break
            }
            if(fuel.isEmpty()){resetSimpleMachineItemNbt(machineItem, true); return}
            if(fuelItems[fuel.id] < fuelPerTick - machineItem.nbt.fuel){
                fuelRequired = Math.ceil((fuelPerTick - machineItem.nbt.fuel) / fuelItems[fuel.id])
                if(fuelRequired > fuel.count){resetSimpleMachineItemNbt(machineItem, true); return}
            }else{
                fuelRequired = 1
            }
            extractItem(inventory, slot, fuel.copyWithCount(fuelRequired))
            machineItem.nbt.fuel = fuelItems[fuel.id] * fuelRequired
            machineItem.nbt.CustomModelData = 1
        }
        machineItem.nbt.recipeProgress += ticksPerTick

        // processes recipe if done
        if(machineItem.nbt.recipeProgress >= recipe.time){
            let canProcess = countProcess
            if(amountCanInsert < canProcess * outputItem.count) canProcess = Math.floor(amountCanInsert / outputItem.count)
            if(slotItem.count < canProcess * inputItem.count) canProcess = Math.floor(slotItem.count / inputItem.count)

            extractItem(inventory, inputSlotIndex,  inputItem.copyWithCount(canProcess * inputItem.count))
            insertItem(inventory, resultSlotIndex, outputItem.copyWithCount(canProcess * outputItem.count))
            machineItem.nbt.recipeProgress = 0
            if(canProcess < countProcess || !canExtract(inventory, inputSlotIndex, inputItem) || !canInsert(inventory, resultSlotIndex, outputItem)){
                machineItem.nbt.currentInputItem = "minecraft:air"
                machineItem.nbt.currentTime = 0
                return
            }
        }
    }
}


function tickBlastFurnace(inventory, data, type, tier){
    if(tier == "1" || tier == "2"){
        let {slotIndex, countProcess, ticksPerTick, fuelPerTick} = data
        let slotItems = []
        let recipe

        // reduce fuel
        let machineItem = inventory.getItem(slotIndex)
        if(machineItem.nbt.fuel >= fuelPerTick) machineItem.nbt.fuel -= fuelPerTick
        else {machineItem.nbt.fuel = 0, machineItem.nbt.CustomModelData = 0}

        // get recipe
        let input2SlotIndex = getSlotInDirection(slotIndex, "up", type)
        let input1SlotIndex = getSlotInDirection(input2SlotIndex, "left", type)
        let input3SlotIndex = getSlotInDirection(input2SlotIndex, "right", type)
        let inputSlotIndexes = [input1SlotIndex, input2SlotIndex, input3SlotIndex].filter(slotIndex => slotIndex != null)

        if(input1SlotIndex == null && input2SlotIndex == null && input3SlotIndex == null){resetRecipeIndexedMachineItemNbt(machineItem); return}
        else{
            for(let slotIndex of inputSlotIndexes){
                slotItems.push(inventory.getItem(slotIndex))
            }
            recipe = getRecipeBlastFurnace(slotItems)
            if(recipe.length == 0){resetRecipeIndexedMachineItemNbt(machineItem); return}
            slotItems = recipe[0]
            recipe = recipe[1]
        }

        // checks if the output can be inserted
        let outputItem = Item.of(recipe.output)
        let resultSlotIndex = getSlotInDirection(slotIndex, "down", type)
        let amountCanInsert = getAmountCanInsert(inventory, resultSlotIndex, outputItem.copyWithCount(countProcess * outputItem.count))
        if(amountCanInsert == 0){resetRecipeIndexedMachineItemNbt(machineItem); return}

        // check current input item and reset progress if it's different
        if(machineItem.nbt.currentRecipe == -1){
            machineItem.nbt.currentRecipe = recipe.index
            machineItem.nbt.currentTime = recipe.time
        }else if(machineItem.nbt.currentRecipe != recipe.index){
            machineItem.nbt.recipeProgress = 0
            machineItem.nbt.currentRecipe = recipe.index
            machineItem.nbt.currentTime = recipe.time
        }

        // adds fuel if needed, and progresses recipe
        if(machineItem.nbt.fuel < fuelPerTick){
            let fuel, slot, fuelRequired
            for(let direction of ["left", "right"] ){
                slot = getSlotInDirection(slotIndex, direction, type)
                fuel = getFuel(inventory, slot)
                if(!fuel.isEmpty()) break
            }
            if(fuel.isEmpty()){resetRecipeIndexedMachineItemNbt(machineItem, true); return}
            if(fuelItems[fuel.id] < fuelPerTick - machineItem.nbt.fuel){
                fuelRequired = Math.ceil((fuelPerTick - machineItem.nbt.fuel) / fuelItems[fuel.id])
                if(fuelRequired > fuel.count){resetRecipeIndexedMachineItemNbt(machineItem, true); return}
            }else{
                fuelRequired = 1
            }
            extractItem(inventory, slot, fuel.copyWithCount(fuelRequired))
            machineItem.nbt.fuel = fuelItems[fuel.id] * fuelRequired
            machineItem.nbt.CustomModelData = 1
        }
        machineItem.nbt.recipeProgress += ticksPerTick

        // processes recipe if done
        if(machineItem.nbt.recipeProgress >= recipe.time){
            let canProcess = countProcess
            let inputItems = []
            for(let i = 0; i < slotItems.length; i++){
                let slotItem = slotItems[i]
                let inputItem = Item.of(recipe.inputs[slotItems[i][1]])
                inputItems.push(inputItem)
                if(slotItem.count < canProcess * inputItem.count) canProcess = Math.floor(slotItem.count / inputItem.count)

            }
            for(let i = 0; i < inputItems.length; i++){
                let inputSlotIndex = inputSlotIndexes[i]
                let inputItem = inputItems[i]
                if(inputSlotIndex != null) extractItem(inventory, inputSlotIndex, inputItem.copyWithCount(canProcess * inputItem.count))
            }
            insertItem(inventory, resultSlotIndex, outputItem.copyWithCount(canProcess * outputItem.count))
            machineItem.nbt.recipeProgress = 0
            if(
                canProcess < countProcess || 
                !canInsert(inventory, resultSlotIndex, outputItem) ||
                !canExtract(inventory, inputSlotIndexes[0], inputItems[0]) || 
                !canExtract(inventory, inputSlotIndexes[1], inputItems[1]) ||
                !canExtract(inventory, inputSlotIndexes[2], inputItems[2])
            ){
                machineItem.nbt.currentRecipe = -1
                machineItem.nbt.currentTime = 0
                return
            }
        }
    }
}


function tickMixer(inventory, data, type, tier){
    if(tier == "1" || tier == "2"){
        let {slotIndex, countProcess, ticksPerTick, fuelPerTick} = data
        let slotItems = []
        let recipe

        // reduce fuel
        let machineItem = inventory.getItem(slotIndex)
        if(machineItem.nbt.fuel >= fuelPerTick) machineItem.nbt.fuel -= fuelPerTick
        else {machineItem.nbt.fuel = 0, machineItem.nbt.CustomModelData = 0}

        // get recipe
        let input2SlotIndex = getSlotInDirection(slotIndex, "up", type)
        let input1SlotIndex = getSlotInDirection(input2SlotIndex, "left", type)
        let input3SlotIndex = getSlotInDirection(input2SlotIndex, "right", type)
        let inputSlotIndexes = [input1SlotIndex, input2SlotIndex, input3SlotIndex].filter(slotIndex => slotIndex != null)

        if(input1SlotIndex == null && input2SlotIndex == null && input3SlotIndex == null){resetRecipeIndexedMachineItemNbt(machineItem); return}
        else{
            for(let slotIndex of inputSlotIndexes){
                slotItems.push(inventory.getItem(slotIndex))
            }
            recipe = getRecipeMixer(slotItems)
            if(recipe.length == 0){resetRecipeIndexedMachineItemNbt(machineItem); return}
            slotItems = recipe[0]
            recipe = recipe[1]
        }

        // checks if the output can be inserted
        let outputItem = Item.of(recipe.output)
        let resultSlotIndex = getSlotInDirection(slotIndex, "down", type)
        let amountCanInsert = getAmountCanInsert(inventory, resultSlotIndex, outputItem.copyWithCount(countProcess * outputItem.count))
        if(amountCanInsert == 0){resetRecipeIndexedMachineItemNbt(machineItem); return}

        // check current input item and reset progress if it's different
        if(machineItem.nbt.currentRecipe == -1){
            machineItem.nbt.currentRecipe = recipe.index
            machineItem.nbt.currentTime = recipe.time
        }else if(machineItem.nbt.currentRecipe != recipe.index){
            machineItem.nbt.recipeProgress = 0
            machineItem.nbt.currentRecipe = recipe.index
            machineItem.nbt.currentTime = recipe.time
        }

        // adds fuel if needed, and progresses recipe
        if(machineItem.nbt.fuel < fuelPerTick){
            let fuel, slot, fuelRequired
            for(let direction of ["left", "right"] ){
                slot = getSlotInDirection(slotIndex, direction, type)
                fuel = getFuel(inventory, slot)
                if(!fuel.isEmpty()) break
            }
            if(fuel.isEmpty()){resetRecipeIndexedMachineItemNbt(machineItem, true); return}
            if(fuelItems[fuel.id] < fuelPerTick - machineItem.nbt.fuel){
                fuelRequired = Math.ceil((fuelPerTick - machineItem.nbt.fuel) / fuelItems[fuel.id])
                if(fuelRequired > fuel.count){resetRecipeIndexedMachineItemNbt(machineItem, true); return}
            }else{
                fuelRequired = 1
            }
            extractItem(inventory, slot, fuel.copyWithCount(fuelRequired))
            machineItem.nbt.fuel = fuelItems[fuel.id] * fuelRequired
            machineItem.nbt.CustomModelData = 1
        }
        machineItem.nbt.recipeProgress += ticksPerTick

        // processes recipe if done
        if(machineItem.nbt.recipeProgress >= recipe.time){
            let canProcess = countProcess
            let inputItems = []
            for(let i = 0; i < slotItems.length; i++){
                let slotItem = slotItems[i]
                let inputItem = Item.of(recipe.inputs[slotItems[i][1]])
                inputItems.push(inputItem)
                if(slotItem.count < canProcess * inputItem.count) canProcess = Math.floor(slotItem.count / inputItem.count)

            }
            for(let i = 0; i < inputItems.length; i++){
                let inputSlotIndex = inputSlotIndexes[i]
                let inputItem = inputItems[i]
                if(inputSlotIndex != null) extractItem(inventory, inputSlotIndex, inputItem.copyWithCount(canProcess * inputItem.count))
            }
            insertItem(inventory, resultSlotIndex, outputItem.copyWithCount(canProcess * outputItem.count))
            machineItem.nbt.recipeProgress = 0
            if(
                canProcess < countProcess || 
                !canInsert(inventory, resultSlotIndex, outputItem) ||
                !canExtract(inventory, inputSlotIndexes[0], inputItems[0]) || 
                !canExtract(inventory, inputSlotIndexes[1], inputItems[1]) ||
                !canExtract(inventory, inputSlotIndexes[2], inputItems[2])
            ){
                machineItem.nbt.currentRecipe = -1
                machineItem.nbt.currentTime = 0
                return
            }
        }
    }
}