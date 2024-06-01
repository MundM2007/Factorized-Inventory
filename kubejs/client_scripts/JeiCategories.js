JEIAddedEvents.registerCategories((event) => {
    event.custom("kubejs:inventory_furnace_tier_1", (category) => {
        global.inventory_furnace_tier_1_recipe_type = category
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
            .recipeType
    })

    event.custom("kubejs:inventory_macerator_tier_1", (category) => {
        global.inventory_macerator_tier_1_recipe_type = category
            .title("Inventory Macerator")
            .background(category.jeiHelpers.guiHelper.createBlankDrawable(100, 30))
            .icon(category.jeiHelpers.guiHelper.createDrawableItemStack(Item.of('kubejs:inventory_macerator_tier_1')))
            .isRecipeHandled((recipe) => {return true})
            .handleLookup((builder, recipe, focuses) => {
                global.handleLookup("simple", category.jeiHelpers, builder, recipe, focuses)
            })
            .setDrawHandler((recipe, recipeSlotsView, guiGraphics, mouseX, mouseY) => {
                global.renderBlocks("simple", category.jeiHelpers, recipe, recipeSlotsView, guiGraphics, mouseX, mouseY)
            })
            .recipeType
    })

    event.custom("kubejs:inventory_compressor_tier_1", (category) => {
        global.inventory_compressor_tier_1_recipe_type = category
            .title("Inventory Compressor")
            .background(category.jeiHelpers.guiHelper.createBlankDrawable(100, 30))
            .icon(category.jeiHelpers.guiHelper.createDrawableItemStack(Item.of('kubejs:inventory_compressor_tier_1')))
            .isRecipeHandled((recipe) => {return true})
            .handleLookup((builder, recipe, focuses) => {
                global.handleLookup("simple", category.jeiHelpers, builder, recipe, focuses)
            })
            .setDrawHandler((recipe, recipeSlotsView, guiGraphics, mouseX, mouseY) => {
                global.renderBlocks("simple", category.jeiHelpers, recipe, recipeSlotsView, guiGraphics, mouseX, mouseY)
            })
            .recipeType
    })

    event.custom("kubejs:inventory_cutting_machine_tier_1", (category) => {
        global.inventory_cutting_machine_tier_1_recipe_type = category
            .title("Inventory Cutting Machine")
            .background(category.jeiHelpers.guiHelper.createBlankDrawable(100, 30))
            .icon(category.jeiHelpers.guiHelper.createDrawableItemStack(Item.of('kubejs:inventory_cutting_machine_tier_1')))
            .isRecipeHandled((recipe) => {return true})
            .handleLookup((builder, recipe, focuses) => {
                global.handleLookup("simple", category.jeiHelpers, builder, recipe, focuses)
            })
            .setDrawHandler((recipe, recipeSlotsView, guiGraphics, mouseX, mouseY) => {
                global.renderBlocks("simple", category.jeiHelpers, recipe, recipeSlotsView, guiGraphics, mouseX, mouseY)
            })
            .recipeType
    })

    event.custom("kubejs:inventory_wiremill_tier_1", (category) => {
        global.inventory_wiremill_tier_1_recipe_type = category
            .title("Inventory Wiremill")
            .background(category.jeiHelpers.guiHelper.createBlankDrawable(100, 30))
            .icon(category.jeiHelpers.guiHelper.createDrawableItemStack(Item.of('kubejs:inventory_wiremill_tier_1')))
            .isRecipeHandled((recipe) => {return true})
            .handleLookup((builder, recipe, focuses) => {
                global.handleLookup("simple", category.jeiHelpers, builder, recipe, focuses)
            })
            .setDrawHandler((recipe, recipeSlotsView, guiGraphics, mouseX, mouseY) => {
                global.renderBlocks("simple", category.jeiHelpers, recipe, recipeSlotsView, guiGraphics, mouseX, mouseY)
            })
            .recipeType
    })

    event.custom("kubejs:inventory_coke_oven_tier_1", (category) => {
        global.inventory_coke_oven_tier_1_recipe_type = category
            .title("Inventory Coke Oven")
            .background(category.jeiHelpers.guiHelper.createBlankDrawable(100, 30))
            .icon(category.jeiHelpers.guiHelper.createDrawableItemStack(Item.of('kubejs:inventory_coke_oven_tier_1')))
            .isRecipeHandled((recipe) => {return true})
            .handleLookup((builder, recipe, focuses) => {
                global.handleLookup("simple", category.jeiHelpers, builder, recipe, focuses)
            })
            .setDrawHandler((recipe, recipeSlotsView, guiGraphics, mouseX, mouseY) => {
                global.renderBlocks("simple", category.jeiHelpers, recipe, recipeSlotsView, guiGraphics, mouseX, mouseY)
            })
            .recipeType
    })

    event.custom("kubejs:inventory_blast_furnace_tier_1", (category) => {
        global.inventory_blast_furnace_tier_1_recipe_type = category
            .title("Inventory Blast Furnace")
            .background(category.jeiHelpers.guiHelper.createBlankDrawable(138, 30))
            .icon(category.jeiHelpers.guiHelper.createDrawableItemStack(Item.of('kubejs:inventory_blast_furnace_tier_1')))
            .isRecipeHandled((recipe) => {return true})
            .handleLookup((builder, recipe, focuses) => {
                global.handleLookup("blastFurnace", category.jeiHelpers, builder, recipe, focuses)
            })
            .setDrawHandler((recipe, recipeSlotsView, guiGraphics, mouseX, mouseY) => {
                global.renderBlocks("blastFurnace", category.jeiHelpers, recipe, recipeSlotsView, guiGraphics, mouseX, mouseY)
            })
            .recipeType
    })

    event.custom("kubejs:inventory_mixer_tier_1", (category) => {
        global.inventory_mixer_tier_1_recipe_type = category
            .title("Inventory Mixer")
            .background(category.jeiHelpers.guiHelper.createBlankDrawable(138, 30))
            .icon(category.jeiHelpers.guiHelper.createDrawableItemStack(Item.of('kubejs:inventory_mixer_tier_1')))
            .isRecipeHandled((recipe) => {return true})
            .handleLookup((builder, recipe, focuses) => {
                global.handleLookup("mixer", category.jeiHelpers, builder, recipe, focuses)
            })
            .setDrawHandler((recipe, recipeSlotsView, guiGraphics, mouseX, mouseY) => {
                global.renderBlocks("mixer", category.jeiHelpers, recipe, recipeSlotsView, guiGraphics, mouseX, mouseY)
            })
            .recipeType
    })
})


