// priority: 1000
const sands = [
    'minecraft:sand',
    'minecraft:red_sand',
    'minecraft:suspicious_sand',
    'biomesoplenty:black_sand',
    'biomesoplenty:mossy_black_sand',
    'biomesoplenty:orange_sand',
    'biomesoplenty:white_sand',
]
const sands4 = sands.map(sand => "4x " + sand)
const logs = [
    "minecraft:oak_log",
    "minecraft:spruce_log",
    "minecraft:birch_log",
    "minecraft:jungle_log",
    "minecraft:acacia_log",
    "minecraft:dark_oak_log",
    "minecraft:mangrove_log",
    "minecraft:cherry_log",
    "minecraft:crimson_stem",
    "minecraft:warped_stem",
    "biomesoplenty:fir_log",
    "biomesoplenty:redwood_log",
    "biomesoplenty:mahogany_log",
    "biomesoplenty:jacaranda_log",
    "biomesoplenty:palm_log",
    "biomesoplenty:willow_log",
    "biomesoplenty:dead_log",
    "biomesoplenty:magic_log",
    "biomesoplenty:umbran_log",
    "biomesoplenty:hellbark_log",
    "minecraft:stripped_oak_log",
    "minecraft:stripped_spruce_log",
    "minecraft:stripped_birch_log",
    "minecraft:stripped_jungle_log",
    "minecraft:stripped_acacia_log",
    "minecraft:stripped_dark_oak_log",
    "minecraft:stripped_mangrove_log",
    "minecraft:stripped_cherry_log",
    "minecraft:stripped_crimson_stem",
    "minecraft:stripped_warped_stem",
    "biomesoplenty:stripped_fir_log",
    "biomesoplenty:stripped_redwood_log",
    "biomesoplenty:stripped_mahogany_log",
    "biomesoplenty:stripped_jacaranda_log",
    "biomesoplenty:stripped_palm_log",
    "biomesoplenty:stripped_willow_log",
    "biomesoplenty:stripped_dead_log",
    "biomesoplenty:stripped_magic_log",
    "biomesoplenty:stripped_umbran_log",
    "biomesoplenty:stripped_hellbark_log",
    "minecraft:oak_wood",
    "minecraft:spruce_wood",
    "minecraft:birch_wood",
    "minecraft:jungle_wood",
    "minecraft:acacia_wood",
    "minecraft:dark_oak_wood",
    "minecraft:mangrove_wood",
    "minecraft:cherry_wood",
    "minecraft:crimson_hyphae",
    "minecraft:warped_hyphae",
    "biomesoplenty:fir_wood",
    "biomesoplenty:redwood_wood",
    "biomesoplenty:mahogany_wood",
    "biomesoplenty:jacaranda_wood",
    "biomesoplenty:palm_wood",
    "biomesoplenty:willow_wood",
    "biomesoplenty:dead_wood",
    "biomesoplenty:magic_wood",
    "biomesoplenty:umbran_wood",
    "biomesoplenty:hellbark_wood",
    "minecraft:stripped_oak_wood",
    "minecraft:stripped_spruce_wood",
    "minecraft:stripped_birch_wood",
    "minecraft:stripped_jungle_wood",
    "minecraft:stripped_acacia_wood",
    "minecraft:stripped_dark_oak_wood",
    "minecraft:stripped_mangrove_wood",
    "minecraft:stripped_cherry_wood",
    "minecraft:stripped_crimson_hyphae",
    "minecraft:stripped_warped_hyphae",
    "biomesoplenty:stripped_fir_wood",
    "biomesoplenty:stripped_redwood_wood",
    "biomesoplenty:stripped_mahogany_wood",
    "biomesoplenty:stripped_jacaranda_wood",
    "biomesoplenty:stripped_palm_wood",
    "biomesoplenty:stripped_willow_wood",
    "biomesoplenty:stripped_dead_wood",
    "biomesoplenty:stripped_magic_wood",
    "biomesoplenty:stripped_umbran_wood",
    "biomesoplenty:stripped_hellbark_wood"
]
const logs3 = logs.map(log => "3x " + log)
const logs4 = logs.map(log => "4x " + log)
const planks = [
    "minecraft:oak_planks", 
    "minecraft:spruce_planks",
    "minecraft:birch_planks",
    "minecraft:jungle_planks",
    "minecraft:acacia_planks",
    "minecraft:dark_oak_planks",
    "minecraft:crimson_planks",
    "minecraft:warped_planks",
    "minecraft:mangrove_planks",
    "minecraft:cherry_planks",
    "minecraft:bamboo_planks",
    "biomesoplenty:fir_planks",
    "biomesoplenty:redwood_planks",
    "biomesoplenty:mahogany_planks",
    "biomesoplenty:jacaranda_planks",
    "biomesoplenty:palm_planks",
    "biomesoplenty:willow_planks",
    "biomesoplenty:dead_planks",
    "biomesoplenty:magic_planks",
    "biomesoplenty:umbran_planks",
    "biomesoplenty:hellbark_planks"
]
const planks2 = planks.map(plank => "2x " + plank)
const planks3 = planks.map(plank => "3x " + plank)
const planks4 = planks.map(plank => "4x " + plank)
const planks6 = planks.map(plank => "6x " + plank)
const planks8 = planks.map(plank => "8x " + plank)
const slabs2 = planks2.map(plank => plank.replace("planks", "slab"))
const slabs3 = planks3.map(plank => plank.replace("planks", "slab"))
const slabs6 = planks6.map(plank => plank.replace("planks", "slab"))
const colors = ["white", "light_gray", "gray", "black", "brown", "red", "orange", "yellow", "lime", "green", "cyan", "light_blue", "blue", "purple", "magenta", "pink"]
const chests = ["minecraft:chest", "minecraft:trapped_chest"]
const soul_fire_base_blocks = ["minecraft:soul_soil", "minecraft:soul_sand"]
const stone_tool_materials = ["minecraft:cobblestone", 'minecraft:blackstone', 'minecraft:cobbled_deepslate']
const stone_tool_materials3 = stone_tool_materials.map(material => `3x ${material}`)
const stone_tool_materials8 = stone_tool_materials.map(material => `8x ${material}`)

