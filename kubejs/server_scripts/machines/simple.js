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


function tickSimpleMachine(inventory, machine, data, type, tier){
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



function getRecipeSimpleMachine(machine, slotItem, tier, templateItem){
    let recipes = global.recipes[machine]
    if(templateItem) recipes = recipes[templateItem.split(":")[1]] 
    if(/minecraft:.*shulker_box/.test(slotItem.id)){
        if(!slotItem.nbt) return []
        if(!slotItem.nbt.BlockEntityTag) return []
        if(!slotItem.nbt.BlockEntityTag.Items) return []
        if(slotItem.nbt.BlockEntityTag.Items.length == 0) return []
        let inputCounts = {}
        for(let i = 0; i < slotItem.nbt.BlockEntityTag.Items.length; i++){
            let shulkerItem = slotItem.nbt.BlockEntityTag.Items[i]
            let recipe = recipes[shulkerItem.id]
            if(recipe){
                if(tier < recipe.tier) continue
                if(Item.of(recipe.input).count > shulkerItem.Count){
                    let inputCount = inputCounts[recipe.input]
                    if(inputCount){
                        inputCount += shulkerItem.Count
                        if(inputCount >= Item.of(recipe.input).count) return [$ItemStack.of(shulkerItem).copyWithCount(inputCount), recipe]
                    }else{
                        inputCounts[recipe.input] = shulkerItem.Count
                    }
                    continue
                }
                return [$ItemStack.of(shulkerItem), recipe]
            }
        }
    }else if(slotItem.is("kubejs:inventory_puller_tier_1")){
        if(!slotItem.nbt) return []
        if(!slotItem.nbt.Item) return []
        let pullerItem = $ItemStack.of(slotItem.nbt.Item)
        let recipe = recipes[pullerItem.id]
        if(recipe){
            if(tier < recipe.tier) return []
            if(Item.of(recipe.input).count <= pullerItem.count) return [pullerItem, recipe]
        }
    }else{
        let recipe = recipes[slotItem.id]
        if(recipe){
            if(tier < recipe.tier) return []
            if(Item.of(recipe.input).count <= slotItem.count) return [slotItem, recipe]
        }
    }
    return []
}