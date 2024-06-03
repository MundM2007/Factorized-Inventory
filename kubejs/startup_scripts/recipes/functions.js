// priority: 1000


global.recipes = {
    furnace: {}, 
    macerator: {}, 
    compressor: {}, 
    cuttingMachine: {},
    wiremill: {}, 
    cokeOven: {},
    quarry: {},

    blastFurnace: {
        "count": 0,
        "i0": {},
        "i1": {},
        "i2": {}
    },
    mixer: {
        "count": 0,
        "i0": {},
        "i1": {},
        "i2": {}
    },
    assembler: {
        "count": 0,
        "i0": {},
        "i1": {},
        "i2": {},
        "i3": {},
        "i4": {},
    },
}

function convertToId(item){
    return item.includes(" ") ? item.split(" ")[1] : item
}


function addFurnaceRecipe(output, input, time){
    if(!time) time = 200.0
    global.recipes.furnace[convertToId(input)] = {input: input, output: output, time: time}
}

function addMaceratorRecipe(output, input, time){
    if(!time) time = 200.0
    global.recipes.macerator[convertToId(input)] = {input: input, output: output, time: time}
}

function addCompressorRecipe(output, input, time){
    if(!time) time = 200.0
    global.recipes.compressor[convertToId(input)] = {input: input, output: output, time: time}
}

function addCuttingMachineRecipe(output, input, time){
    if(!time) time = 200.0
    global.recipes.cuttingMachine[convertToId(input)] = {input: input, output: output, time: time}
}

function addWiremillRecipe(output, input, time){
    if(!time) time = 100.0
    global.recipes.wiremill[convertToId(input)] = {input: input, output: output, time: time}
}

function addCokeOvenRecipe(output, input, time){
    if(!time) time = 1200.0
    global.recipes.cokeOven[convertToId(input)] = {input: input, output: output, time: time}
}


function addBlastFurnaceRecipe(output, inputs, time){
    if(!time) time = 400.0
    for(let i = 0; i < inputs.length; i++){
        let input = global.recipes.blastFurnace["i" + i][convertToId(inputs[i])]
        if(!input) global.recipes.blastFurnace["i" + i][convertToId(inputs[i])] = [global.recipes.blastFurnace["count"]]
        else input.push(global.recipes.blastFurnace["count"])
    }
    global.recipes.blastFurnace["r" + global.recipes.blastFurnace["count"]] = {output: output, inputs: inputs, time: time, index: global.recipes.blastFurnace["count"]}
    global.recipes.blastFurnace["count"]++
}


function addMixerRecipe(output, inputs, time){
    if(!time) time = 200.0
    for(let i = 0; i < inputs.length; i++){
        let input = global.recipes.mixer["i" + i][convertToId(inputs[i])]
        if(!input) global.recipes.mixer["i" + i][convertToId(inputs[i])] = [global.recipes.mixer["count"]]
        else input.push(global.recipes.mixer["count"])
    }
    global.recipes.mixer["r" + global.recipes.mixer["count"]] = {output: output, inputs: inputs, time: time, index: global.recipes.mixer["count"]}
    global.recipes.mixer["count"]++
}


function addAssemblerRecipe(output, inputs, time){
    if(!time) time = 200.0
    for(let i = 0; i < inputs.length; i++){
        let input = global.recipes.assembler["i" + i][convertToId(inputs[i])]
        if(!input) global.recipes.assembler["i" + i][convertToId(inputs[i])] = [global.recipes.assembler["count"]]
        else input.push(global.recipes.assembler["count"])
    }
    global.recipes.assembler["r" + global.recipes.assembler["count"]] = {output: output, inputs: inputs, time: time, index: global.recipes.assembler["count"]}
    global.recipes.assembler["count"]++
}


function addQuarryRecipe(outputs, weights, input, consumeInputChance, time){
    if(!time) time = 100.0
    let totalWeights = 0
    for(let i = 0; i < weights.length; i++){
        totalWeights += weights[i]
    }

    global.recipes.quarry[convertToId(input)] = {input: input, consumeInputChance: consumeInputChance, outputs: outputs, weights: weights, totalWeights: totalWeights, time: time}
}

