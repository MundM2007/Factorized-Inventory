function addSimpleMachineTooltip(event, machineItem, machine, data){
    event.addAdvanced(machineItem, (item, advanced, text) => {
        if (!event.shift) {
            if(item.nbt){
                if(item.nbt.currentInputItem == "minecraft:air"){
                    text.add(1, [Text.gray('Hold [Shift] for more info.')])
                }else{
                    text.add(1, Text.blue('Current Progress: ' + Math.round(item.nbt.recipeProgress / 2) / 10 + " s/" +  Math.round(item.nbt.currentTime / 2) / 10 + " s"))
                    text.add(2, Text.red('Fuel Amount left: ' + item.nbt.fuel ))
                    text.add(3, [Text.gray('Hold [Shift] for more info.')])
                }
            }else{
                text.add(1, [Text.gray('Hold [Shift] for more info.')])
            }
        } else {
            text.add(1, Text.blue('Takes items from the above slot'))
            text.add(2, Text.gold('And outputs the result to the slot below'))
            text.add(3, Text.darkPurple('The fuel is taken from the right slot or the left slot'))
            if(data.speed > 1){
                if(data.countProcess > 1){
                    text.add(4, Text.green(`It has a speed boost of ${data.speed}x compared to the tier 1 Inventory ${Utils.snakeCaseToTitleCase(machine)}`))
                    text.add(5, Text.green(`It can process up to ${data.countProcess} items at once`))
                }else{
                    text.add(4, Text.green(`It has a speed boost of ${data.speed}x compared to the tier 1 Inventory ${Utils.snakeCaseToTitleCase(machine)}`))
                }
            }else if(data.countProcess > 1){
                text.add(4, Text.green(`It can process up to ${data.countProcess} items at once`))
            }
        }
    })
}


function addRecipeIndexedMachineTooltip(event, machineItem, machine, data){
    event.addAdvanced(machineItem, (item, advanced, text) => {
        if (!event.shift) {
            if(item.nbt){
                if(item.nbt.currentRecipe == -1){
                    text.add(1, [Text.gray('Hold [Shift] for more info.')])
                }else{
                    text.add(1, Text.blue('Current Progress: ' + Math.round(item.nbt.recipeProgress / 2) / 10 + " s/" +  Math.round(item.nbt.currentTime / 2) / 10 + " s"))
                    text.add(2, Text.red('Fuel Amount left: ' + item.nbt.fuel ))
                    text.add(3, [Text.gray('Hold [Shift] for more info.')])
                }
            }else{
                text.add(1, [Text.gray('Hold [Shift] for more info.')])
            }
        } else {
            text.add(1, Text.blue('Takes items from the top left, top middle and top right slots'))
            text.add(2, Text.gold('And outputs the result to the slot below'))
            text.add(3, Text.darkPurple('The fuel is taken from the right slot or the left slot'))
            if(data.speed > 1){
                if(data.countProcess > 1){
                    text.add(4, Text.green(`It has a speed boost of ${data.speed}x compared to the tier 1 Inventory ${Utils.snakeCaseToTitleCase(machine)}`))
                    text.add(5, Text.green(`It can process up to ${data.countProcess} items at once`))
                }else{
                    text.add(4, Text.green(`It has a speed boost of ${data.speed}x compared to the tier 1 Inventory ${Utils.snakeCaseToTitleCase(machine)}`))
                }
            }else if(data.countProcess > 1){
                text.add(4, Text.green(`It can process up to ${data.countProcess} items at once`))
            }
        }
    })
}


function addOreTooltip(event, oreItem, data, dimension){
    event.addAdvanced(oreItem, (item, advanced, text) => {
        text.add(1, Text.gray('Generates between ' + data.min + ' and ' + data.max))
        if(dimension == "nether") text.add(2, Text.red('Only spawns in the Nether'))
        if(dimension == "end") text.add(2, Text.darkPurple('Only spawns in the End'))
    })

    if(dimension != "nether" && dimension != "end"){
        event.addAdvanced(oreItem + "_deepslate", (item, advanced, text) => {
            text.add(1, Text.gray('Generates between ' + data.min + ' and ' + data.max))
            if(dimension == "nether") text.add(2, Text.red('Only spawns in the Nether'))
            if(dimension == "end") text.add(2, Text.darkPurple('Only spawns in the End'))
        })
    }
}


