global.inventoryItems = {}

function registerInvItem(event, item, ticks, countProcess){
    global.inventoryItems[item] = {ticks: ticks, count: countProcess}
    return event.create(item).unstackable()
}

StartupEvents.registry('item', event => {
    registerInvItem(event, 'kubejs:inventory_hopper_tier_1', 20, 1).texture('kubejs:item/factinventory/inventory_hopper_tier_1').displayName("Tier 1 Inventory Hopper")
    registerInvItem(event, 'kubejs:inventory_hopper_left_facing_tier_1', 20, 1).texture('kubejs:item/factinventory/inventory_hopper_left_facing_tier_1').displayName("Tier 1 Left Facing Inventory Hopper")
    registerInvItem(event, 'kubejs:inventory_upper_tier_1', 20, 1).texture('kubejs:item/factinventory/inventory_upper_tier_1').displayName("Tier 1 Inventory Upper")
    registerInvItem(event, 'kubejs:inventory_hopper_right_facing_tier_1', 20, 1).texture('kubejs:item/factinventory/inventory_hopper_right_facing_tier_1').displayName("Tier 1 Right Facing Inventory Hopper")
    
    registerInvItem(event, 'kubejs:inventory_hopper_tier_2', 15, 3).texture('kubejs:item/factinventory/inventory_hopper_tier_2').displayName("Tier 2 Inventory Hopper")
    registerInvItem(event, 'kubejs:inventory_hopper_left_facing_tier_2', 15, 3).texture('kubejs:item/factinventory/inventory_hopper_left_facing_tier_2').displayName("Tier 2 Left Facing Inventory Hopper")
    registerInvItem(event, 'kubejs:inventory_upper_tier_2', 15, 3).texture('kubejs:item/factinventory/inventory_upper_tier_2').displayName("Tier 2 Inventory Upper")
    registerInvItem(event, 'kubejs:inventory_hopper_right_facing_tier_2', 15, 3).texture('kubejs:item/factinventory/inventory_hopper_right_facing_tier_2').displayName("Tier 2 Right Facing Inventory Hopper")
    
    registerInvItem(event, 'kubejs:inventory_hopper_tier_3', 10, 10).texture('kubejs:item/factinventory/inventory_hopper_tier_3').displayName("Tier 3 Inventory Hopper")
    registerInvItem(event, 'kubejs:inventory_hopper_left_facing_tier_3', 10, 10).texture('kubejs:item/factinventory/inventory_hopper_left_facing_tier_3').displayName("Tier 3 Left Facing Inventory Hopper")
    registerInvItem(event, 'kubejs:inventory_upper_tier_3', 10, 10).texture('kubejs:item/factinventory/inventory_upper_tier_3').displayName("Tier 3 Inventory Upper")
    registerInvItem(event, 'kubejs:inventory_hopper_right_facing_tier_3', 10, 10).texture('kubejs:item/factinventory/inventory_hopper_right_facing_tier_3').displayName("Tier 3 Right Facing Inventory Hopper")

    registerInvItem(event, 'kubejs:inventory_furnace_tier_1', 20, 1).displayName("Tier 1 Inventory Furnace")
    
    //registerInvItem(event, 'kubejs:inventory_compressor_tier_1', 20, 1).displayName("Tier 1 Inventory Compressor")

    //registerInvItem(event, 'kubejs:inventory_crusher_tier_1', 20, 1).displayName("Tier 1 Inventory Crusher")

    
})