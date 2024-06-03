function addOreDrop(event, ore, drop){
    event.addBlockLootModifier(ore)
        .randomChanceWithEnchantment("minecraft:silk_touch", [1, 0]) 
        .removeLoot(ore)
        .pool((pool) => {
            pool.addLoot(drop);
            pool.applyOreBonus("minecraft:fortune");
        })
}

LootJS.modifiers((event) => {
    //addOreDrop(event, "kubejs:aluminum_ore", "kubejs:aluminum_raw_material")
    //addOreDrop(event, "kubejs:aluminum_ore_deepslate", "kubejs:aluminum_raw_material")
    addOreDrop(event, "kubejs:antimony_ore", "kubejs:antimony_dust")
    addOreDrop(event, "kubejs:antimony_ore_deepslate", "kubejs:antimony_dust")
    //addOreDrop(event, "kubejs:cobalt_ore", "kubejs:cobalt_raw_material")
    //addOreDrop(event, "kubejs:iridium_ore", "kubejs:iridium_raw_material")
    //addOreDrop(event, "kubejs:iridium_ore_deepslate", "kubejs:iridium_raw_material")
    addOreDrop(event, "kubejs:lead_ore", "kubejs:lead_raw_material")
    addOreDrop(event, "kubejs:lead_ore_deepslate", "kubejs:lead_raw_material")
    addOreDrop(event, "kubejs:nickel_ore", "kubejs:nickel_raw_material")
    addOreDrop(event, "kubejs:nickel_ore_deepslate", "kubejs:nickel_raw_material")
    //addOreDrop(event, "kubejs:platinum_ore", "kubejs:platinum_raw_material")
    //addOreDrop(event, "kubejs:platinum_ore_deepslate", "kubejs:platinum_raw_material")
    addOreDrop(event, "kubejs:tin_ore", "kubejs:tin_raw_material")
    addOreDrop(event, "kubejs:tin_ore_deepslate", "kubejs:tin_raw_material")
    //addOreDrop(event, "kubejs:titanium_ore", "kubejs:titanium_raw_material")
    addOreDrop(event, "kubejs:zinc_ore", "kubejs:zinc_raw_material")
    addOreDrop(event, "kubejs:zinc_ore_deepslate", "kubejs:zinc_raw_material")
})