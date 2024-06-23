ServerEvents.recipes(event => {
    event.remove({type: "minecraft:blasting"})
    event.remove({type: "minecraft:smelting"})
    event.remove({type: "minecraft:smoking"})
    event.remove({type: "minecraft:campfire_cooking"})

    event.remove({mod: "itemfilters"})

    event.remove({id: 'storagedrawers:compacting_drawers_3'})
    event.remove({id: 'storagedrawers:controller'})
    event.remove({id: 'storagedrawers:controller_slave'})

    event.remove({id: 'storagedrawers:obsidian_storage_upgrade'})
    event.remove({id: 'storagedrawers:iron_storage_upgrade'})
    event.remove({id: 'storagedrawers:gold_storage_upgrade'})
    event.remove({id: 'storagedrawers:diamond_storage_upgrade'})
    event.remove({id: 'storagedrawers:emerald_storage_upgrade'})

    event.remove({id: 'pipez:item_pipe'})
    event.remove({id: 'pipez:fluid_pipe'})
    event.remove({id: 'pipez:energy_pipe'})
    event.remove({id: 'pipez:gas_pipe'})
    event.remove({id: 'pipez:universal_pipe'})
    event.remove({id: 'pipez:ultimate_upgrade'})  
})