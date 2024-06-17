function tickCuttingMachine(inventory, data, type, tier){
    if(tier == 1 || tier == 2){
        let {slotIndex, countProcess, ticksPerTick, fuelPerTick} = data
        let templateItem = Item.of("minecraft:air")
        let templateDirection

        // reduce fuel
        let machineItem = inventory.getItem(slotIndex)
        if(machineItem.nbt.fuel >= fuelPerTick) machineItem.nbt.fuel -= fuelPerTick
        else {machineItem.nbt.fuel = 0, machineItem.nbt.CustomModelData = 0}

        let inputSlotIndex = getSlotInDirection(slotIndex, "up", type)
        if(inputSlotIndex == null){resetSimpleMachineItemNbt(machineItem); return}

        // check for template
        for(let direction of ["left", "right"] ){
            let slot = getSlotInDirection(slotIndex, direction, type)
            if(slot == null) continue
            let item = inventory.getItem(slot)
            if(/kubejs:.*_template/.test(item.id) || item.id == "minecraft:water_bucket"){templateItem = item; templateDirection = direction; break}
        }

        // get recipe
        let slotItem = inventory.getItem(inputSlotIndex)
        let recipe = getRecipeSimpleMachine("cuttingMachine", slotItem, tier, templateItem.id)
        if(recipe.length == 0){resetSimpleMachineItemNbt(machineItem); return}
        slotItem = recipe[0]
        recipe = recipe[1]

        // checks if the output can be inserted
        let outputItem = Item.of(recipe.output)
        let resultSlotIndex = getSlotInDirection(slotIndex, "down", type)
        let amountCanInsert = getAmountCanInsert(inventory, resultSlotIndex, outputItem.copyWithCount(countProcess * outputItem.count))
        if(amountCanInsert < outputItem.count){resetSimpleMachineItemNbt(machineItem); return}

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
            let directions = ["left", "right"].filter(direction => direction != templateDirection)
            for(let direction of directions){
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
            machineItem.nbt.fuel += fuelItems[fuel.id] * fuelRequired
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