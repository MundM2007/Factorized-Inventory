function getRecipeSimpleMachine(machine, slotItem){
    let recipes = global.recipes[machine]
    if(/minecraft:.*shulker_box/.test(slotItem.id)){
        if(!slotItem.nbt) return []
        if(!slotItem.nbt.BlockEntityTag) return []
        if(!slotItem.nbt.BlockEntityTag.Items) return []
        if(slotItem.nbt.BlockEntityTag.Items.length == 0) return []
        for(let i = 0; i < slotItem.nbt.BlockEntityTag.Items.length; i++){
            let shulkerItem = slotItem.nbt.BlockEntityTag.Items[i]
            let recipe = recipes[shulkerItem.id]
            if(recipe) return [$ItemStack.of(shulkerItem), recipe]
        }
    }else if(slotItem.is("kubejs:inventory_puller_tier_1")){
        if(!slotItem.nbt) return []
        if(!slotItem.nbt.Item) return []
        let pullerItem = $ItemStack.of(slotItem.nbt.Item)
        let recipe = recipes[pullerItem.id]
        if(recipe) return [pullerItem, recipe]
    }else{
        let recipe = recipes[slotItem.id]
        if(recipe) return [slotItem, recipe]
    }
    return []
}


function getRecipeIndexedMachineRecipe(recipes, slotItems, amountSlots){
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
            for(let k = 0; k < slotItem.nbt.BlockEntityTag.Items.length; k++){
                let shulkerItem = slotItem.nbt.BlockEntityTag.Items[k]
                let breakLoop = false
                let doneSomething = false
                for(let i = 0; i < amountSlots; i++){
                    let recipeIndexes = recipes["i" + i][shulkerItem.id]
                    if(recipeIndexes) {
                        breakLoop = true
                        for(let j = 0; j < recipeIndexes.length; j++){
                            let shulkerItemStack = $ItemStack.of(shulkerItem)
                            if(Item.of(recipes["r" + recipeIndexes[j]]["inputs"][i]).count >= shulkerItemStack.count) continue
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
                                possibleRecipe[1].push([shulkerItemStack, i])
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
                        if(Item.of(recipes["r" + recipeIndexes[j]]["inputs"][i]).count > pullerItem.Count) continue
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
                        if(Item.of(recipes["r" + recipeIndexes[j]]["inputs"][i]).count > slotItem.count) continue
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


function getRecipeBlastFurnace(slotItems){
    return getRecipeIndexedMachineRecipe(global.recipes.blastFurnace, slotItems, 3)
}


function getRecipeMixer(slotItems){
    return getRecipeIndexedMachineRecipe(global.recipes.mixer, slotItems, 3)
}


function getRecipeAssembler(slotItems){
    return getRecipeIndexedMachineRecipe(global.recipes.assembler, slotItems, 3)
}