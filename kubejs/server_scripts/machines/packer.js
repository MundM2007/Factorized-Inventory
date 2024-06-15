function tickPacker(inventory, data, type, tier){
    if(tier == 1 || tier == 2){
        let {slotIndex, countProcess, ticksPerTick, fuelPerTick} = data
        let templateItem = Item.of("minecraft:air")
        let templateDirection

        // reduce fuel
        let machineItem = inventory.getItem(slotIndex)
        if(machineItem.nbt.fuel >= fuelPerTick) machineItem.nbt.fuel -= fuelPerTick
        else {machineItem.nbt.fuel = 0, machineItem.nbt.CustomModelData = 0}

        // get recipe
        let inputSlotIndexes = []
        for(let i = 0; i < 3; i++){
            if(i == 0){
                inputSlotIndexes.push(getSlotInDirection(slotIndex, "up", type))
            }else if(i % 2 == 1){
                inputSlotIndexes.unshift(getSlotInDirection(inputSlotIndexes[0], "left", type))
            }else{
                inputSlotIndexes.push(getSlotInDirection(inputSlotIndexes[inputSlotIndexes.length - 1], "right", type))
            }
        }
        inputSlotIndexes = inputSlotIndexes.filter(slotIndex => slotIndex != null)
        if(inputSlotIndexes.length == 0){resetRecipeIndexedMachineItemNbt(machineItem); return}

        for(let direction of ["left", "right"] ){
            let slot = getSlotInDirection(slotIndex, direction, type)
            let item = inventory.getItem(slot)
            if(/kubejs:.*_template/.test(item.id)){templateItem = item; templateDirection = direction; break}
        }

        let slotItems = []
        for(let slotIndex of inputSlotIndexes){
            slotItems.push(inventory.getItem(slotIndex))
        }
        let recipe = getRecipeIndexedMachineRecipe(global.recipes.packer[templateItem.id.split(":")[1]], slotItems, 3, tier)
        if(recipe.length == 0){resetRecipeIndexedMachineItemNbt(machineItem); return}
        slotItems = recipe[0]
        recipe = recipe[1]

        // checks if the output can be inserted
        let outputItem = Item.of(recipe.output)
        let resultSlotIndex = getSlotInDirection(slotIndex, "down", type)
        let amountCanInsert = getAmountCanInsert(inventory, resultSlotIndex, outputItem.copyWithCount(countProcess * outputItem.count))
        if(amountCanInsert < outputItem.count){resetRecipeIndexedMachineItemNbt(machineItem); return}

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
            let directions = ["left", "right"].filter(direction => direction != templateDirection)
            for(let direction of directions){
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

            let canExtractItems = true
            for(let i = 0; i < 3; i++){
                if(!canExtract(inventory, inputSlotIndexes[i], inputItems[i])){canExtractItems = false; break}
            }

            if(
                canProcess < countProcess || 
                !canInsert(inventory, resultSlotIndex, outputItem) ||
                !canExtractItems
            ){
                machineItem.nbt.currentRecipe = -1
                machineItem.nbt.currentTime = 0
                return
            }
        }
    }
}