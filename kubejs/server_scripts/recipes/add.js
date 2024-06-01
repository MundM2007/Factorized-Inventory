function addStorage(event, material){
    event.shapeless(`kubejs:${material}_storage_block`, `9x kubejs:${material}_ingot`)
    event.shapeless(`9x kubejs:${material}_ingot`, `kubejs:${material}_storage_block`)
    event.shapeless(`kubejs:${material}_ingot`, `9x kubejs:${material}_nugget`)
    event.shapeless(`9x kubejs:${material}_nugget`, `kubejs:${material}_ingot`)
}

function addStorageOre(event, material){
    event.shapeless(`kubejs:${material}_raw_block`, `9x kubejs:${material}_raw_material`)
    event.shapeless(`9x kubejs:${material}_raw_material`, `kubejs:${material}_raw_block`)
}

function addStorageAll(event, material){
    addStorage(event, material)
    addStorageOre(event, material)
}

function addGearRotorRecipe(event, material){
    event.shaped(`kubejs:${material}_gear`, [
        "P P",
        "PRP",
        "PHP"
    ], {
        R: `kubejs:${material}_ring`,
        P: `kubejs:${material}_plate`,
        H: "kubejs:hammer"
    }).damageIngredient("kubejs:hammer", 2)
    event.shaped(`kubejs:${material}_gear`, [
        "PHP",
        "PRP",
        "P P"
    ], {
        R: `kubejs:${material}_ring`,
        P: `kubejs:${material}_plate`,
        H: "kubejs:hammer"
    }).damageIngredient("kubejs:hammer", 2)

    event.shaped(`kubejs:${material}_rotor`, [
        "PMP",
        "BRB",
        "PHP"
    ], {
        R: `kubejs:${material}_ring`,
        P: `kubejs:${material}_curved_plate`,
        M: `kubejs:${material}_rod`,
        B: `kubejs:${material}_bolt`,
        H: "kubejs:hammer"
    }).damageIngredient("kubejs:hammer", 3)
    event.shaped(`kubejs:${material}_rotor`, [
        "PHP",
        "BRB",
        "PMP"
    ], {
        R: `kubejs:${material}_ring`,
        P: `kubejs:${material}_curved_plate`,
        M: `kubejs:${material}_rod`,
        B: `kubejs:${material}_bolt`,
        H: "kubejs:hammer"
    }).damageIngredient("kubejs:hammer", 3)

}

function addBaseNBT(item){
    return Item.of(item, '{"currentInputItem": "minecraft:air", "fuel": 0, "recipeProgress": 0, currentTime: 0}')
}

function addBaseNBTRecipeIndexedMachine(item){
    return Item.of(item, '{"currentRecipe": -1, "fuel": 0, "recipeProgress": 0, currentTime: 0}')
}

