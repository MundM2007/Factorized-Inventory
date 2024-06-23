// drills
addAssemblerRecipe("kubejs:copper_drill_head", ["2x kubejs:copper_curved_plate", "2x kubejs:copper_rod", "kubejs:copper_gear", "kubejs:copper_plate"])
addAssemblerRecipe("kubejs:bronze_drill_head", ["2x kubejs:bronze_curved_plate", "2x kubejs:bronze_rod", "kubejs:bronze_gear", "kubejs:bronze_plate"])
addAssemblerRecipe("kubejs:steel_drill_head", ["2x kubejs:steel_curved_plate", "2x kubejs:steel_rod", "kubejs:steel_gear", "kubejs:steel_plate"])
addAssemblerRecipe("kubejs:gold_drill_head", ["2x kubejs:gold_curved_plate", "2x kubejs:gold_rod", "kubejs:gold_gear", "kubejs:gold_plate"])

addAssemblerRecipe("4x kubejs:copper_drill", ["kubejs:copper_drill_head", "2x kubejs:iron_gear", "2x kubejs:iron_rod"])
addAssemblerRecipe("4x kubejs:bronze_drill", ["kubejs:bronze_drill_head", "2x kubejs:iron_gear", "2x kubejs:iron_rod"])
addAssemblerRecipe("4x kubejs:steel_drill", ["kubejs:steel_drill_head", "2x kubejs:iron_gear", "2x kubejs:analog_circuit", "kubejs:motor"])
addAssemblerRecipe("4x kubejs:gold_drill", ["kubejs:gold_drill_head", "2x kubejs:iron_gear", "2x kubejs:analog_circuit", "kubejs:motor"])

// components
addAssemblerRecipe("kubejs:capacitor", ["2x kubejs:gold_plate", "2x kubejs:copper_wire", "kubejs:battery_alloy_plate"])
addAssemblerRecipe("kubejs:resistor", ["minecraft:brick", "6x kubejs:copper_wire"])
addAssemblerRecipe("kubejs:inductor", ["kubejs:steel_rod", "8x kubejs:copper_wire"])
addAssemblerRecipe("kubejs:analog_circuit", ["kubejs:lapis_lazuli_plate", "2x kubejs:copper_wire", "2x kubejs:capacitor", "2x kubejs:resistor", "kubejs:inductor"])
addAssemblerRecipe("kubejs:motor", ["4x kubejs:copper_wire", "2x kubejs:steel_curved_plate", "kubejs:steel_gear", "kubejs:steel_rod"])

// gears
addAssemblerRecipe("kubejs:brass_gear", ["4x kubejs:brass_plate", "kubejs:brass_ring"])
addAssemblerRecipe("kubejs:bronze_gear", ["4x kubejs:bronze_plate", "kubejs:bronze_ring"])
addAssemblerRecipe("kubejs:copper_gear", ["4x kubejs:copper_plate", "kubejs:copper_ring"])
addAssemblerRecipe("kubejs:diamond_gear", ["4x kubejs:diamond_plate", "kubejs:diamond_ring"])
addAssemblerRecipe("kubejs:emerald_gear", ["4x kubejs:emerald_plate", "kubejs:emerald_ring"])
addAssemblerRecipe("kubejs:gold_gear", ["4x kubejs:gold_plate", "kubejs:gold_ring"])
addAssemblerRecipe("kubejs:invar_gear", ["4x kubejs:invar_plate", "kubejs:invar_ring"])
addAssemblerRecipe("kubejs:iron_gear", ["4x kubejs:iron_plate", "kubejs:iron_ring"])
addAssemblerRecipe("kubejs:lapis_lazuli_gear", ["4x kubejs:lapis_lazuli_plate", "kubejs:lapis_lazuli_ring"])
addAssemblerRecipe("kubejs:lead_gear", ["4x kubejs:lead_plate", "kubejs:lead_ring"])
addAssemblerRecipe("kubejs:nickel_gear", ["4x kubejs:nickel_plate", "kubejs:nickel_ring"])
addAssemblerRecipe("kubejs:steel_gear", ["4x kubejs:steel_plate", "kubejs:steel_ring"])
addAssemblerRecipe("kubejs:tin_gear", ["4x kubejs:tin_plate", "kubejs:tin_ring"])
addAssemblerRecipe("kubejs:zinc_gear", ["4x kubejs:zinc_plate", "kubejs:zinc_ring"])

