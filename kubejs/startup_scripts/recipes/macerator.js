// raw material from ore
//addMaceratorRecipe("5x kubejs:aluminum_raw_material", "2x kubejs:aluminum_ore", 400)
//addMaceratorRecipe("5x kubejs:aluminum_raw_material", "2x kubejs:aluminum_ore_deepslate", 400)
//addMaceratorRecipe("5x kubejs:cobalt_raw_material", "2x kubejs:cobalt_ore", 400)
addMaceratorRecipe("16x minecraft:raw_copper", "2x minecraft:copper_ore", 400)
addMaceratorRecipe("16x minecraft:raw_copper", "2x minecraft:deepslate_copper_ore", 400)
addMaceratorRecipe("5x minecraft:raw_gold", "2x minecraft:gold_ore", 400)
addMaceratorRecipe("5x minecraft:raw_gold", "2x minecraft:deepslate_gold_ore", 400)
//addMaceratorRecipe("5x kubejs:iridium_raw_material", "2x kubejs:iridium_ore", 400)
//addMaceratorRecipe("5x kubejs:iridium_raw_material", "2x kubejs:iridium_ore_deepslate", 400)
addMaceratorRecipe("5x minecraft:raw_iron", "2x minecraft:iron_ore", 400)
addMaceratorRecipe("5x minecraft:raw_iron", "2x minecraft:deepslate_iron_ore", 400)
addMaceratorRecipe("5x kubejs:lead_raw_material", "2x kubejs:lead_ore", 400)
addMaceratorRecipe("5x kubejs:lead_raw_material", "2x kubejs:lead_ore_deepslate", 400)
addMaceratorRecipe("5x kubejs:nickel_raw_material", "2x kubejs:nickel_ore", 400)
addMaceratorRecipe("5x kubejs:nickel_raw_material", "2x kubejs:nickel_ore_deepslate", 400)
//addMaceratorRecipe("5x kubejs:platinum_raw_material", "2x kubejs:platinum_ore", 400)
//addMaceratorRecipe("5x kubejs:platinum_raw_material", "2x kubejs:platinum_ore_deepslate", 400)
addMaceratorRecipe("5x kubejs:tin_raw_material", "2x kubejs:tin_ore", 400)
addMaceratorRecipe("5x kubejs:tin_raw_material", "2x kubejs:tin_ore_deepslate", 400)
//addMaceratorRecipe("5x kubejs:titanium_raw_material", "2x kubejs:titanium_ore", 400)
addMaceratorRecipe("5x kubejs:zinc_raw_material", "2x kubejs:zinc_ore", 400)
addMaceratorRecipe("5x kubejs:zinc_raw_material", "2x kubejs:zinc_ore_deepslate", 400)


// raw material from crushed ore
//addMaceratorRecipe("3x kubejs:aluminum_raw_material", "2x kubejs:aluminum_crushed_ore", 400)
//addMaceratorRecipe("3x kubejs:cobalt_raw_material", "2x kubejs:cobalt_crushed_ore", 400)
//addMaceratorRecipe("3x minecraft:raw_copper", "2x kubejs:copper_crushed_ore", 400)
//addMaceratorRecipe("3x minecraft:raw_gold", "2x kubejs:gold_crushed_ore", 400)
//addMaceratorRecipe("3x kubejs:iridium_raw_material", "2x kubejs:iridium_crushed_ore", 400)
//addMaceratorRecipe("3x minecraft:raw_iron", "2x kubejs:iron_crushed_ore", 400)
//addMaceratorRecipe("3x kubejs:lead_raw_material", "2x kubejs:lead_crushed_ore", 400)
//addMaceratorRecipe("3x kubejs:nickel_raw_material", "2x kubejs:nickel_crushed_ore", 400)
//addMaceratorRecipe("3x kubejs:platinum_raw_material", "2x kubejs:platinum_crushed_ore", 400)
//addMaceratorRecipe("3x kubejs:tin_raw_material", "2x kubejs:tin_crushed_ore", 400)
//addMaceratorRecipe("3x kubejs:titanium_raw_material", "2x kubejs:titanium_crushed_ore", 400)
//addMaceratorRecipe("3x kubejs:zinc_raw_material", "2x kubejs:zinc_crushed_ore", 400)


