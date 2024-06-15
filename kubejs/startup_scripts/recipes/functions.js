// priority: 1000
const planks = [
    "minecraft:oak_planks", 
    "minecraft:spruce_planks",
    "minecraft:birch_planks",
    "minecraft:jungle_planks",
    "minecraft:acacia_planks",
    "minecraft:dark_oak_planks",
    "minecraft:mangrove_planks",
    "minecraft:cherry_planks",
    "minecraft:bamboo_planks",
    "minecraft:crimson_planks",
    "minecraft:warped_planks",
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
const colors = ["white", "light_gray", "gray", "black", "brown", "red", "orange", "yellow", "lime", "green", "cyan", "light_blue", "blue", "purple", "magenta", "pink"]

global.recipes = {
    furnace: {}, 
    macerator: {}, 
    compressor: {}, 
    cuttingMachine: {    
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

