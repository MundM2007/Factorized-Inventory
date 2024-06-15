function addCuttingMachineRecipes(material){
    // rod from plate
    addCuttingMachineRecipe(`3x kubejs:${material}_rod`, `kubejs:${material}_plate`)

    // bolt from rod
    addCuttingMachineRecipe(`2x kubejs:${material}_bolt`, `kubejs:${material}_rod`)
}


function addCuttingMachineRecipesWood(mod, material){
    // log/wood to stripped log/wood
    addCuttingMachineRecipe(`${mod}:stripped_${material}_log`, `${mod}:${material}_log`, 100, 1, "log_template")
    addCuttingMachineRecipe(`${mod}:stripped_${material}_wood`, `${mod}:${material}_wood`, 100, 1, "log_template")

    // (stripped) log/wood to planks
    addCuttingMachineRecipe(`8x ${mod}:${material}_planks`, `${mod}:${material}_log`, 100, 1, "block_template", `#${mod}:${material}_logs`)
    addCuttingMachineRecipe(`8x ${mod}:${material}_planks`, `${mod}:stripped_${material}_log`, 100, 1, "block_template", `#${mod}:${material}_logs`)
    addCuttingMachineRecipe(`8x ${mod}:${material}_planks`, `${mod}:${material}_wood`, 100, 1, "block_template", `#${mod}:${material}_logs`)
    addCuttingMachineRecipe(`8x ${mod}:${material}_planks`, `${mod}:stripped_${material}_wood`, 100, 1, "block_template", `#${mod}:${material}_logs`)

    // planks to slabs/stairs/fence/fence gate/door/trapdoor/presure plate/button/sign/stick
    addCuttingMachineRecipe(`${mod}:${material}_stairs`, `${mod}:${material}_planks`, 100, 1, "stairs_template")
    addCuttingMachineRecipe(`2x ${mod}:${material}_slab`, `${mod}:${material}_planks`, 100, 1, "slab_template")
    addCuttingMachineRecipe(`${mod}:${material}_fence`, `${mod}:${material}_planks`, 100, 1, "fence_template")
    addCuttingMachineRecipe(`${mod}:${material}_fence_gate`, `2x ${mod}:${material}_planks`, 100, 1, "fence_gate_template")
    addCuttingMachineRecipe(`${mod}:${material}_door`, `2x ${mod}:${material}_planks`, 100, 1, "door_template")
    addCuttingMachineRecipe(`${mod}:${material}_trapdoor`, `2x ${mod}:${material}_planks`, 100, 1, "trapdoor_template")
    addCuttingMachineRecipe(`${mod}:${material}_pressure_plate`, `${mod}:${material}_planks`, 100, 1, "pressure_plate_template")
    addCuttingMachineRecipe(`2x ${mod}:${material}_button`, `${mod}:${material}_planks`, 100, 1, "button_template")
    addCuttingMachineRecipe(`${mod}:${material}_sign`, `2x ${mod}:${material}_planks`, 100, 1, "sign_template")
    addCuttingMachineRecipe(`${mod}:${material}_boat`, `4x ${mod}:${material}_planks`, 100, 1, "boat_template")
    addCuttingMachineRecipe('minecraft:chest', `8x ${mod}:${material}_planks`, 100, 1, "block_template")
    addCuttingMachineRecipe('4x minecraft:stick', `${mod}:${material}_planks`, 100, 1, "air", planks)
}


//addCuttingMachineRecipes("aluminum")
addCuttingMachineRecipes("brass")
addCuttingMachineRecipes("bronze")
//addCuttingMachineRecipes("cobalt")
//addCuttingMachineRecipes("constantan")
addCuttingMachineRecipes("copper")
addCuttingMachineRecipes("diamond")
//addCuttingMachineRecipes("electrum")
addCuttingMachineRecipes("emerald")
addCuttingMachineRecipes("gold")
addCuttingMachineRecipes("invar")
//addCuttingMachineRecipes("iridium")
//addCuttingMachineRecipes("iridium_alloy")
addCuttingMachineRecipes("iron")
addCuttingMachineRecipes("lapis_lazuli")
addCuttingMachineRecipes("lead")
addCuttingMachineRecipes("nickel")
//addCuttingMachineRecipes("platinum")
addCuttingMachineRecipes("steel")
addCuttingMachineRecipes("tin")
//addCuttingMachineRecipes("titanium")
addCuttingMachineRecipes("zinc")