ItemEvents.tooltip(event => {
    addOreTooltip(event, 'kubejs:aluminum_ore', {min: -32, max: 32})
    addOreTooltip(event, 'kubejs:antimony_ore', {min: -48, max: 0})
    addOreTooltip(event, 'kubejs:cobalt_ore', {min: 5, max: 40}, "nether")
    addOreTooltip(event, 'kubejs:lead_ore', {min: -16, max: 48})
    addOreTooltip(event, 'kubejs:nickel_ore', {min: -32, max: 48})
    addOreTooltip(event, 'kubejs:platinum_ore', {min: -64, max: -32})
    addOreTooltip(event, 'kubejs:tin_ore', {min: 32, max: 80})
    addOreTooltip(event, 'kubejs:titanium_ore', {min: 0, max: 40}, "end")
    addOreTooltip(event, 'kubejs:zinc_ore', {min: -16, max: 48})

    
    addSimpleMachineTooltip(event, 'kubejs:inventory_furnace_tier_1', 'furnace', {speed: 1, countProcess: 1})
    addSimpleMachineTooltip(event, 'kubejs:inventory_furnace_tier_2', 'furnace', {speed: 1.66, countProcess: 3})
    addSimpleMachineTooltip(event, 'kubejs:inventory_furnace_tier_3', 'furnace', {speed: 5, countProcess: 6})
    addSimpleMachineTooltip(event, 'kubejs:inventory_furnace_tier_4', 'furnace', {speed: 20, countProcess: 10})

    addSimpleMachineTooltip(event, 'kubejs:inventory_macerator_tier_1', 'macerator', {speed: 1, countProcess: 1})
    addSimpleMachineTooltip(event, 'kubejs:inventory_macerator_tier_2', 'macerator', {speed: 1.66, countProcess: 3})
    addSimpleMachineTooltip(event, 'kubejs:inventory_macerator_tier_3', 'macerator', {speed: 5, countProcess: 6})
    addSimpleMachineTooltip(event, 'kubejs:inventory_macerator_tier_4', 'macerator', {speed: 20, countProcess: 10})

    addSimpleMachineTooltip(event, 'kubejs:inventory_compressor_tier_1', 'compressor', {speed: 1, countProcess: 1})
    addSimpleMachineTooltip(event, 'kubejs:inventory_compressor_tier_2', 'compressor', {speed: 1.66, countProcess: 3})
    addSimpleMachineTooltip(event, 'kubejs:inventory_compressor_tier_3', 'compressor', {speed: 5, countProcess: 6})
    addSimpleMachineTooltip(event, 'kubejs:inventory_compressor_tier_4', 'compressor', {speed: 20, countProcess: 10})

    addSimpleMachineTooltip(event, 'kubejs:inventory_cutting_machine_tier_1', 'cutting_machine', {speed: 1, countProcess: 1})
    addSimpleMachineTooltip(event, 'kubejs:inventory_cutting_machine_tier_2', 'cutting_machine', {speed: 1.66, countProcess: 3})
    addSimpleMachineTooltip(event, 'kubejs:inventory_cutting_machine_tier_3', 'cutting_machine', {speed: 5, countProcess: 6})
    addSimpleMachineTooltip(event, 'kubejs:inventory_cutting_machine_tier_4', 'cutting_machine', {speed: 20, countProcess: 10})

    addSimpleMachineTooltip(event, 'kubejs:inventory_wiremill_tier_1', 'wiremill', {speed: 1, countProcess: 2})
    addSimpleMachineTooltip(event, 'kubejs:inventory_wiremill_tier_2', 'wiremill', {speed: 2.5, countProcess: 5})
    addSimpleMachineTooltip(event, 'kubejs:inventory_wiremill_tier_3', 'wiremill', {speed: 10, countProcess: 10})

    addSimpleMachineTooltip(event, 'kubejs:inventory_polarizer_tier_1', 'polarizer', {speed: 1, countProcess: 1})
    addSimpleMachineTooltip(event, 'kubejs:inventory_polarizer_tier_2', 'polarizer', {speed: 2, countProcess: 5})

    addSimpleMachineTooltip(event, 'kubejs:inventory_coke_oven_tier_1', 'coke_oven', {speed: 1, countProcess: 1})
    addSimpleMachineTooltip(event, 'kubejs:inventory_coke_oven_tier_2', 'coke_oven', {speed: 1.66, countProcess: 3})
    addSimpleMachineTooltip(event, 'kubejs:inventory_coke_oven_tier_3', 'coke_oven', {speed: 5, countProcess: 6})
    addSimpleMachineTooltip(event, 'kubejs:inventory_coke_oven_tier_4', 'coke_oven', {speed: 20, countProcess: 10})

    addRecipeIndexedMachineTooltip(event, 'kubejs:inventory_blast_furnace_tier_1', "blast_furnace", {speed: 1, countProcess: 1})
    addRecipeIndexedMachineTooltip(event, 'kubejs:inventory_blast_furnace_tier_2', "blast_furnace", {speed: 1.66, countProcess: 3})
    addRecipeIndexedMachineTooltip(event, 'kubejs:inventory_blast_furnace_tier_3', "blast_furnace", {speed: 5, countProcess: 6})
    addRecipeIndexedMachineTooltip(event, 'kubejs:inventory_blast_furnace_tier_4', "blast_furnace", {speed: 20, countProcess: 10})

    addRecipeIndexedMachineTooltip(event, 'kubejs:inventory_mixer_tier_1', 'mixer', {speed: 1, countProcess: 2})
    addRecipeIndexedMachineTooltip(event, 'kubejs:inventory_mixer_tier_2', 'mixer', {speed: 2.5, countProcess: 5})
    addRecipeIndexedMachineTooltip(event, 'kubejs:inventory_mixer_tier_3', 'mixer', {speed: 10, countProcess: 10})
})