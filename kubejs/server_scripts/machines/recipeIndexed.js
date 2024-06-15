
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


function tickRecipeIndexedMachine(inventory, machine, data, type, tier, amountSlots){
    if(tier == 1 || tier == 2){
        let {slotIndex, countProcess, ticksPerTick, fuelPerTick} = data
        let slotItems = []
        let recipe

        // reduce fuel
        let machineItem = inventory.getItem(slotIndex)
        if(machineItem.nbt.fuel >= fuelPerTick) machineItem.nbt.fuel -= fuelPerTick
        else {machineItem.nbt.fuel = 0, machineItem.nbt.CustomModelData = 0}

        // get recipe
        let inputSlotIndexes = []
        for(let i = 0; i < amountSlots; i++){
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
        else{
            for(let slotIndex of inputSlotIndexes){
                slotItems.push(inventory.getItem(slotIndex))
            }
            recipe = getRecipeIndexedMachineRecipe(global.recipes[machine], slotItems, amountSlots, tier)
            if(recipe.length == 0){resetRecipeIndexedMachineItemNbt(machineItem); return}
            slotItems = recipe[0]
            recipe = recipe[1]
        }

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
                extractItem(inventory, inputSlotIndex, inputItem.copyWithCount(canProcess * inputItem.count))
            }
            insertItem(inventory, resultSlotIndex, outputItem.copyWithCount(canProcess * outputItem.count))
            machineItem.nbt.recipeProgress = 0

            let canExtractItems = true
            for(let i = 0; i < amountSlots; i++){
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


function getRecipeIndexedMachineRecipe(recipes, slotItems, amountSlots, tier){
    let possibleRecipes = {}
    for(let slotIndex = 0; slotIndex < slotItems.length; slotIndex++){
        let slotItem = slotItems[slotIndex]
        if(slotItem.isEmpty()){
            let keys = Object.keys(possibleRecipes)
            for(let i = 0; i < keys.length; i++){
                possibleRecipes[keys[i]][1].push(["", -1])
            }
        }else if(/minecraft:.*shulker_box/.test(slotItem.id)) {
            if(!slotItem.nbt) continue
            if(!slotItem.nbt.BlockEntityTag) continue
            if(!slotItem.nbt.BlockEntityTag.Items) continue
            if(slotItem.nbt.BlockEntityTag.Items.length == 0) continue
            let inputCounts = {}
            for(let k = 0; k < slotItem.nbt.BlockEntityTag.Items.length; k++){
                let shulkerItem = slotItem.nbt.BlockEntityTag.Items[k]
                let breakLoop = false
                let doneSomething = false
                for(let i = 0; i < amountSlots; i++){
                    let recipeIndexes = recipes["i" + i][shulkerItem.id]
                    if(recipeIndexes) {
                        breakLoop = true
                        for(let j = 0; j < recipeIndexes.length; j++){
                            let recipe = recipes["r" + recipeIndexes[j]]
                            if(tier < recipe.tier) continue
                            if(Item.of(recipe["inputs"][i]).count > shulkerItem.Count){
                                let inputCount = inputCounts[recipe.input]
                                if(inputCount){
                                    inputCount += shulkerItem.Count
                                    if(inputCount >= Item.of(recipe.input).count) return [ $ItemStack.of(shulkerItem).copyWithCount(inputCount), recipe]
                                }else{
                                    inputCounts[recipe.input] = shulkerItem.Count
                                }
                                continue
                            }
                            doneSomething = true
                            let possibleRecipe = possibleRecipes["r" + recipeIndexes[j]]
                            if(!possibleRecipe){
                                let extraArray = []
                                for(let emptyStart = 0; emptyStart < slotIndex; emptyStart++){
                                    extraArray.push(["", -1])
                                }
                                possibleRecipes["r" + recipeIndexes[j]] = [1, [Array.concat(extraArray, [[slotItem, i]])]]
                            }else{
                                possibleRecipe[0]++
                                possibleRecipe[1].push([ $ItemStack.of(shulkerItem), i])
                            }
                        }
                    }
                }
                if(!doneSomething){
                    for(let i = 0; i < Object.keys(possibleRecipes).length; i++){
                        possibleRecipes[Object.keys(possibleRecipes)[i]][1].push(["", -1])
                    }
                }
                if(breakLoop) break
            }
        }else if(slotItem.is("kubejs:inventory_puller_tier_1")){
            if(!slotItem.nbt) continue
            if(!slotItem.nbt.Item) continue
            let doneSomething = false
            let pullerItem = $ItemStack.of(slotItem.nbt.Item)
            for(let i = 0; i < amountSlots; i++){
                let recipeIndexes = recipes["i" + i][pullerItem.id]
                if(recipeIndexes) {
                    for(let j = 0; j < recipeIndexes.length; j++){
                        let recipe = recipes["r" + recipeIndexes[j]]
                        if(tier < recipe.tier) continue
                        if(Item.of(recipe["inputs"][i]).count > pullerItem.Count) continue
                        doneSomething = true
                        let possibleRecipe = possibleRecipes["r" + recipeIndexes[j]]
                        if(!possibleRecipe){
                            let extraArray = []
                            for(let emptyStart = 0; emptyStart < slotIndex; emptyStart++){
                                extraArray.push(["", -1])
                            }
                            possibleRecipes["r" + recipeIndexes[j]] = [1, [Array.concat(extraArray, [[slotItem, i]])]]
                        }else{
                            possibleRecipe[0]++
                            possibleRecipe[1].push([slotItem, i])
                        }
                    }
                }
            }
            if(!doneSomething){
                for(let i = 0; i < Object.keys(possibleRecipes).length; i++){
                    possibleRecipes[Object.keys(possibleRecipes)[i]][1].push(["", -1])
                }
            }
        }else{
            let doneSomething = false
            for(let i = 0; i < amountSlots; i++){
                let recipeIndexes = recipes["i" + i][slotItem.id]
                if(recipeIndexes) {
                    for(let j = 0; j < recipeIndexes.length; j++){
                        let recipe = recipes["r" + recipeIndexes[j]]
                        if(tier < recipe.tier) continue
                        if(Item.of(recipe["inputs"][i]).count > slotItem.count) continue
                        doneSomething = true
                        let possibleRecipe = possibleRecipes["r" + recipeIndexes[j]]
                        if(!possibleRecipe){
                            let extraArray = []
                            for(let emptyStart = 0; emptyStart < slotIndex; emptyStart++){
                                extraArray.push(["", -1])
                            }
                            possibleRecipes["r" + recipeIndexes[j]] = [1, Array.concat(extraArray, [[slotItem, i]])]
                        }else{
                            possibleRecipe[0]++
                            possibleRecipe[1].push([slotItem, i])
                        }
                    }
                }
            }
            if(!doneSomething){
                for(let i = 0; i < Object.keys(possibleRecipes).length; i++){
                    possibleRecipes[Object.keys(possibleRecipes)[i]][1].push(["", -1])
                }
            }
        }
    }
    let objectKeys = Object.keys(possibleRecipes)
    for(let i = 0; i < objectKeys.length; i++){
        let recipe = recipes[objectKeys[i]]
        if(recipe.inputs.length == possibleRecipes[objectKeys[i]][0]){
            return [possibleRecipes[objectKeys[i]][1], recipe]
        }
    }
    return []
}


