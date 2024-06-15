function addCompressorRecipes(material){    
    // plate from ingot
    addCompressorRecipe(`kubejs:${material}_plate`, `kubejs:${material}_ingot`);

    // curved plate from plate
    addCompressorRecipe(`kubejs:${material}_curved_plate`, `2x kubejs:${material}_plate`);

    // ring from rod
    addCompressorRecipe(`kubejs:${material}_ring`, `kubejs:${material}_rod`);
}

// plate
//addCompressorRecipes("aluminum")
addCompressorRecipes("brass")
addCompressorRecipes("bronze")
//addCompressorRecipes("cobalt")
//addCompressorRecipes("constantan")
//addCompressorRecipes("electrum")
addCompressorRecipes("invar")
//addCompressorRecipes("iridium")
//addCompressorRecipes("iridium_alloy")
addCompressorRecipes("lead")
addCompressorRecipes("nickel")
//addCompressorRecipes("platinum")
addCompressorRecipes("steel")
addCompressorRecipes("tin")
//addCompressorRecipes("titanium")
addCompressorRecipes("zinc")

addCompressorRecipe("kubejs:battery_alloy_plate", "kubejs:battery_alloy_ingot");
addCompressorRecipe("kubejs:battery_alloy_curved_plate", "2x kubejs:battery_alloy_plate");

addCompressorRecipe("kubejs:copper_plate", "minecraft:copper_ingot");
addCompressorRecipe("kubejs:copper_curved_plate", "2x kubejs:copper_plate");
addCompressorRecipe("kubejs:copper_ring", "kubejs:copper_rod");

addCompressorRecipe("kubejs:diamond_plate", "minecraft:diamond");
addCompressorRecipe("kubejs:diamond_curved_plate", "2x kubejs:diamond_plate");
addCompressorRecipe("kubejs:diamond_ring", "kubejs:diamond_rod");

addCompressorRecipe("kubejs:emerald_plate", "minecraft:emerald");
addCompressorRecipe("kubejs:emerald_curved_plate", "2x kubejs:emerald_plate");
addCompressorRecipe("kubejs:emerald_ring", "kubejs:emerald_rod");

addCompressorRecipe("kubejs:gold_plate", "minecraft:gold_ingot");
addCompressorRecipe("kubejs:gold_curved_plate", "2x kubejs:gold_plate");
addCompressorRecipe("kubejs:gold_ring", "kubejs:gold_rod");

addCompressorRecipe("kubejs:iron_plate", "minecraft:iron_ingot");
addCompressorRecipe("kubejs:iron_curved_plate", "2x kubejs:iron_plate");
addCompressorRecipe("kubejs:iron_ring", "kubejs:iron_rod");

addCompressorRecipe("kubejs:lapis_lazuli_plate", "minecraft:lapis_lazuli");
addCompressorRecipe("kubejs:lapis_lazuli_curved_plate", "2x kubejs:lapis_lazuli_plate");
addCompressorRecipe("kubejs:lapis_lazuli_ring", "kubejs:lapis_lazuli_rod");

// blaze rod
addCompressorRecipe("kubejs:blaze_rod", "5x minecraft:blaze_powder");