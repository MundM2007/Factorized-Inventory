function addStoragePacker(material){
    addPackerRecipe(`kubejs:${material}_storage_block`, [`9x kubejs:${material}_ingot`], 100, 1, "block_template")
    addPackerRecipe(`kubejs:${material}_ingot`, [`9x kubejs:${material}_nugget`], 100, 1, "block_template")
}

function addStoragePackerOre(material){
    addPackerRecipe(`kubejs:${material}_raw_block`, [`9x kubejs:${material}_raw_material`], 100, 1, "block_template")
}

function addStoragePackerAll(material){
    addStoragePacker(material)
    addStoragePackerOre(material)
}

function addPackerRecipesWood(mod, material){
    addPackerRecipe(`4x ${mod}:${material}_wood`, [`4x ${mod}:${material}_log`], 100, 1, "block_template")
    addPackerRecipe(`4x ${mod}:stripped_${material}_wood`, [`4x ${mod}:stripped_${material}_log`], 100, 1, "block_template")

    addPackerRecipe(`3x ${mod}:${material}_hanging_sign`, [`2x ${mod}:stripped_${material}_log`, "minecraft:chain"], 200, 1, "sign_template")
    for(let i = 0; i < 2; i++){
        addPackerRecipe(`${mod}:${material}_chest_boat`, [`${mod}:${material}_boat`, chests[i]], 100, 1, "boat_template", [`${mod}:${material}_boat`, chests])
    } 
}

//addStoragePackerAll("aluminum")
addStoragePacker("battery_alloy")
addStoragePacker("brass")
addStoragePacker("bronze")
//addStoragePackerAll("cobalt")
//addStoragePacker("constantan")
//addStoragePacker("electrum")
addStoragePacker("invar")
//addStoragePackerAll("iridium")
//addStoragePacker("iridium_alloy")
addStoragePackerAll("lead")
addStoragePackerAll("nickel")
//addStoragePackerAll("platinum")
addStoragePacker("steel")
addStoragePackerAll("tin")
//addStoragePackerAll("titanium")
addStoragePackerAll("zinc")

