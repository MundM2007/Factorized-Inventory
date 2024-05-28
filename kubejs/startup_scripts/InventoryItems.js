global.inventoryItems = {}

function registerInvItem(event, item, ticks, countProcess, ticksPerTick, fuelPerTick){
    if(ticksPerTick){
        if(fuelPerTick) global.inventoryItems[item] = {ticks: ticks, count: countProcess, ticksPerTick: ticksPerTick, fuelPerTick: fuelPerTick}
        else global.inventoryItems[item] = {ticks: ticks, count: countProcess, ticksPerTick: ticksPerTick}
    }else global.inventoryItems[item] = {ticks: ticks, count: countProcess}
    return event.create(item).unstackable()
}

StartupEvents.registry('item', event => {
    registerInvItem(event, 'kubejs:inventory_hopper_tier_1', 20, 1).displayName("Tier 1 Inventory Hopper").texture('kubejs:item/factinventory/inventory_hopper_tier_1')
    registerInvItem(event, 'kubejs:inventory_hopper_left_facing_tier_1', 20, 1).displayName("Tier 1 Left Facing Inventory Hopper").texture('kubejs:item/factinventory/inventory_hopper_left_facing_tier_1')
    registerInvItem(event, 'kubejs:inventory_upper_tier_1', 20, 1).displayName("Tier 1 Inventory Upper").texture('kubejs:item/factinventory/inventory_upper_tier_1')
    registerInvItem(event, 'kubejs:inventory_hopper_right_facing_tier_1', 20, 1).displayName("Tier 1 Right Facing Inventory Hopper").texture('kubejs:item/factinventory/inventory_hopper_right_facing_tier_1')
    
    registerInvItem(event, 'kubejs:inventory_hopper_tier_2', 15, 3).displayName("Tier 2 Inventory Hopper").texture('kubejs:item/factinventory/inventory_hopper_tier_2')
    registerInvItem(event, 'kubejs:inventory_hopper_left_facing_tier_2', 15, 3).displayName("Tier 2 Left Facing Inventory Hopper").texture('kubejs:item/factinventory/inventory_hopper_left_facing_tier_2')
    registerInvItem(event, 'kubejs:inventory_upper_tier_2', 15, 3).displayName("Tier 2 Inventory Upper").texture('kubejs:item/factinventory/inventory_upper_tier_2')
    registerInvItem(event, 'kubejs:inventory_hopper_right_facing_tier_2', 15, 3).displayName("Tier 2 Right Facing Inventory Hopper").texture('kubejs:item/factinventory/inventory_hopper_right_facing_tier_2')
    
    registerInvItem(event, 'kubejs:inventory_hopper_tier_3', 10, 10).displayName("Tier 3 Inventory Hopper").texture('kubejs:item/factinventory/inventory_hopper_tier_3')
    registerInvItem(event, 'kubejs:inventory_hopper_left_facing_tier_3', 10, 10).displayName("Tier 3 Left Facing Inventory Hopper").texture('kubejs:item/factinventory/inventory_hopper_left_facing_tier_3')
    registerInvItem(event, 'kubejs:inventory_upper_tier_3', 10, 10).displayName("Tier 3 Inventory Upper").texture('kubejs:item/factinventory/inventory_upper_tier_3')
    registerInvItem(event, 'kubejs:inventory_hopper_right_facing_tier_3', 10, 10).displayName("Tier 3 Right Facing Inventory Hopper").texture('kubejs:item/factinventory/inventory_hopper_right_facing_tier_3')

    registerInvItem(event, 'kubejs:inventory_furnace_tier_1', 20, 1, 20, 20).displayName("Tier 1 Inventory Furnace").parentModel('kubejs:item/mi/furnace/tier_1')
    registerInvItem(event, 'kubejs:inventory_furnace_tier_2', 20, 3, 33.34, 50).displayName("Tier 2 Inventory Furnace").parentModel('kubejs:item/mi/furnace/tier_2')
    registerInvItem(event, 'kubejs:inventory_furnace_tier_3', 20, 6, 100, 150).displayName("Tier 3 Inventory Furnace").parentModel('kubejs:item/mi/furnace/tier_3')
    registerInvItem(event, 'kubejs:inventory_furnace_tier_4', 10, 10, 200, 500).displayName("Tier 4 Inventory Furnace").parentModel('kubejs:item/mi/furnace/tier_4')

    registerInvItem(event, 'kubejs:inventory_macerator_tier_1', 20, 1, 20, 20).displayName("Tier 1 Inventory Macerator").parentModel('kubejs:item/mi/macerator/tier_1')
    registerInvItem(event, 'kubejs:inventory_macerator_tier_2', 20, 3, 33.34, 50).displayName("Tier 2 Inventory Macerator").parentModel('kubejs:item/mi/macerator/tier_2')
    registerInvItem(event, 'kubejs:inventory_macerator_tier_3', 20, 6, 100, 150).displayName("Tier 3 Inventory Macerator").parentModel('kubejs:item/mi/macerator/tier_3')
    registerInvItem(event, 'kubejs:inventory_macerator_tier_4', 10, 10, 200, 500).displayName("Tier 4 Inventory Macerator").parentModel('kubejs:item/mi/macerator/tier_4')

    registerInvItem(event, 'kubejs:inventory_compressor_tier_1', 20, 1, 20, 20).displayName("Tier 1 Inventory Compressor").parentModel('kubejs:item/mi/compressor/tier_1')
    registerInvItem(event, 'kubejs:inventory_compressor_tier_2', 20, 3, 33.34, 50).displayName("Tier 2 Inventory Compressor").parentModel('kubejs:item/mi/compressor/tier_2')
    registerInvItem(event, 'kubejs:inventory_compressor_tier_3', 20, 6, 100, 150).displayName("Tier 3 Inventory Compressor").parentModel('kubejs:item/mi/compressor/tier_3')
    registerInvItem(event, 'kubejs:inventory_compressor_tier_4', 10, 10, 200, 500).displayName("Tier 4 Inventory Compressor").parentModel('kubejs:item/mi/compressor/tier_4')

    registerInvItem(event, 'kubejs:inventory_cutting_machine_tier_1', 20, 1, 20, 20).displayName("Tier 1 Inventory Cutting Machine").parentModel('kubejs:item/mi/cutting_machine/tier_1')
    registerInvItem(event, 'kubejs:inventory_cutting_machine_tier_2', 20, 3, 33.34, 50).displayName("Tier 2 Inventory Cutting Machine").parentModel('kubejs:item/mi/cutting_machine/tier_2')
    registerInvItem(event, 'kubejs:inventory_cutting_machine_tier_3', 20, 6, 100, 150).displayName("Tier 3 Inventory Cutting Machine").parentModel('kubejs:item/mi/cutting_machine/tier_3')
    registerInvItem(event, 'kubejs:inventory_cutting_machine_tier_4', 10, 10, 500).displayName("Tier 4 Inventory Cutting Machine").parentModel('kubejs:item/mi/cutting_machine/tier_4')

    registerInvItem(event, 'kubejs:inventory_wiremill_tier_1', 20, 1, 20, 20).displayName("Tier 1 Inventory Wiremill").parentModel('kubejs:item/mi/wiremill/tier_1')
    registerInvItem(event, 'kubejs:inventory_wiremill_tier_2', 20, 4, 40, 80).displayName("Tier 2 Inventory Wiremill").parentModel('kubejs:item/mi/wiremill/tier_2')
    registerInvItem(event, 'kubejs:inventory_wiremill_tier_3', 10, 10, 100, 500).displayName("Tier 3 Inventory Wiremill").parentModel('kubejs:item/mi/wiremill/tier_3')

    registerInvItem(event, 'kubejs:inventory_polarizer_tier_1', 20, 1, 20, 100).displayName("Tier 1 Inventory Polarizer").parentModel('kubejs:item/mi/polarizer/tier_1')
    registerInvItem(event, 'kubejs:inventory_polarizer_tier_2', 20, 5, 40, 500).displayName("Tier 2 Inventory Polarizer").parentModel('kubejs:item/mi/polarizer/tier_2')
})