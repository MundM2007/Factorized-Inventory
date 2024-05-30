JEIAddedEvents.registerCategories((event) => {
    event.custom("kubejs:inventory_furnace_tier_1", (category) => {
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
    let furnace = event.custom("kubejs:inventory_furnace_tier_1")
    for(let recipe of Object.values(global.recipes.furnace)) {
        furnace.add(recipe)
    }
})


global.handleLookup = function(machine, jeiHelpers, builder, recipe, focuses){
    if(machine == "simple") {
        builder.addSlot("INPUT", 20, 12).addItemStack(Item.of(recipe.data.input)).setSlotName("input");
        builder.addSlot("OUTPUT", 64, 12).addItemStack(Item.of(recipe.data.output)).setSlotName("output");
    }
}


global.renderBlocks = function(machine, jeiHelpers, recipe, recipeSlotsView, guiGraphics, mouseX, mouseY){
    guiGraphics.blit("kubejs:gui/arrow", 38, 11, 10, 10, 32, 32, 32, 32)
    let text = (Math.round(recipe.data.time / 2) / 10).toFixed(1) + " s"
    guiGraphics.drawWordWrap(Client.font, Text.of(text), 76 - ((text.length - 5) * 6), 0, 100, 0)
}