JEIAddedEvents.registerRecipes((event) => {
    let furnace = event.custom("kubejs:inventory_furnace_tier_1")
    for(let recipe of Object.values(global.recipes.furnace)) {
        furnace.add(recipe)
    }
    let macerator = event.custom("kubejs:inventory_macerator_tier_1")
    for(let recipe of Object.values(global.recipes.macerator)) {
        macerator.add(recipe)
    }
    let compressor = event.custom("kubejs:inventory_compressor_tier_1")
    for(let recipe of Object.values(global.recipes.compressor)) {
        compressor.add(recipe)
    }
    let cuttingMachine = event.custom("kubejs:inventory_cutting_machine_tier_1")
    for(let recipe of Object.values(global.recipes.cuttingMachine)) {
        cuttingMachine.add(recipe)
    }
    let wiremill = event.custom("kubejs:inventory_wiremill_tier_1")
    for(let recipe of Object.values(global.recipes.wiremill)) {
        wiremill.add(recipe)
    }
    let cokeOven = event.custom("kubejs:inventory_coke_oven_tier_1")
    for(let recipe of Object.values(global.recipes.cokeOven)) {
        cokeOven.add(recipe)
    }
    let blastFurnace = event.custom("kubejs:inventory_blast_furnace_tier_1")
    for(let recipe of Object.values(global.recipes.blastFurnace)) {
        if(!recipe.inputs) continue
        blastFurnace.add(recipe)
    }
    let mixer = event.custom("kubejs:inventory_mixer_tier_1")
    for(let recipe of Object.values(global.recipes.mixer)) {
        if(!recipe.inputs) continue
        mixer.add(recipe)
    }
})


global.handleLookup = function(machine, jeiHelpers, builder, recipe, focuses){
    if(machine == "simple") {
        builder.addSlot("INPUT", 15, 12).addItemStack(Item.of(recipe.data.input)).setSlotName("input");
        builder.addSlot("OUTPUT", 69, 12).addItemStack(Item.of(recipe.data.output)).setSlotName("output");
    }else if(machine == "blastFurnace" || machine == "mixer") {
        builder.addSlot("INPUT", 15, 12).addItemStack(recipe.data.inputs[0]).setSlotName("input");
        if(recipe.data.inputs[1]) builder.addSlot("INPUT", 34, 12).addItemStack(recipe.data.inputs[1]).setSlotName("input");
        if(recipe.data.inputs[2]) builder.addSlot("INPUT", 53, 12).addItemStack(recipe.data.inputs[2]).setSlotName("input");
        builder.addSlot("OUTPUT", 107, 12).addItemStack(recipe.data.output).setSlotName("output");
    }
}


global.renderBlocks = function(machine, jeiHelpers, recipe, recipeSlotsView, guiGraphics, mouseX, mouseY){
    if(machine == "simple") {
        guiGraphics.blit("kubejs:textures/gui/arrow.png", 38, 12, 0, 0, 24, 17, 32, 32)
        let text = (Math.round(recipe.data.time / 2) / 10).toFixed(1) + " s"
        guiGraphics.drawWordWrap(Client.font, Text.of(text), 76 - ((text.length - 5) * 6), 0, 100, 0)
    }else if(machine == "blastFurnace" || machine == "mixer") {
        guiGraphics.blit("kubejs:textures/gui/arrow.png", 76, 12, 0, 0, 24, 17, 32, 32)
        let text = (Math.round(recipe.data.time / 2) / 10).toFixed(1) + " s"
        guiGraphics.drawWordWrap(Client.font, Text.of(text), 114 - ((text.length - 5) * 6), 0, 100, 0)
    }
}


