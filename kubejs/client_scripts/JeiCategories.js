function registerJeiCategories(event, machineItem, machineType, title, x, y){
    event.custom(machineItem, (category) => {
        global[machineItem.replace("kubejs:", "") + "_recipe_type"] = category
            .title(title)
            .background(category.jeiHelpers.guiHelper.createBlankDrawable(x, y))
            .icon(category.jeiHelpers.guiHelper.createDrawableItemStack(Item.of(machineItem.replace("_template", ""))))
            .isRecipeHandled((recipe) => {return true})
            .handleLookup((builder, recipe, focuses) => {
                handleLookup(machineType, category.jeiHelpers, builder, recipe, focuses)
            })
            .setDrawHandler((recipe, recipeSlotsView, guiGraphics, mouseX, mouseY) => {
                renderBlocks(machineType, category.jeiHelpers, recipe, recipeSlotsView, guiGraphics, mouseX, mouseY)
            })
            .recipeType
    })
}


JEIAddedEvents.registerCategories((event) => {
    registerJeiCategories(event, "kubejs:inventory_furnace_tier_1", "simple", "Tier 1 Inventory Furnace", 100, 30)
    registerJeiCategories(event, "kubejs:inventory_macerator_tier_1", "simple", "Tier 1 Inventory Macerator", 100, 30)
    registerJeiCategories(event, "kubejs:inventory_macerator_tier_2", "simple", "Tier 2 Inventory Macerator", 100, 30)
    registerJeiCategories(event, "kubejs:inventory_compressor_tier_1", "simple", "Tier 1 Inventory Compressor", 100, 30)
    registerJeiCategories(event, "kubejs:inventory_cutting_machine_tier_1", "simple", "Tier 1 Inventory Cutting Machine", 100, 30)
    registerJeiCategories(event, "kubejs:inventory_cutting_machine_tier_1_template", "simple_template", "Tier 1 Inventory Cutting Machine (with Templates)", 100, 40)
    registerJeiCategories(event, "kubejs:inventory_packer_tier_1", "packer", "Tier 1 Inventory Packer", 138, 30)
    registerJeiCategories(event, "kubejs:inventory_packer_tier_1_template", "packer_template", "Tier 1 Inventory Packer (with Templates)", 138, 40)
    registerJeiCategories(event, "kubejs:inventory_unpacker_tier_1", "unpacker", "Tier 1 Inventory Unpacker", 138, 30)
    registerJeiCategories(event, "kubejs:inventory_wiremill_tier_1", "simple", "Tier 1 Inventory Wiremill", 100, 30)
    registerJeiCategories(event, "kubejs:inventory_coke_oven_tier_1", "simple", "Tier 1 Inventory Coke Oven", 100, 30)
    registerJeiCategories(event, "kubejs:inventory_blast_furnace_tier_1", "blastFurnace", "Tier 1 Inventory Blast Furnace", 138, 30)
    registerJeiCategories(event, "kubejs:inventory_mixer_tier_1", "mixer", "Tier 1 Inventory Mixer", 138, 30)
    registerJeiCategories(event, "kubejs:inventory_quarry_tier_1", "quarry", "Tier 1 Inventory Quarry", 157, 68)
    registerJeiCategories(event, "kubejs:inventory_assembler_tier_1", "assembler", "Tier 1 Inventory Assembler", 160, 30)
})