// dust from raw material
//addMaceratorRecipe("3x kubejs:aluminum_dust", "2x kubejs:aluminum_raw_material", 400)
//addMaceratorRecipe("3x kubejs:cobalt_dust", "2x kubejs:cobalt_raw_material", 400)
addMaceratorRecipe("3x kubejs:copper_dust", "2x minecraft:raw_copper", 400)
addMaceratorRecipe("3x kubejs:gold_dust", "2x minecraft:raw_gold", 400)
//addMaceratorRecipe("3x kubejs:iridium_dust", "2x kubejs:iridium_raw_material", 400)
addMaceratorRecipe("3x kubejs:iron_dust", "2x minecraft:raw_iron", 400)
addMaceratorRecipe("2x kubejs:lead_dust", "3x kubejs:lead_raw_material", 400)
addMaceratorRecipe("2x kubejs:nickel_dust", "3x kubejs:nickel_raw_material", 400)
//addMaceratorRecipe("3x kubejs:platinum_dust", "2x kubejs:platinum_raw_material", 400)
addMaceratorRecipe("3x kubejs:tin_dust", "2x kubejs:tin_raw_material", 400)
//addMaceratorRecipe("3x kubejs:titanium_dust", "2x kubejs:titanium_raw_material", 400)
addMaceratorRecipe("3x kubejs:zinc_dust", "2x kubejs:zinc_raw_material", 400)


// dust from ore
addMaceratorRecipe("3x kubejs:antimony_dust", "kubejs:antimony_ore", 400)
addMaceratorRecipe("3x kubejs:antimony_dust", "kubejs:antimony_ore_deepslate", 400)
addMaceratorRecipe("3x kubejs:coal_dust", "minecraft:coal_ore", 400)
addMaceratorRecipe("3x kubejs:coal_dust", "minecraft:deepslate_coal_ore", 400)
addMaceratorRecipe("3x kubejs:diamond_dust", "minecraft:diamond_ore", 400)
addMaceratorRecipe("3x kubejs:diamond_dust", "minecraft:deepslate_diamond_ore", 400)
addMaceratorRecipe("3x kubejs:emerald_dust", "minecraft:emerald_ore", 400)
addMaceratorRecipe("3x kubejs:emerald_dust", "minecraft:deepslate_emerald_ore", 400)
addMaceratorRecipe("16x kubejs:lapis_lazuli_dust", "minecraft:lapis_ore", 400)
addMaceratorRecipe("16x kubejs:lapis_lazuli_dust", "minecraft:deepslate_lapis_ore", 400)
addMaceratorRecipe("6x minecraft:redstone", "minecraft:redstone_ore", 400)
addMaceratorRecipe("6x minecraft:redstone", "minecraft:deepslate_redstone_ore", 400)


function addMaceratorRecipes(material) {
    // dust from ingot
    addMaceratorRecipe(`kubejs:${material}_dust`, `kubejs:${material}_ingot`);
        
    // dust from plate
    addMaceratorRecipe(`kubejs:${material}_dust`, `kubejs:${material}_plate`);
        
    // dust from rod
    addMaceratorRecipe(`kubejs:${material}_dust`, `3x kubejs:${material}_rod`);
        
    // dust from bolt
    addMaceratorRecipe(`kubejs:${material}_dust`, `6x kubejs:${material}_bolt`);

    // dust from curved plate
    addMaceratorRecipe(`2x kubejs:${material}_dust`, `kubejs:${material}_curved_plate`);

    // dust from ring
    addMaceratorRecipe(`kubejs:${material}_dust`, `3x kubejs:${material}_ring`);
    
    // dust from gear
    addMaceratorRecipe(`4x kubejs:${material}_dust`, `kubejs:${material}_gear`);

    // dust from rotor
    addMaceratorRecipe(`8x kubejs:${material}_dust`, `kubejs:${material}_rotor`);
        
    // dust from wire
    addMaceratorRecipe(`kubejs:${material}_dust`, `6x kubejs:${material}_wire`);
}


//addMaceratorRecipes("aluminum");
addMaceratorRecipes("brass");
addMaceratorRecipes("bronze");
addMaceratorRecipes("cobalt");
//addMaceratorRecipes("constantan");
//addMaceratorRecipes("electrum");
addMaceratorRecipes("invar");
//addMaceratorRecipes("iridium");
//addMaceratorRecipes("iridium_alloy");
addMaceratorRecipes("lead");
addMaceratorRecipes("nickel");
//addMaceratorRecipes("platinum");
addMaceratorRecipes("steel");
addMaceratorRecipes("tin");
//addMaceratorRecipes("titanium");
addMaceratorRecipes("zinc");

addMaceratorRecipe("kubejs:coal_dust", "minecraft:coal");

addMaceratorRecipe("kubejs:copper_dust", "minecraft:copper_ingot");
addMaceratorRecipe("kubejs:copper_dust", "kubejs:copper_plate");
addMaceratorRecipe("kubejs:copper_dust", "3x kubejs:copper_rod");
addMaceratorRecipe("kubejs:copper_dust", "6x kubejs:copper_bolt");
addMaceratorRecipe("2x kubejs:copper_dust", "kubejs:copper_curved_plate");
addMaceratorRecipe("kubejs:copper_dust", "3x kubejs:copper_ring");
addMaceratorRecipe("4x kubejs:copper_dust", "kubejs:copper_gear");
addMaceratorRecipe("8x kubejs:copper_dust", "kubejs:copper_rotor");
addMaceratorRecipe("kubejs:copper_dust", "6x kubejs:copper_wire");