global.recipes = {
    furnace: {}, 
    macerator: {}, 
    compressor: {}, 
    cuttingMachine: {
        drawer_template_1x1: {},
        drawer_template_1x2: {},
        drawer_template_2x2: {},    
        air: {},
        block_template: {},
        boat_template: {},
        button_template: {},
        carpet_template: {},
        color_template: {},
        door_template: {},
        fence_gate_template: {},
        fence_template: {},
        glass_pane_template: {},
        log_template: {},
        pressure_plate_template: {},
        sign_template: {},
        slab_template: {},
        stairs_template: {},
        trapdoor_template: {},
        wall_template: {},
        water_bucket: {},
        waxing_template: {}
    },
    packer: {
        drawer_template_1x1: {count: 0, i0: {}, i1: {}, i2: {}},
        drawer_template_1x2: {count: 0, i0: {}, i1: {}, i2: {}},
        drawer_template_2x2: {count: 0, i0: {}, i1: {}, i2: {}},
        air: {count: 0, i0: {}, i1: {}, i2: {}},
        block_template: {count: 0, i0: {}, i1: {}, i2: {}},
        boat_template: {count: 0, i0: {}, i1: {}, i2: {}},
        button_template: {count: 0, i0: {}, i1: {}, i2: {}},
        carpet_template: {count: 0, i0: {}, i1: {}, i2: {}},
        color_template: {count: 0, i0: {}, i1: {}, i2: {}},
        door_template: {count: 0, i0: {}, i1: {}, i2: {}},
        fence_gate_template: {count: 0, i0: {}, i1: {}, i2: {}},
        fence_template: {count: 0, i0: {}, i1: {}, i2: {}},
        glass_pane_template: {count: 0, i0: {}, i1: {}, i2: {}},
        log_template: {count: 0, i0: {}, i1: {}, i2: {}},
        pressure_plate_template: {count: 0, i0: {}, i1: {}, i2: {}},
        sign_template: {count: 0, i0: {}, i1: {}, i2: {}},
        slab_template: {count: 0, i0: {}, i1: {}, i2: {}},
        stairs_template: {count: 0, i0: {}, i1: {}, i2: {}},
        trapdoor_template: {count: 0, i0: {}, i1: {}, i2: {}},
        wall_template: {count: 0, i0: {}, i1: {}, i2: {}},
        water_bucket: {count: 0, i0: {}, i1: {}, i2: {}},
        waxing_template: {count: 0, i0: {}, i1: {}, i2: {}}
    },
    unpacker: {},
    wiremill: {}, 
    cokeOven: {},
    quarry: {},
    blastFurnace: {count: 0, i0: {}, i1: {}, i2: {}},
    mixer: {count: 0, i0: {}, i1: {}, i2: {}},
    assembler: {count: 0, i0: {}, i1: {}, i2: {}, i3: {}, i4: {}},
}

function convertToId(item){
    return item.includes(" ") ? item.split(" ")[1] : item
}


function addFurnaceRecipe(output, input, time, tier, displayInput){
    if(!time) time = 200.0
    if(!tier) tier = 1
    global.recipes.furnace[convertToId(input)] = {input: input, output: output, time: time, tier: tier, displayInput: displayInput}
}

function addMaceratorRecipe(output, input, time, tier, displayInput){
    if(!time) time = 200.0
    if(!tier) tier = 1
    global.recipes.macerator[convertToId(input)] = {input: input, output: output, time: time, tier: tier, displayInput: displayInput}
}

function addCompressorRecipe(output, input, time, tier, displayInput){
    if(!time) time = 200.0
    if(!tier) tier = 1
    global.recipes.compressor[convertToId(input)] = {input: input, output: output, time: time, tier: tier, displayInput: displayInput}
}

