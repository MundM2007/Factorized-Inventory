JEIAddedEvents.registerCategories((event) => {
    event.custom("kubejs:inventory_furnace", (category) => {
        category
            .title("Inventory Furnace")
            .background(category.jeiHelpers.guiHelper.createBlankDrawable(100, 30))
            .icon(category.jeiHelpers.guiHelper.createDrawableItemStack(Item.of('kubejs:inventory_furnace_tier_1')))
            .isRecipeHandled((recipe) => {
                return global.verifyRecipe("simple", category.jeiHelpers, recipe)
            })
            .handleLookup((builder, recipe, focuses) => {
                global.handleLookup("simple", category.jeiHelpers, builder, recipe, focuses)
            })
            .setDrawHandler((recipe, recipeSlotsView, guiGraphics, mouseX, mouseY) => {
                global.renderBlocks("simple", category.jeiHelpers, recipe, recipeSlotsView, guiGraphics, mouseX, mouseY)
            })
    })
})


JEIAddedEvents.registerRecipes((event) => {
    let furnace = event.custom("kubejs:inventory_furnace_tier_1")
    for(let recipe of Object.values(global.recipes.furnace)) {
        furnace.add(recipe)
    }
})


global.verifyRecipe = function(machine, jeiHelpers, recipe){
    console.log("test")
    if(machine == "simple") {
        console.log("test")
        if (!recipe) return false
        if (!recipe.data) return false
        if (!recipe.data.input) return false
        if (!recipe.data.output) return false
        console.log(!!recipe.data.cookingTime)
        return !!recipe.data.cookingTime
    }
    return false
}


global.handleLookup = function(machine, jeiHelpers, builder, recipe, focuses){
    if(machine == "simple") {
        builder.addSlot("INPUT", 20, 7).addItemStack(Item.of(recipe.data.input)).setSlotName("input");
        builder.addSlot("OUTPUT", 114, 7).addItemStack(Item.of(recipe.data.output)).setSlotName("output");
    }
}


global.renderBlocks = function(jeiHelpers, recipe, recipeSlotsView, guiGraphics, mouseX, mouseY){
}