addMaceratorRecipe("kubejs:diamond_dust", "minecraft:diamond");
addMaceratorRecipe("kubejs:diamond_dust", "kubejs:diamond_plate");
addMaceratorRecipe("kubejs:diamond_dust", "3x kubejs:diamond_rod");
addMaceratorRecipe("kubejs:diamond_dust", "6x kubejs:diamond_bolt");
addMaceratorRecipe("2x kubejs:diamond_dust", "kubejs:diamond_curved_plate");
addMaceratorRecipe("kubejs:diamond_dust", "3x kubejs:diamond_ring");
addMaceratorRecipe("4x kubejs:diamond_dust", "kubejs:diamond_gear");
addMaceratorRecipe("8x kubejs:diamond_dust", "kubejs:diamond_rotor");
addMaceratorRecipe("kubejs:diamond_dust", "6x kubejs:diamond_wire");

addMaceratorRecipe("kubejs:emerald_dust", "minecraft:emerald");
addMaceratorRecipe("kubejs:emerald_dust", "kubejs:emerald_plate");
addMaceratorRecipe("kubejs:emerald_dust", "3x kubejs:emerald_rod");
addMaceratorRecipe("kubejs:emerald_dust", "6x kubejs:emerald_bolt");
addMaceratorRecipe("2x kubejs:emerald_dust", "kubejs:emerald_curved_plate");
addMaceratorRecipe("kubejs:emerald_dust", "3x kubejs:emerald_ring");
addMaceratorRecipe("4x kubejs:emerald_dust", "kubejs:emerald_gear");
addMaceratorRecipe("8x kubejs:emerald_dust", "kubejs:emerald_rotor");
addMaceratorRecipe("kubejs:emerald_dust", "6x kubejs:emerald_wire");

addMaceratorRecipe("kubejs:iron_dust", "minecraft:iron_ingot");
addMaceratorRecipe("kubejs:iron_dust", "kubejs:iron_plate");
addMaceratorRecipe("kubejs:iron_dust", "3x kubejs:iron_rod");
addMaceratorRecipe("kubejs:iron_dust", "6x kubejs:iron_bolt");
addMaceratorRecipe("2x kubejs:iron_dust", "kubejs:iron_curved_plate");
addMaceratorRecipe("kubejs:iron_dust", "3x kubejs:iron_ring");
addMaceratorRecipe("4x kubejs:iron_dust", "kubejs:iron_gear");
addMaceratorRecipe("8x kubejs:iron_dust", "kubejs:iron_rotor");
addMaceratorRecipe("kubejs:iron_dust", "6x kubejs:iron_wire");

addMaceratorRecipe("kubejs:gold_dust", "minecraft:gold_ingot");
addMaceratorRecipe("kubejs:gold_dust", "kubejs:gold_plate");
addMaceratorRecipe("kubejs:gold_dust", "3x kubejs:gold_rod");
addMaceratorRecipe("kubejs:gold_dust", "6x kubejs:gold_bolt");
addMaceratorRecipe("2x kubejs:gold_dust", "kubejs:gold_curved_plate");
addMaceratorRecipe("kubejs:gold_dust", "3x kubejs:gold_ring");
addMaceratorRecipe("4x kubejs:gold_dust", "kubejs:gold_gear");
addMaceratorRecipe("8x kubejs:gold_dust", "kubejs:gold_rotor");
addMaceratorRecipe("kubejs:gold_dust", "6x kubejs:gold_wire");

addMaceratorRecipe("kubejs:lapis_lazuli_dust", "minecraft:lapis_lazuli");
addMaceratorRecipe("kubejs:lapis_lazuli_dust", "kubejs:lapis_lazuli_plate");
addMaceratorRecipe("kubejs:lapis_lazuli_dust", "3x kubejs:lapis_lazuli_rod");
addMaceratorRecipe("kubejs:lapis_lazuli_dust", "6x kubejs:lapis_lazuli_bolt");
addMaceratorRecipe("2x kubejs:lapis_lazuli_dust", "kubejs:lapis_lazuli_curved_plate");
addMaceratorRecipe("kubejs:lapis_lazuli_dust", "3x kubejs:lapis_lazuli_ring");
addMaceratorRecipe("4x kubejs:lapis_lazuli_dust", "kubejs:lapis_lazuli_gear");
addMaceratorRecipe("8x kubejs:lapis_lazuli_dust", "kubejs:lapis_lazuli_rotor");
addMaceratorRecipe("kubejs:lapis_lazuli_dust", "6x kubejs:lapis_lazuli_wire");

addMaceratorRecipe("kubejs:battery_alloy_dust", "kubejs:battery_alloy_ingot");
addMaceratorRecipe("kubejs:battery_alloy_dust", "kubejs:battery_alloy_plate");
addMaceratorRecipe("2x kubejs:battery_alloy_dust", "kubejs:battery_alloy_curved_plate");

// tier 2
addMaceratorRecipe("kubejs:coal_coke_dust", "kubejs:coal_coke");