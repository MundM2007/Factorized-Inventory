ServerEvents.recipes(event => {
    global.recipes = {}
    global.recipes.furnace = {}
    event.forEachRecipe({type: 'minecraft:smelting'}, recipe => {
        global.recipes.furnace[Item.of(recipe.originalRecipeIngredients[0]).id] = {
            input: Item.of(recipe.originalRecipeIngredients[0]),
            output: recipe.originalRecipeResult,
            cookingTime: Number(recipe.json.get("cookingtime"))
        }
    })
})