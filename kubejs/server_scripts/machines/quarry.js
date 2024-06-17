function weightedRandom(items, weights) {
    let i
    for (i = 1; i < weights.length; i++)
        weights[i] += weights[i - 1]

    let random = Math.random() * weights[weights.length - 1]
    for (i = 0; i < weights.length; i++)
        if (weights[i] > random)
            return items[i]
}


function resetQuarryItemNbt(machineItem, fully){
    if(!fully) fully = false
    if(fully){
        machineItem.nbt.fuel = 0
        machineItem.nbt.CustomModelData = 0
    }
    machineItem.nbt.recipeProgress = 0
    machineItem.nbt.currentInputItem = "minecraft:air"
    machineItem.nbt.currentOutputItem = "minecraft:air"
    machineItem.nbt.currentTime = 0
}


function tickQuarry(inventory, data, type, tier){
    if(tier == 2){
        let {slotIndex, countProcess, ticksPerTick, fuelPerTick} = data
        let recipe, slotItem

        // reduce fuel
        let machineItem = inventory.getItem(slotIndex)
        if(machineItem.nbt.fuel >= fuelPerTick) machineItem.nbt.fuel -= fuelPerTick
        else {machineItem.nbt.fuel = 0, machineItem.nbt.CustomModelData = 0}

        let resultSlotIndex = getSlotInDirection(slotIndex, "down", type)
        if(!canInsertAnyItem(inventory, resultSlotIndex)){resetQuarryItemNbt(machineItem); return}

        // get recipe
        let inputSlotIndex = getSlotInDirection(slotIndex, "up", type)
        if(inputSlotIndex == null){resetQuarryItemNbt(machineItem); return}
        else{
            slotItem = inventory.getItem(inputSlotIndex)
            recipe = getRecipeSimpleMachine("quarry", slotItem, tier)
            if(recipe.length == 0){resetQuarryItemNbt(machineItem); return}
            slotItem = recipe[0]
            recipe = recipe[1]
        }

        // check current input item and reset progress if it's different
        let inputItem = Item.of(recipe.input)
        if(machineItem.nbt.currentInputItem == "minecraft:air"){
            machineItem.nbt.currentInputItem = inputItem.id
            machineItem.nbt.currentTime = recipe.time
        }else if(!inputItem.is(machineItem.nbt.currentInputItem)){
            machineItem.nbt.recipeProgress = 0
            machineItem.nbt.currentInputItem = inputItem.id
            machineItem.nbt.currentOutputItem = weightedRandom(recipe.outputs, recipe.weights.slice())
            machineItem.nbt.currentTime = recipe.time
        }

        // checks if the output can be inserted
        if(machineItem.nbt.currentOutputItem == "minecraft:air"){
            machineItem.nbt.currentOutputItem = weightedRandom(recipe.outputs, recipe.weights.slice())
        }
        let outputItem = Item.of(machineItem.nbt.currentOutputItem)
        let amountCanInsert = getAmountCanInsert(inventory, resultSlotIndex, outputItem.copyWithCount(countProcess * outputItem.count))
        if(amountCanInsert < outputItem.count){resetQuarryItemNbt(machineItem); return}

        // adds fuel if needed, and progresses recipe
        if(machineItem.nbt.fuel < fuelPerTick){
            let fuel, slot, fuelRequired
            for(let direction of ["left", "right"] ){
                slot = getSlotInDirection(slotIndex, direction, type)
                fuel = getFuel(inventory, slot)
                if(!fuel.isEmpty()) break
            }
            if(fuel.isEmpty()){resetQuarryItemNbt(machineItem, true); return}
            if(fuelItems[fuel.id] < fuelPerTick - machineItem.nbt.fuel){
                fuelRequired = Math.ceil((fuelPerTick - machineItem.nbt.fuel) / fuelItems[fuel.id])
                if(fuelRequired > fuel.count){resetQuarryItemNbt(machineItem, true); return}
            }else{
                fuelRequired = 1
            }
            extractItem(inventory, slot, fuel.copyWithCount(fuelRequired))
            machineItem.nbt.fuel += fuelItems[fuel.id] * fuelRequired
            machineItem.nbt.CustomModelData = 1
        }
        machineItem.nbt.recipeProgress += ticksPerTick

        // processes recipe if done
        if(machineItem.nbt.recipeProgress >= recipe.time){
            let canProcess = countProcess
            if(amountCanInsert < canProcess * outputItem.count) canProcess = Math.floor(amountCanInsert / outputItem.count)
            
            let processes = 0
            let consumed = 0
            for(let i = 0; i < canProcess; i++){
                if(Math.random() <= recipe.consumeInputChance){
                    extractItem(inventory, inputSlotIndex,  inputItem.copyWithCount(inputItem.count))
                    consumed++
                    if(consumed == slotItem.count) break
                }
                processes++
            }
            insertItem(inventory, resultSlotIndex, outputItem.copyWithCount(processes * outputItem.count))

            machineItem.nbt.currentOutputItem = weightedRandom(recipe.outputs, recipe.weights.slice())
            outputItem = Item.of(machineItem.nbt.currentOutputItem)
            machineItem.nbt.recipeProgress = 0
            if(canProcess < countProcess || !canExtract(inventory, inputSlotIndex, inputItem) || !canInsert(inventory, resultSlotIndex, outputItem)){
                machineItem.nbt.currentInputItem = "minecraft:air"
                machineItem.nbt.currentOutputItem = "minecraft:air"
                machineItem.nbt.currentTime = 0
                return
            }
        }
    }
}