JEIAddedEvents.registerRecipeCatalysts(jei =>{
    jei.data.addRecipeCatalyst('kubejs:inventory_furnace_tier_1', global.inventory_furnace_tier_1_recipe_type)
    jei.data.addRecipeCatalyst('kubejs:inventory_furnace_tier_2', global.inventory_furnace_tier_1_recipe_type)
    jei.data.addRecipeCatalyst('kubejs:inventory_furnace_tier_3', global.inventory_furnace_tier_1_recipe_type)
    jei.data.addRecipeCatalyst('kubejs:inventory_furnace_tier_4', global.inventory_furnace_tier_1_recipe_type)

    jei.data.addRecipeCatalyst('kubejs:inventory_macerator_tier_1', global.inventory_macerator_tier_1_recipe_type)
    jei.data.addRecipeCatalyst('kubejs:inventory_macerator_tier_2', global.inventory_macerator_tier_1_recipe_type)
    jei.data.addRecipeCatalyst('kubejs:inventory_macerator_tier_3', global.inventory_macerator_tier_1_recipe_type)
    jei.data.addRecipeCatalyst('kubejs:inventory_macerator_tier_4', global.inventory_macerator_tier_1_recipe_type)

    jei.data.addRecipeCatalyst('kubejs:inventory_compressor_tier_1', global.inventory_compressor_tier_1_recipe_type)
    jei.data.addRecipeCatalyst('kubejs:inventory_compressor_tier_2', global.inventory_compressor_tier_1_recipe_type)
    jei.data.addRecipeCatalyst('kubejs:inventory_compressor_tier_3', global.inventory_compressor_tier_1_recipe_type)
    jei.data.addRecipeCatalyst('kubejs:inventory_compressor_tier_4', global.inventory_compressor_tier_1_recipe_type)

    jei.data.addRecipeCatalyst('kubejs:inventory_cutting_machine_tier_1', global.inventory_cutting_machine_tier_1_recipe_type)
    jei.data.addRecipeCatalyst('kubejs:inventory_cutting_machine_tier_2', global.inventory_cutting_machine_tier_1_recipe_type)
    jei.data.addRecipeCatalyst('kubejs:inventory_cutting_machine_tier_3', global.inventory_cutting_machine_tier_1_recipe_type)
    jei.data.addRecipeCatalyst('kubejs:inventory_cutting_machine_tier_4', global.inventory_cutting_machine_tier_1_recipe_type)

    jei.data.addRecipeCatalyst('kubejs:inventory_wiremill_tier_1', global.inventory_wiremill_tier_1_recipe_type)
    jei.data.addRecipeCatalyst('kubejs:inventory_wiremill_tier_2', global.inventory_wiremill_tier_1_recipe_type)
    jei.data.addRecipeCatalyst('kubejs:inventory_wiremill_tier_3', global.inventory_wiremill_tier_1_recipe_type)

    jei.data.addRecipeCatalyst('kubejs:inventory_coke_oven_tier_1', global.inventory_coke_oven_tier_1_recipe_type)
    jei.data.addRecipeCatalyst('kubejs:inventory_coke_oven_tier_2', global.inventory_coke_oven_tier_1_recipe_type)
    jei.data.addRecipeCatalyst('kubejs:inventory_coke_oven_tier_3', global.inventory_coke_oven_tier_1_recipe_type)
    jei.data.addRecipeCatalyst('kubejs:inventory_coke_oven_tier_4', global.inventory_coke_oven_tier_1_recipe_type)

    jei.data.addRecipeCatalyst('kubejs:inventory_blast_furnace_tier_1', global.inventory_blast_furnace_tier_1_recipe_type)
    jei.data.addRecipeCatalyst('kubejs:inventory_blast_furnace_tier_2', global.inventory_blast_furnace_tier_1_recipe_type)
    jei.data.addRecipeCatalyst('kubejs:inventory_blast_furnace_tier_3', global.inventory_blast_furnace_tier_1_recipe_type)
    jei.data.addRecipeCatalyst('kubejs:inventory_blast_furnace_tier_4', global.inventory_blast_furnace_tier_1_recipe_type)

    jei.data.addRecipeCatalyst('kubejs:inventory_mixer_tier_1', global.inventory_mixer_tier_1_recipe_type)
    jei.data.addRecipeCatalyst('kubejs:inventory_mixer_tier_2', global.inventory_mixer_tier_1_recipe_type)
    jei.data.addRecipeCatalyst('kubejs:inventory_mixer_tier_3', global.inventory_mixer_tier_1_recipe_type)
})