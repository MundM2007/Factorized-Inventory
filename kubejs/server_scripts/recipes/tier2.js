ServerEvents.recipes(event => {
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
    event.shaped("2x kubejs:invar_dust", [
        "II", 
        "NH"
    ], {
        I: "kubejs:iron_dust", 
        N: "kubejs:nickel_ingot",
        H: global.hammers
    }
    ).damageIngredient(global.hammers, 1)

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
    event.shaped(addBaseNBTRecipeIndexedMachine("kubejs:inventory_packer_tier_2"), [
        "PGP",
        "ICI",
        "PFP"
    ], {
        C: "kubejs:steel_machine_casing",
        F: "kubejs:inventory_packer_tier_1",
        G: "kubejs:invar_gear",
        P: "kubejs:steel_plate",
        I: "kubejs:invar_plate"
    })
    event.shaped(addBaseNBT("kubejs:inventory_unpacker_tier_2"), [
        "PGP",
        "ICI",
        "PFP"
    ], {
        C: "kubejs:steel_machine_casing",
        F: "kubejs:inventory_unpacker_tier_1",
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

    event.shaped("kubejs:copper_drill_head", [
        "BCP", 
        "RGC", 
        "IRB"
    ], {
        C: "kubejs:copper_curved_plate",
        R: "kubejs:copper_rod",
        G: "kubejs:copper_gear",
        P: "kubejs:copper_plate",
        B: "kubejs:copper_bolt",
        I: "kubejs:copper_ring"
    })
    event.shaped("kubejs:bronze_drill_head", [
        "BCP", 
        "RGC", 
        "IRB"
    ], {
        C: "kubejs:bronze_curved_plate",
        R: "kubejs:bronze_rod",
        G: "kubejs:bronze_gear",
        P: "kubejs:bronze_plate",
        B: "kubejs:bronze_bolt",
        I: "kubejs:bronze_ring"
    })
    event.shaped("kubejs:steel_drill_head", [
        "BCP", 
        "RGC", 
        "IRB"
    ], {
        C: "kubejs:steel_curved_plate",
        R: "kubejs:steel_rod",
        G: "kubejs:steel_gear",
        P: "kubejs:steel_plate",
        B: "kubejs:steel_bolt",
        I: "kubejs:steel_ring"
    })
    event.shaped("kubejs:gold_drill_head", [
        "BCP", 
        "RGC", 
        "IRB"
    ], {
        G: "kubejs:gold_curved_plate",
        R: "kubejs:gold_rod",
        C: "kubejs:gold_gear",
        P: "kubejs:gold_plate",
        B: "kubejs:gold_bolt",
        I: "kubejs:gold_ring"
    })

    event.shaped("kubejs:motor", [
        "PWB", 
        "WRW", 
        "GWP"
    ], {
        G: "kubejs:steel_gear",
        R: "kubejs:steel_rod",
        P: "kubejs:steel_curved_plate",
        W: "kubejs:copper_wire",
        B: "kubejs:steel_bolt"
    })
    event.shaped("kubejs:motor", [
        "BWP", 
        "WRW", 
        "PWG"
    ], {
        G: "kubejs:steel_gear",
        R: "kubejs:steel_rod",
        P: "kubejs:steel_curved_plate",
        W: "kubejs:copper_wire",
        B: "kubejs:steel_bolt"
    })

    event.shaped("kubejs:capacitor", [
        " P ", 
        "WIW", 
        " P "
    ], {
        P: "kubejs:gold_plate",
        W: "kubejs:copper_wire",
        I: "kubejs:battery_alloy_plate"
    })
    event.shaped("kubejs:resistor", [
        "W W", 
        "WBW", 
        "W W"
    ], {
        B: "minecraft:brick",
        W: "kubejs:copper_wire"
    })
    event.shaped("kubejs:inductor", [
        "WWW", 
        "WRW", 
        "WWW"
    ], {
        W: "kubejs:copper_wire",
        R: "kubejs:steel_rod"
    })

    event.shaped("kubejs:analog_circuit", [
        "WPW", 
        "CWC", 
        "RIR"
    ], {
        P: "kubejs:lapis_lazuli_plate",
        W: "kubejs:copper_wire",
        C: "kubejs:capacitor",
        R: "kubejs:resistor",
        I: "kubejs:inductor"
    })

    event.shaped(addBaseNBTRecipeIndexedMachine("kubejs:inventory_assembler_tier_1"), [
        "PMP", 
        "ACA", 
        "PMP"
    ], {
        C: "kubejs:steel_machine_casing",
        A: "kubejs:analog_circuit",
        P: "kubejs:steel_curved_plate",
        M: "kubejs:motor"
    })

    event.shaped("4x kubejs:copper_drill", [
        " BH", 
        "GIB",
        "IG "
    ], {
        H: "kubejs:copper_drill_head",
        G: "kubejs:iron_gear",
        B: "kubejs:iron_bolt",
        I: "kubejs:iron_rod"
    })
    event.shaped("4x kubejs:bronze_drill", [
        " BH", 
        "GIB",
        "IG "
    ], {
        H: "kubejs:bronze_drill_head",
        G: "kubejs:iron_gear",
        B: "kubejs:iron_bolt",
        I: "kubejs:iron_rod"
    })

    event.shaped("4x kubejs:steel_drill", [
        "BGH", 
        "AMG",
        "IAB"
    ], {
        H: "kubejs:steel_drill_head",
        G: "kubejs:iron_gear",
        B: "kubejs:iron_bolt",
        I: "kubejs:iron_rod",
        M: "kubejs:motor",
        A: "kubejs:analog_circuit"
    })
    event.shaped("4x kubejs:gold_drill", [
        "BGH", 
        "AMG",
        "IAB"
    ], {
        H: "kubejs:gold_drill_head",
        G: "kubejs:iron_gear",
        B: "kubejs:iron_bolt",
        I: "kubejs:iron_rod",
        M: "kubejs:motor",
        A: "kubejs:analog_circuit"
    })

    event.shaped("kubejs:inventory_simulator_tier_2", [
        "PGS", 
        "IHI", 
        "PGP"
    ], {
        S: "kubejs:inventory_simulator_tier_1",
        G: "kubejs:gold_dust",
        H: "#kubejs:inventory_hoppers_tier_2",
        I: "kubejs:steel_gear",
        P: "kubejs:steel_curved_plate"
    })

    event.shaped(addBaseNBTQuarry("kubejs:inventory_quarry_tier_1"), [
        "PAP", 
        "MCM", 
        "MCM"
    ], {
        C: "kubejs:steel_machine_casing",
        A: "kubejs:analog_circuit",
        P: "kubejs:steel_curved_plate",
        M: "kubejs:motor"
    })

    event.shaped("kubejs:steel_hammer", [" I ", " SI", "S  "], {I: "kubejs:steel_ingot", S: "minecraft:stick"})
    
    event.shaped("storagedrawers:controller", [
        "SGS",
        "CDC",
        "SIS"
    ], {
        S: "kubejs:steel_plate",
        I: "minecraft:diamond",
        C: "minecraft:comparator",
        D: "#storagedrawers:drawers",
        G: "kubejs:invar_gear"
    })
    event.shaped("storagedrawers:controller_slave", [
        "SGS",
        "CDC",
        "SIS"
    ], {
        S: "kubejs:steel_plate",
        I: "minecraft:gold_ingot",
        C: "minecraft:comparator",
        D: "#storagedrawers:drawers",
        G: "kubejs:invar_gear"
    })
})