JEIAddedEvents.registerRecipes((event) => {
    let furnace = event.custom("kubejs:inventory_furnace_tier_1")
    let seenFurnaceDisplay = {}
    for(let recipe of Object.values(global.recipes.furnace)) {
        if(recipe.displayInput){
            let key = "d" + recipe.displayInput
            if(key in seenFurnaceDisplay) continue
            seenFurnaceDisplay[key] = true
        }
        furnace.add(recipe)
    }
    let macerator1 = event.custom("kubejs:inventory_macerator_tier_1")
    let macerator2 = event.custom("kubejs:inventory_macerator_tier_2")
    let seenMaceratorDisplay = {}
    for(let recipe of Object.values(global.recipes.macerator)) {
        if(recipe.displayInput){
            let key = "d" + recipe.displayInput
            if(key in seenMaceratorDisplay) continue
            seenMaceratorDisplay[key] = true
        }
        if(recipe.tier == 1) macerator1.add(recipe)
        else if(recipe.tier == 2) macerator2.add(recipe)
    }
    let compressor = event.custom("kubejs:inventory_compressor_tier_1")
    let seenCompressorDisplay = {}
    for(let recipe of Object.values(global.recipes.compressor)) {
        if(recipe.displayInput){
            let key = "d" + recipe.displayInput
            if(key in seenCompressorDisplay) continue
            seenCompressorDisplay[key] = true
        }
        compressor.add(recipe)
    }
    let cuttingMachine = event.custom("kubejs:inventory_cutting_machine_tier_1")
    let cuttingMachineTemplate = event.custom("kubejs:inventory_cutting_machine_tier_1_template")
    let seenCuttingMachineDisplay = {        
        drawer_template_1x1: {},
        drawer_template_1x2: {},
        drawer_template_2x2: {},
        air: {},
        block_template: {},
        boat_template: {},
        button_template: {},
        color_template: {},
        door_template: {},
        fence_gate_template: {},
        fence_template: {},
        log_template: {},
        pressure_plate_template: {},
        sign_template: {},
        slab_template: {},
        stairs_template: {},
        trapdoor_template: {},
        wall_template: {},
        waxing_template: {}
    }
    for(let [template, recipes] of Object.entries(global.recipes.cuttingMachine)) {
        for(let recipe of Object.values(recipes)){
            if(recipe.displayInput){
                let key = "d" + recipe.displayInput
                if(key in seenCuttingMachineDisplay[template]) continue
                seenCuttingMachineDisplay[template][key] = true
            }
            if(recipe.template == "air") {cuttingMachine.add(recipe); continue}
            cuttingMachineTemplate.add(recipe)
        }
    }
    let packer = event.custom("kubejs:inventory_packer_tier_1")
    let packerTemplate = event.custom("kubejs:inventory_packer_tier_1_template")
    let seenPackerDisplay = {
        drawer_template_1x1: {},
        drawer_template_1x2: {},
        drawer_template_2x2: {},
        air: {},
        block_template: {},
        boat_template: {},
        button_template: {},
        color_template: {},
        door_template: {},
        fence_gate_template: {},
        fence_template: {},
        log_template: {},
        pressure_plate_template: {},
        sign_template: {},
        slab_template: {},
        stairs_template: {},
        trapdoor_template: {},
        wall_template: {},
        waxing_template: {}
    }
    for(let [template, recipes] of Object.entries(global.recipes.packer)) {
        for(let recipe of Object.values(recipes)){
            if(!recipe.inputs) continue
            if(recipe.displayInputs){
                let key = "d" + JSON.stringify(recipe.displayInputs)
                if(key in seenPackerDisplay[template]) continue
                seenPackerDisplay[template][key] = true
            }
            if(recipe.template == "air") {packer.add(recipe); continue}
            packerTemplate.add(recipe)
        }
    }
    let unpacker = event.custom("kubejs:inventory_unpacker_tier_1")
    let seenUnpackerDisplay = {}
    for(let recipe of Object.values(global.recipes.unpacker)) {
        if(recipe.displayInput){
            let key = "d" + recipe.displayInput
            if(key in seenUnpackerDisplay) continue
            seenUnpackerDisplay[key] = true
        }
        unpacker.add(recipe)
    }
    let wiremill = event.custom("kubejs:inventory_wiremill_tier_1")
    let seenWiremillDisplay = {}
    for(let recipe of Object.values(global.recipes.wiremill)) {
        if(recipe.displayInput){
            let key = "d" + recipe.displayInput
            if(key in seenWiremillDisplay) continue
            seenWiremillDisplay[key] = true
        }
        wiremill.add(recipe)
    }
    let cokeOven = event.custom("kubejs:inventory_coke_oven_tier_1")
    let seenCokeOvenDisplay = {}
    for(let recipe of Object.values(global.recipes.cokeOven)) {
        if(recipe.displayInput){
            let key = "d" + recipe.displayInput
            if(key in seenCokeOvenDisplay) continue
            seenCokeOvenDisplay[key] = true
        }
        cokeOven.add(recipe)
    }
    let blastFurnace = event.custom("kubejs:inventory_blast_furnace_tier_1")
    let seenBlastFurnaceDisplay = {}
    for(let recipe of Object.values(global.recipes.blastFurnace)) {
        if(!recipe.inputs) continue
        if(recipe.displayInputs){
            let key = "d" + JSON.stringify(recipe.displayInputs)
            if(key in seenBlastFurnaceDisplay) continue
            seenBlastFurnaceDisplay[key] = true
        }
        blastFurnace.add(recipe)
    }
    let mixer = event.custom("kubejs:inventory_mixer_tier_1")
    let seenMixerDisplay = {}
    for(let recipe of Object.values(global.recipes.mixer)) {
        if(!recipe.inputs) continue
        if(recipe.displayInputs){
            let key = "d" + JSON.stringify(recipe.displayInputs)
            if(key in seenMixerDisplay) continue
            seenMixerDisplay[key] = true
        }
        mixer.add(recipe)
    }
    let quarry = event.custom("kubejs:inventory_quarry_tier_1")
    for(let recipe of Object.values(global.recipes.quarry)) {
        quarry.add(recipe)
    }
    let assembler = event.custom("kubejs:inventory_assembler_tier_1")
    let seenAssemblerDisplay = {}
    for(let recipe of Object.values(global.recipes.assembler)) {
        if(!recipe.inputs) continue
        if(recipe.displayInputs){
            let key = "d" + JSON.stringify(recipe.displayInputs)
            if(key in seenAssemblerDisplay) continue
            seenAssemblerDisplay[key] = true
        }
        assembler.add(recipe)
    }
})


