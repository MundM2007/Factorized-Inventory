function addSimpleMachineTooltip(event, machineItem, machine, data){
    event.addAdvanced(machineItem, (item, advanced, text) => {
        if (!event.shift) {
            if(item.nbt){
                if(item.nbt.currentInputItem == "minecraft:air"){
                    if(item.nbt.fuel > 0){
                        text.add(1, Text.red('Fuel Amount left: ' + item.nbt.fuel))
                    }
                    text.add(2, [Text.gray('Hold [Shift] for more info.')])
                }else{
                    text.add(1, Text.blue('Current Progress: ' + 
                        + Math.round(item.nbt.recipeProgress / (2 * data.speed)) / 10 + " s/"
                        + Math.round(item.nbt.currentTime / (2 * data.speed)) / 10 + " s"))
                    text.add(2, Text.red('Fuel Amount left: ' + item.nbt.fuel ))
                    text.add(3, [Text.gray('Hold [Shift] for more info.')])
                }
            }else{
                text.add(1, [Text.gray('Hold [Shift] for more info.')])
            }
        } else {
            text.add(1, Text.blue('Takes items from the above slot'))
            if(machine == "unpacker"){
                text.add(2, Text.gold("And outputs the results to the bottom left, bottom middle and bottom right slots, respecting the order of the shown recipe's output"))
            }else{
                text.add(2, Text.gold('And outputs the result to the slot below'))
            }
            text.add(3, Text.darkPurple('The fuel is taken from the right slot or the left slot'))
            if(machine == "cutting_machine"){
                text.add(4, Text.darkPurple('A Template can be placed in right slot or left slot to change the recipe group'))
                if(data.speed > 1){
                    if(data.countProcess > 1){
                        text.add(5, Text.green(`It has a speed boost of ${data.speed}x compared to the tier 1 Inventory ${Utils.snakeCaseToTitleCase(machine)}`))
                        text.add(6, Text.green(`It can process up to ${data.countProcess} items at once`))
                    }else{
                        text.add(5, Text.green(`It has a speed boost of ${data.speed}x compared to the tier 1 Inventory ${Utils.snakeCaseToTitleCase(machine)}`))
                    }
                }else if(data.countProcess > 1){
                    text.add(5, Text.green(`It can process up to ${data.countProcess} items at once`))
                }
            }else{
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
        }
    })
}


function addRecipeIndexedMachineTooltip(event, machineItem, machine, data){
    event.addAdvanced(machineItem, (item, advanced, text) => {
        if (!event.shift) {
            if(item.nbt){
                if(item.nbt.currentRecipe == -1){
                    if(item.nbt.fuel > 0){
                        text.add(1, Text.red('Fuel Amount left: ' + item.nbt.fuel))
                    }
                    text.add(2, [Text.gray('Hold [Shift] for more info.')])
                }else{
                    text.add(1, Text.blue('Current Progress: ' + 
                        + Math.round(item.nbt.recipeProgress / (2 * data.speed)) / 10 + " s/"
                        + Math.round(item.nbt.currentTime / (2 * data.speed)) / 10 + " s"))
                    text.add(2, Text.red('Fuel Amount left: ' + item.nbt.fuel ))
                    text.add(3, [Text.gray('Hold [Shift] for more info.')])
                }
            }else{
                text.add(1, [Text.gray('Hold [Shift] for more info.')])
            }
        } else {
            text.add(1, Text.blue('Takes items from the top left, top middle and top right slots'))
            text.add(2, Text.blue('If taking Items from shulker boxes, it will only take the first item that matches any recipe'))
            text.add(3, Text.gold('And outputs the result to the slot below'))
            text.add(4, Text.darkPurple('The fuel is taken from the right slot or the left slot'))
            if(machine == "packer"){
                text.add(5, Text.darkPurple('A Template can be placed in right slot or left slot to change the recipe group'))
                if(data.speed > 1){
                    if(data.countProcess > 1){
                        text.add(6, Text.green(`It has a speed boost of ${data.speed}x compared to the tier 1 Inventory ${Utils.snakeCaseToTitleCase(machine)}`))
                        text.add(7, Text.green(`It can process up to ${data.countProcess} items at once`))
                    }else{
                        text.add(6, Text.green(`It has a speed boost of ${data.speed}x compared to the tier 1 Inventory ${Utils.snakeCaseToTitleCase(machine)}`))
                    }
                }else if(data.countProcess > 1){
                    text.add(6, Text.green(`It can process up to ${data.countProcess} items at once`))
                }
            }else{
                if(data.speed > 1){
                    if(data.countProcess > 1){
                        text.add(5, Text.green(`It has a speed boost of ${data.speed}x compared to the tier 1 Inventory ${Utils.snakeCaseToTitleCase(machine)}`))
                        text.add(6, Text.green(`It can process up to ${data.countProcess} items at once`))
                    }else{
                        text.add(5, Text.green(`It has a speed boost of ${data.speed}x compared to the tier 1 Inventory ${Utils.snakeCaseToTitleCase(machine)}`))
                    }
                }else if(data.countProcess > 1){
                    text.add(5, Text.green(`It can process up to ${data.countProcess} items at once`))
                }
            }
        }
    })
}



function addAssemblerTooltip(event, machineItem, data){
    event.addAdvanced(machineItem, (item, advanced, text) => {
        if (!event.shift) {
            if(item.nbt){
                if(item.nbt.currentRecipe == -1){
                    if(item.nbt.fuel > 0){
                        text.add(1, Text.red('Fuel Amount left: ' + item.nbt.fuel))
                    }
                    text.add(2, [Text.gray('Hold [Shift] for more info.')])
                }else{
                    text.add(1, Text.blue('Current Progress: ' + 
                        + Math.round(item.nbt.recipeProgress / (2 * data.speed)) / 10 + " s/"
                        + Math.round(item.nbt.currentTime / (2 * data.speed)) / 10 + " s"))
                    text.add(2, Text.red('Fuel Amount left: ' + item.nbt.fuel ))
                    text.add(3, [Text.gray('Hold [Shift] for more info.')])
                }
            }else{
                text.add(1, [Text.gray('Hold [Shift] for more info.')])
            }
        } else {
            text.add(1, Text.blue('Takes items from the row of 5 slots above'))
            text.add(2, Text.blue('If taking Items from shulker boxes, it will only take the first item that matches any recipe'))
            text.add(3, Text.gold('And outputs the result to the slot below'))
            text.add(4, Text.darkPurple('The fuel is taken from the right slot or the left slot'))
            if(data.speed > 1){
                if(data.countProcess > 1){
                    text.add(5, Text.green(`It has a speed boost of ${data.speed}x compared to the tier 1 Inventory Assembler`))
                    text.add(6, Text.green(`It can process up to ${data.countProcess} items at once`))
                }else{
                    text.add(5, Text.green(`It has a speed boost of ${data.speed}x compared to the tier 1 Inventory Assembler`))
                }
            }else if(data.countProcess > 1){
                text.add(5, Text.green(`It can process up to ${data.countProcess} items at once`))
            }
        }
    })
}


function addHopperTooltip(event, machineItem, data){
    event.addAdvanced(machineItem, (item, advanced, text) => {
        if (!event.shift) {
            text.add(1, [Text.gray('Hold [Shift] for more info.')])
        } else {
            text.add(1, Text.gray("Moves Items in it's facing direction"))
            if(data.speed > 1){
                if(data.countProcess > 1){
                    text.add(2, Text.green(`It has a speed boost of ${data.speed}x compared to the tier 1 Inventory Hopper`))
                    text.add(3, Text.green(`It can process up to ${data.countProcess} items at once`))
                }else{
                    text.add(2, Text.green(`It has a speed boost of ${data.speed}x compared to the tier 1 Inventory Hopper`))
                }
            }else if(data.countProcess > 1){
                text.add(2, Text.green(`It can process up to ${data.countProcess} items at once`))
            }
        }
    })
}
            


function addPusherTooltip(event, machineItem, data){
    event.addAdvanced(machineItem, (item, advanced, text) => {
        if (!event.shift) {
            if(item.nbt && item.nbt.Item){
                let count = ""
                if(item.nbt.Item.Count > 1) count = item.nbt.Item.Count.toFixed(0) + "x "
                text.add(1, Text.green('Currently Holding: ' + count).append(Text.green(Component.translatable(Item.of(item.nbt.Item.id).item.getDescriptionId()))))
                text.add(2, [Text.gray('Hold [Shift] for more info.')])
            }else{
                text.add(1, [Text.gray('Hold [Shift] for more info.')])
            }
        } else {
            text.add(1, Text.red('Only works in the Inventory Simulator'))
            text.add(2, Text.gray(`Pushes items inserted into itself`))
            text.add(3, Text.gray('into the block below the Inventory Simulator'))
            if(data.speed > 1){
                if(data.countProcess > 1){
                    text.add(4, Text.green(`It has a speed boost of ${data.speed}x compared to the tier 1 Inventory Pusher`))
                    text.add(5, Text.green(`It can process up to ${data.countProcess} items at once`))
                }else{
                    text.add(4, Text.green(`It has a speed boost of ${data.speed}x compared to the tier 1 Inventory Pusher`))
                }
            }else if(data.countProcess > 1){
                text.add(4, Text.green(`It can process up to ${data.countProcess} items at once`))
            }
        }
    })
}


function addPullerTooltip(event, machineItem, data){
    event.addAdvanced(machineItem, (item, advanced, text) => {
        if (!event.shift) {
            if(item.nbt && item.nbt.Item){
                let count = ""
                if(item.nbt.Item.Count > 1) count = item.nbt.Item.Count.toFixed(0) + "x "
                text.add(1, Text.green('Currently Holding: ' + count).append(Text.green(Component.translatable(Item.of(item.nbt.Item.id).item.getDescriptionId()))))
                if(item.nbt.filter && item.nbt.filter != "minecraft:air"){
                    text.add(2, Text.green('Currently Filtering: ').append(Text.green(Component.translatable(Item.of(item.nbt.filter).item.getDescriptionId()))))
                    text.add(3, [Text.gray('Hold [Shift] for more info.')])
                }else{
                    text.add(2, [Text.gray('Hold [Shift] for more info.')])
                }
            }else if(item.nbt && item.nbt.filter && item.nbt.filter != "minecraft:air"){
                text.add(1, Text.green('Currently Filtering: ').append(Text.green(Component.translatable(Item.of(item.nbt.filter).item.getDescriptionId()))))
                text.add(2, [Text.gray('Hold [Shift] for more info.')])
            }else{
                text.add(1, [Text.gray('Hold [Shift] for more info.')])
            }
        } else {
            text.add(1, Text.red('Only works in the Inventory Simulator'))
            text.add(2, Text.gray('Pulls items from the block above the Inventory Simulator'))
            text.add(3, Text.gray('into itself to be extracted from'))
            if(data.speed > 1){
                if(data.countProcess > 1){
                    text.add(4, Text.green(`It has a speed boost of ${data.speed}x compared to the tier 1 Inventory Pusher`))
                    text.add(5, Text.green(`It can process up to ${data.countProcess} items at once`))
                }else{
                    text.add(4, Text.green(`It has a speed boost of ${data.speed}x compared to the tier 1 Inventory Pusher`))
                }
            }else if(data.countProcess > 1){
                text.add(4, Text.green(`It can process up to ${data.countProcess} items at once`))
            }
        }
    })
}


function addInventorySimulatorTooltip(event, machineItem, countRows){
    event.addAdvanced(machineItem, (item, advanced, text) => {
        if (!event.shift) {
            text.add(1, [Text.gray('Hold [Shift] for more info.')])
        } else {
            text.add(1, Text.gray('Simulates the player inventory and allows all machines and more to work'))
            text.add(2, Text.gray(`Inventory Size: 9x${countRows}`))
        }
    })
}


function addPackerTooltip(event, machineItem, data){
}


function addOreTooltip(event, oreItem, data, dimension){
    event.addAdvanced(oreItem, (item, advanced, text) => {
        if(!(item.nbt && item.nbt.display)){
            text.add(1, Text.gray('Generates between ' + data.min + ' and ' + data.max))
            if(dimension == "nether") text.add(2, Text.red('Only spawns in the Nether'))
            if(dimension == "end") text.add(2, Text.darkPurple('Only spawns in the End'))
        }
    })

    if(dimension != "nether" && dimension != "end"){
        event.addAdvanced(oreItem + "_deepslate", (item, advanced, text) => {
            if(!(item.nbt && item.nbt.display)){
                text.add(1, Text.gray('Generates between ' + data.min + ' and ' + data.max))
                if(dimension == "nether") text.add(2, Text.red('Only spawns in the Nether'))
                if(dimension == "end") text.add(2, Text.darkPurple('Only spawns in the End'))
            }
        })
    }
}


ItemEvents.tooltip(event => {
    //addOreTooltip(event, 'kubejs:aluminum_ore', {min: -32, max: 32})
    addOreTooltip(event, 'kubejs:antimony_ore', {min: -48, max: 0})
    //addOreTooltip(event, 'kubejs:cobalt_ore', {min: 5, max: 40}, "nether")
    addOreTooltip(event, 'kubejs:lead_ore', {min: -16, max: 48})
    addOreTooltip(event, 'kubejs:nickel_ore', {min: -32, max: 48})
    //addOreTooltip(event, 'kubejs:platinum_ore', {min: -64, max: -32})
    addOreTooltip(event, 'kubejs:tin_ore', {min: 32, max: 80})
    //addOreTooltip(event, 'kubejs:titanium_ore', {min: 0, max: 40}, "end")
    addOreTooltip(event, 'kubejs:zinc_ore', {min: -16, max: 48})

    addHopperTooltip(event, 'kubejs:inventory_hopper_tier_1', {speed: 1, countProcess: 1})
    addHopperTooltip(event, 'kubejs:inventory_hopper_left_facing_tier_1', {speed: 1, countProcess: 1})
    addHopperTooltip(event, 'kubejs:inventory_upper_tier_1', {speed: 1, countProcess: 1})
    addHopperTooltip(event, 'kubejs:inventory_hopper_right_facing_tier_1', {speed: 1, countProcess: 1})

    addHopperTooltip(event, 'kubejs:inventory_hopper_tier_2', {speed: 1.33, countProcess: 3})
    addHopperTooltip(event, 'kubejs:inventory_hopper_left_facing_tier_2', {speed: 1.33, countProcess: 3})
    addHopperTooltip(event, 'kubejs:inventory_upper_tier_2', {speed: 1.33, countProcess: 3})
    addHopperTooltip(event, 'kubejs:inventory_hopper_right_facing_tier_2', {speed: 1.33, countProcess: 3})

    addHopperTooltip(event, 'kubejs:inventory_hopper_tier_3', {speed: 2, countProcess: 10})
    addHopperTooltip(event, 'kubejs:inventory_hopper_left_facing_tier_3', {speed: 2, countProcess: 10})
    addHopperTooltip(event, 'kubejs:inventory_upper_tier_3', {speed: 2, countProcess: 10})
    addHopperTooltip(event, 'kubejs:inventory_hopper_right_facing_tier_3', {speed: 2, countProcess: 10})

    addPusherTooltip(event, 'kubejs:inventory_pusher_tier_1', {speed: 1, countProcess: 1})
    addPusherTooltip(event, 'kubejs:inventory_pusher_tier_2', {speed: 1.33, countProcess: 3})
    addPusherTooltip(event, 'kubejs:inventory_pusher_tier_3', {speed: 2, countProcess: 10})

    addPullerTooltip(event, 'kubejs:inventory_puller_tier_1', {speed: 1, countProcess: 1})
    addPullerTooltip(event, 'kubejs:inventory_puller_tier_2', {speed: 1.33, countProcess: 3})
    addPullerTooltip(event, 'kubejs:inventory_puller_tier_3', {speed: 2, countProcess: 10})

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

    addRecipeIndexedMachineTooltip(event, 'kubejs:inventory_packer_tier_1', 'packer', {speed: 1, countProcess: 1})
    addRecipeIndexedMachineTooltip(event, 'kubejs:inventory_packer_tier_2', 'packer', {speed: 1.66, countProcess: 3})
    addRecipeIndexedMachineTooltip(event, 'kubejs:inventory_packer_tier_3', 'packer', {speed: 5, countProcess: 6})
    addRecipeIndexedMachineTooltip(event, 'kubejs:inventory_packer_tier_4', 'packer', {speed: 20, countProcess: 10})

    addSimpleMachineTooltip(event, 'kubejs:inventory_unpacker_tier_1', 'unpacker', {speed: 1, countProcess: 1})
    addSimpleMachineTooltip(event, 'kubejs:inventory_unpacker_tier_2', 'unpacker', {speed: 1.66, countProcess: 3})
    addSimpleMachineTooltip(event, 'kubejs:inventory_unpacker_tier_3', 'unpacker', {speed: 5, countProcess: 6})
    addSimpleMachineTooltip(event, 'kubejs:inventory_unpacker_tier_4', 'unpacker', {speed: 20, countProcess: 10})

    addSimpleMachineTooltip(event, 'kubejs:inventory_wiremill_tier_1', 'wiremill', {speed: 1, countProcess: 2})
    addSimpleMachineTooltip(event, 'kubejs:inventory_wiremill_tier_2', 'wiremill', {speed: 2.5, countProcess: 5})
    addSimpleMachineTooltip(event, 'kubejs:inventory_wiremill_tier_3', 'wiremill', {speed: 10, countProcess: 10})

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

    addSimpleMachineTooltip(event, 'kubejs:inventory_quarry_tier_1', 'quarry', {speed: 1, countProcess: 2})
    addSimpleMachineTooltip(event, 'kubejs:inventory_quarry_tier_2', 'quarry', {speed: 2.5, countProcess: 5})
    addSimpleMachineTooltip(event, 'kubejs:inventory_quarry_tier_3', 'quarry', {speed: 5, countProcess: 10})

    addAssemblerTooltip(event, 'kubejs:inventory_assembler_tier_1', {speed: 1, countProcess: 2})
    addAssemblerTooltip(event, 'kubejs:inventory_assembler_tier_2', {speed: 2.5, countProcess: 5})
    addAssemblerTooltip(event, 'kubejs:inventory_assembler_tier_3', {speed: 10, countProcess: 10})

    addInventorySimulatorTooltip(event, 'kubejs:inventory_simulator_tier_1', 3)
    addInventorySimulatorTooltip(event, 'kubejs:inventory_simulator_tier_2', 6)
})