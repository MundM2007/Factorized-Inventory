function getRecipeSimpleMachine(machine, slotItem){
    let recipes = global.recipes[machine]
    if(!/minecraft:.*shulker_box/.test(slotItem.id)){
        let recipe = recipes[slotItem.id]
        if(recipe) return [slotItem, recipe]
        return []
    }
    if(!slotItem.nbt) return []
    if(!slotItem.nbt.BlockEntityTag) return []
    if(!slotItem.nbt.BlockEntityTag.Items) return []
    if(slotItem.nbt.BlockEntityTag.Items.length == 0) return []
    for(let i = 0; i < slotItem.nbt.BlockEntityTag.Items.length; i++){
        let shulkerItem = slotItem.nbt.BlockEntityTag.Items[i]
        let recipe = recipes[shulkerItem.id]
        if(recipe) return [$ItemStack.of(shulkerItem), recipe]
    }
    return []
}


function getRecipeBlastFurnace(slotItems){
    let recipes = global.recipes.blastFurnace
    let possibleRecipes = {}
    for(let slotItem of slotItems){
        if(slotItem.isEmpty()) continue
        if(!/minecraft:.*shulker_box/.test(slotItem.id)) {
            for(let i = 0; i < 3; i++){
                let recipeIndexes = recipes["i" + i][slotItem.id]
                if(recipeIndexes) {
                    for(let j = 0; j < recipeIndexes.length; j++){
                        if(Item.of(recipes["r" + recipeIndexes[j]]["inputs"][i]).count > slotItem.count) continue
                        let possibleRecipe = possibleRecipes["r" + recipeIndexes[j]]
                        if(!possibleRecipe){
                            possibleRecipes["r" + recipeIndexes[j]] = [1, [[slotItem, i]]]
                        }else{
                            possibleRecipe[0]++
                            possibleRecipe[1].push([slotItem, i])
                        }
                    }
                }
            }
        }else{
            if(!slotItem.nbt) continue
            if(!slotItem.nbt.BlockEntityTag) continue
            if(!slotItem.nbt.BlockEntityTag.Items) continue
            if(slotItem.nbt.BlockEntityTag.Items.length == 0) continue
            for(let k = 0; k < slotItem.nbt.BlockEntityTag.Items.length; k++){
                let shulkerItem = slotItem.nbt.BlockEntityTag.Items[k]
                let breakLoop = false
                for(let i = 0; i < 3; i++){
                    let recipeIndexes = recipes["i" + i][shulkerItem.id]
                    if(recipeIndexes) {
                        breakLoop = true
                        for(let j = 0; j < recipeIndexes.length; j++){
                            let shulkerItemStack = $ItemStack.of(shulkerItem)
                            if(Item.of(recipes["r" + recipeIndexes[j]]["inputs"][i]).count >= shulkerItemStack.count) continue
                            let possibleRecipe = possibleRecipes["r" + recipeIndexes[j]]
                            if(!possibleRecipe){
                                possibleRecipe = [1, [[shulkerItemStack, i]]]
                            }else{
                                possibleRecipe[0]++
                                possibleRecipe[1].push([shulkerItemStack, i])
                            }
                        }
                    }
                }
                if(breakLoop) break
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


function getRecipeMixer(slotItems){
    let recipes = global.recipes.mixer
    let possibleRecipes = {}
    for(let slotItem of slotItems){
        if(slotItem.isEmpty()) continue
        if(!/minecraft:.*shulker_box/.test(slotItem.id)) {
            for(let i = 0; i < 3; i++){
                let recipeIndexes = recipes["i" + i][slotItem.id]
                if(recipeIndexes) {
                    for(let j = 0; j < recipeIndexes.length; j++){
                        if(Item.of(recipes["r" + recipeIndexes[j]]["inputs"][i]).count > slotItem.count) continue
                        let possibleRecipe = possibleRecipes["r" + recipeIndexes[j]]
                        if(!possibleRecipe){
                            possibleRecipes["r" + recipeIndexes[j]] = [1, [[slotItem, i]]]
                        }else{
                            possibleRecipe[0]++
                            possibleRecipe[1].push([slotItem, i])
                        }
                    }
                }
            }
        }else{
            if(!slotItem.nbt) continue
            if(!slotItem.nbt.BlockEntityTag) continue
            if(!slotItem.nbt.BlockEntityTag.Items) continue
            if(slotItem.nbt.BlockEntityTag.Items.length == 0) continue
            for(let k = 0; k < slotItem.nbt.BlockEntityTag.Items.length; k++){
                let shulkerItem = slotItem.nbt.BlockEntityTag.Items[k]
                let breakLoop = false
                for(let i = 0; i < 3; i++){
                    let recipeIndexes = recipes["i" + i][shulkerItem.id]
                    if(recipeIndexes) {
                        breakLoop = true
                        for(let j = 0; j < recipeIndexes.length; j++){
                            let shulkerItemStack = $ItemStack.of(shulkerItem)
                            if(Item.of(recipes["r" + recipeIndexes[j]]["inputs"][i]).count >= shulkerItemStack.count) continue
                            let possibleRecipe = possibleRecipes["r" + recipeIndexes[j]]
                            if(!possibleRecipe){
                                possibleRecipe = [1, [[shulkerItemStack, i]]]
                            }else{
                                possibleRecipe[0]++
                                possibleRecipe[1].push([shulkerItemStack, i])
                            }
                        }
                    }
                }
                if(breakLoop) break
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