// rotors
addAssemblerRecipe("kubejs:brass_rotor", ["4x kubejs:brass_curved_plate", "kubejs:brass_rod", "kubejs:brass_ring"])
addAssemblerRecipe("kubejs:bronze_rotor", ["4x kubejs:bronze_curved_plate", "kubejs:bronze_rod", "kubejs:bronze_ring"])
addAssemblerRecipe("kubejs:copper_rotor", ["4x kubejs:copper_curved_plate", "kubejs:copper_rod", "kubejs:copper_ring"])
addAssemblerRecipe("kubejs:diamond_rotor", ["4x kubejs:diamond_curved_plate", "kubejs:diamond_rod", "kubejs:diamond_ring"])
addAssemblerRecipe("kubejs:emerald_rotor", ["4x kubejs:emerald_curved_plate", "kubejs:emerald_rod", "kubejs:emerald_ring"])
addAssemblerRecipe("kubejs:gold_rotor", ["4x kubejs:gold_curved_plate", "kubejs:gold_rod", "kubejs:gold_ring"])
addAssemblerRecipe("kubejs:invar_rotor", ["4x kubejs:invar_curved_plate", "kubejs:invar_rod", "kubejs:invar_ring"])
addAssemblerRecipe("kubejs:iron_rotor", ["4x kubejs:iron_curved_plate", "kubejs:iron_rod", "kubejs:iron_ring"])
addAssemblerRecipe("kubejs:lapis_lazuli_rotor", ["4x kubejs:lapis_lazuli_curved_plate", "kubejs:lapis_lazuli_rod", "kubejs:lapis_lazuli_ring"])
addAssemblerRecipe("kubejs:lead_rotor", ["4x kubejs:lead_curved_plate", "kubejs:lead_rod", "kubejs:lead_ring"])
addAssemblerRecipe("kubejs:nickel_rotor", ["4x kubejs:nickel_curved_plate", "kubejs:nickel_rod", "kubejs:nickel_ring"])
addAssemblerRecipe("kubejs:steel_rotor", ["4x kubejs:steel_curved_plate", "kubejs:steel_rod", "kubejs:steel_ring"])
addAssemblerRecipe("kubejs:tin_rotor", ["4x kubejs:tin_curved_plate", "kubejs:tin_rod", "kubejs:tin_ring"])
addAssemblerRecipe("kubejs:zinc_rotor", ["4x kubejs:zinc_curved_plate", "kubejs:zinc_rod", "kubejs:zinc_ring"])

// inventory hopper
addAssemblerRecipe('kubejs:inventory_hopper_tier_1', ['4x minecraft:iron_ingot', 'kubejs:iron_plate'])
addAssemblerRecipe('kubejs:inventory_hopper_tier_2', ['kubejs:inventory_hopper_tier_1', '4x minecraft:gold_ingot', 'kubejs:gold_gear'])
addAssemblerRecipe('kubejs:inventory_hopper_tier_3', ['kubejs:inventory_hopper_tier_2', '4x minecraft:diamond', 'kubejs:diamond_rotor'])
// casings
addAssemblerRecipe('kubejs:bronze_machine_casing', ['4x kubejs:bronze_plate', 'kubejs:bronze_gear', '3x minecraft:redstone'])
addAssemblerRecipe('kubejs:steel_machine_casing', ['4x kubejs:steel_plate', 'kubejs:steel_gear', '2x minecraft:redstone'])

