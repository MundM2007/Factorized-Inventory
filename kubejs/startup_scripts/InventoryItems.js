global.inventoryItems = {}

function registerInvItem(event, item, ticks, countProcess, ticksPerTick, fuelPerTick){
    if(ticksPerTick){
        if(fuelPerTick) global.inventoryItems[item] = {ticks: ticks, countProcess: countProcess, ticksPerTick: ticksPerTick, fuelPerTick: fuelPerTick}
        else global.inventoryItems[item] = {ticks: ticks, countProcess: countProcess, ticksPerTick: ticksPerTick}
    }else global.inventoryItems[item] = {ticks: ticks, countProcess: countProcess}
    return event.create(item).unstackable()
}

StartupEvents.registry('item', event => {
    let directions = ["up", "right", "down", "left"]
    let hopperNames = ["Inventory Upper", "Right Facing Inventory Hopper", "Inventory Hopper", "Left Facing Inventory Hopper"]
    let timeByTier = [20, 15, 10]
    let countProcessByTier = [1, 3, 10]
    for(let i = 1; i < 4; i++){
        registerInvItem(event, `kubejs:inventory_puller_tier_${i}`, timeByTier[i - 1], countProcessByTier[i - 1])
            .displayName(`Tier ${i} Inventory Puller`).texture(`kubejs:item/inventory_puller_tier_${i}`)
        registerInvItem(event, `kubejs:inventory_pusher_tier_${i}`, timeByTier[i - 1], countProcessByTier[i - 1])
            .displayName(`Tier ${i} Inventory Pusher`).texture(`kubejs:item/inventory_pusher_tier_${i}`)

        for(let j = 0; j < 4; j++){
            registerInvItem(event, `kubejs:inventory_hopper_${directions[j]}_facing_tier_${i}`, timeByTier[i - 1], countProcessByTier[i - 1])
                .displayName(`Tier ${i} ${hopperNames[j]}`).texture(`kubejs:item/factinventory/inventory_hopper_${directions[j]}_facing_tier_${i}`)
            registerInvItem(event, `kubejs:inventory_piston_${directions[j]}_facing_tier_${i}`, timeByTier[i - 1], countProcessByTier[i - 1])
                .displayName(`Tier ${i} ${Utils.toTitleCase(directions[j])} Facing Inventory Piston`).texture(`kubejs:item/pistons/inventory_piston_${directions[j]}_facing_tier_${i}`)
            registerInvItem(event, `kubejs:inventory_sticky_piston_${directions[j]}_facing_tier_${i}`, timeByTier[i - 1], countProcessByTier[i - 1])
                .displayName(`Tier ${i} ${Utils.toTitleCase(directions[j])} Facing Inventory Sticky Piston`).texture(`kubejs:item/pistons/inventory_sticky_piston_${directions[j]}_facing_tier_${i}`)
            registerInvItem(event, `kubejs:inventory_sorter_${directions[j]}_facing_tier_${i}`, timeByTier[i - 1], countProcessByTier[i - 1])
                .displayName(`Tier ${i} ${Utils.toTitleCase(directions[j])} Facing Inventory Sorter`).texture(`kubejs:item/factinventory/inventory_sorter_${directions[j]}_facing_tier_${i}`)
        }
    }

    registerInvItem(event, 'kubejs:inventory_furnace_tier_1', 20, 1, 20, 10).displayName("Tier 1 Inventory Furnace").modelJson({"parent": "item/generated", "textures": {"layer0": "kubejs:item/mi/furnace/tier_1"}, "overrides": [{"predicate": { "custom_model_data": 1}, "model": "kubejs:item/mi/furnace/tier_1_on"}]})
    registerInvItem(event, 'kubejs:inventory_furnace_tier_2', 20, 3, 33.34, 50).displayName("Tier 2 Inventory Furnace").modelJson({"parent": "item/generated", "textures": {"layer0": "kubejs:item/mi/furnace/tier_2"}, "overrides": [{"predicate": { "custom_model_data": 1}, "model": "kubejs:item/mi/furnace/tier_2_on"}]})
    registerInvItem(event, 'kubejs:inventory_furnace_tier_3', 20, 6, 100, 300).displayName("Tier 3 Inventory Furnace").modelJson({"parent": "item/generated", "textures": {"layer0": "kubejs:item/mi/furnace/tier_3"}, "overrides": [{"predicate": { "custom_model_data": 1}, "model": "kubejs:item/mi/furnace/tier_3_on"}]})
    registerInvItem(event, 'kubejs:inventory_furnace_tier_4', 10, 10, 200, 1000).displayName("Tier 4 Inventory Furnace").modelJson({"parent": "item/generated", "textures": {"layer0": "kubejs:item/mi/furnace/tier_4"}, "overrides": [{"predicate": { "custom_model_data": 1}, "model": "kubejs:item/mi/furnace/tier_4_on"}]})

    registerInvItem(event, 'kubejs:inventory_macerator_tier_1', 20, 1, 20, 10).displayName("Tier 1 Inventory Macerator").modelJson({"parent": "item/generated", "textures": {"layer0": "kubejs:item/mi/macerator/tier_1"}, "overrides": [{"predicate": { "custom_model_data": 1}, "model": "kubejs:item/mi/macerator/tier_1_on"}]})
    registerInvItem(event, 'kubejs:inventory_macerator_tier_2', 20, 3, 33.34, 50).displayName("Tier 2 Inventory Macerator").modelJson({"parent": "item/generated", "textures": {"layer0": "kubejs:item/mi/macerator/tier_2"}, "overrides": [{"predicate": { "custom_model_data": 1}, "model": "kubejs:item/mi/macerator/tier_2_on"}]})
    registerInvItem(event, 'kubejs:inventory_macerator_tier_3', 20, 6, 100, 300).displayName("Tier 3 Inventory Macerator").modelJson({"parent": "item/generated", "textures": {"layer0": "kubejs:item/mi/macerator/tier_3"}, "overrides": [{"predicate": { "custom_model_data": 1}, "model": "kubejs:item/mi/macerator/tier_3_on"}]})
    registerInvItem(event, 'kubejs:inventory_macerator_tier_4', 10, 10, 200, 1000).displayName("Tier 4 Inventory Macerator").modelJson({"parent": "item/generated", "textures": {"layer0": "kubejs:item/mi/macerator/tier_4"}, "overrides": [{"predicate": { "custom_model_data": 1}, "model": "kubejs:item/mi/macerator/tier_4_on"}]})

    registerInvItem(event, 'kubejs:inventory_compressor_tier_1', 20, 1, 20, 10).displayName("Tier 1 Inventory Compressor").modelJson({"parent": "item/generated", "textures": {"layer0": "kubejs:item/mi/compressor/tier_1"}, "overrides": [{"predicate": { "custom_model_data": 1}, "model": "kubejs:item/mi/compressor/tier_1_on"}]})
    registerInvItem(event, 'kubejs:inventory_compressor_tier_2', 20, 3, 33.34, 50).displayName("Tier 2 Inventory Compressor").modelJson({"parent": "item/generated", "textures": {"layer0": "kubejs:item/mi/compressor/tier_2"}, "overrides": [{"predicate": { "custom_model_data": 1}, "model": "kubejs:item/mi/compressor/tier_2_on"}]})
    registerInvItem(event, 'kubejs:inventory_compressor_tier_3', 20, 6, 100, 300).displayName("Tier 3 Inventory Compressor").modelJson({"parent": "item/generated", "textures": {"layer0": "kubejs:item/mi/compressor/tier_3"}, "overrides": [{"predicate": { "custom_model_data": 1}, "model": "kubejs:item/mi/compressor/tier_3_on"}]})
    registerInvItem(event, 'kubejs:inventory_compressor_tier_4', 10, 10, 200, 1000).displayName("Tier 4 Inventory Compressor").modelJson({"parent": "item/generated", "textures": {"layer0": "kubejs:item/mi/compressor/tier_4"}, "overrides": [{"predicate": { "custom_model_data": 1}, "model": "kubejs:item/mi/compressor/tier_4_on"}]})

    registerInvItem(event, 'kubejs:inventory_cutting_machine_tier_1', 20, 1, 20, 10).displayName("Tier 1 Inventory Cutting Machine").modelJson({"parent": "item/generated", "textures": {"layer0": "kubejs:item/mi/cutting_machine/tier_1"}, "overrides": [{"predicate": { "custom_model_data": 1}, "model": "kubejs:item/mi/cutting_machine/tier_1_on"}]})
    registerInvItem(event, 'kubejs:inventory_cutting_machine_tier_2', 20, 3, 33.34, 50).displayName("Tier 2 Inventory Cutting Machine").modelJson({"parent": "item/generated", "textures": {"layer0": "kubejs:item/mi/cutting_machine/tier_2"}, "overrides": [{"predicate": { "custom_model_data": 1}, "model": "kubejs:item/mi/cutting_machine/tier_2_on"}]})
    registerInvItem(event, 'kubejs:inventory_cutting_machine_tier_3', 20, 6, 100, 300).displayName("Tier 3 Inventory Cutting Machine").modelJson({"parent": "item/generated", "textures": {"layer0": "kubejs:item/mi/cutting_machine/tier_3"}, "overrides": [{"predicate": { "custom_model_data": 1}, "model": "kubejs:item/mi/cutting_machine/tier_3_on"}]})
    registerInvItem(event, 'kubejs:inventory_cutting_machine_tier_4', 10, 10, 200, 1000).displayName("Tier 4 Inventory Cutting Machine").modelJson({"parent": "item/generated", "textures": {"layer0": "kubejs:item/mi/cutting_machine/tier_4"}, "overrides": [{"predicate": { "custom_model_data": 1}, "model": "kubejs:item/mi/cutting_machine/tier_4_on"}]})

    registerInvItem(event, 'kubejs:inventory_packer_tier_1', 20, 1, 20, 10).displayName("Tier 1 Inventory Packer").modelJson({"parent": "item/generated", "textures": {"layer0": "kubejs:item/mi/packer/tier_1"}, "overrides": [{"predicate": { "custom_model_data": 1}, "model": "kubejs:item/mi/packer/tier_1_on"}]})
    registerInvItem(event, 'kubejs:inventory_packer_tier_2', 20, 3, 33.34, 50).displayName("Tier 2 Inventory Packer").modelJson({"parent": "item/generated", "textures": {"layer0": "kubejs:item/mi/packer/tier_2"}, "overrides": [{"predicate": { "custom_model_data": 1}, "model": "kubejs:item/mi/packer/tier_2_on"}]})
    registerInvItem(event, 'kubejs:inventory_packer_tier_3', 20, 6, 100, 300).displayName("Tier 3 Inventory Packer").modelJson({"parent": "item/generated", "textures": {"layer0": "kubejs:item/mi/packer/tier_3"}, "overrides": [{"predicate": { "custom_model_data": 1}, "model": "kubejs:item/mi/packer/tier_3_on"}]})
    registerInvItem(event, 'kubejs:inventory_packer_tier_4', 10, 10, 200, 1000).displayName("Tier 4 Inventory Packer").modelJson({"parent": "item/generated", "textures": {"layer0": "kubejs:item/mi/packer/tier_4"}, "overrides": [{"predicate": { "custom_model_data": 1}, "model": "kubejs:item/mi/packer/tier_4_on"}]})

    registerInvItem(event, 'kubejs:inventory_unpacker_tier_1', 20, 1, 20, 10).displayName("Tier 1 Inventory Unpacker").modelJson({"parent": "item/generated", "textures": {"layer0": "kubejs:item/mi/unpacker/tier_1"}, "overrides": [{"predicate": { "custom_model_data": 1}, "model": "kubejs:item/mi/unpacker/tier_1_on"}]})
    registerInvItem(event, 'kubejs:inventory_unpacker_tier_2', 20, 3, 33.34, 50).displayName("Tier 2 Inventory Unpacker").modelJson({"parent": "item/generated", "textures": {"layer0": "kubejs:item/mi/unpacker/tier_2"}, "overrides": [{"predicate": { "custom_model_data": 1}, "model": "kubejs:item/mi/unpacker/tier_2_on"}]})
    registerInvItem(event, 'kubejs:inventory_unpacker_tier_3', 20, 6, 100, 300).displayName("Tier 3 Inventory Unpacker").modelJson({"parent": "item/generated", "textures": {"layer0": "kubejs:item/mi/unpacker/tier_3"}, "overrides": [{"predicate": { "custom_model_data": 1}, "model": "kubejs:item/mi/unpacker/tier_3_on"}]})
    registerInvItem(event, 'kubejs:inventory_unpacker_tier_4', 10, 10, 200, 1000).displayName("Tier 4 Inventory Unpacker").modelJson({"parent": "item/generated", "textures": {"layer0": "kubejs:item/mi/unpacker/tier_4"}, "overrides": [{"predicate": { "custom_model_data": 1}, "model": "kubejs:item/mi/unpacker/tier_4_on"}]})

    registerInvItem(event, 'kubejs:inventory_wiremill_tier_1', 20, 2, 20, 40).displayName("Tier 1 Inventory Wiremill").modelJson({"parent": "item/generated", "textures": {"layer0": "kubejs:item/mi/wiremill/tier_1"}, "overrides": [{"predicate": { "custom_model_data": 1}, "model": "kubejs:item/mi/wiremill/tier_1_on"}]})
    registerInvItem(event, 'kubejs:inventory_wiremill_tier_2', 20, 5, 100, 250).displayName("Tier 2 Inventory Wiremill").modelJson({"parent": "item/generated", "textures": {"layer0": "kubejs:item/mi/wiremill/tier_2"}, "overrides": [{"predicate": { "custom_model_data": 1}, "model": "kubejs:item/mi/wiremill/tier_2_on"}]})
    registerInvItem(event, 'kubejs:inventory_wiremill_tier_3', 10, 10, 200, 1000).displayName("Tier 3 Inventory Wiremill").modelJson({"parent": "item/generated", "textures": {"layer0": "kubejs:item/mi/wiremill/tier_3"}, "overrides": [{"predicate": { "custom_model_data": 1}, "model": "kubejs:item/mi/wiremill/tier_3_on"}]})

    registerInvItem(event, 'kubejs:inventory_coke_oven_tier_1', 20, 1, 20, 5).displayName("Tier 1 Inventory Coke Oven").modelJson({"parent": "item/generated", "textures": {"layer0": "kubejs:item/mi/coke_oven/tier_1"}, "overrides": [{"predicate": { "custom_model_data": 1}, "model": "kubejs:item/mi/coke_oven/tier_1_on"}]})
    registerInvItem(event, 'kubejs:inventory_coke_oven_tier_2', 20, 3, 33.34, 25).displayName("Tier 2 Inventory Coke Oven").modelJson({"parent": "item/generated", "textures": {"layer0": "kubejs:item/mi/coke_oven/tier_2"}, "overrides": [{"predicate": { "custom_model_data": 1}, "model": "kubejs:item/mi/coke_oven/tier_2_on"}]})
    registerInvItem(event, 'kubejs:inventory_coke_oven_tier_3', 20, 6, 100, 150).displayName("Tier 3 Inventory Coke Oven").modelJson({"parent": "item/generated", "textures": {"layer0": "kubejs:item/mi/coke_oven/tier_3"}, "overrides": [{"predicate": { "custom_model_data": 1}, "model": "kubejs:item/mi/coke_oven/tier_3_on"}]})
    registerInvItem(event, 'kubejs:inventory_coke_oven_tier_4', 10, 10, 200, 500).displayName("Tier 4 Inventory Coke Oven").modelJson({"parent": "item/generated", "textures": {"layer0": "kubejs:item/mi/coke_oven/tier_4"}, "overrides": [{"predicate": { "custom_model_data": 1}, "model": "kubejs:item/mi/coke_oven/tier_4_on"}]})

    registerInvItem(event, 'kubejs:inventory_blast_furnace_tier_1', 20, 1, 20, 20).displayName("Tier 1 Inventory Blast Furnace").modelJson({"parent": "item/generated", "textures": {"layer0": "kubejs:item/mi/blast_furnace/tier_1"}, "overrides": [{"predicate": { "custom_model_data": 1}, "model": "kubejs:item/mi/blast_furnace/tier_1_on"}]})
    registerInvItem(event, 'kubejs:inventory_blast_furnace_tier_2', 20, 3, 33.34, 100).displayName("Tier 2 Inventory Blast Furnace").modelJson({"parent": "item/generated", "textures": {"layer0": "kubejs:item/mi/blast_furnace/tier_2"}, "overrides": [{"predicate": { "custom_model_data": 1}, "model": "kubejs:item/mi/blast_furnace/tier_2_on"}]})
    registerInvItem(event, 'kubejs:inventory_blast_furnace_tier_3', 20, 6, 100, 600).displayName("Tier 3 Inventory Blast Furnace").modelJson({"parent": "item/generated", "textures": {"layer0": "kubejs:item/mi/blast_furnace/tier_3"}, "overrides": [{"predicate": { "custom_model_data": 1}, "model": "kubejs:item/mi/blast_furnace/tier_3_on"}]})
    registerInvItem(event, 'kubejs:inventory_blast_furnace_tier_4', 10, 10, 200, 2000).displayName("Tier 4 Inventory Blast Furnace").modelJson({"parent": "item/generated", "textures": {"layer0": "kubejs:item/mi/blast_furnace/tier_4"}, "overrides": [{"predicate": { "custom_model_data": 1}, "model": "kubejs:item/mi/blast_furnace/tier_4_on"}]})

    registerInvItem(event, 'kubejs:inventory_mixer_tier_1', 20, 2, 20, 40).displayName("Tier 1 Inventory Mixer").modelJson({"parent": "item/generated", "textures": {"layer0": "kubejs:item/mi/mixer/tier_1"}, "overrides": [{"predicate": { "custom_model_data": 1}, "model": "kubejs:item/mi/mixer/tier_1_on"}]})
    registerInvItem(event, 'kubejs:inventory_mixer_tier_2', 20, 5, 100, 250).displayName("Tier 2 Inventory Mixer").modelJson({"parent": "item/generated", "textures": {"layer0": "kubejs:item/mi/mixer/tier_2"}, "overrides": [{"predicate": { "custom_model_data": 1}, "model": "kubejs:item/mi/mixer/tier_2_on"}]})
    registerInvItem(event, 'kubejs:inventory_mixer_tier_3', 10, 10, 200, 1000).displayName("Tier 3 Inventory Mixer").modelJson({"parent": "item/generated", "textures": {"layer0": "kubejs:item/mi/mixer/tier_3"}, "overrides": [{"predicate": { "custom_model_data": 1}, "model": "kubejs:item/mi/mixer/tier_3_on"}]})

    registerInvItem(event, 'kubejs:inventory_quarry_tier_1', 20, 2, 20, 40).displayName("Tier 1 Inventory Quarry").modelJson({"parent": "item/generated", "textures": {"layer0": "kubejs:item/mi/quarry/tier_1"}, "overrides": [{"predicate": { "custom_model_data": 1}, "model": "kubejs:item/mi/quarry/tier_1_on"}]})
    registerInvItem(event, 'kubejs:inventory_quarry_tier_2', 20, 5, 100, 250).displayName("Tier 2 Inventory Quarry").modelJson({"parent": "item/generated", "textures": {"layer0": "kubejs:item/mi/quarry/tier_2"}, "overrides": [{"predicate": { "custom_model_data": 1}, "model": "kubejs:item/mi/quarry/tier_2_on"}]})
    registerInvItem(event, 'kubejs:inventory_quarry_tier_3', 20, 10, 200, 1000).displayName("Tier 3 Inventory Quarry").modelJson({"parent": "item/generated", "textures": {"layer0": "kubejs:item/mi/quarry/tier_3"}, "overrides": [{"predicate": { "custom_model_data": 1}, "model": "kubejs:item/mi/quarry/tier_3_on"}]})

    registerInvItem(event, 'kubejs:inventory_assembler_tier_1', 20, 2, 20, 40).displayName("Tier 1 Inventory Assembler").modelJson({"parent": "item/generated", "textures": {"layer0": "kubejs:item/mi/assembler/tier_1"}, "overrides": [{"predicate": { "custom_model_data": 1}, "model": "kubejs:item/mi/assembler/tier_1_on"}]})
    registerInvItem(event, 'kubejs:inventory_assembler_tier_2', 20, 5, 100, 250).displayName("Tier 2 Inventory Assembler").modelJson({"parent": "item/generated", "textures": {"layer0": "kubejs:item/mi/assembler/tier_2"}, "overrides": [{"predicate": { "custom_model_data": 1}, "model": "kubejs:item/mi/assembler/tier_2_on"}]})
    registerInvItem(event, 'kubejs:inventory_assembler_tier_3', 20, 10, 200, 1000).displayName("Tier 3 Inventory Assembler").modelJson({"parent": "item/generated", "textures": {"layer0": "kubejs:item/mi/assembler/tier_3"}, "overrides": [{"predicate": { "custom_model_data": 1}, "model": "kubejs:item/mi/assembler/tier_3_on"}]})
})