// wood
// vanilla
addCuttingMachineRecipesWood("minecraft", "oak")
addCuttingMachineRecipesWood("minecraft", "spruce")
addCuttingMachineRecipesWood("minecraft", "birch")
addCuttingMachineRecipesWood("minecraft", "jungle")
addCuttingMachineRecipesWood("minecraft", "acacia")
addCuttingMachineRecipesWood("minecraft", "dark_oak")
addCuttingMachineRecipesWood("minecraft", "mangrove")
addCuttingMachineRecipesWood("minecraft", "cherry")
// bamboo
addCuttingMachineRecipe("minecraft:stripped_bamboo_block", "minecraft:bamboo_block", 100, 1, "log_template")
addCuttingMachineRecipe("4x minecraft:bamboo_planks", "minecraft:bamboo_block", 100, 1, "block_template", "#minecraft:bamboo_blocks")
addCuttingMachineRecipe("4x minecraft:bamboo_planks", "minecraft:stripped_bamboo_block", 100, 1, "block_template", "#minecraft:bamboo_blocks")
addCuttingMachineRecipe("minecraft:bamboo_stairs", "minecraft:bamboo_planks", 100, 1, "stairs_template")
addCuttingMachineRecipe("minecraft:bamboo_mosaic_stairs", "minecraft:bamboo_mosaic", 100, 1, "stairs_template")
addCuttingMachineRecipe("2x minecraft:bamboo_slab", "minecraft:bamboo_planks", 100, 1, "slab_template")
addCuttingMachineRecipe("2x minecraft:bamboo_mosaic_slab", "minecraft:bamboo_mosaic", 100, 1, "slab_template")
addCuttingMachineRecipe("minecraft:bamboo_fence", "minecraft:bamboo_planks", 100, 1, "fence_template")
addCuttingMachineRecipe("minecraft:bamboo_fence_gate", "2x minecraft:bamboo_planks", 100, 1, "fence_gate_template")
addCuttingMachineRecipe("minecraft:bamboo_door", "2x minecraft:bamboo_planks", 100, 1, "door_template")
addCuttingMachineRecipe("minecraft:bamboo_trapdoor", "2x minecraft:bamboo_planks", 100, 1, "trapdoor_template")
addCuttingMachineRecipe("minecraft:bamboo_pressure_plate", "minecraft:bamboo_planks", 100, 1, "pressure_plate_template")
addCuttingMachineRecipe("2x minecraft:bamboo_button", "minecraft:bamboo_planks", 100, 1, "button_template")
addCuttingMachineRecipe("minecraft:bamboo_sign", "2x minecraft:bamboo_planks", 100, 1, "sign_template")
addCuttingMachineRecipe("minecraft:bamboo_raft", "4x minecraft:bamboo_planks", 100, 1, "boat_template")
addCuttingMachineRecipe("4x minecraft:stick", "minecraft:bamboo_planks", 100, 1, "air", planks)
// crimson
addCuttingMachineRecipe("minecraft:stripped_crimson_stem", "minecraft:crimson_stem", 100, 1, "log_template")
addCuttingMachineRecipe("minecraft:stripped_crimson_hyphae", "minecraft:crimson_hyphae", 100, 1, "log_template")
addCuttingMachineRecipe("4x minecraft:crimson_planks", "minecraft:crimson_stem", 100, 1, "block_template", "#minecraft:crimson_stems")
addCuttingMachineRecipe("4x minecraft:crimson_planks", "minecraft:stripped_crimson_stem", 100, 1, "block_template", "#minecraft:crimson_stems")
addCuttingMachineRecipe("4x minecraft:crimson_planks", "minecraft:crimson_hyphae", 100, 1, "block_template", "#minecraft:crimson_stems")
addCuttingMachineRecipe("4x minecraft:crimson_planks", "minecraft:stripped_crimson_hyphae", 100, 1, "block_template", "#minecraft:crimson_stems")
addCuttingMachineRecipe("minecraft:crimson_stairs", "minecraft:crimson_planks", 100, 1, "stairs_template")
addCuttingMachineRecipe("2x minecraft:crimson_slab", "minecraft:crimson_planks", 100, 1, "slab_template")
addCuttingMachineRecipe("minecraft:crimson_fence", "minecraft:crimson_planks", 100, 1, "fence_template")
addCuttingMachineRecipe("minecraft:crimson_fence_gate", "2x minecraft:crimson_planks", 100, 1, "fence_gate_template")
addCuttingMachineRecipe("minecraft:crimson_door", "2x minecraft:crimson_planks", 100, 1, "door_template")
addCuttingMachineRecipe("minecraft:crimson_trapdoor", "2x minecraft:crimson_planks", 100, 1, "trapdoor_template")
addCuttingMachineRecipe("minecraft:crimson_pressure_plate", "minecraft:crimson_planks", 100, 1, "pressure_plate_template")
addCuttingMachineRecipe("2x minecraft:crimson_button", "minecraft:crimson_planks", 100, 1, "button_template")
addCuttingMachineRecipe("minecraft:crimson_sign", "2x minecraft:crimson_planks", 100, 1, "sign_template")
addCuttingMachineRecipe("4x minecraft:stick", "minecraft:crimson_planks", 100, 1, "air", planks)
// warped
addCuttingMachineRecipe("minecraft:stripped_warped_stem", "minecraft:warped_stem", 100, 1, "log_template")
addCuttingMachineRecipe("minecraft:stripped_warped_hyphae", "minecraft:warped_hyphae", 100, 1, "log_template")
addCuttingMachineRecipe("4x minecraft:warped_planks", "minecraft:warped_stem", 100, 1, "block_template", "#minecraft:warped_stems")
addCuttingMachineRecipe("4x minecraft:warped_planks", "minecraft:stripped_warped_stem", 100, 1, "block_template", "#minecraft:warped_stems")
addCuttingMachineRecipe("4x minecraft:warped_planks", "minecraft:warped_hyphae", 100, 1, "block_template", "#minecraft:warped_stems")
addCuttingMachineRecipe("4x minecraft:warped_planks", "minecraft:stripped_warped_hyphae", 100, 1, "block_template", "#minecraft:warped_stems")
addCuttingMachineRecipe("minecraft:warped_stairs", "minecraft:warped_planks", 100, 1, "stairs_template")
addCuttingMachineRecipe("2x minecraft:warped_slab", "minecraft:warped_planks", 100, 1, "slab_template")
addCuttingMachineRecipe("minecraft:warped_fence", "minecraft:warped_planks", 100, 1, "fence_template")
addCuttingMachineRecipe("minecraft:warped_fence_gate", "2x minecraft:warped_planks", 100, 1, "fence_gate_template")
addCuttingMachineRecipe("minecraft:warped_door", "2x minecraft:warped_planks", 100, 1, "door_template")
addCuttingMachineRecipe("minecraft:warped_trapdoor", "2x minecraft:warped_planks", 100, 1, "trapdoor_template")
addCuttingMachineRecipe("minecraft:warped_pressure_plate", "minecraft:warped_planks", 100, 1, "pressure_plate_template")
addCuttingMachineRecipe("2x minecraft:warped_button", "minecraft:warped_planks", 100, 1, "button_template")
addCuttingMachineRecipe("minecraft:warped_sign", "2x minecraft:warped_planks", 100, 1, "sign_template")
addCuttingMachineRecipe("4x minecraft:stick", "minecraft:warped_planks", 100, 1, "air", planks)
// biomesoplenty
addCuttingMachineRecipesWood("biomesoplenty", "fir")
addCuttingMachineRecipesWood("biomesoplenty", "redwood")
addCuttingMachineRecipesWood("biomesoplenty", "mahogany")
addCuttingMachineRecipesWood("biomesoplenty", "jacaranda")
addCuttingMachineRecipesWood("biomesoplenty", "palm")
addCuttingMachineRecipesWood("biomesoplenty", "willow")
addCuttingMachineRecipesWood("biomesoplenty", "dead")
addCuttingMachineRecipesWood("biomesoplenty", "magic")
addCuttingMachineRecipesWood("biomesoplenty", "umbran")
addCuttingMachineRecipesWood("biomesoplenty", "hellbark")