function addSlot(builder, x, y, slotType, ingredient){
    if(Array.isArray(ingredient)){
        if(JSON.stringify(ingredient).includes("#")){
            // needs testing
            ingredient = ingredient.map(item => InputItem.of(item))
            builder.addSlot(slotType, x, y).addIngredients(ingredient)
        }else{
            ingredient = ingredient.map(item => Item.of(item))
            builder.addSlot(slotType, x, y).addItemStacks(ingredient)
        }
    }else{
        if(ingredient.includes("#")){
            builder.addSlot(slotType, x, y).addIngredients([InputItem.of(ingredient)])
        }else{
            builder.addSlot(slotType, x, y).addItemStack(Item.of(ingredient))
        }
    }
}

function addSlotCheck(builder, x, y, slotType, ingredient){
    if(ingredient){
        addSlot(builder, x, y, slotType, ingredient)
    }
}

function addSlotDisplay(builder, x, y, slotType, ingredient, display){
    if(display){
        addSlot(builder, x, y, slotType, display)
    }else{
        addSlot(builder, x, y, slotType, ingredient)
    }
}

function addSlotCheckDisplay(builder, x, y, slotType, ingredient, display){
    if(display){
        addSlot(builder, x, y, slotType, display)
    }else{
        addSlotCheck(builder, x, y, slotType, ingredient)
    }
}