// wood
//vanilla
addPackerRecipesWood("minecraft", "oak")
addPackerRecipesWood("minecraft", "spruce")
addPackerRecipesWood("minecraft", "birch")
addPackerRecipesWood("minecraft", "jungle")
addPackerRecipesWood("minecraft", "acacia")
addPackerRecipesWood("minecraft", "dark_oak")
addPackerRecipesWood("minecraft", "mangrove")
addPackerRecipesWood("minecraft", "cherry")
// bamboo
addPackerRecipe('minecraft:bamboo_block', ['9x minecraft:bamboo'], 100, 1, "block_template")
addPackerRecipe('3x minecraft:bamboo_hanging_sign', ['2x minecraft:stripped_bamboo_block', "minecraft:chain"], 200, 1, "sign_template")
addPackerRecipe('minecraft:bamboo_chest_raft', ['minecraft:bamboo_raft', "minecraft:chest"], 100, 1, "boat_template", ["minecraft:bamboo_raft", chests])
addPackerRecipe('minecraft:bamboo_chest_raft', ['minecraft:bamboo_raft', "minecraft:trapped_chest"], 100, 1, "boat_template", ["minecraft:bamboo_raft", chests])
// crimson
addPackerRecipe('4x minecraft:crimson_hyphae', ['4x minecraft:crimson_stem'], 100, 1, "block_template")
addPackerRecipe('4x minecraft:stripped_crimson_hyphae' , ['4x minecraft:stripped_crimson_stem'], 100, 1, "block_template")
addPackerRecipe('3x minecraft:crimson_hanging_sign', ['2x minecraft:stripped_crimson_stem', "minecraft:chain"], 200, 1, "sign_template")
// warped
addPackerRecipe('4x minecraft:warped_hyphae', ['4x minecraft:warped_stem'], 100, 1, "block_template")
addPackerRecipe('4x minecraft:stripped_warped_hyphae' , ['4x minecraft:stripped_warped_stem'], 100, 1, "block_template")
addPackerRecipe('3x minecraft:warped_hanging_sign', ['2x minecraft:stripped_warped_stem', "minecraft:chain"], 200, 1, "sign_template")
//biomesoplenty
addPackerRecipesWood("biomesoplenty", "fir")
addPackerRecipesWood("biomesoplenty", "redwood")
addPackerRecipesWood("biomesoplenty", "mahogany")
addPackerRecipesWood("biomesoplenty", "jacaranda")
addPackerRecipesWood("biomesoplenty", "palm")
addPackerRecipesWood("biomesoplenty", "willow")
addPackerRecipesWood("biomesoplenty", "dead")
addPackerRecipesWood("biomesoplenty", "magic")
addPackerRecipesWood("biomesoplenty", "umbran")
addPackerRecipesWood("biomesoplenty", "hellbark")
//traped chests
addPackerRecipe('minecraft:trapped_chest', ['minecraft:chest', 'minecraft:tripwire_hook'], 100)
//tripwire hook / chiseled bookshelf / barrel / note block / bowl
for(let i = 0; i < planks.length; i++){
    addPackerRecipe("2x minecraft:tripwire_hook", [planks[i], 'minecraft:iron_ingot'], 100, 1, "air", [planks, "minecraft:iron_ingot"])
    addPackerRecipe("minecraft:chiseled_bookshelf", [planks6[i], slabs3[i]], 100, 1, "air", [planks6, slabs3])
    addPackerRecipe("minecraft:barrel", [planks6[i], slabs2[i]], 100, 1, "block_template", [planks6, slabs2])
    addPackerRecipe("minecraft:barrel", [slabs6[i], 'minecraft:stick'], 100, 1, "block_template", [slabs6, 'minecraft:stick'])
    addAssemblerRecipe('minecraft:note_block', [planks8[i], 'minecraft:redstone'], 100, 1, [planks8, 'minecraft:redstone'])
    addAssemblerRecipe('minecraft:bowl', [planks2[i], 'minecraft:stick'], 100, 1, [planks3, 'minecraft:stick'])
}
//drawers
for(let i = 0; i < 8; i++){
    let woodType = planks[i].split(":")[1].replace("_planks", "")
    for(let j = 0; j < 2; j++){
        addPackerRecipe(`storagedrawers:${woodType}_full_drawers_1`, ["4x " + planks[i], chests[j]], 100, 1, "drawer_template_1x1", ["4x " + planks[i], "#forge:chests/wooden"])
        addPackerRecipe(`storagedrawers:${woodType}_full_drawers_2`, ["3x " + planks[i], chests[j]], 100, 1, "drawer_template_1x2", ["3x " + planks[i], "#forge:chests/wooden"])
        addPackerRecipe(`storagedrawers:${woodType}_full_drawers_4`, [planks[i], chests[j]], 100, 1, "drawer_template_2x2", [planks[i], "#forge:chests/wooden"])
        addPackerRecipe(`storagedrawers:${woodType}_half_drawers_1`, ["4x " + planks[i].replace("planks", "slab"), chests[j]], 100, 1, "drawer_template_1x1", ["4x " + planks[i].replace("planks", "slab"), "#forge:chests/wooden"])
        addPackerRecipe(`storagedrawers:${woodType}_half_drawers_2`, ["3x " + planks[i].replace("planks", "slab"), chests[j]], 100, 1, "drawer_template_1x2", ["3x " + planks[i].replace("planks", "slab"), "#forge:chests/wooden"])
        addPackerRecipe(`storagedrawers:${woodType}_half_drawers_4`, [planks[i].replace("planks", "slab"), chests[j]], 100, 1, "drawer_template_2x2", [planks[i].replace("planks", "slab"), "#forge:chests/wooden"])
    }
    addPackerRecipe(`storagedrawers:${woodType}_trim`, [planks[i], "minecraft:stick"], 100, 1, "block_template")
}
// mossy cobblestone
addPackerRecipe('minecraft:mossy_cobblestone', ['minecraft:cobblestone', 'minecraft:moss_block'], 100, 1, "block_template")
addPackerRecipe('minecraft:mossy_cobblestone', ['minecraft:cobblestone', 'minecraft:vine'], 100, 1, "block_template")
addPackerRecipe('minecraft:mossy_cobblestone', ['minecraft:cobblestone', 'biomesoplenty:willow_vine'], 100, 1, "block_template")
// stone bricks
addPackerRecipe('4x minecraft:stone_bricks', ['4x minecraft:stone'], 100, 1, "block_template")
// chiseled stone bricks
addPackerRecipe('minecraft:chiseled_stone_bricks', ['2x minecraft:stone_brick_slab'], 100, 1, "block_template")
// mossy stone bricks
addPackerRecipe('minecraft:mossy_stone_bricks', ['minecraft:stone_bricks', 'minecraft:moss_block'], 100, 1, "block_template")
addPackerRecipe('minecraft:mossy_stone_bricks', ['minecraft:stone_bricks', 'minecraft:vine'], 100, 1, "block_template")
addPackerRecipe('minecraft:mossy_stone_bricks', ['minecraft:stone_bricks', 'biomesoplenty:willow_vine'], 100, 1, "block_template")
// polished granite
addPackerRecipe('4x minecraft:polished_granite', ['4x minecraft:granite'], 100, 1, "block_template")
// polished diorite
addPackerRecipe('4x minecraft:polished_diorite', ['4x minecraft:diorite'], 100, 1, "block_template")
// polished andesite
addPackerRecipe('4x minecraft:polished_andesite', ['4x minecraft:andesite'], 100, 1, "block_template")
// chiseled deepslate
addPackerRecipe('minecraft:chiseled_deepslate', ['2x minecraft:cobbled_deepslate_slab'], 100, 1, "block_template")
// polished deepslate
addPackerRecipe('4x minecraft:polished_deepslate', ['4x minecraft:cobbled_deepslate'], 100, 1, "block_template")
// deepslate bricks
addPackerRecipe('4x minecraft:deepslate_bricks', ['4x minecraft:polished_deepslate'], 100, 1, "block_template")
// deepslate tiles
addPackerRecipe('4x minecraft:deepslate_tiles', ['4x minecraft:deepslate_bricks'], 100, 1, "block_template")
// bricks
addPackerRecipe('minecraft:bricks', ['4x minecraft:brick'], 100, 1, "block_template")
// mud bricks
addPackerRecipe('4x minecraft:mud_bricks', ['4x minecraft:packed_mud'], 100, 1, "block_template")
// packed mud
addPackerRecipe('minecraft:packed_mud', ['minecraft:mud', 'minecraft:wheat'], 100)
// sandstone
addPackerRecipe('minecraft:sandstone', ['4x minecraft:sand'], 100, 1, "block_template")
addPackerRecipe('minecraft:chiseled_sandstone', ['2x minecraft:sandstone_slab'], 100, 1, "block_template")
addPackerRecipe('4x minecraft:cut_sandstone', ['4x minecraft:sandstone'], 100, 1, "block_template")
// red sandstone
addPackerRecipe('minecraft:red_sandstone', ['4x minecraft:red_sand'], 100, 1, "block_template")
addPackerRecipe('minecraft:chiseled_red_sandstone', ['2x minecraft:red_sandstone_slab'], 100, 1, "block_template")
addPackerRecipe('4x minecraft:cut_red_sandstone', ['4x minecraft:red_sandstone'], 100, 1, "block_template")
// prismarine
addPackerRecipe('minecraft:prismarine', ['4x minecraft:prismarine_shard'], 100, 1, "block_template")
addPackerRecipe('minecraft:prismarine_bricks', ['2x minecraft:prismarine'], 100, 1, "block_template")
addPackerRecipe('minecraft:dark_prismarine', ['minecraft:prismarine_bricks', 'minecraft:black_dye'], 100, 1, "block_template")
// sea lantern
addPackerRecipe('minecraft:sea_lantern', ['9x minecraft:prismarine_crystals'], 100, 1, "block_template")    
// nether bricks
addPackerRecipe('minecraft:nether_bricks', ['4x minecraft:nether_brick'], 100, 1, "block_template")
addPackerRecipe('minecraft:chiseled_nether_bricks', ['2x minecraft:nether_brick_slab'], 100, 1, "block_template")
// red nether bricks
addPackerRecipe('minecraft:red_nether_bricks', ['2x minecraft:nether_brick', '2x minecraft:nether_wart'], 100, 1, "block_template")
// chiseled polished blackstone
addPackerRecipe('minecraft:chiseled_polished_blackstone', ['2x minecraft:polished_blackstone_slab'], 100, 1, "block_template")
// polished blackstone
addPackerRecipe('4x minecraft:polished_blackstone', ['4x minecraft:blackstone'], 100, 1, "block_template")
// polished blackstone bricks
addPackerRecipe('4x minecraft:polished_blackstone_bricks', ['4x minecraft:polished_blackstone'], 100, 1, "block_template")
// basalt
addPackerRecipe('4x minecraft:polished_basalt', ['4x minecraft:basalt'], 100, 1, "block_template")
// end stone bricks
addPackerRecipe('4x minecraft:end_stone_bricks', ['4x minecraft:end_stone'], 100, 1, "block_template")
// purpur
addPackerRecipe('4x minecraft:purpur_block', ['4x minecraft:popped_chorus_fruit'], 100, 1, "block_template")
addPackerRecipe('minecraft:purpur_pillar', ['2x minecraft:purpur_block'], 100, 1, "block_template")
// quartz
addPackerRecipe('minecraft:quartz_block', ['4x minecraft:quartz'], 100, 1, "block_template")
addPackerRecipe('minecraft:chiseled_quartz_block', ['2x minecraft:quartz_slab'], 100, 1, "block_template")
// copper
addPackerRecipe('minecraft:copper_block', ['9x minecraft:copper_ingot'], 100, 1, "block_template")
addPackerRecipe('minecraft:copper_ingot', ['9x kubejs:copper_nugget'], 100, 1, "block_template")
addPackerRecipe('minecraft:raw_copper_block', ['9x minecraft:raw_copper'], 100, 1, "block_template")
addPackerRecipe("minecraft:lightning_rod", ["3x minecraft:copper_ingot"], 100)
// waxing
addPackerRecipe('2x minecraft:waxed_copper_block', ['2x minecraft:copper_block', 'minecraft:honeycomb'], 100, 1, "waxing_template")
addPackerRecipe('2x minecraft:waxed_exposed_copper', ['2x minecraft:exposed_copper', 'minecraft:honeycomb'], 100, 1, "waxing_template")
addPackerRecipe('2x minecraft:waxed_weathered_copper', ['2x minecraft:weathered_copper', 'minecraft:honeycomb'], 100, 1, "waxing_template")
addPackerRecipe('2x minecraft:waxed_oxidized_copper', ['2x minecraft:oxidized_copper', 'minecraft:honeycomb'], 100, 1, "waxing_template")
addPackerRecipe('2x minecraft:waxed_cut_copper', ['2x minecraft:cut_copper', 'minecraft:honeycomb'], 100, 1, "waxing_template")
addPackerRecipe('2x minecraft:waxed_exposed_cut_copper', ['2x minecraft:exposed_cut_copper', 'minecraft:honeycomb'], 100, 1, "waxing_template")
addPackerRecipe('2x minecraft:waxed_weathered_cut_copper', ['2x minecraft:weathered_cut_copper', 'minecraft:honeycomb'], 100, 1, "waxing_template")
addPackerRecipe('2x minecraft:waxed_oxidized_cut_copper', ['2x minecraft:oxidized_cut_copper', 'minecraft:honeycomb'], 100, 1, "waxing_template")
addPackerRecipe('2x minecraft:waxed_cut_copper_stairs', ['2x minecraft:cut_copper_stairs', 'minecraft:honeycomb'], 100, 1, "waxing_template")
addPackerRecipe('2x minecraft:waxed_exposed_cut_copper_stairs', ['2x minecraft:exposed_cut_copper_stairs', 'minecraft:honeycomb'], 100, 1, "waxing_template")
addPackerRecipe('2x minecraft:waxed_weathered_cut_copper_stairs', ['2x minecraft:weathered_cut_copper_stairs', 'minecraft:honeycomb'], 100, 1, "waxing_template")
addPackerRecipe('2x minecraft:waxed_oxidized_cut_copper_stairs', ['2x minecraft:oxidized_cut_copper_stairs', 'minecraft:honeycomb'], 100, 1, "waxing_template")
addPackerRecipe('2x minecraft:waxed_cut_copper_slab', ['2x minecraft:cut_copper_slab', 'minecraft:honeycomb'], 100, 1, "waxing_template")
addPackerRecipe('2x minecraft:waxed_exposed_cut_copper_slab', ['2x minecraft:exposed_cut_copper_slab', 'minecraft:honeycomb'], 100, 1, "waxing_template")
addPackerRecipe('2x minecraft:waxed_weathered_cut_copper_slab', ['2x minecraft:weathered_cut_copper_slab', 'minecraft:honeycomb'], 100, 1, "waxing_template")
addPackerRecipe('2x minecraft:waxed_oxidized_cut_copper_slab', ['2x minecraft:oxidized_cut_copper_slab', 'minecraft:honeycomb'], 100, 1, "waxing_template")
// cut copper
addPackerRecipe('4x minecraft:cut_copper', ['4x minecraft:copper_block'], 100, 1, "block_template")
addPackerRecipe('4x minecraft:exposed_cut_copper', ['4x minecraft:exposed_copper'], 100, 1, "block_template")
addPackerRecipe('4x minecraft:weathered_cut_copper', ['4x minecraft:weathered_copper'], 100, 1, "block_template")
addPackerRecipe('4x minecraft:oxidized_cut_copper', ['4x minecraft:oxidized_copper'], 100, 1, "block_template")
addPackerRecipe('4x minecraft:waxed_cut_copper', ['4x minecraft:waxed_copper_block'], 100, 1, "block_template")
addPackerRecipe('4x minecraft:waxed_exposed_cut_copper', ['4x minecraft:waxed_exposed_copper'], 100, 1, "block_template")
addPackerRecipe('4x minecraft:waxed_weathered_cut_copper', ['4x minecraft:waxed_weathered_copper'], 100, 1, "block_template")
addPackerRecipe('4x minecraft:waxed_oxidized_cut_copper', ['4x minecraft:waxed_oxidized_copper'], 100, 1, "block_template")
// iron
addPackerRecipe('minecraft:iron_block', ['9x minecraft:iron_ingot'], 100, 1, "block_template")
addPackerRecipe('minecraft:iron_ingot', ['9x minecraft:iron_nugget'], 100, 1, "block_template")
addPackerRecipe('minecraft:raw_iron_block', ['9x minecraft:raw_iron'], 100, 1, "block_template")
// coal
addPackerRecipe('minecraft:coal_block', ['9x minecraft:coal'], 100, 1, "block_template")
// gold
addPackerRecipe('minecraft:gold_block', ['9x minecraft:gold_ingot'], 100, 1, "block_template")
addPackerRecipe('minecraft:gold_ingot', ['9x minecraft:gold_nugget'], 100, 1, "block_template")
addPackerRecipe('minecraft:raw_gold_block', ['9x minecraft:raw_gold'], 100, 1, "block_template")
// redstone
addPackerRecipe('minecraft:redstone_block', ['9x minecraft:redstone'], 100, 1, "block_template")
// emerald
addPackerRecipe('minecraft:emerald_block', ['9x minecraft:emerald'], 100, 1, "block_template")
// lapis
addPackerRecipe('minecraft:lapis_block', ['9x minecraft:lapis_lazuli'], 100, 1, "block_template")
// diamond
addPackerRecipe('minecraft:diamond_block', ['9x minecraft:diamond'], 100, 1, "block_template")
// netherite
addPackerRecipe('minecraft:netherite_block', ['9x minecraft:netherite_ingot'], 100, 1, "block_template")
// amethyst
addPackerRecipe('minecraft:amethyst_block', ['4x minecraft:amethyst_shard'], 100, 1, "block_template")
// snow
addPackerRecipe('minecraft:snow_block', ['4x minecraft:snowball'], 100, 1, "block_template")
addPackerRecipe('2x minecraft:snow', ['minecraft:snow_block'], 100, 1, "carpet_template")
// ice
addPackerRecipe('minecraft:ice', ['2x minecraft:snow_block'], 100, 1, "block_template")
addPackerRecipe('minecraft:packed_ice', ['9x minecraft:ice'], 100, 1, "block_template")
addPackerRecipe('minecraft:blue_ice', ['9x minecraft:packed_ice'], 100, 1, "block_template")
// dripstone
addPackerRecipe('minecraft:dripstone_block', ['4x minecraft:pointed_dripstone'], 100, 1, "block_template")
// magma
addPackerRecipe('minecraft:magma_cream', ['minecraft:slime_ball', 'minecraft:blaze_powder'], 100)
addPackerRecipe('minecraft:magma_block', ['4x minecraft:magma_cream'], 100, 1, "block_template")
// bone
addPackerRecipe('minecraft:bone_block', ['9x minecraft:bone_meal'], 100, 1, "block_template")
// nether wart
addPackerRecipe('minecraft:nether_wart_block', ['9x minecraft:nether_wart'], 100, 1, "block_template")
// dried kelp
addPackerRecipe('minecraft:dried_kelp_block', ['9x minecraft:dried_kelp'], 100, 1, "block_template")
// hay
addPackerRecipe('minecraft:hay_block', ['9x minecraft:wheat'], 100, 1, "block_template")
// honey
addPackerRecipe('minecraft:honeycomb_block', ['4x minecraft:honeycomb'], 100, 1, "block_template")
addPackerRecipe('4x minecraft:honey_bottle', ['minecraft:honey_block', '4x minecraft:glass_bottle'], 100, 1)
// slime
addPackerRecipe('minecraft:slime_block', ['9x minecraft:slime_ball'], 100, 1, "block_template")
// wool
addPackerRecipe('minecraft:white_wool', ['4x minecraft:string'], 100, 1, "block_template")
// carpet
addPackerRecipe('2x minecraft:white_carpet', ['minecraft:white_wool'], 100, 1, "carpet_template")
addPackerRecipe('2x minecraft:light_gray_carpet', ['minecraft:light_gray_wool'], 100, 1, "carpet_template")
addPackerRecipe('2x minecraft:gray_carpet', ['minecraft:gray_wool'], 100, 1, "carpet_template")
addPackerRecipe('2x minecraft:black_carpet', ['minecraft:black_wool'], 100, 1, "carpet_template")
addPackerRecipe('2x minecraft:brown_carpet', ['minecraft:brown_wool'], 100, 1, "carpet_template")
addPackerRecipe('2x minecraft:red_carpet', ['minecraft:red_wool'], 100, 1, "carpet_template")
addPackerRecipe('2x minecraft:orange_carpet', ['minecraft:orange_wool'], 100, 1, "carpet_template")
addPackerRecipe('2x minecraft:yellow_carpet', ['minecraft:yellow_wool'], 100, 1, "carpet_template")
addPackerRecipe('2x minecraft:lime_carpet', ['minecraft:lime_wool'], 100, 1, "carpet_template")
addPackerRecipe('2x minecraft:green_carpet', ['minecraft:green_wool'], 100, 1, "carpet_template")
addPackerRecipe('2x minecraft:cyan_carpet', ['minecraft:cyan_wool'], 100, 1, "carpet_template")
addPackerRecipe('2x minecraft:light_blue_carpet', ['minecraft:light_blue_wool'], 100, 1, "carpet_template")
addPackerRecipe('2x minecraft:blue_carpet', ['minecraft:blue_wool'], 100, 1, "carpet_template")
addPackerRecipe('2x minecraft:purple_carpet', ['minecraft:purple_wool'], 100, 1, "carpet_template")
addPackerRecipe('2x minecraft:magenta_carpet', ['minecraft:magenta_wool'], 100, 1, "carpet_template")
addPackerRecipe('2x minecraft:pink_carpet', ['minecraft:pink_wool'], 100, 1, "carpet_template")
addPackerRecipe('2x minecraft:moss_carpet', ['minecraft:moss_block'], 100, 1, "carpet_template")
// clay
addPackerRecipe('minecraft:clay', ['4x minecraft:clay_ball'], 100, 1, "block_template")
// glowstone
addPackerRecipe('minecraft:glowstone', ['4x minecraft:glowstone_dust'], 100, 1, "block_template")
// glass
addPackerRecipe('16x minecraft:glass_pane', ['6x minecraft:glass'], 100, 1, "glass_pane_template")
addPackerRecipe('minecraft:glass_bottle', ['minecraft:glass'], 100, 1)
addPackerRecipe('2x minecraft:tinted_glass', ['minecraft:glass', '4x minecraft:amethyst_shard'], 100, 1, "block_template")
// candle
addPackerRecipe('minecraft:candle', ['minecraft:string', "minecraft:honeycomb"], 100, 1, "block_template")
// paper
addPackerRecipe('minecraft:paper', ['minecraft:sugar_cane'], 100)
// rose quartz
addPackerRecipe('biomesoplenty:rose_quartz_block', ['4x biomesoplenty:rose_quartz_chunk'], 100, 1, "block_template")
// white sandstone
addPackerRecipe('biomesoplenty:white_sandstone', ['4x biomesoplenty:white_sand'], 100, 1, "block_template")
addPackerRecipe('biomesoplenty:chiseled_white_sandstone', ['2x biomesoplenty:white_sandstone_slab'], 100, 1, "block_template")
addPackerRecipe('4x biomesoplenty:cut_white_sandstone', ['4x biomesoplenty:white_sandstone'], 100, 1, "block_template")
// orange sandstone
addPackerRecipe('biomesoplenty:orange_sandstone', ['4x biomesoplenty:orange_sand'], 100, 1, "block_template")
addPackerRecipe('biomesoplenty:chiseled_orange_sandstone', ['2x biomesoplenty:orange_sandstone_slab'], 100, 1, "block_template")
addPackerRecipe('4x biomesoplenty:cut_orange_sandstone', ['4x biomesoplenty:orange_sandstone'], 100, 1, "block_template")
// black sandstone
addPackerRecipe('biomesoplenty:black_sandstone', ['4x biomesoplenty:black_sand'], 100, 1, "block_template")
addPackerRecipe('biomesoplenty:chiseled_black_sandstone', ['2x biomesoplenty:black_sandstone_slab'], 100, 1, "block_template")
addPackerRecipe('4x biomesoplenty:cut_black_sandstone', ['4x biomesoplenty:black_sandstone'], 100, 1, "block_template")
// brimstone
addPackerRecipe('4x biomesoplenty:brimstone_bricks', ['4x biomesoplenty:brimstone'], 100, 1, "block_template")
addPackerRecipe('biomesoplenty:chiseled_brimstone_bricks', ['2x biomesoplenty:brimstone_brick_slab'], 100, 1, "block_template")
// coloring
for (let i = 0; i < 16; i++) {
    let currentColors = colors.slice()
    currentColors.splice(i, 1)
    // wool / carpet / bed
    let currentWools = currentColors.map(color => `minecraft:${color}_wool`)
    let currentCarpets = currentColors.map(color => `minecraft:${color}_carpet`)
    let currentBeds = currentColors.map(color => `minecraft:${color}_bed`)
    let currentBanners = currentColors.map(color => `minecraft:${color}_banner`)
    for (let j = 0; j < 16; j++) {
        if(i == j) continue
        addPackerRecipe(`minecraft:${colors[i]}_wool`, [`minecraft:${colors[j]}_wool`, `minecraft:${colors[i]}_dye`], 100, 1, "color_template", [currentWools, `minecraft:${colors[i]}_dye`])
        addPackerRecipe(`minecraft:${colors[i]}_carpet`, [`minecraft:${colors[j]}_carpet`, `minecraft:${colors[i]}_dye`], 100, 1, "color_template", [currentCarpets, `minecraft:${colors[i]}_dye`])
        addPackerRecipe(`minecraft:${colors[i]}_bed`, [`minecraft:${colors[j]}_bed`, `minecraft:${colors[i]}_dye`], 100, 1, "color_template", [currentBeds, `minecraft:${colors[i]}_dye`])
        addPackerRecipe(`minecraft:${colors[i]}_banner`, [`minecraft:${colors[j]}_banner`, `minecraft:${colors[i]}_dye`], 100, 1, "color_template", [currentBanners, `minecraft:${colors[i]}_dye`])
    }
    // bed
    for (let plank of planks3) {
        addPackerRecipe(`minecraft:${colors[i]}_bed`, [`3x minecraft:${colors[i]}_wool`, plank], 100, 1, "block_template", [`3x minecraft:${colors[i]}_wool`, planks3])
    }
    // banner
    addPackerRecipe(`minecraft:${colors[i]}_banner`, [`6x minecraft:${colors[i]}_wool`, "minecraft:stick"], 100, 1, "block_template")
    // terracotta
    addPackerRecipe(`8x minecraft:${colors[i]}_terracotta`, ['8x minecraft:terracotta', `minecraft:${colors[i]}_dye`], 100, 1, "color_template")
    // concrete
    addPackerRecipe(`8x minecraft:${colors[i]}_concrete_powder`, ['4x minecraft:sand', '4x minecraft:gravel', `minecraft:${colors[i]}_dye`], 100, 1, "block_template")
    addPackerRecipe(`minecraft:${colors[i]}_concrete`, [`minecraft:${colors[i]}_concrete_powder`], 100, 1, "water_bucket")
    // glass
    addPackerRecipe(`8x minecraft:${colors[i]}_stained_glass`, ['8x minecraft:glass', `minecraft:${colors[i]}_dye`], 100, 1, "color_template")
    // glass pane
    addPackerRecipe(`16x minecraft:${colors[i]}_stained_glass_pane`, [`6x minecraft:${colors[i]}_stained_glass`], 100, 1, "glass_pane_template")
    addPackerRecipe(`8x minecraft:${colors[i]}_stained_glass_pane`, ['8x minecraft:glass_pane', `minecraft:${colors[i]}_dye`], 100, 1, "color_template")
    // candle
    addPackerRecipe(`minecraft:${colors[i]}_candle`, ['minecraft:candle', `minecraft:${colors[i]}_dye`], 100, 1, "color_template")
}
// minecart
addPackerRecipe('minecraft:chest_minecart', ['minecraft:minecart', 'minecraft:chest'], 100, 1, "air", ["minecraft:minecart", chests])
addPackerRecipe('minecraft:chest_minecart', ['minecraft:minecart', 'minecraft:trapped_chest'], 100, 1, "air", ["minecraft:minecart", chests])
addPackerRecipe('minecraft:furnace_minecart', ['minecraft:minecart', 'minecraft:furnace'], 100, 1, "air")
addPackerRecipe('minecraft:hopper_minecart', ['minecraft:minecart', 'minecraft:hopper'], 100, 1, "air")
addPackerRecipe('minecraft:tnt_minecart', ['minecraft:minecart', 'minecraft:tnt'], 100, 1, "air")
// coarse dirt
addPackerRecipe('2x minecraft:coarse_dirt', ['minecraft:dirt', 'minecraft:gravel'], 100, 1, "block_template")
// melon
addPackerRecipe('minecraft:melon', ['9x minecraft:melon_slice'], 100, 1, "block_template")
// pumpkin
addPackerRecipe('minecraft:jack_o_lantern', ['minecraft:carved_pumpkin', 'minecraft:torch'], 100, 1, "block_template")
// workstations
addPackerRecipe('minecraft:crafting_table', ['8x minecraft:stick'], 100)
for(let i = 0; i < stone_tool_materials.length; i++){
    addPackerRecipe(`minecraft:furnace`, [stone_tool_materials8[i]], 100, 1, "air", [stone_tool_materials8])
}
// pots
addPackerRecipe('minecraft:flower_pot', ['3x minecraft:brick'], 100)
// eye of ender
addPackerRecipe('minecraft:ender_eye', ['minecraft:ender_pearl', 'minecraft:blaze_powder'], 100, 1, "block_template")
// dropper
addPackerRecipe('minecraft:dropper', ['7x minecraft:cobblestone', 'minecraft:redstone'], 100, 1, "block_template")
// dispenser
addPackerRecipe('minecraft:dispenser', ['minecraft:dropper', '3x minecraft:stick', '3x minecraft:string'], 100, 1, "block_template")
// sticky piston
addPackerRecipe('minecraft:sticky_piston', ['minecraft:piston', 'minecraft:slime_ball'], 100, 1, "block_template")
// tnt
for(let i = 0; i < sands.length; i++){
    addPackerRecipe('minecraft:tnt', [sands4[i], 'minecraft:gunpowder'], 100, 1, "block_template", [sands4, 'minecraft:gunpowder'])
}
// compass
addPackerRecipe('minecraft:compass', ['4x minecraft:iron_ingot', 'minecraft:redstone'], 100)
// clock
addPackerRecipe('minecraft:clock', ['4x minecraft:gold_ingot', 'minecraft:redstone'], 100)
// golden apple
addPackerRecipe('minecraft:golden_apple', ['minecraft:apple', '8x minecraft:gold_ingot'], 100)
// golden carrot
addPackerRecipe('minecraft:golden_carrot', ['minecraft:carrot', '8x minecraft:gold_nugget'], 100)
// glistering melon
addPackerRecipe('minecraft:glistering_melon_slice', ['minecraft:melon_slice', '8x minecraft:gold_nugget'], 100)
// bread
addPackerRecipe('3x minecraft:bread', ['minecraft:hay_block'], 100)
// leather
addPackerRecipe('minecraft:leather', ['4x minecraft:rabbit_hide'], 100)
// fermentated spider eye
addPackerRecipe("minecraft:fermented_spider_eye", ["minecraft:spider_eye", "minecraft:sugar", "minecraft:brown_mushroom"], 100)