// stone
addCuttingMachineRecipe("minecraft:stone_stairs", "minecraft:stone", 100, 1, "stairs_template")
addCuttingMachineRecipe("2x minecraft:stone_slab", "minecraft:stone", 100, 1, "slab_template")
addCuttingMachineRecipe("minecraft:stone_pressure_plate", "minecraft:stone", 100, 1, "pressure_plate_template")
addCuttingMachineRecipe("2x minecraft:stone_button", "minecraft:stone", 100, 1, "button_template")
// cobblestone
addCuttingMachineRecipe("minecraft:cobblestone_stairs", "minecraft:cobblestone", 100, 1, "stairs_template")
addCuttingMachineRecipe("2x minecraft:cobblestone_slab", "minecraft:cobblestone", 100, 1, "slab_template")
addCuttingMachineRecipe("minecraft:cobblestone_wall", "minecraft:cobblestone", 100, 1, "wall_template")
// mossy cobblestone
addCuttingMachineRecipe("minecraft:mossy_cobblestone_stairs", "minecraft:mossy_cobblestone", 100, 1, "stairs_template")
addCuttingMachineRecipe("2x minecraft:mossy_cobblestone_slab", "minecraft:mossy_cobblestone", 100, 1, "slab_template")
addCuttingMachineRecipe("minecraft:mossy_cobblestone_wall", "minecraft:mossy_cobblestone", 100, 1, "wall_template")
// smooth stone
addCuttingMachineRecipe("minecraft:smooth_stone_slab", "minecraft:smooth_stone", 100, 1, "slab_template")
// stone bricks
addCuttingMachineRecipe("minecraft:stone_brick_stairs", "minecraft:stone_bricks", 100, 1, "stairs_template")
addCuttingMachineRecipe("2x minecraft:stone_brick_slab", "minecraft:stone_bricks", 100, 1, "slab_template")
addCuttingMachineRecipe("minecraft:stone_brick_wall", "minecraft:stone_bricks", 100, 1, "wall_template")
// mossy stone bricks
addCuttingMachineRecipe("minecraft:mossy_stone_brick_stairs", "minecraft:mossy_stone_bricks", 100, 1, "stairs_template")
addCuttingMachineRecipe("2x minecraft:mossy_stone_brick_slab", "minecraft:mossy_stone_bricks", 100, 1, "slab_template")
addCuttingMachineRecipe("minecraft:mossy_stone_brick_wall", "minecraft:mossy_stone_bricks", 100, 1, "wall_template")
// granite
addCuttingMachineRecipe("minecraft:granite_stairs", "minecraft:granite", 100, 1, "stairs_template")
addCuttingMachineRecipe("2x minecraft:granite_slab", "minecraft:granite", 100, 1, "slab_template")
addCuttingMachineRecipe("minecraft:granite_wall", "minecraft:granite", 100, 1, "wall_template")
// polished granite
addCuttingMachineRecipe("minecraft:polished_granite_stairs", "minecraft:polished_granite", 100, 1, "stairs_template")
addCuttingMachineRecipe("2x minecraft:polished_granite_slab", "minecraft:polished_granite", 100, 1, "slab_template")
// diorite
addCuttingMachineRecipe("minecraft:diorite_stairs", "minecraft:diorite", 100, 1, "stairs_template")
addCuttingMachineRecipe("2x minecraft:diorite_slab", "minecraft:diorite", 100, 1, "slab_template")
addCuttingMachineRecipe("minecraft:diorite_wall", "minecraft:diorite", 100, 1, "wall_template")
// polished diorite
addCuttingMachineRecipe("minecraft:polished_diorite_stairs", "minecraft:polished_diorite", 100, 1, "stairs_template")
addCuttingMachineRecipe("2x minecraft:polished_diorite_slab", "minecraft:polished_diorite", 100, 1, "slab_template")
// andesite
addCuttingMachineRecipe("minecraft:andesite_stairs", "minecraft:andesite", 100, 1, "stairs_template")
addCuttingMachineRecipe("2x minecraft:andesite_slab", "minecraft:andesite", 100, 1, "slab_template")
addCuttingMachineRecipe("minecraft:andesite_wall", "minecraft:andesite", 100, 1, "wall_template")
// polished andesite
addCuttingMachineRecipe("minecraft:polished_andesite_stairs", "minecraft:polished_andesite", 100, 1, "stairs_template")
addCuttingMachineRecipe("2x minecraft:polished_andesite_slab", "minecraft:polished_andesite", 100, 1, "slab_template")
// cobbled deepslate
addCuttingMachineRecipe("minecraft:cobbled_deepslate_stairs", "minecraft:cobbled_deepslate", 100, 1, "stairs_template")
addCuttingMachineRecipe("2x minecraft:cobbled_deepslate_slab", "minecraft:cobbled_deepslate", 100, 1, "slab_template")
addCuttingMachineRecipe("minecraft:cobbled_deepslate_wall", "minecraft:cobbled_deepslate", 100, 1, "wall_template")
// polished deepslate
addCuttingMachineRecipe("minecraft:polished_deepslate_stairs", "minecraft:polished_deepslate", 100, 1, "stairs_template")
addCuttingMachineRecipe("2x minecraft:polished_deepslate_slab", "minecraft:polished_deepslate", 100, 1, "slab_template")
addCuttingMachineRecipe("minecraft:polished_deepslate_wall", "minecraft:polished_deepslate", 100, 1, "wall_template")
// deepslate bricks
addCuttingMachineRecipe("minecraft:deepslate_brick_stairs", "minecraft:deepslate_bricks", 100, 1, "stairs_template")
addCuttingMachineRecipe("2x minecraft:deepslate_brick_slab", "minecraft:deepslate_bricks", 100, 1, "slab_template")
addCuttingMachineRecipe("minecraft:deepslate_brick_wall", "minecraft:deepslate_bricks", 100, 1, "wall_template")
// deepslate tiles
addCuttingMachineRecipe("minecraft:deepslate_tile_stairs", "minecraft:deepslate_tiles", 100, 1, "stairs_template")
addCuttingMachineRecipe("2x minecraft:deepslate_tile_slab", "minecraft:deepslate_tiles", 100, 1, "slab_template")
addCuttingMachineRecipe("minecraft:deepslate_tile_wall", "minecraft:deepslate_tiles", 100, 1, "wall_template")
// bricks
addCuttingMachineRecipe("minecraft:brick_stairs", "minecraft:bricks", 100, 1, "stairs_template")
addCuttingMachineRecipe("2x minecraft:brick_slab", "minecraft:bricks", 100, 1, "slab_template")
addCuttingMachineRecipe("minecraft:brick_wall", "minecraft:bricks", 100, 1, "wall_template")
// mud bricks
addCuttingMachineRecipe("minecraft:mud_brick_stairs", "minecraft:mud_bricks", 100, 1, "stairs_template")
addCuttingMachineRecipe("2x minecraft:mud_brick_slab", "minecraft:mud_bricks", 100, 1, "slab_template")
addCuttingMachineRecipe("minecraft:mud_brick_wall", "minecraft:mud_bricks", 100, 1, "wall_template")
// sandstone
addCuttingMachineRecipe("minecraft:sandstone_stairs", "minecraft:sandstone", 100, 1, "stairs_template", ["minecraft:sandstone", "minecraft:chiseled_sandstone", "minecraft:cut_sandstone"])
addCuttingMachineRecipe("minecraft:sandstone_stairs", "minecraft:chiseled_sandstone", 100, 1, "stairs_template", ["minecraft:sandstone", "minecraft:chiseled_sandstone", "minecraft:cut_sandstone"])
addCuttingMachineRecipe("minecraft:sandstone_stairs", "minecraft:cut_sandstone", 100, 1, "stairs_template", ["minecraft:sandstone", "minecraft:chiseled_sandstone", "minecraft:cut_sandstone"])
addCuttingMachineRecipe("2x minecraft:sandstone_slab", "minecraft:sandstone", 100, 1, "slab_template", ["minecraft:sandstone", "minecraft:chiseled_sandstone"])
addCuttingMachineRecipe("2x minecraft:sandstone_slab", "minecraft:chiseled_sandstone", 100, 1, "slab_template", ["minecraft:sandstone", "minecraft:chiseled_sandstone"])
addCuttingMachineRecipe("minecraft:sandstone_wall", "minecraft:sandstone", 100, 1, "wall_template")
addCuttingMachineRecipe("minecraft:smooth_sandstone_stairs", "minecraft:smooth_sandstone", 100, 1, "stairs_template")
addCuttingMachineRecipe("2x minecraft:smooth_sandstone_slab", "minecraft:smooth_sandstone", 100, 1, "slab_template")
addCuttingMachineRecipe("2x minecraft:cut_sandstone_slab", "minecraft:cut_sandstone", 100, 1, "slab_template")
// red sandstone
addCuttingMachineRecipe("minecraft:red_sandstone_stairs", "minecraft:red_sandstone", 100, 1, "stairs_template", ["minecraft:red_sandstone", "minecraft:chiseled_red_sandstone", "minecraft:cut_red_sandstone"])
addCuttingMachineRecipe("minecraft:red_sandstone_stairs", "minecraft:chiseled_red_sandstone", 100, 1, "stairs_template", ["minecraft:red_sandstone", "minecraft:chiseled_red_sandstone", "minecraft:cut_red_sandstone"])
addCuttingMachineRecipe("minecraft:red_sandstone_stairs", "minecraft:cut_red_sandstone", 100, 1, "stairs_template", ["minecraft:red_sandstone", "minecraft:chiseled_red_sandstone", "minecraft:cut_red_sandstone"])
addCuttingMachineRecipe("2x minecraft:red_sandstone_slab", "minecraft:red_sandstone", 100, 1, "slab_template", ["minecraft:red_sandstone", "minecraft:chiseled_red_sandstone"])
addCuttingMachineRecipe("2x minecraft:red_sandstone_slab", "minecraft:chiseled_red_sandstone", 100, 1, "slab_template", ["minecraft:red_sandstone", "minecraft:chiseled_red_sandstone"])
addCuttingMachineRecipe("minecraft:red_sandstone_wall", "minecraft:red_sandstone", 100, 1, "wall_template")
addCuttingMachineRecipe("minecraft:smooth_red_sandstone_stairs", "minecraft:smooth_red_sandstone", 100, 1, "stairs_template")
addCuttingMachineRecipe("2x minecraft:smooth_red_sandstone_slab", "minecraft:smooth_red_sandstone", 100, 1, "slab_template")
addCuttingMachineRecipe("2x minecraft:cut_red_sandstone_slab", "minecraft:cut_red_sandstone", 100, 1, "slab_template")
// prismarine
addCuttingMachineRecipe("minecraft:prismarine_stairs", "minecraft:prismarine", 100, 1, "stairs_template")
addCuttingMachineRecipe("2x minecraft:prismarine_slab", "minecraft:prismarine", 100, 1, "slab_template")
addCuttingMachineRecipe("minecraft:prismarine_wall", "minecraft:prismarine", 100, 1, "wall_template")
// prismarine bricks
addCuttingMachineRecipe("minecraft:prismarine_brick_stairs", "minecraft:prismarine_bricks", 100, 1, "stairs_template")
addCuttingMachineRecipe("2x minecraft:prismarine_brick_slab", "minecraft:prismarine_bricks", 100, 1, "slab_template")
// dark prismarine
addCuttingMachineRecipe("minecraft:dark_prismarine_stairs", "minecraft:dark_prismarine", 100, 1, "stairs_template")
addCuttingMachineRecipe("2x minecraft:dark_prismarine_slab", "minecraft:dark_prismarine", 100, 1, "slab_template")
// nether bricks
addCuttingMachineRecipe("minecraft:nether_brick_stairs", "minecraft:nether_bricks", 100, 1, "stairs_template")
addCuttingMachineRecipe("2x minecraft:nether_brick_slab", "minecraft:nether_bricks", 100, 1, "slab_template")
addCuttingMachineRecipe("minecraft:nether_brick_wall", "minecraft:nether_bricks", 100, 1, "wall_template")
addCuttingMachineRecipe("2x minecraft:nether_brick_fence", "minecraft:nether_bricks", 100, 1, "fence_template")
// red nether bricks
addCuttingMachineRecipe("minecraft:red_nether_brick_stairs", "minecraft:red_nether_bricks", 100, 1, "stairs_template")
addCuttingMachineRecipe("2x minecraft:red_nether_brick_slab", "minecraft:red_nether_bricks", 100, 1, "slab_template")
addCuttingMachineRecipe("minecraft:red_nether_brick_wall", "minecraft:red_nether_bricks", 100, 1, "wall_template")
// blackstone
addCuttingMachineRecipe("minecraft:blackstone_stairs", "minecraft:blackstone", 100, 1, "stairs_template")
addCuttingMachineRecipe("2x minecraft:blackstone_slab", "minecraft:blackstone", 100, 1, "slab_template")
addCuttingMachineRecipe("minecraft:blackstone_wall", "minecraft:blackstone", 100, 1, "wall_template")
// polished blackstone
addCuttingMachineRecipe("minecraft:polished_blackstone_stairs", "minecraft:polished_blackstone", 100, 1, "stairs_template")
addCuttingMachineRecipe("2x minecraft:polished_blackstone_slab", "minecraft:polished_blackstone", 100, 1, "slab_template")
addCuttingMachineRecipe("minecraft:polished_blackstone_wall", "minecraft:polished_blackstone", 100, 1, "wall_template")
addCuttingMachineRecipe("minecraft:polished_blackstone_pressure_plate", "minecraft:polished_blackstone", 100, 1, "pressure_plate_template")
addCuttingMachineRecipe("2x minecraft:polished_blackstone_button", "minecraft:polished_blackstone", 100, 1, "button_template")
// polished blackstone bricks
addCuttingMachineRecipe("minecraft:polished_blackstone_brick_stairs", "minecraft:polished_blackstone_bricks", 100, 1, "stairs_template")
addCuttingMachineRecipe("2x minecraft:polished_blackstone_brick_slab", "minecraft:polished_blackstone_bricks", 100, 1, "slab_template")
addCuttingMachineRecipe("minecraft:polished_blackstone_brick_wall", "minecraft:polished_blackstone_bricks", 100, 1, "wall_template")
// end stone bricks
addCuttingMachineRecipe("minecraft:end_stone_brick_stairs", "minecraft:end_stone_bricks", 100, 1, "stairs_template")
addCuttingMachineRecipe("2x minecraft:end_stone_brick_slab", "minecraft:end_stone_bricks", 100, 1, "slab_template")
addCuttingMachineRecipe("minecraft:end_stone_brick_wall", "minecraft:end_stone_bricks", 100, 1, "wall_template")
// purpur
addCuttingMachineRecipe("minecraft:purpur_stairs", "minecraft:purpur_block", 100, 1, "stairs_template")
addCuttingMachineRecipe("minecraft:purpur_stairs", "minecraft:purpur_pillar", 100, 1, "stairs_template")
addCuttingMachineRecipe("2x minecraft:purpur_slab", "minecraft:purpur_block", 100, 1, "slab_template")
addCuttingMachineRecipe("2x minecraft:purpur_slab", "minecraft:purpur_pillar", 100, 1, "slab_template")
// quartz
addCuttingMachineRecipe("minecraft:quartz_stairs", "minecraft:quartz_block", 100, 1, "stairs_template", ["minecraft:quartz_block", "minecraft:quartz_pillar", "minecraft:chiseled_quartz_block"])
addCuttingMachineRecipe("minecraft:quartz_stairs", "minecraft:quartz_pillar", 100, 1, "stairs_template", ["minecraft:quartz_block", "minecraft:quartz_pillar", "minecraft:chiseled_quartz_block"])
addCuttingMachineRecipe("minecraft:quartz_stairs", "minecraft:chiseled_quartz_block", 100, 1, "stairs_template", ["minecraft:quartz_block", "minecraft:quartz_pillar", "minecraft:chiseled_quartz_block"])
addCuttingMachineRecipe("2x minecraft:quartz_slab", "minecraft:quartz_block", 100, 1, "slab_template", ["minecraft:quartz_block", "minecraft:quartz_pillar", "minecraft:chiseled_quartz_block"])
addCuttingMachineRecipe("2x minecraft:quartz_slab", "minecraft:quartz_pillar", 100, 1, "slab_template", ["minecraft:quartz_block", "minecraft:quartz_pillar", "minecraft:chiseled_quartz_block"])
addCuttingMachineRecipe("2x minecraft:quartz_slab", "minecraft:chiseled_quartz_block", 100, 1, "slab_template", ["minecraft:quartz_block", "minecraft:quartz_pillar", "minecraft:chiseled_quartz_block"])
// smooth quartz
addCuttingMachineRecipe("minecraft:smooth_quartz_stairs", "minecraft:smooth_quartz", 100, 1, "stairs_template")
addCuttingMachineRecipe("2x minecraft:smooth_quartz_slab", "minecraft:smooth_quartz", 100, 1, "slab_template")
// copper
addCuttingMachineRecipe("minecraft:cut_copper_stairs", "minecraft:cut_copper", 100, 1, "stairs_template")
addCuttingMachineRecipe("2x minecraft:cut_copper_slab", "minecraft:cut_copper", 100, 1, "slab_template")
addCuttingMachineRecipe("minecraft:exposed_cut_copper_stairs", "minecraft:exposed_cut_copper", 100, 1, "stairs_template")
addCuttingMachineRecipe("2x minecraft:exposed_cut_copper_slab", "minecraft:exposed_cut_copper", 100, 1, "slab_template")
addCuttingMachineRecipe("minecraft:weathered_cut_copper_stairs", "minecraft:weathered_cut_copper", 100, 1, "stairs_template")
addCuttingMachineRecipe("2x minecraft:weathered_cut_copper_slab", "minecraft:weathered_cut_copper", 100, 1, "slab_template")
addCuttingMachineRecipe("minecraft:oxidized_cut_copper_stairs", "minecraft:oxidized_cut_copper", 100, 1, "stairs_template")
addCuttingMachineRecipe("2x minecraft:oxidized_cut_copper_slab", "minecraft:oxidized_cut_copper", 100, 1, "slab_template")
addCuttingMachineRecipe("minecraft:waxed_cut_copper_stairs", "minecraft:waxed_cut_copper", 100, 1, "stairs_template")
addCuttingMachineRecipe("2x minecraft:waxed_cut_copper_slab", "minecraft:waxed_cut_copper", 100, 1, "slab_template")
addCuttingMachineRecipe("minecraft:waxed_exposed_cut_copper_stairs", "minecraft:waxed_exposed_cut_copper", 100, 1, "stairs_template")
addCuttingMachineRecipe("2x minecraft:waxed_exposed_cut_copper_slab", "minecraft:waxed_exposed_cut_copper", 100, 1, "slab_template")
addCuttingMachineRecipe("minecraft:waxed_weathered_cut_copper_stairs", "minecraft:waxed_weathered_cut_copper", 100, 1, "stairs_template")
addCuttingMachineRecipe("2x minecraft:waxed_weathered_cut_copper_slab", "minecraft:waxed_weathered_cut_copper", 100, 1, "slab_template")
addCuttingMachineRecipe("minecraft:waxed_oxidized_cut_copper_stairs", "minecraft:waxed_oxidized_cut_copper", 100, 1, "stairs_template")
addCuttingMachineRecipe("2x minecraft:waxed_oxidized_cut_copper_slab", "minecraft:waxed_oxidized_cut_copper", 100, 1, "slab_template")
// deoxidizing
// normal
addCuttingMachineRecipe("minecraft:weathered_copper", "minecraft:oxidized_copper", 100)
addCuttingMachineRecipe("minecraft:exposed_copper", "minecraft:weathered_copper", 100)
addCuttingMachineRecipe("minecraft:copper_block", "minecraft:exposed_copper", 100)
addCuttingMachineRecipe("minecraft:waxed_weathered_copper", "minecraft:waxed_oxidized_copper", 100)
addCuttingMachineRecipe("minecraft:waxed_exposed_copper", "minecraft:waxed_weathered_copper", 100)
addCuttingMachineRecipe("minecraft:waxed_copper_block", "minecraft:waxed_exposed_copper", 100)
// cut
addCuttingMachineRecipe("minecraft:weathered_cut_copper", "minecraft:oxidized_cut_copper", 100)
addCuttingMachineRecipe("minecraft:exposed_cut_copper", "minecraft:weathered_cut_copper", 100)
addCuttingMachineRecipe("minecraft:cut_copper", "minecraft:exposed_cut_copper", 100)
addCuttingMachineRecipe("minecraft:waxed_weathered_cut_copper", "minecraft:waxed_oxidized_cut_copper", 100)
addCuttingMachineRecipe("minecraft:waxed_exposed_cut_copper", "minecraft:waxed_weathered_cut_copper", 100)
addCuttingMachineRecipe("minecraft:waxed_cut_copper", "minecraft:waxed_exposed_cut_copper", 100)
// cut stairs
addCuttingMachineRecipe("minecraft:weathered_cut_copper_stairs", "minecraft:oxidized_cut_copper_stairs", 100)
addCuttingMachineRecipe("minecraft:exposed_cut_copper_stairs", "minecraft:weathered_cut_copper_stairs", 100)
addCuttingMachineRecipe("minecraft:cut_copper_stairs", "minecraft:exposed_cut_copper_stairs", 100)
addCuttingMachineRecipe("minecraft:waxed_weathered_cut_copper_stairs", "minecraft:waxed_oxidized_cut_copper_stairs", 100)
addCuttingMachineRecipe("minecraft:waxed_exposed_cut_copper_stairs", "minecraft:waxed_weathered_cut_copper_stairs", 100)
addCuttingMachineRecipe("minecraft:waxed_cut_copper_stairs", "minecraft:waxed_exposed_cut_copper_stairs", 100)
// cut slabs
addCuttingMachineRecipe("minecraft:weathered_cut_copper_slab", "minecraft:oxidized_cut_copper_slab", 100)
addCuttingMachineRecipe("minecraft:exposed_cut_copper_slab", "minecraft:weathered_cut_copper_slab", 100)
addCuttingMachineRecipe("minecraft:cut_copper_slab", "minecraft:exposed_cut_copper_slab", 100)
addCuttingMachineRecipe("minecraft:waxed_weathered_cut_copper_slab", "minecraft:waxed_oxidized_cut_copper_slab", 100)
addCuttingMachineRecipe("minecraft:waxed_exposed_cut_copper_slab", "minecraft:waxed_weathered_cut_copper_slab", 100)
addCuttingMachineRecipe("minecraft:waxed_cut_copper_slab", "minecraft:waxed_exposed_cut_copper_slab", 100)
// iron
addCuttingMachineRecipe("minecraft:iron_door", "2x minecraft:iron_ingot", 100, 1, "door_template")
addCuttingMachineRecipe("minecraft:iron_trapdoor", "3x minecraft:iron_ingot", 100, 1, "trapdoor_template")
// white sandstone
addCuttingMachineRecipe("biomesoplenty:white_sandstone_stairs", "biomesoplenty:white_sandstone", 100, 1, "stairs_template", ["biomesoplenty:white_sandstone", "biomesoplenty:chiseled_white_sandstone", "biomesoplenty:cut_white_sandstone"])
addCuttingMachineRecipe("biomesoplenty:white_sandstone_stairs", "biomesoplenty:chiseled_white_sandstone", 100, 1, "stairs_template", ["biomesoplenty:white_sandstone", "biomesoplenty:chiseled_white_sandstone", "biomesoplenty:cut_white_sandstone"])
addCuttingMachineRecipe("biomesoplenty:white_sandstone_stairs", "biomesoplenty:cut_white_sandstone", 100, 1, "stairs_template", ["biomesoplenty:white_sandstone", "biomesoplenty:chiseled_white_sandstone", "biomesoplenty:cut_white_sandstone"])
addCuttingMachineRecipe("2x biomesoplenty:white_sandstone_slab", "biomesoplenty:white_sandstone", 100, 1, "slab_template", ["biomesoplenty:white_sandstone", "biomesoplenty:chiseled_white_sandstone"])
addCuttingMachineRecipe("2x biomesoplenty:white_sandstone_slab", "biomesoplenty:chiseled_white_sandstone", 100, 1, "slab_template", ["biomesoplenty:white_sandstone", "biomesoplenty:chiseled_white_sandstone"])
addCuttingMachineRecipe("biomesoplenty:white_sandstone_wall", "biomesoplenty:white_sandstone", 100, 1, "wall_template")
addCuttingMachineRecipe("biomesoplenty:smooth_white_sandstone_stairs", "biomesoplenty:smooth_white_sandstone", 100, 1, "stairs_template")
addCuttingMachineRecipe("2x biomesoplenty:smooth_white_sandstone_slab", "biomesoplenty:smooth_white_sandstone", 100, 1, "slab_template")
addCuttingMachineRecipe("2x biomesoplenty:cut_white_sandstone_slab", "biomesoplenty:cut_white_sandstone", 100, 1, "slab_template")
// orange sandstone
addCuttingMachineRecipe("biomesoplenty:orange_sandstone_stairs", "biomesoplenty:orange_sandstone", 100, 1, "stairs_template", ["biomesoplenty:orange_sandstone", "biomesoplenty:chiseled_orange_sandstone", "biomesoplenty:cut_orange_sandstone"])
addCuttingMachineRecipe("biomesoplenty:orange_sandstone_stairs", "biomesoplenty:chiseled_orange_sandstone", 100, 1, "stairs_template", ["biomesoplenty:orange_sandstone", "biomesoplenty:chiseled_orange_sandstone", "biomesoplenty:cut_orange_sandstone"])
addCuttingMachineRecipe("biomesoplenty:orange_sandstone_stairs", "biomesoplenty:cut_orange_sandstone", 100, 1, "stairs_template", ["biomesoplenty:orange_sandstone", "biomesoplenty:chiseled_orange_sandstone", "biomesoplenty:cut_orange_sandstone"])
addCuttingMachineRecipe("2x biomesoplenty:orange_sandstone_slab", "biomesoplenty:orange_sandstone", 100, 1, "slab_template", ["biomesoplenty:orange_sandstone", "biomesoplenty:chiseled_orange_sandstone"])
addCuttingMachineRecipe("2x biomesoplenty:orange_sandstone_slab", "biomesoplenty:chiseled_orange_sandstone", 100, 1, "slab_template", ["biomesoplenty:orange_sandstone", "biomesoplenty:chiseled_orange_sandstone"])
addCuttingMachineRecipe("biomesoplenty:orange_sandstone_wall", "biomesoplenty:orange_sandstone", 100, 1, "wall_template")
addCuttingMachineRecipe("biomesoplenty:smooth_orange_sandstone_stairs", "biomesoplenty:smooth_orange_sandstone", 100, 1, "stairs_template")
addCuttingMachineRecipe("2x biomesoplenty:smooth_orange_sandstone_slab", "biomesoplenty:smooth_orange_sandstone", 100, 1, "slab_template")
addCuttingMachineRecipe("2x biomesoplenty:cut_orange_sandstone_slab", "biomesoplenty:cut_orange_sandstone", 100, 1, "slab_template")
// black sandstone
addCuttingMachineRecipe("biomesoplenty:black_sandstone_stairs", "biomesoplenty:black_sandstone", 100, 1, "stairs_template", ["biomesoplenty:black_sandstone", "biomesoplenty:chiseled_black_sandstone", "biomesoplenty:cut_black_sandstone"])
addCuttingMachineRecipe("biomesoplenty:black_sandstone_stairs", "biomesoplenty:chiseled_black_sandstone", 100, 1, "stairs_template", ["biomesoplenty:black_sandstone", "biomesoplenty:chiseled_black_sandstone", "biomesoplenty:cut_black_sandstone"])
addCuttingMachineRecipe("biomesoplenty:black_sandstone_stairs", "biomesoplenty:cut_black_sandstone", 100, 1, "stairs_template", ["biomesoplenty:black_sandstone", "biomesoplenty:chiseled_black_sandstone", "biomesoplenty:cut_black_sandstone"])
addCuttingMachineRecipe("2x biomesoplenty:black_sandstone_slab", "biomesoplenty:black_sandstone", 100, 1, "slab_template", ["biomesoplenty:black_sandstone", "biomesoplenty:chiseled_black_sandstone"])
addCuttingMachineRecipe("2x biomesoplenty:black_sandstone_slab", "biomesoplenty:chiseled_black_sandstone", 100, 1, "slab_template", ["biomesoplenty:black_sandstone", "biomesoplenty:chiseled_black_sandstone"])
addCuttingMachineRecipe("biomesoplenty:black_sandstone_wall", "biomesoplenty:black_sandstone", 100, 1, "wall_template")
addCuttingMachineRecipe("biomesoplenty:smooth_black_sandstone_stairs", "biomesoplenty:smooth_black_sandstone", 100, 1, "stairs_template")
addCuttingMachineRecipe("2x biomesoplenty:smooth_black_sandstone_slab", "biomesoplenty:smooth_black_sandstone", 100, 1, "slab_template")
addCuttingMachineRecipe("2x biomesoplenty:cut_black_sandstone_slab", "biomesoplenty:cut_black_sandstone", 100, 1, "slab_template")
// brimstone brick
addCuttingMachineRecipe("biomesoplenty:brimstone_brick_stairs", "biomesoplenty:brimstone_bricks", 100, 1, "stairs_template")
addCuttingMachineRecipe("2x biomesoplenty:brimstone_brick_slab", "biomesoplenty:brimstone_bricks", 100, 1, "slab_template")
addCuttingMachineRecipe("biomesoplenty:brimstone_brick_wall", "biomesoplenty:brimstone_bricks", 100, 1, "wall_template")