let handleLookup = function(machine, jeiHelpers, builder, recipe, focuses){
    if(machine == "simple") {
        addSlotDisplay(builder, 15, 12, "INPUT", recipe.data.input, recipe.data.displayInput)
        addSlot(builder, 69, 12, "OUTPUT", recipe.data.output)
    }else if(machine == "simple_template") {
        addSlotDisplay(builder, 15, 22, "INPUT", recipe.data.input, recipe.data.displayInput)
        addSlot(builder, 40, 1, "CATALYST", recipe.data.template)
        addSlot(builder, 69, 22, "OUTPUT", recipe.data.output)
    }else if(machine == "packer_template"){  
        addSlotDisplay(builder, 15, 22, "INPUT", recipe.data.inputs[0], recipe.data.displayInputs[0])
        addSlotCheckDisplay(builder, 34, 22, "INPUT", recipe.data.inputs[1], recipe.data.displayInputs[1])
        addSlotCheckDisplay(builder, 53, 22, "INPUT", recipe.data.inputs[2], recipe.data.displayInputs[2])
        addSlot(builder, 78, 1, "CATALYST", recipe.data.template)
        addSlot(builder, 107, 22, "OUTPUT", recipe.data.output)
    }else if(machine == "packer" ||machine == "blastFurnace" || machine == "mixer") {
        addSlotDisplay(builder, 15, 12, "INPUT", recipe.data.inputs[0], recipe.data.displayInputs[0])
        addSlotCheckDisplay(builder, 34, 12, "INPUT", recipe.data.inputs[1], recipe.data.displayInputs[1])
        addSlotCheckDisplay(builder, 53, 12, "INPUT", recipe.data.inputs[2], recipe.data.displayInputs[2])
        addSlot(builder, 107, 12, "OUTPUT", recipe.data.output)
    }else if(machine == "unpacker") {
        addSlotDisplay(builder, 15, 12, "INPUT", recipe.data.input, recipe.data.displayInput)
        addSlot(builder, 69, 12, "OUTPUT", recipe.data.outputs[0])
        addSlotCheck(builder, 88, 12, "OUTPUT", recipe.data.outputs[1])
        addSlotCheck(builder, 107, 12, "OUTPUT", recipe.data.outputs[2])
    }else if(machine == "assembler") {
        addSlotDisplay(builder, 7, 12, "INPUT", recipe.data.inputs[0], recipe.data.displayInputs[0])
        addSlotCheckDisplay(builder, 26, 12, "INPUT", recipe.data.inputs[1], recipe.data.displayInputs[1])
        addSlotCheckDisplay(builder, 45, 12, "INPUT", recipe.data.inputs[2], recipe.data.displayInputs[2])
        addSlotCheckDisplay(builder, 64, 12, "INPUT", recipe.data.inputs[3], recipe.data.displayInputs[3])
        addSlotCheckDisplay(builder, 83, 12, "INPUT", recipe.data.inputs[4], recipe.data.displayInputs[4])
        addSlot(builder, 137, 12, "OUTPUT", recipe.data.output)
    }else if(machine == "quarry") {
        builder.addSlot("INPUT", 15, 12)
            .addItemStack(Item.of(recipe.data.input)
                .withNBT(`{display:{Lore:['{"text":"Consumption Chance: ${recipe.data.consumeInputChance * 100} % ","color":"yellow"}']}}`))
        for(let y = 0; y < Math.ceil(recipe.data.outputs.length / 4); y++){
            let x_length = recipe.data.outputs.length - (y * 4)
            if(x_length > 4) x_length = 4
            for(let x = 0; x < x_length; x++){
                builder.addSlot("OUTPUT", 69 + (x * 19), 12 + (y * 19))
                    .addItemStack(Item.of(recipe.data.outputs[x + (y * 4)])
                        .withNBT(`{display:{Lore:['{"text":"Production Chance: ${((recipe.data.weights[x + (y * 4)] / recipe.data.totalWeights) * 100).toFixed(0)} % ","color":"yellow"}']}}`))
            }
        }
    }
}


let renderBlocks = function(machine, jeiHelpers, recipe, recipeSlotsView, guiGraphics, mouseX, mouseY){
    if(machine == "simple") {
        guiGraphics.blit("kubejs:textures/gui/arrow.png", 38, 12, 0, 0, 24, 17, 32, 32)
        let text = (Math.round(recipe.data.time / 2) / 10).toFixed(1) + " s"
        guiGraphics.drawWordWrap(Client.font, Text.of(text), 76 - ((text.length - 5) * 6), 0, 100, 0)
    }else if(machine == "simple_template") {
        guiGraphics.blit("kubejs:textures/gui/arrow_combine.png", 38, 19, 0, 0, 24, 20, 32, 32)
        let text = (Math.round(recipe.data.time / 2) / 10).toFixed(1) + " s"
        guiGraphics.drawWordWrap(Client.font, Text.of(text), 76 - ((text.length - 5) * 6), 0, 100, 0)
    }else if(machine == "packer_template") {
        guiGraphics.blit("kubejs:textures/gui/arrow_combine.png", 76, 19, 0, 0, 24, 20, 32, 32)
        let text = (Math.round(recipe.data.time / 2) / 10).toFixed(1) + " s"
        guiGraphics.drawWordWrap(Client.font, Text.of(text), 114 - ((text.length - 5) * 6), 0, 100, 0)
    }else if(machine == "packer" || machine == "blastFurnace" || machine == "mixer") {
        guiGraphics.blit("kubejs:textures/gui/arrow.png", 76, 12, 0, 0, 24, 17, 32, 32)
        let text = (Math.round(recipe.data.time / 2) / 10).toFixed(1) + " s"
        guiGraphics.drawWordWrap(Client.font, Text.of(text), 114 - ((text.length - 5) * 6), 0, 100, 0)
    }else if(machine == "unpacker") {
        guiGraphics.blit("kubejs:textures/gui/arrow.png", 38, 12, 0, 0, 24, 17, 32, 32)
        let text = (Math.round(recipe.data.time / 2) / 10).toFixed(1) + " s"
        guiGraphics.drawWordWrap(Client.font, Text.of(text), 114 - ((text.length - 5) * 6), 0, 100, 0)
    }else if(machine == "assembler") {
        guiGraphics.blit("kubejs:textures/gui/arrow.png", 107, 12, 0, 0, 24, 17, 32, 32)
        let text = (Math.round(recipe.data.time / 2) / 10).toFixed(1) + " s"
        guiGraphics.drawWordWrap(Client.font, Text.of(text), 136 - ((text.length - 5) * 6), 0, 100, 0)
    }else if(machine == "quarry") {
        guiGraphics.blit("kubejs:textures/gui/arrow.png", 38, 12, 0, 0, 24, 17, 32, 32)
        let text = (Math.round(recipe.data.time / 2) / 10).toFixed(1) + " s"
        guiGraphics.drawWordWrap(Client.font, Text.of(text), 133 - ((text.length - 5) * 6), 0, 100, 0)
    }
}