ServerEvents.recipes(event => {
    addStorageAll(event, "aluminum")
    addStorage(event, "brass")
    addStorage(event, "bronze")
    addStorageAll(event, "cobalt")
    addStorage(event, "constantan")
    addStorage(event, "electrum")
    addStorage(event, "invar")
    addStorageAll(event, "iridium")
    addStorage(event, "iridium_alloy")
    addStorageAll(event, "lead")
    addStorageAll(event, "nickel")
    addStorageAll(event, "platinum")
    addStorage(event, "steel")
    addStorageAll(event, "tin")
    addStorageAll(event, "titanium")
    addStorageAll(event, "zinc")
    event.shapeless("minecraft:copper_ingot", "9x kubejs:copper_nugget")
    event.shapeless("9x kubejs:copper_nugget", "minecraft:copper_ingot")

    // Tier 1
    event.campfireCooking("kubejs:bronze_chunk", "kubejs:bronze_dust").cookingTime(400)
    event.shapeless("6x kubejs:bronze_nugget", "kubejs:bronze_chunk")
    event.campfireCooking("kubejs:copper_chunk", "minecraft:raw_copper").cookingTime(400)
    event.campfireCooking("kubejs:copper_chunk", "minecraft:copper_ore").cookingTime(400)
    event.campfireCooking("kubejs:copper_chunk", "minecraft:deepslate_copper_ore").cookingTime(400)
    event.campfireCooking("kubejs:copper_chunk", "kubejs:copper_dust").cookingTime(400)
    event.shapeless("6x kubejs:copper_nugget", "kubejs:copper_chunk")
    event.campfireCooking("kubejs:iron_chunk", "minecraft:raw_iron").cookingTime(400)
    event.campfireCooking("kubejs:iron_chunk", "minecraft:iron_ore").cookingTime(400)
    event.campfireCooking("kubejs:iron_chunk", "minecraft:deepslate_iron_ore").cookingTime(400)
    event.campfireCooking("kubejs:iron_chunk", "kubejs:iron_dust").cookingTime(400)
    event.shapeless("6x minecraft:iron_nugget", "kubejs:iron_chunk")
    event.campfireCooking("kubejs:tin_chunk", "kubejs:tin_raw_material").cookingTime(400)
    event.campfireCooking("kubejs:tin_chunk", "kubejs:tin_ore").cookingTime(400)
    event.campfireCooking("kubejs:tin_chunk", "kubejs:tin_ore_deepslate").cookingTime(400)
    event.campfireCooking("kubejs:tin_chunk", "kubejs:tin_dust").cookingTime(400)
    event.shapeless("6x kubejs:tin_nugget", "kubejs:tin_chunk")
    event.campfireCooking("minecraft:brick", "minecraft:clay_ball").cookingTime(400)

    event.shaped("3x kubejs:bronze_dust", ["CC", "CT"], {C: "kubejs:copper_dust", T: "kubejs:tin_dust"})
    event.shaped("3x kubejs:brass_dust", ["CT", "CT"], {C: "kubejs:copper_dust", T: "kubejs:zinc_dust"})
    event.shaped("kubejs:hammer", [" I ", " SI", "S  "], {I: "minecraft:iron_ingot", S: "minecraft:stick"})

    event.shapeless("kubejs:brass_dust", ["kubejs:brass_ingot", "kubejs:hammer"]).damageIngredient("kubejs:hammer", 2)
    event.shapeless("2x kubejs:brass_rod", ["kubejs:brass_ingot", "kubejs:hammer"]).damageIngredient("kubejs:hammer", 2)
    event.shapeless("kubejs:brass_ring", ["kubejs:brass_rod", "kubejs:hammer"]).damageIngredient("kubejs:hammer", 1)
    event.shapeless("kubejs:brass_plate", ["kubejs:brass_ingot", "kubejs:brass_ingot", "kubejs:hammer"]).damageIngredient("kubejs:hammer", 3)
    event.shapeless("kubejs:bronze_dust", ["kubejs:bronze_ingot", "kubejs:hammer"]).damageIngredient("kubejs:hammer", 2)
    event.shapeless("2x kubejs:bronze_rod", ["kubejs:bronze_ingot", "kubejs:hammer"]).damageIngredient("kubejs:hammer", 2)
    event.shapeless("kubejs:bronze_ring", ["kubejs:bronze_rod", "kubejs:hammer"]).damageIngredient("kubejs:hammer", 1)
    event.shapeless("kubejs:bronze_plate", ["kubejs:bronze_ingot", "kubejs:bronze_ingot", "kubejs:hammer"]).damageIngredient("kubejs:hammer", 3)
    event.shapeless("kubejs:copper_dust", ["minecraft:copper_ingot", "kubejs:hammer"]).damageIngredient("kubejs:hammer", 2)
    event.shapeless("2x kubejs:copper_rod", ["minecraft:copper_ingot", "kubejs:hammer"]).damageIngredient("kubejs:hammer", 2)
    event.shapeless("kubejs:copper_ring", ["kubejs:copper_rod", "kubejs:hammer"]).damageIngredient("kubejs:hammer", 1)
    event.shapeless("kubejs:copper_plate", ["minecraft:copper_ingot", "minecraft:copper_ingot", "kubejs:hammer"]).damageIngredient("kubejs:hammer", 3)
    event.shapeless("kubejs:iron_dust", ["minecraft:iron_ingot", "kubejs:hammer"]).damageIngredient("kubejs:hammer", 2)
    event.shapeless("2x kubejs:iron_rod", ["minecraft:iron_ingot", "kubejs:hammer"]).damageIngredient("kubejs:hammer", 2)
    event.shapeless("kubejs:iron_ring", ["kubejs:iron_rod", "kubejs:hammer"]).damageIngredient("kubejs:hammer", 1)
    event.shapeless("kubejs:iron_plate", ["minecraft:iron_ingot", "minecraft:iron_ingot", "kubejs:hammer"]).damageIngredient("kubejs:hammer", 3)
    event.shapeless("kubejs:tin_dust", ["kubejs:tin_ingot", "kubejs:hammer"]).damageIngredient("kubejs:hammer", 2)
    event.shapeless("2x kubejs:tin_rod", ["kubejs:tin_ingot", "kubejs:hammer"]).damageIngredient("kubejs:hammer", 2)
    event.shapeless("kubejs:tin_ring", ["kubejs:tin_rod", "kubejs:hammer"]).damageIngredient("kubejs:hammer", 1)
    event.shapeless("kubejs:tin_plate", ["kubejs:tin_ingot", "kubejs:tin_ingot", "kubejs:hammer"]).damageIngredient("kubejs:hammer", 3)
    event.shapeless("kubejs:zinc_dust", ["kubejs:zinc_ingot", "kubejs:hammer"]).damageIngredient("kubejs:hammer", 2)
    event.shapeless("2x kubejs:zinc_rod", ["kubejs:zinc_ingot", "kubejs:hammer"]).damageIngredient("kubejs:hammer", 2)
    event.shapeless("kubejs:zinc_ring", ["kubejs:zinc_rod", "kubejs:hammer"]).damageIngredient("kubejs:hammer", 1)
    event.shapeless("kubejs:zinc_plate", ["kubejs:zinc_ingot", "kubejs:zinc_ingot", "kubejs:hammer"]).damageIngredient("kubejs:hammer", 3)

    addGearRotorRecipe(event, "aluminum")
    addGearRotorRecipe(event, "brass")
    addGearRotorRecipe(event, "bronze")
    addGearRotorRecipe(event, "cobalt")
    addGearRotorRecipe(event, "constantan")
    addGearRotorRecipe(event, "copper")
    addGearRotorRecipe(event, "diamond")
    addGearRotorRecipe(event, "electrum")
    addGearRotorRecipe(event, "emerald")
    addGearRotorRecipe(event, "gold")
    addGearRotorRecipe(event, "invar")
    addGearRotorRecipe(event, "iridium")
    addGearRotorRecipe(event, "iridium_alloy")
    addGearRotorRecipe(event, "iron")
    addGearRotorRecipe(event, "lapis_lazuli")
    addGearRotorRecipe(event, "lead")
    addGearRotorRecipe(event, "nickel")
    addGearRotorRecipe(event, "platinum")
    addGearRotorRecipe(event, "steel")
    addGearRotorRecipe(event, "tin")
    addGearRotorRecipe(event, "titanium")
    addGearRotorRecipe(event, "zinc")

    event.shaped("kubejs:bronze_machine_casing", [
        "PRP", 
        "RGR", 
        "PRP"
    ], {
        G: "kubejs:bronze_gear",
        P: "kubejs:bronze_plate",
        R: "minecraft:redstone"
    })

    event.shaped(addBaseNBT('kubejs:inventory_furnace_tier_1'), [
        "PPP", 
        "PCP", 
        "BBB"
    ], {
        P: "kubejs:bronze_plate",
        C: "minecraft:coal_block",
        B: "minecraft:bricks"
    })
    event.shaped(addBaseNBT('kubejs:inventory_compressor_tier_1'), [
        "PHP", 
        "GCG", 
        "PAP"
    ], {
        H: Item.of('kubejs:hammer', '{Damage:0}').strongNBT(),
        C: "kubejs:bronze_machine_casing",
        P: "kubejs:bronze_plate",
        G: "kubejs:brass_plate",
        A: "minecraft:anvil"
    })
    event.shaped(addBaseNBT('kubejs:inventory_cutting_machine_tier_1'), [
        "PDP", 
        "GCG", 
        "PBP"
    ], {
        C: "kubejs:bronze_machine_casing",
        G: "kubejs:brass_gear",
        P: "kubejs:bronze_curved_plate",
        D: "minecraft:diamond",
        B: "minecraft:bricks"
    })
    event.shaped(addBaseNBT('kubejs:inventory_macerator_tier_1'), [
        "DBD", 
        "RCR", 
        "PPP"
    ], {
        C: "kubejs:bronze_machine_casing",
        R: "kubejs:brass_rotor",
        B: "kubejs:bronze_rotor",
        D: "minecraft:diamond",
        P: "kubejs:bronze_plate"
    })

    event.shaped("kubejs:inventory_hopper_tier_1", [
        "IPI", 
        "I I", 
        " I "
    ], {
        P: "kubejs:iron_plate",
        I: "minecraft:iron_ingot"
    })
    event.shapeless("kubejs:inventory_hopper_tier_1", ["kubejs:inventory_hopper_right_facing_tier_1"])
    event.shaped("kubejs:inventory_hopper_tier_2", [
        "IGI", 
        "IHI", 
        " I "
    ], {
        G: "kubejs:gold_gear",
        I: "minecraft:gold_ingot",
        H: "#kubejs:inventory_hoppers_tier_1"
    })
    event.shapeless("kubejs:inventory_hopper_tier_2", ["kubejs:inventory_hopper_right_facing_tier_2"])
    event.shaped("kubejs:inventory_hopper_tier_3", [
        "IRI", 
        "IHI", 
        " I "
    ], {
        R: "kubejs:diamond_rotor",
        I: "minecraft:diamond",
        H: "#kubejs:inventory_hoppers_tier_2"
    })
    event.shapeless("kubejs:inventory_hopper_tier_3", ["kubejs:inventory_hopper_right_facing_tier_3"])
    event.shaped("kubejs:inventory_hopper_left_facing_tier_1", [
        " II", 
        "I P", 
        " II"
    ], {
        P: "kubejs:iron_plate",
        I: "minecraft:iron_ingot"
    })
    event.shapeless("kubejs:inventory_hopper_left_facing_tier_1", ["kubejs:inventory_hopper_tier_1"])
    event.shaped("kubejs:inventory_hopper_left_facing_tier_2", [
        " II", 
        "IHG", 
        " II"
    ], {
        G: "kubejs:gold_gear",
        I: "minecraft:gold_ingot",
        H: "#kubejs:inventory_hoppers_tier_1"
    })
    event.shapeless("kubejs:inventory_hopper_left_facing_tier_2", ["kubejs:inventory_hopper_tier_2"])
    event.shaped("kubejs:inventory_hopper_left_facing_tier_3", [
        " II", 
        "IHR", 
        " II"
    ], {
        R: "kubejs:diamond_rotor",
        I: "minecraft:diamond",
        H: "#kubejs:inventory_hoppers_tier_2"
    })
    event.shapeless("kubejs:inventory_hopper_left_facing_tier_3", ["kubejs:inventory_hopper_tier_3"])
    event.shaped("kubejs:inventory_upper_tier_1", [
        " I ", 
        "I I", 
        "IPI"
    ], {
        P: "kubejs:iron_plate",
        I: "minecraft:iron_ingot"
    })
    event.shapeless("kubejs:inventory_upper_tier_1", ["kubejs:inventory_hopper_left_facing_tier_1"])
    event.shaped("kubejs:inventory_upper_tier_2", [
        " I ", 
        "IHI", 
        "IGI"
    ], {
        G: "kubejs:gold_gear",
        I: "minecraft:gold_ingot",
        H: "#kubejs:inventory_hoppers_tier_1"
    })
    event.shapeless("kubejs:inventory_upper_tier_2", ["kubejs:inventory_hopper_left_facing_tier_2"])
    event.shaped("kubejs:inventory_upper_tier_3", [
        " I ", 
        "IHI", 
        "IRI"
    ], {
        R: "kubejs:diamond_rotor",
        I: "minecraft:diamond",
        H: "#kubejs:inventory_hoppers_tier_2"
    })
    event.shapeless("kubejs:inventory_upper_tier_3", ["kubejs:inventory_hopper_left_facing_tier_3"])
    event.shaped("kubejs:inventory_hopper_right_facing_tier_1", [
        "II ", 
        "P I", 
        "II "
    ], {
        P: "kubejs:iron_plate",
        I: "minecraft:iron_ingot"
    })
    event.shapeless("kubejs:inventory_hopper_right_facing_tier_1", ["kubejs:inventory_upper_tier_1"])
    event.shaped("kubejs:inventory_hopper_right_facing_tier_2", [
        "II ", 
        "GHI", 
        "II "
    ], {
        G: "kubejs:gold_gear",
        I: "minecraft:gold_ingot",
        H: "#kubejs:inventory_hoppers_tier_1"
    })
    event.shapeless("kubejs:inventory_hopper_right_facing_tier_2", ["kubejs:inventory_upper_tier_2"])
    event.shaped("kubejs:inventory_hopper_right_facing_tier_3", [
        "II ", 
        "RHI", 
        "II "
    ], {
        R: "kubejs:diamond_rotor",
        I: "minecraft:diamond",
        H: "#kubejs:inventory_hoppers_tier_2"
    })
    event.shapeless("kubejs:inventory_hopper_right_facing_tier_3", ["kubejs:inventory_upper_tier_3"])

    event.shaped("kubejs:inventory_simulator_tier_1", [
        "PGD", 
        "IHI", 
        "PGP"
    ], {
        D: "kubejs:diamond_gear",
        G: "kubejs:gold_dust",
        H: "#kubejs:inventory_hoppers_tier_1",
        I: "kubejs:iron_gear",
        P: "kubejs:iron_curved_plate"
    })

    // tier 2
    event.shaped(addBaseNBT("kubejs:inventory_coke_oven_tier_1"), [
        "PBP", 
        "BCB", 
        "BCB"
    ], {
        B: "minecraft:bricks",
        C: "kubejs:bronze_machine_casing",
        P: "kubejs:bronze_plate"
    })
    event.shaped(addBaseNBTRecipeIndexedMachine("kubejs:inventory_blast_furnace_tier_1"), [
        "BDB", 
        "BCB", 
        "PCP"
    ], {
        D: "kubejs:coal_coke_dust",
        C: "kubejs:bronze_machine_casing",
        P: "kubejs:bronze_plate",
        B: "minecraft:bricks"
    })

    event.shaped("kubejs:steel_machine_casing", [
        "PRP", 
        "BGB", 
        "PRP"
    ], {
        G: "kubejs:steel_gear",
        P: "kubejs:steel_plate",
        R: "minecraft:redstone",
        B: "kubejs:steel_bolt"
    })
    event.shaped("kubejs:steel_machine_casing", [
        "PBP", 
        "RGR", 
        "PBP"
    ], {
        G: "kubejs:steel_gear",
        P: "kubejs:steel_plate",
        R: "minecraft:redstone",
        B: "kubejs:steel_bolt"
    })
    event.shaped("kubejs:invar_dust", ["II", "N"], {I: "kubejs:iron_dust", N: "kubejs:nickel_dust"})

    event.shaped(addBaseNBT("kubejs:inventory_furnace_tier_2"), [
        "PGP", 
        "ICI", 
        "PFP"
    ], {
        C: "kubejs:steel_machine_casing",
        F: "kubejs:inventory_furnace_tier_1",
        G: "kubejs:invar_gear",
        P: "kubejs:steel_plate",
        I: "kubejs:invar_plate"
    })
    event.shaped(addBaseNBT("kubejs:inventory_compressor_tier_2"), [
        "PGP", 
        "ICI", 
        "PFP"
    ], {
        C: "kubejs:steel_machine_casing",
        F: "kubejs:inventory_compressor_tier_1",
        G: "kubejs:invar_gear",
        P: "kubejs:steel_plate",
        I: "kubejs:invar_plate"
    })
    event.shaped(addBaseNBT("kubejs:inventory_cutting_machine_tier_2"), [
        "PGP", 
        "ICI", 
        "PFP"
    ], {
        C: "kubejs:steel_machine_casing",
        F: "kubejs:inventory_cutting_machine_tier_1",
        G: "kubejs:invar_gear",
        P: "kubejs:steel_plate",
        I: "kubejs:invar_plate"
    })
    event.shaped(addBaseNBT("kubejs:inventory_macerator_tier_2"), [
        "PGP", 
        "ICI", 
        "PFP"
    ], {
        C: "kubejs:steel_machine_casing",
        F: "kubejs:inventory_macerator_tier_1",
        G: "kubejs:invar_gear",
        P: "kubejs:steel_plate",
        I: "kubejs:invar_plate"
    })

    event.shaped(addBaseNBTRecipeIndexedMachine("kubejs:inventory_mixer_tier_1"), [
        "PGP", 
        "ICI", 
        "PSP"
    ], {
        C: "kubejs:steel_machine_casing",
        G: "kubejs:gold_gear",
        P: "kubejs:steel_curved_plate",
        I: "kubejs:invar_rotor",
        S: "kubejs:steel_rotor"
    })
    event.shaped(addBaseNBT("kubejs:inventory_wiremill_tier_1"), [
        "PGP", 
        "ICI", 
        "PGP"
    ], {
        C: "kubejs:steel_machine_casing",
        G: "kubejs:steel_gear",
        P: "kubejs:steel_curved_plate",
        I: "kubejs:invar_rotor",
    })

    event.shaped(addBaseNBT("kubejs:inventory_coke_oven_tier_2"), [
        "PIP", 
        "WCW", 
        "PFP"
    ], {
        C: "kubejs:steel_machine_casing",
        F: "kubejs:inventory_coke_oven_tier_1",
        W: "kubejs:invar_wire",
        P: "kubejs:steel_curved_plate",
        I: "kubejs:invar_plate"
    })
    event.shaped(addBaseNBTRecipeIndexedMachine("kubejs:inventory_blast_furnace_tier_2"), [
        "PWP", 
        "ICI", 
        "PFP"
    ], {
        C: "kubejs:steel_machine_casing",
        F: "kubejs:inventory_blast_furnace_tier_1",
        W: "kubejs:invar_wire",
        P: "kubejs:steel_curved_plate",
        I: "kubejs:invar_gear"
    })
})