function tickMultiOutput(inventory, machine, data, type, tier, amountSlots) {
    if(tier == 1 || tier == 2){
        let {slotIndex, countProcess, ticksPerTick, fuelPerTick} = data
        let slotItem

        // reduce fuel
        let machineItem = inventory.getItem(slotIndex)
        if(machineItem.nbt.fuel >= fuelPerTick) machineItem.nbt.fuel -= fuelPerTick
        else {machineItem.nbt.fuel = 0, machineItem.nbt.CustomModelData = 0}

        // get recipe
        let inputSlotIndex = getSlotInDirection(slotIndex, "up", type)
        if(inputSlotIndex == null){resetSimpleMachineItemNbt(machineItem); return}
        slotItem = inventory.getItem(inputSlotIndex)
        let recipe = getRecipeSimpleMachine(machine, slotItem, tier)
        if(recipe.length == 0){resetSimpleMachineItemNbt(machineItem); return}
        slotItem = recipe[0]
        recipe = recipe[1]

        // checks if the output can be inserted
        let outputSlotIndexes = []
        for(let i = 0; i < amountSlots; i++){
            if(i == 0){
                outputSlotIndexes.push(getSlotInDirection(slotIndex, "down", type))
            }else if(i % 2 == 1){
                outputSlotIndexes.unshift(getSlotInDirection(outputSlotIndexes[0], "left", type))
            }else{
                outputSlotIndexes.push(getSlotInDirection(outputSlotIndexes[outputSlotIndexes.length - 1], "right", type))
            }
        }
        outputSlotIndexes = outputSlotIndexes.filter(slotIndex => slotIndex != null)
        let amountCanProcessOutput = countProcess
        if(outputSlotIndexes.length < recipe.outputs.length){resetRecipeIndexedMachineItemNbt(machineItem); return}
        else{
            for(let i = 0; i < outputSlotIndexes.length; i++){
                let outputItem = Item.of(recipe.outputs[i])
                let amountCanInsertThisSlot = getAmountCanInsert(inventory, outputSlotIndexes[i], outputItem.copyWithCount(amountCanProcessOutput * outputItem.count))
                if(amountCanInsertThisSlot < outputItem.count){resetRecipeIndexedMachineItemNbt(machineItem); return}
                if(amountCanInsertThisSlot < amountCanProcessOutput * outputItem.count) amountCanProcessOutput = Math.floor(amountCanInsertThisSlot / outputItem.count)
            }
        }

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
            if(amountCanProcessOutput < canProcess) canProcess = amountCanProcessOutput
            if(slotItem.count < canProcess * inputItem.count) canProcess = Math.floor(slotItem.count / inputItem.count)

            extractItem(inventory, inputSlotIndex,  inputItem.copyWithCount(canProcess * inputItem.count))
            let canInsertItems = true
            for(let i = 0; i < outputSlotIndexes.length; i++){
                let outputItem = Item.of(recipe.outputs[i])
                if(outputItem.isEmpty()) break
                insertItem(inventory, outputSlotIndexes[i], outputItem.copyWithCount(canProcess * outputItem.count))
                if(!canInsert(inventory, outputSlotIndexes[i], outputItem)){canInsertItems = false}
            }
            machineItem.nbt.recipeProgress = 0

            if(canProcess < countProcess || !canExtract(inventory, inputSlotIndex, inputItem) || !canInsertItems){
                machineItem.nbt.currentInputItem = "minecraft:air"
                machineItem.nbt.currentTime = 0
                return
            }
        }
    }
}