// storage drawers
let drawers = []
for(let i = 0; i < 8; i++){
    let woodType = planks[i].split(":")[1].replace("_planks", "")
    drawers.push(`storagedrawers:${woodType}_full_drawers_1`)
    drawers.push(`storagedrawers:${woodType}_full_drawers_2`)
    drawers.push(`storagedrawers:${woodType}_full_drawers_4`)
    drawers.push(`storagedrawers:${woodType}_half_drawers_1`)
    drawers.push(`storagedrawers:${woodType}_half_drawers_2`)
    drawers.push(`storagedrawers:${woodType}_half_drawers_4`)
}
for(let i = 0; i < drawers.length; i++){
    addAssemblerRecipe("storagedrawers:compacting_drawers_3", [drawers[i], "4x minecraft:stone", "2x minecraft:piston", "kubejs:iron_rotor"], 200, 1, [drawers, "4x minecraft:stone", "2x minecraft:piston", "kubejs:iron_rotor"])
    addAssemblerRecipe("storagedrawers:controller", [drawers[i], "4x kubejs:steel_plate", "2x minecraft:comparator", "minecraft:diamond", "kubejs:invar_gear"], 200, 1, [drawers, "4x kubejs:steel_plate", "2x minecraft:comparator", "minecraft:diamond", "kubejs:invar_gear"])
    addAssemblerRecipe("storagedrawers:controller_slave", [drawers[i], "4x kubejs:steel_plate", "2x minecraft:comparator", "minecraft:gold_ingot", "kubejs:invar_gear"], 200, 1, [drawers, "4x kubejs:steel_plate", "2x minecraft:comparator", "minecraft:gold_ingot", "kubejs:invar_gear"])
    addAssemblerRecipe("4x storagedrawers:upgrade_template", [drawers[i], "4x minecraft:stick"], 100, 1, [drawers, "4x minecraft:stick"])
}

addAssemblerRecipe("2x storagedrawers:obsidian_storage_upgrade", ["2x storagedrawers:upgrade_template", "minecraft:obsidian", "2x minecraft:coal", "2x minecraft:stick"], 200, 1)
addAssemblerRecipe("storagedrawers:iron_storage_upgrade", ["2x storagedrawers:obsidian_storage_upgrade", "8x minecraft:iron_nugget", "3x minecraft:stick"], 200, 1)
addAssemblerRecipe("storagedrawers:gold_storage_upgrade", ["2x storagedrawers:iron_storage_upgrade", "minecraft:gold_ingot", "3x minecraft:stick"], 200, 1)
addAssemblerRecipe("storagedrawers:diamond_storage_upgrade", ["2x storagedrawers:gold_storage_upgrade", "minecraft:diamond", "3x minecraft:stick"], 200, 1)
addAssemblerRecipe("storagedrawers:emerald_storage_upgrade", ["2x storagedrawers:diamond_storage_upgrade", "minecraft:emerald_block", "3x minecraft:stick"], 200, 1)
addAssemblerRecipe("storagedrawers:one_stack_upgrade" , ["storagedrawers:upgrade_template", "2x minecraft:flint", "3x minecraft:stick"], 100, 1)
addAssemblerRecipe("storagedrawers:void_upgrade", ["storagedrawers:upgrade_template", "4x minecraft:obsidian"], 100, 1)
addAssemblerRecipe("storagedrawers:redstone_upgrade", ["storagedrawers:upgrade_template", "3x minecraft:redstone", "2x minecraft:stick"], 100, 1)
addAssemblerRecipe("storagedrawers:min_redstone_upgrade", ["storagedrawers:redstone_upgrade", "2x minecraft:stick"], 100, 1)
addAssemblerRecipe("storagedrawers:max_redstone_upgrade", ["storagedrawers:min_redstone_upgrade"], 100, 1)
addAssemblerRecipe("storagedrawers:illumination_upgrade", ["storagedrawers:upgrade_template", "3x minecraft:glowstone", "2x minecraft:stick"], 100, 1)
addAssemblerRecipe("storagedrawers:fill_level_upgrade", ["storagedrawers:upgrade_template", "minecraft:repeater"], 100, 1)

// pipez
addAssemblerRecipe("32x pipez:item_pipe", ["4x kubejs:brass_plate", "2x minecraft:dropper", "minecraft:hopper", "minecraft:redstone_block"], 200, 1)
addAssemblerRecipe("pipez:basic_upgrade", ["4x minecraft:iron_ingot", "minecraft:redstone"], 100, 1)
addAssemblerRecipe("pipez:improved_upgrade", ["pipez:basic_upgrade", "4x minecraft:gold_ingot", "4x minecraft:redstone"], 100, 1)
addAssemblerRecipe("pipez:advanced_upgrade", ["pipez:improved_upgrade", "4x minecraft:diamond", "4x minecraft:redstone_block"], 100, 1)
addAssemblerRecipe("pipez:ultimate_upgrade", ["pipez:advanced_upgrade", "minecraft:netherite_ingot", "minecraft:redstone_block"], 100, 1)