function addCuttingMachineRecipe(output, input, time, tier, template, displayInput){
    if(!time) time = 200.0
    if(!tier) tier = 1
    if(!template) template = "air"
    let templateItem = template
    if(template != "air" && template != "water_bucket") templateItem = "kubejs:" + template
    if(template == "water_bucket") templateItem = "minecraft:water_bucket"
    global.recipes.cuttingMachine[template][convertToId(input)] = {input: input, output: output, time: time, tier: tier, template: templateItem, displayInput: displayInput}
}

function addPackerRecipe(output, inputs, time, tier, template, displayInputs){
    if(!time) time = 200.0
    if(!tier) tier = 1
    if(!template) template = "air"
    let templateItem = template
    if(template != "air" && template != "water_bucket") templateItem = "kubejs:" + template
    if(template == "water_bucket") templateItem = "minecraft:water_bucket"
    for(let i = 0; i < inputs.length; i++){
        let input = global.recipes.packer[template]["i" + i][convertToId(inputs[i])]
        if(!input) global.recipes.packer[template]["i" + i][convertToId(inputs[i])] = [global.recipes.packer[template]["count"]]
        else input.push(global.recipes.packer[template]["count"])
    }
    if(!displayInputs) displayInputs = ""
    global.recipes.packer[template]["r" + global.recipes.packer[template]["count"]] = {output: output, inputs: inputs, time: time, index: global.recipes.packer[template]["count"], 
        tier: tier, template: templateItem, displayInputs: displayInputs}
    global.recipes.packer[template]["count"]++
}

function addUnpackerRecipe(outputs, input, time, tier, displayInput){
    if(!time) time = 200.0
    if(!tier) tier = 1
    global.recipes.unpacker[convertToId(input)] = {input: input, outputs: outputs, time: time, tier: tier, displayInput: displayInput}
}

function addWiremillRecipe(output, input, time, tier, displayInput){
    if(!time) time = 100.0
    if(!tier) tier = 1
    global.recipes.wiremill[convertToId(input)] = {input: input, output: output, time: time, tier: tier + 1, displayInput: displayInput}
}

function addCokeOvenRecipe(output, input, time, tier, displayInput){
    if(!time) time = 1200.0
    if(!tier) tier = 1
    global.recipes.cokeOven[convertToId(input)] = {input: input, output: output, time: time, tier: tier, displayInput: displayInput}
}

function addBlastFurnaceRecipe(output, inputs, time, tier, displayInputs){
    if(!time) time = 400.0
    if(!tier) tier = 1
    for(let i = 0; i < inputs.length; i++){
        let input = global.recipes.blastFurnace["i" + i][convertToId(inputs[i])]
        if(!input) global.recipes.blastFurnace["i" + i][convertToId(inputs[i])] = [global.recipes.blastFurnace["count"]]
        else input.push(global.recipes.blastFurnace["count"])
    }
    if(!displayInputs) displayInputs = ""
    global.recipes.blastFurnace["r" + global.recipes.blastFurnace["count"]] = {output: output, inputs: inputs, time: time, index: global.recipes.blastFurnace["count"], 
        tier: tier, displayInputs: displayInputs}
    global.recipes.blastFurnace["count"]++
}


function addMixerRecipe(output, inputs, time, tier, displayInputs){
    if(!time) time = 200.0
    if(!tier) tier = 1
    for(let i = 0; i < inputs.length; i++){
        let input = global.recipes.mixer["i" + i][convertToId(inputs[i])]
        if(!input) global.recipes.mixer["i" + i][convertToId(inputs[i])] = [global.recipes.mixer["count"]]
        else input.push(global.recipes.mixer["count"])
    }
    if(!displayInputs) displayInputs = ""
    global.recipes.mixer["r" + global.recipes.mixer["count"]] = {output: output, inputs: inputs, time: time, index: global.recipes.mixer["count"], 
        tier: tier + 1, displayInputs: displayInputs}
    global.recipes.mixer["count"]++
}


function addAssemblerRecipe(output, inputs, time, tier, displayInputs){
    if(!time) time = 200.0
    if(!tier) tier = 1
    for(let i = 0; i < inputs.length; i++){
        let input = global.recipes.assembler["i" + i][convertToId(inputs[i])]
        if(!input) global.recipes.assembler["i" + i][convertToId(inputs[i])] = [global.recipes.assembler["count"]]
        else input.push(global.recipes.assembler["count"])
    }
    if(!displayInputs) displayInputs = ""
    global.recipes.assembler["r" + global.recipes.assembler["count"]] = {output: output, inputs: inputs, time: time, index: global.recipes.assembler["count"], 
        tier: tier + 1, displayInputs: displayInputs}
    global.recipes.assembler["count"]++
}


function addQuarryRecipe(outputs, weights, input, consumeInputChance, time, tier){
    if(!time) time = 100.0
    if(!tier) tier = 1
    let totalWeights = 0
    for(let i = 0; i < weights.length; i++){
        totalWeights += weights[i]
    }
    global.recipes.quarry[convertToId(input)] = {input: input, consumeInputChance: consumeInputChance, outputs: outputs, weights: weights, totalWeights: totalWeights, time: time, tier: tier + 1}
}

