global.recipes = {
    furnace: {}, 
    macerator: {}, 
    compressor: {}, 
    cutting_machine: {},
    wiremill: {}, 
    polarizer: {}
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
    global.recipes.cutting_machine[convertToId(input)] = {input: input, output: output, time: time}
}

function addWiremillRecipe(output, input, time){
    if(!time) time = 200.0
    global.recipes.wiremill[convertToId(input)] = {input: input, output: output, time: time}
}

function addPolarizerRecipe(output, input, time){
    if(!time) time = 200.0
    global.recipes.polarizer[convertToId(input)] = {input: input, output: output, time: time}
}