// torch
addAssemblerRecipe('5x minecraft:torch', ['minecraft:coal', 'minecraft:stick'], 100, 1, ["#minecraft:coals", 'minecraft:stick'])
addAssemblerRecipe('5x minecraft:torch', ['minecraft:charcoal', 'minecraft:stick'], 100, 1, ["#minecraft:coals", 'minecraft:stick'])
for(let i = 0; i < soul_fire_base_blocks.length; i++){
    addAssemblerRecipe('5x minecraft:soul_torch', ['minecraft:coal', soul_fire_base_blocks[i]], 100, 1, ["#minecraft:coals", soul_fire_base_blocks])
    addAssemblerRecipe('5x minecraft:soul_torch', ['minecraft:charcoal', soul_fire_base_blocks[i]], 100, 1, ["#minecraft:coals", soul_fire_base_blocks])
}
addAssemblerRecipe('minecraft:redstone_torch', ['minecraft:redstone', 'minecraft:stick'], 100)
// lantern
addAssemblerRecipe('minecraft:lantern', ['6x minecraft:iron_nugget', 'minecraft:torch'], 100)
addAssemblerRecipe('minecraft:soul_lantern', ['6x minecraft:iron_nugget', 'minecraft:soul_torch'], 100)
// end rod
addAssemblerRecipe('4x minecraft:end_rod', ['minecraft:blaze_rod', 'minecraft:poppy'], 100)
// lamp
addAssemblerRecipe('minecraft:redstone_lamp', ['minecraft:glowstone', '3x minecraft:redstone'], 200)
// beehive / bookshelf / lectern / workstations / daylight detector / piston
addAssemblerRecipe('minecraft:stonecutter', ['minecraft:iron_ingot', '3x minecraft:stone'], 200)
addAssemblerRecipe('minecraft:blast_furnace', ['5x minecraft:iron_ingot', '3x minecraft:smooth_stone', 'minecraft:furnace'], 200)
addAssemblerRecipe('minecraft:anvil', ['3x minecraft:iron_block', '4x minecraft:iron_ingot'], 200)
addAssemblerRecipe('minecraft:enchanting_table', ['4x minecraft:obsidian', '2x minecraft:diamond', 'minecraft:book'], 200)
for(let i = 0; i < stone_tool_materials.length; i++){
    addAssemblerRecipe('minecraft:brewing_stand', [stone_tool_materials3[i], 'minecraft:blaze_rod'], 200, 1, [stone_tool_materials3, 'minecraft:blaze_rod'])
}
addAssemblerRecipe('minecraft:cauldron', ['6x minecraft:iron_ingot', 'minecraft:iron_nugget'], 200)
for(let i = 0; i < planks.length; i++){
    addAssemblerRecipe('minecraft:beehive', [planks6[i], '3x minecraft:honeycomb'], 200, 1, [planks6, '3x minecraft:honeycomb'])
    addAssemblerRecipe('minecraft:bookshelf', [planks6[i], '3x minecraft:book'], 200, 1, [planks6, '3x minecraft:book'])
    addAssemblerRecipe('minecraft:lectern', [slabs3[i], 'minecraft:bookshelf'], 200, 1, [slabs3, 'minecraft:bookshelf'])
    addAssemblerRecipe('minecraft:daylight_detector', ['3x minecraft:glass', '3x minecraft:quartz', slabs3[i]], 200, 1, ['3x minecraft:glass', '3x minecraft:quartz', slabs3])
    addAssemblerRecipe('minecraft:piston', [planks2[i], '3x minecraft:cobblestone', 'minecraft:iron_ingot', 'minecraft:redstone'], 200, 1, [planks2, '3x minecraft:cobblestone', 'minecraft:iron_ingot', 'minecraft:redstone'])

    addAssemblerRecipe('minecraft:cartography_table', [planks4[i], '2x minecraft:paper'], 200, 1, [planks4, '2x minecraft:paper'])
    addAssemblerRecipe('minecraft:fletching_table', [planks4[i], '2x minecraft:flint'], 200, 1, [planks4, '2x minecraft:flint'])
    addAssemblerRecipe('minecraft:smithing_table', [planks4[i], '2x minecraft:iron_ingot'], 200, 1, [planks4, '2x minecraft:iron_ingot'])
    addAssemblerRecipe('minecraft:grindstone', [planks2[i], 'minecraft:stone_slab'], 200, 1, [planks2, 'minecraft:stone_slab'])
    addAssemblerRecipe('minecraft:loom', [planks2[i], '2x minecraft:string'], 200, 1, [planks2, '2x minecraft:string'])
    addAssemblerRecipe('minecraft:jukebox', [planks6[i], 'minecraft:diamond'], 200, 1, [planks6, 'minecraft:diamond'])
}
// ladders
addAssemblerRecipe('3x minecraft:ladder', ['6x minecraft:stick'], 100)
// scaffolding
addAssemblerRecipe('6x minecraft:scaffolding', ['6x minecraft:bamboo', 'minecraft:string'], 100)
// armor stand
addAssemblerRecipe('minecraft:armor_stand', ['6x minecraft:stick', 'minecraft:smooth_stone_slab'], 100)
// item frames
addAssemblerRecipe('minecraft:item_frame', ['6x minecraft:stick', 'minecraft:leather'], 100)
addAssemblerRecipe('minecraft:glow_item_frame', ['minecraft:item_frame', 'minecraft:glow_ink_sac'], 100)
// paintings
let wools = colors.map(color => `minecraft:${color}_wool`)
for(let i = 0; i < 16; i++){
    addAssemblerRecipe(`minecraft:painting`, ['6x minecraft:stick', wools[i]], 100, 1, ['6x minecraft:stick', wools])
}
// ender chest
addAssemblerRecipe('minecraft:ender_chest', ['8x minecraft:obsidian', 'minecraft:ender_eye'], 100)
// respawn anchor
addAssemblerRecipe('minecraft:respawn_anchor', ['6x minecraft:crying_obsidian', '3x minecraft:glowstone'], 100)
// smoker + campfire
for(let i = 0; i < logs.length; i++){
    addAssemblerRecipe('minecraft:smoker', [logs4[i], 'minecraft:furnace'], 100, 1, [logs4, 'minecraft:furnace'])
    addAssemblerRecipe('minecraft:campfire', [logs3[i], 'minecraft:coal'], 100, 1, [logs3, '#minecraft:coals'])
    addAssemblerRecipe('minecraft:campfire', [logs3[i], 'minecraft:charcoal'], 100, 1, [logs3, '#minecraft:coals'])
    for(let j = 0; j < soul_fire_base_blocks.length; j++){
        addAssemblerRecipe('minecraft:soul_campfire', [logs3[i], soul_fire_base_blocks[j]], 100, 1, [logs3, soul_fire_base_blocks])
    }
}
// end crystals
addAssemblerRecipe('minecraft:end_crystal', ['6x minecraft:glass', 'minecraft:ender_eye', 'minecraft:ghast_tear'], 200)
// sea lantern
addAssemblerRecipe('minecraft:sea_lantern', ['5x minecraft:prismarine_crystals', '4x minecraft:prismarine_shard'], 100)   
// beacon
addAssemblerRecipe('minecraft:beacon', ['3x minecraft:obsidian', '3x minecraft:glass', 'minecraft:nether_star'], 200)
// conduit
addAssemblerRecipe('minecraft:conduit', ['6x minecraft:prismarine', 'minecraft:heart_of_the_sea'], 200)
// lodestone
addAssemblerRecipe('minecraft:lodestone', ['4x minecraft:chiseled_stone_bricks', 'minecraft:netherite_ingot'], 100)
// redstone repeater
addAssemblerRecipe('minecraft:repeater', ['3x minecraft:stone', '2x minecraft:redstone_torch', 'minecraft:redstone'], 200)
// redstone comparator
addAssemblerRecipe('minecraft:comparator', ['3x minecraft:stone', '3x minecraft:redstone_torch', 'minecraft:quartz'], 200)
// target
addAssemblerRecipe('minecraft:target', ['minecraft:hay_block', '4x minecraft:redstone'], 100)
// lever
addAssemblerRecipe('minecraft:lever', ['minecraft:stick', 'minecraft:cobblestone'], 100)
// calibrated sculk sensor
addAssemblerRecipe('minecraft:calibrated_sculk_sensor', ['minecraft:sculk_sensor', '3x minecraft:amethyst_shard'], 100)
// hopper
for(let i = 0; i < 2; i++){
    addAssemblerRecipe('minecraft:hopper', ['5x minecraft:iron_ingot', chests[i]], 100, 1, ['5x minecraft:iron_ingot', chests])
}
// observer
addAssemblerRecipe('minecraft:observer', ['6x minecraft:stone', '2x minecraft:redstone', 'minecraft:quartz'], 100)
// rails
addAssemblerRecipe('16x minecraft:rail', ['6x minecraft:iron_ingot', 'minecraft:stick'], 100)
addAssemblerRecipe('6x minecraft:powered_rail', ['6x minecraft:gold_ingot', 'minecraft:stick', 'minecraft:redstone'], 100)
addAssemblerRecipe('6x minecraft:detector_rail', ['6x minecraft:iron_ingot', 'minecraft:stone_pressure_plate', 'minecraft:redstone'], 100)
addAssemblerRecipe('6x minecraft:activator_rail', ['6x minecraft:iron_ingot', '2x minecraft:redstone_torch'], 100)
// fire charge
addAssemblerRecipe('3x minecraft:fire_charge', ['minecraft:coal', 'minecraft:blaze_powder', 'minecraft:gunpowder'], 100, 1, ['#minecraft:coals', 'minecraft:blaze_powder', 'minecraft:gunpowder'])
addAssemblerRecipe('3x minecraft:fire_charge', ['minecraft:charcoal', 'minecraft:blaze_powder', 'minecraft:gunpowder'], 100, 1, ['#minecraft:coals', 'minecraft:blaze_powder', 'minecraft:gunpowder'])
// spyglass
addAssemblerRecipe('minecraft:spyglass', ['2x minecraft:copper_ingot', 'minecraft:amethyst_shard'], 100)
// book and quill
addAssemblerRecipe('minecraft:writable_book', ['minecraft:book', 'minecraft:ink_sac', 'minecraft:feather'], 100)
// arrow
addAssemblerRecipe('6x minecraft:arrow', ['minecraft:flint', 'minecraft:stick', 'minecraft:feather'], 200)
// spectral arrow
addAssemblerRecipe('2x minecraft:spectral_arrow', ['minecraft:arrow', '3x minecraft:glowstone'], 200)
// cookie
addAssemblerRecipe('8x minecraft:cookie', ['2x minecraft:wheat', 'minecraft:cocoa_beans'], 200)
// pumpkin pie
addAssemblerRecipe('minecraft:pumpkin_pie', ['minecraft:pumpkin', 'minecraft:sugar', 'minecraft:egg'], 200)
// mushroom stew
addAssemblerRecipe('minecraft:mushroom_stew', ['minecraft:brown_mushroom', 'minecraft:red_mushroom', 'minecraft:bowl'], 200)
// beetroot soup
addAssemblerRecipe('minecraft:beetroot_soup', ['6x minecraft:beetroot', 'minecraft:bowl'], 200)
// rabbit stew
addAssemblerRecipe('minecraft:rabbit_stew', ['minecraft:cooked_rabbit', 'minecraft:carrot', 'minecraft:baked_potato', 'minecraft:brown_mushroom', 'minecraft:bowl'], 200)
addAssemblerRecipe('minecraft:rabbit_stew', ['minecraft:cooked_rabbit', 'minecraft:carrot', 'minecraft:baked_potato', 'minecraft:red_mushroom', 'minecraft:bowl'], 200)   
addAssemblerRecipe('minecraft:rabbit_stew', ['minecraft:cooked_rabbit', 'minecraft:carrot', 'minecraft:baked_potato', 'biomesoplenty:toadstool', 'minecraft:bowl'], 200)
// empty map
addAssemblerRecipe('minecraft:map', ['8x minecraft:paper', 'minecraft:compass'], 100)
// recovery compass
addAssemblerRecipe('minecraft:recovery_compass', ['minecraft:compass', '8x minecraft:echo_shard'], 100)
// book
addAssemblerRecipe('minecraft:book', ['3x minecraft:paper', 'minecraft:leather'], 100)
// lead
addAssemblerRecipe('2x minecraft:lead', ['3x minecraft:string', 'minecraft:slime_ball'], 100)