JEIAddedEvents.registerRecipeCatalysts(jei =>{
    jei.data.addRecipeCatalyst('kubejs:inventory_furnace_tier_1', global.inventory_furnace_tier_1_recipe_type)
    jei.data.addRecipeCatalyst('kubejs:inventory_furnace_tier_2', global.inventory_furnace_tier_1_recipe_type)
    //jei.data.addRecipeCatalyst('kubejs:inventory_furnace_tier_3', global.inventory_furnace_tier_1_recipe_type)
    //jei.data.addRecipeCatalyst('kubejs:inventory_furnace_tier_4', global.inventory_furnace_tier_1_recipe_type)

    jei.data.addRecipeCatalyst('kubejs:inventory_macerator_tier_1', global.inventory_macerator_tier_1_recipe_type)
    jei.data.addRecipeCatalyst('kubejs:inventory_macerator_tier_2', global.inventory_macerator_tier_1_recipe_type)
    //jei.data.addRecipeCatalyst('kubejs:inventory_macerator_tier_3', global.inventory_macerator_tier_1_recipe_type)
    //jei.data.addRecipeCatalyst('kubejs:inventory_macerator_tier_4', global.inventory_macerator_tier_1_recipe_type)

    jei.data.addRecipeCatalyst('kubejs:inventory_macerator_tier_2', global.inventory_macerator_tier_2_recipe_type)
    //jei.data.addRecipeCatalyst('kubejs:inventory_macerator_tier_3', global.inventory_macerator_tier_2_recipe_type)
    //jei.data.addRecipeCatalyst('kubejs:inventory_macerator_tier_4', global.inventory_macerator_tier_2_recipe_type)

    jei.data.addRecipeCatalyst('kubejs:inventory_compressor_tier_1', global.inventory_compressor_tier_1_recipe_type)
    jei.data.addRecipeCatalyst('kubejs:inventory_compressor_tier_2', global.inventory_compressor_tier_1_recipe_type)
    //jei.data.addRecipeCatalyst('kubejs:inventory_compressor_tier_3', global.inventory_compressor_tier_1_recipe_type)
    //jei.data.addRecipeCatalyst('kubejs:inventory_compressor_tier_4', global.inventory_compressor_tier_1_recipe_type)

    jei.data.addRecipeCatalyst('kubejs:inventory_cutting_machine_tier_1', global.inventory_cutting_machine_tier_1_recipe_type)
    jei.data.addRecipeCatalyst('kubejs:inventory_cutting_machine_tier_2', global.inventory_cutting_machine_tier_1_recipe_type)
    //jei.data.addRecipeCatalyst('kubejs:inventory_cutting_machine_tier_3', global.inventory_cutting_machine_tier_1_recipe_type)
    //jei.data.addRecipeCatalyst('kubejs:inventory_cutting_machine_tier_4', global.inventory_cutting_machine_tier_1_recipe_type)

    jei.data.addRecipeCatalyst('kubejs:inventory_cutting_machine_tier_1', global.inventory_cutting_machine_tier_1_template_recipe_type)
    jei.data.addRecipeCatalyst('kubejs:inventory_cutting_machine_tier_2', global.inventory_cutting_machine_tier_1_template_recipe_type)
    //jei.data.addRecipeCatalyst('kubejs:inventory_cutting_machine_tier_3_template', global.inventory_cutting_machine_tier_1_template_recipe_type)
    //jei.data.addRecipeCatalyst('kubejs:inventory_cutting_machine_tier_4_template', global.inventory_cutting_machine_tier_1_template_recipe_type)

    jei.data.addRecipeCatalyst('kubejs:inventory_packer_tier_1', global.inventory_packer_tier_1_recipe_type)
    jei.data.addRecipeCatalyst('kubejs:inventory_packer_tier_2', global.inventory_packer_tier_1_recipe_type)
    //jei.data.addRecipeCatalyst('kubejs:inventory_packer_tier_3', global.inventory_packer_tier_1_recipe_type)
    //jei.data.addRecipeCatalyst('kubejs:inventory_packer_tier_4', global.inventory_packer_tier_1_recipe_type)

    jei.data.addRecipeCatalyst('kubejs:inventory_packer_tier_1', global.inventory_packer_tier_1_template_recipe_type)
    jei.data.addRecipeCatalyst('kubejs:inventory_packer_tier_2', global.inventory_packer_tier_1_template_recipe_type)
    //jei.data.addRecipeCatalyst('kubejs:inventory_packer_tier_3_template', global.inventory_packer_tier_1_template_recipe_type)
    //jei.data.addRecipeCatalyst('kubejs:inventory_packer_tier_4_template', global.inventory_packer_tier_1_template_recipe_type)

    jei.data.addRecipeCatalyst('kubejs:inventory_unpacker_tier_1', global.inventory_unpacker_tier_1_recipe_type)
    jei.data.addRecipeCatalyst('kubejs:inventory_unpacker_tier_2', global.inventory_unpacker_tier_1_recipe_type)
    //jei.data.addRecipeCatalyst('kubejs:inventory_unpacker_tier_3', global.inventory_unpacker_tier_1_recipe_type)
    //jei.data.addRecipeCatalyst('kubejs:inventory_unpacker_tier_4', global.inventory_unpacker_tier_1_recipe_type)

    jei.data.addRecipeCatalyst('kubejs:inventory_wiremill_tier_1', global.inventory_wiremill_tier_1_recipe_type)
    //jei.data.addRecipeCatalyst('kubejs:inventory_wiremill_tier_2', global.inventory_wiremill_tier_1_recipe_type)
    //jei.data.addRecipeCatalyst('kubejs:inventory_wiremill_tier_3', global.inventory_wiremill_tier_1_recipe_type)

    jei.data.addRecipeCatalyst('kubejs:inventory_coke_oven_tier_1', global.inventory_coke_oven_tier_1_recipe_type)
    jei.data.addRecipeCatalyst('kubejs:inventory_coke_oven_tier_2', global.inventory_coke_oven_tier_1_recipe_type)
    //jei.data.addRecipeCatalyst('kubejs:inventory_coke_oven_tier_3', global.inventory_coke_oven_tier_1_recipe_type)
    //jei.data.addRecipeCatalyst('kubejs:inventory_coke_oven_tier_4', global.inventory_coke_oven_tier_1_recipe_type)

    jei.data.addRecipeCatalyst('kubejs:inventory_blast_furnace_tier_1', global.inventory_blast_furnace_tier_1_recipe_type)
    jei.data.addRecipeCatalyst('kubejs:inventory_blast_furnace_tier_2', global.inventory_blast_furnace_tier_1_recipe_type)
    //jei.data.addRecipeCatalyst('kubejs:inventory_blast_furnace_tier_3', global.inventory_blast_furnace_tier_1_recipe_type)
    //jei.data.addRecipeCatalyst('kubejs:inventory_blast_furnace_tier_4', global.inventory_blast_furnace_tier_1_recipe_type)

    jei.data.addRecipeCatalyst('kubejs:inventory_mixer_tier_1', global.inventory_mixer_tier_1_recipe_type)
    //jei.data.addRecipeCatalyst('kubejs:inventory_mixer_tier_2', global.inventory_mixer_tier_1_recipe_type)
    //jei.data.addRecipeCatalyst('kubejs:inventory_mixer_tier_3', global.inventory_mixer_tier_1_recipe_type)

    jei.data.addRecipeCatalyst('kubejs:inventory_quarry_tier_1', global.inventory_quarry_tier_1_recipe_type)
    //jei.data.addRecipeCatalyst('kubejs:inventory_quarry_tier_2', global.inventory_quarry_tier_1_recipe_type)
    //jei.data.addRecipeCatalyst('kubejs:inventory_quarry_tier_3', global.inventory_quarry_tier_1_recipe_type)

    jei.data.addRecipeCatalyst('kubejs:inventory_assembler_tier_1', global.inventory_assembler_tier_1_recipe_type)
    //jei.data.addRecipeCatalyst('kubejs:inventory_assembler_tier_2', global.inventory_assembler_tier_1_recipe_type)
    //jei.data.addRecipeCatalyst('kubejs:inventory_assembler_tier_3', global.inventory_assembler_tier_1_recipe_type)
})