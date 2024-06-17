function addStorageUnpacker(material){
    addUnpackerRecipe([`9x kubejs:${material}_ingot`], `kubejs:${material}_storage_block`, 100, 1)
    addUnpackerRecipe([`9x kubejs:${material}_nugget`], `kubejs:${material}_ingot`, 100)
}

function addStorageUnpackerOre(material){
    addUnpackerRecipe([`9x kubejs:${material}_raw_material`], `kubejs:${material}_raw_block`, 100)
}

function addStorageUnpackerAll(material){
    addStorageUnpacker(material)
    addStorageUnpackerOre(material)
}

//addStorageUnpackerAll("aluminum")
addStorageUnpacker("battery_alloy")
addStorageUnpacker("brass")
addStorageUnpacker("bronze")
//addStorageUnpackerAll("cobalt")
//addStorageUnpacker("constantan")
//addStorageUnpacker("electrum")
addStorageUnpacker("invar")
//addStorageUnpackerAll("iridium")
//addStorageUnpacker("iridium_alloy")
addStorageUnpackerAll("lead")
addStorageUnpackerAll("nickel")
//addStorageUnpackerAll("platinum")
addStorageUnpacker("steel")
addStorageUnpackerAll("tin")
//addStorageUnpackerAll("titanium")
addStorageUnpackerAll("zinc")

// coal
addUnpackerRecipe(["9x minecraft:coal"], "minecraft:coal_block", 100)
// iron
addUnpackerRecipe(["9x minecraft:iron_ingot"], "minecraft:iron_block", 100)
addUnpackerRecipe(["9x minecraft:iron_nugget"], "minecraft:iron_ingot", 100)
addUnpackerRecipe(["9x minecraft:raw_iron"], "minecraft:raw_iron_block", 100)
// gold
addUnpackerRecipe(["9x minecraft:gold_ingot"], "minecraft:gold_block", 100)
addUnpackerRecipe(["9x minecraft:gold_nugget"], "minecraft:gold_ingot", 100)
addUnpackerRecipe(["9x minecraft:raw_gold"], "minecraft:raw_gold_block", 100)
// redstone
addUnpackerRecipe(["9x minecraft:redstone"], "minecraft:redstone_block", 100)
// emerald
addUnpackerRecipe(["9x minecraft:emerald"], "minecraft:emerald_block", 100)
// lapis lazuli
addUnpackerRecipe(["9x minecraft:lapis_lazuli"], "minecraft:lapis_block", 100)
// diamond
addUnpackerRecipe(["9x minecraft:diamond"], "minecraft:diamond_block", 100)
// netherite
addUnpackerRecipe(["9x minecraft:netherite_ingot"], "minecraft:netherite_block", 100)
// quartz
addUnpackerRecipe(["9x minecraft:quartz"], "minecraft:quartz_block", 100)
// copper
addUnpackerRecipe(["9x minecraft:copper_ingot"], "minecraft:copper_block", 100)
addUnpackerRecipe(["9x kubejs:copper_nugget"], "minecraft:copper_ingot", 100)
addUnpackerRecipe(["9x minecraft:raw_copper"], "minecraft:raw_copper_block", 100)
// brick
addUnpackerRecipe(["4x minecraft:brick"], "minecraft:bricks", 100)
// nether brick
addUnpackerRecipe(["4x minecraft:nether_brick"], "minecraft:nether_bricks", 100)
addUnpackerRecipe(["2x minecraft:nether_brick", "2x minecraft:nether_wart"], "minecraft:red_nether_bricks", 100)
// slime
addUnpackerRecipe(["9x minecraft:slime_ball"], "minecraft:slime_block", 100)
// bone
addUnpackerRecipe(["9x minecraft:bone_meal"], "minecraft:bone_block", 100)
// dried kelp
addUnpackerRecipe(["9x minecraft:dried_kelp"], "minecraft:dried_kelp_block", 100)
// hay
addUnpackerRecipe(["9x minecraft:wheat"], "minecraft:hay_block", 100)
// honey
addUnpackerRecipe(["minecraft:honey_block", "4x minecraft:glass_bottle"], "4x minecraft:honey_bottle", 100)
// sugar
addUnpackerRecipe(["3x minecraft:sugar", "minecraft:glass_bottle"], "minecraft:honey_bottle", 100)
// others
addUnpackerRecipe(["minecraft:honeycomb", "minecraft:string"], "minecraft:candle", 100, 1, "#minecraft:candles")
let concretePowders = colors.map(color => `minecraft:${color}_concrete_powder`)
for(let i = 0; i < 16; i++){
    addUnpackerRecipe(["minecraft:honeycomb", "minecraft:string"], `minecraft:${colors[i]}_candle`, 100, 1, "#minecraft:candles")
    addUnpackerRecipe([`6x minecraft:${colors[i]}_wool`, "minecraft:stick"], `minecraft:${colors[i]}_banner`, 100)
    addUnpackerRecipe([`3x minecraft:${colors[i]}_wool`, "3x minecraft:oak"], `minecraft:${colors[i]}_bed`, 100) 
    addUnpackerRecipe(["4x minecraft:sand", "4x minecraft:gravel"], `minecraft:${colors[i]}_concrete_powder`, 100, 1, concretePowders)
}