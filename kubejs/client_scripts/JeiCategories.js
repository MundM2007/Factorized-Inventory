JEIAddedEvents.registerCategories((event) => {
    console.log("Registering categories")
    event.custom("kubejs:inventory_furnace", (category) => {
        category
            .title("Inventory Furnace")
            .background(category.jeiHelpers.guiHelper.createBlankDrawable(100, 30))
            .icon(category.jeiHelpers.guiHelper.createDrawableItemStack(Item.of('kubejs:inventory_furnace_tier_1')))
            .isRecipeHandled((recipe) => {return true})
            .handleLookup((builder, recipe, focuses) => {
                global.handleLookup("simple", category.jeiHelpers, builder, recipe, focuses)
            })
            .setDrawHandler((recipe, recipeSlotsView, guiGraphics, mouseX, mouseY) => {
                global.renderBlocks("simple", category.jeiHelpers, recipe, recipeSlotsView, guiGraphics, mouseX, mouseY)
            })
    })
})


JEIAddedEvents.registerRecipes((event) => {
    console.log("Registering recipes")
    let furnace = event.custom("kubejs:inventory_furnace_tier_1")
    for(let recipe of Object.values(global.recipes.furnace)) {
        console.log(recipe)
        furnace.add(recipe)
    }
})


global.handleLookup = function(machine, jeiHelpers, builder, recipe, focuses){
    console.log("Handling lookup")
    if(machine == "simple") {
        builder.addSlot("INPUT", 20, 7).addItemStack(Item.of(recipe.data.input)).setSlotName("input");
        builder.addSlot("OUTPUT", 114, 7).addItemStack(Item.of(recipe.data.output)).setSlotName("output");
    }
}


global.renderBlocks = function(jeiHelpers, recipe, recipeSlotsView, guiGraphics, mouseX, mouseY){
    console.log("Rendering blocks")
}