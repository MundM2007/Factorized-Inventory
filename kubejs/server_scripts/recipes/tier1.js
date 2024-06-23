function addGearRotorRecipe(event, material){
    event.shaped(`kubejs:${material}_gear`, [
        "P P",
        "PRP",
        "PHP"
    ], {
        R: `kubejs:${material}_ring`,
        P: `kubejs:${material}_plate`,
        H: global.hammers
    }).damageIngredient(global.hammers, 2)
    event.shaped(`kubejs:${material}_gear`, [
        "PHP",
        "PRP",
        "P P"
    ], {
        R: `kubejs:${material}_ring`,
        P: `kubejs:${material}_plate`,
        H: global.hammers
    }).damageIngredient(global.hammers, 2)

    event.shaped(`kubejs:${material}_rotor`, [
        "PMP",
        "BRB",
        "PHP"
    ], {
        R: `kubejs:${material}_ring`,
        P: `kubejs:${material}_curved_plate`,
        M: `kubejs:${material}_rod`,
        B: `kubejs:${material}_bolt`,
        H: global.hammers
    }).damageIngredient(global.hammers, 3)
    event.shaped(`kubejs:${material}_rotor`, [
        "PHP",
        "BRB",
        "PMP"
    ], {
        R: `kubejs:${material}_ring`,
        P: `kubejs:${material}_curved_plate`,
        M: `kubejs:${material}_rod`,
        B: `kubejs:${material}_bolt`,
        H: global.hammers
    }).damageIngredient(global.hammers, 3)

}

function addBaseNBT(item){
    return Item.of(item, '{"currentInputItem": "minecraft:air", "fuel": 0, "recipeProgress": 0, currentTime: 0}')
}

function addBaseNBTRecipeIndexedMachine(item){
    return Item.of(item, '{"currentRecipe": -1, "fuel": 0, "recipeProgress": 0, currentTime: 0}')
}

function addBaseNBTQuarry(item){
    return Item.of(item, '{"currentInputItem": "minecraft:air", "currentOutputItem": "minecraft:air", "fuel": 0, "recipeProgress": 0, currentTime: 0}')
}

ServerEvents.recipes(event => {
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
    event.shaped("kubejs:iron_hammer", [" I ", " SI", "S  "], {I: "minecraft:iron_ingot", S: "minecraft:stick"})

    event.shapeless("kubejs:brass_dust", ["kubejs:brass_ingot", global.hammers]).damageIngredient(global.hammers, 2)
    event.shapeless("2x kubejs:brass_rod", ["kubejs:brass_ingot", global.hammers]).damageIngredient(global.hammers, 2)
    event.shapeless("kubejs:brass_ring", ["kubejs:brass_rod", global.hammers]).damageIngredient(global.hammers, 1)
    event.shapeless("kubejs:brass_plate", ["kubejs:brass_ingot", "kubejs:brass_ingot", global.hammers]).damageIngredient(global.hammers, 3)
    event.shapeless("kubejs:bronze_dust", ["kubejs:bronze_ingot", global.hammers]).damageIngredient(global.hammers, 2)
    event.shapeless("2x kubejs:bronze_rod", ["kubejs:bronze_ingot", global.hammers]).damageIngredient(global.hammers, 2)
    event.shapeless("kubejs:bronze_ring", ["kubejs:bronze_rod", global.hammers]).damageIngredient(global.hammers, 1)
    event.shapeless("kubejs:bronze_plate", ["kubejs:bronze_ingot", "kubejs:bronze_ingot", global.hammers]).damageIngredient(global.hammers, 3)
    event.shapeless("kubejs:copper_dust", ["minecraft:copper_ingot", global.hammers]).damageIngredient(global.hammers, 2)
    event.shapeless("2x kubejs:copper_rod", ["minecraft:copper_ingot", global.hammers]).damageIngredient(global.hammers, 2)
    event.shapeless("kubejs:copper_ring", ["kubejs:copper_rod", global.hammers]).damageIngredient(global.hammers, 1)
    event.shapeless("kubejs:copper_plate", ["minecraft:copper_ingot", "minecraft:copper_ingot", global.hammers]).damageIngredient(global.hammers, 3)
    event.shapeless("kubejs:iron_dust", ["minecraft:iron_ingot", global.hammers]).damageIngredient(global.hammers, 2)
    event.shapeless("2x kubejs:iron_rod", ["minecraft:iron_ingot", global.hammers]).damageIngredient(global.hammers, 2)
    event.shapeless("kubejs:iron_ring", ["kubejs:iron_rod", global.hammers]).damageIngredient(global.hammers, 1)
    event.shapeless("kubejs:iron_plate", ["minecraft:iron_ingot", "minecraft:iron_ingot", global.hammers]).damageIngredient(global.hammers, 3)
    event.shapeless("kubejs:tin_dust", ["kubejs:tin_ingot", global.hammers]).damageIngredient(global.hammers, 2)
    event.shapeless("2x kubejs:tin_rod", ["kubejs:tin_ingot", global.hammers]).damageIngredient(global.hammers, 2)
    event.shapeless("kubejs:tin_ring", ["kubejs:tin_rod", global.hammers]).damageIngredient(global.hammers, 1)
    event.shapeless("kubejs:tin_plate", ["kubejs:tin_ingot", "kubejs:tin_ingot", global.hammers]).damageIngredient(global.hammers, 3)
    event.shapeless("kubejs:zinc_dust", ["kubejs:zinc_ingot", global.hammers]).damageIngredient(global.hammers, 2)
    event.shapeless("2x kubejs:zinc_rod", ["kubejs:zinc_ingot", global.hammers]).damageIngredient(global.hammers, 2)
    event.shapeless("kubejs:zinc_ring", ["kubejs:zinc_rod", global.hammers]).damageIngredient(global.hammers, 1)
    event.shapeless("kubejs:zinc_plate", ["kubejs:zinc_ingot", "kubejs:zinc_ingot", global.hammers]).damageIngredient(global.hammers, 3)

    //addGearRotorRecipe(event, "aluminum")
    addGearRotorRecipe(event, "brass")
    addGearRotorRecipe(event, "bronze")
    //addGearRotorRecipe(event, "cobalt")
    //addGearRotorRecipe(event, "constantan")
    addGearRotorRecipe(event, "copper")
    addGearRotorRecipe(event, "diamond")
    //addGearRotorRecipe(event, "electrum")
    addGearRotorRecipe(event, "emerald")
    addGearRotorRecipe(event, "gold")
    addGearRotorRecipe(event, "invar")
    //addGearRotorRecipe(event, "iridium")
    //addGearRotorRecipe(event, "iridium_alloy")
    addGearRotorRecipe(event, "iron")
    addGearRotorRecipe(event, "lapis_lazuli")
    addGearRotorRecipe(event, "lead")
    addGearRotorRecipe(event, "nickel")
    //addGearRotorRecipe(event, "platinum")
    addGearRotorRecipe(event, "steel")
    addGearRotorRecipe(event, "tin")
    //addGearRotorRecipe(event, "titanium")
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

    event.shaped("kubejs:inventory_puller_tier_1", [
        "PI ",
        "   ",
        "   "
    ], {
        P: "kubejs:inventory_puller_tier_1",
        I: Ingredient.all
    })
    .noShrink()
    .noMirror()
    .keepIngredient(1)
    .modifyResult((grid, result) => {
        let storedItem = grid.get(0).nbt.Item
        if(storedItem){
            return result.withNBT({filter: grid.get(1).id, Item: storedItem})
        }
        return result.withNBT({filter: grid.get(1).id})
    })
    event.shaped("kubejs:inventory_puller_tier_2", [
        "PI ",
        "   ",
        "   "
    ], {
        P: "kubejs:inventory_puller_tier_2",
        I: Ingredient.all
    })
    .noShrink()
    .noMirror()
    .keepIngredient(1)
    .modifyResult((grid, result) => {
        let storedItem = grid.get(0).nbt.Item
        if(storedItem){
            return result.withNBT({filter: grid.get(1).id, Item: storedItem})
        }
        return result.withNBT({filter: grid.get(1).id})
    })
    event.shaped("kubejs:inventory_puller_tier_3", [
        "PI ",
        "   ",
        "   "
    ], {
        P: "kubejs:inventory_puller_tier_3",
        I: Ingredient.all
    })
    .noShrink()
    .noMirror()
    .keepIngredient(1)
    .modifyResult((grid, result) => {
        let storedItem = grid.get(0).nbt.Item
        if(storedItem){
            return result.withNBT({filter: grid.get(1).id, Item: storedItem})
        }
        return result.withNBT({filter: grid.get(1).id})
    })

    event.shaped("kubejs:inventory_pusher_tier_1", [
        "CCC", 
        "CGC", 
        "CHC"
    ], {
        H: "kubejs:inventory_hopper_tier_1",
        C: "minecraft:cobblestone",
        G: "kubejs:iron_gear"
    })
    event.shaped("kubejs:inventory_pusher_tier_2", [
        "CCC", 
        "CGC", 
        "CHC"
    ], {
        H: "kubejs:inventory_hopper_tier_2",
        C: "minecraft:cobblestone",
        G: "kubejs:iron_gear"
    })
    event.shaped("kubejs:inventory_pusher_tier_2", [
        "IGI", 
        "IPI", 
        " I "
    ], {
        G: "kubejs:gold_gear",
        I: "minecraft:gold_ingot",
        P: "kubejs:inventory_pusher_tier_1"
    })
    event.shaped("kubejs:inventory_pusher_tier_3", [
        "CCC", 
        "CGC", 
        "CHC"
    ], {
        H: "kubejs:inventory_hopper_tier_3",
        C: "minecraft:cobblestone",
        G: "kubejs:iron_gear"
    })
    event.shaped("kubejs:inventory_pusher_tier_3", [
        "IRI", 
        "IPI", 
        " I "
    ], {
        R: "kubejs:diamond_rotor",
        I: "minecraft:diamond",
        P: "kubejs:inventory_pusher_tier_2"
    })

    event.shaped(Item.of("kubejs:inventory_puller_tier_1", '{"filter": "minecraft:air"}'), [
        "CHC", 
        "CRC", 
        "CCC"
    ], {
        H: "kubejs:inventory_hopper_tier_1",
        C: "minecraft:cobblestone",
        R: "minecraft:redstone_block"
    })
    event.shaped(Item.of("kubejs:inventory_puller_tier_2", '{"filter": "minecraft:air"}'), [
        "CHC", 
        "CRC", 
        "CCC"
    ], {
        H: "kubejs:inventory_hopper_tier_2",
        C: "minecraft:cobblestone",
        R: "minecraft:redstone_block"
    })
    event.shaped("kubejs:inventory_puller_tier_2", [
        "IGI", 
        "IPI", 
        " I "
    ], {
        G: "kubejs:gold_gear",
        I: "minecraft:gold_ingot",
        P: "kubejs:inventory_puller_tier_1"
    }).modifyResult((grid, result) => {
        let item = grid.find(Item.of("kubejs:inventory_puller_tier_2"))
        return result.withNBT(item.nbt)
    })
    event.shaped(Item.of("kubejs:inventory_puller_tier_3", '{"filter": "minecraft:air"}'), [
        "CHC", 
        "CRC", 
        "CCC"
    ], {
        H: "kubejs:inventory_hopper_tier_3",
        C: "minecraft:cobblestone",
        R: "minecraft:redstone_block"
    })
    event.shaped("kubejs:inventory_puller_tier_3", [
        "IRI", 
        "IPI", 
        " I "
    ], {
        R: "kubejs:diamond_rotor",
        I: "minecraft:diamond",
        P: "kubejs:inventory_puller_tier_2"
    }).modifyResult((grid, result) => {
        let item = grid.find(Item.of("kubejs:inventory_puller_tier_2"))
        return result.withNBT(item.nbt)
    })

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

    event.shaped(addBaseNBTRecipeIndexedMachine("kubejs:inventory_packer_tier_1"), [
        "CPC",
        "GBG",
        "CPC"
    ], {
        C: "kubejs:bronze_curved_plate",
        P: "minecraft:piston",
        G: "kubejs:brass_gear",
        B: "kubejs:bronze_machine_casing"
    })
    event.shaped(addBaseNBT("kubejs:inventory_unpacker_tier_1"), [
        "CPC",
        "GBG",
        "CPC"
    ], {
        C: "kubejs:bronze_curved_plate",
        P: "minecraft:sticky_piston",
        G: "kubejs:brass_gear",
        B: "kubejs:bronze_machine_casing"
    })

    // templates
    event.shaped("kubejs:drawer_template_1x1", [
        " D ", 
        "DPD", 
        " D "
    ], {
        P: "minecraft:paper",
        D: /storagedrawers:.*_drawers_1/
    })
    event.shaped("kubejs:drawer_template_1x2", [
        " D ",
        "DPD",
        " D "
    ], {
        P: "minecraft:paper",
        D: /storagedrawers:.*_drawers_2/
    })
    event.shaped("kubejs:drawer_template_2x2", [
        " D ",
        "DPD",
        " D "
    ], {
        P: "minecraft:paper",
        D: /storagedrawers:.*_drawers_4/
    })
    event.shaped("kubejs:block_template", [
        "SSS", 
        "SPS", 
        "SSS"
    ], {
        P: "minecraft:paper",
        S: "minecraft:stone"
    })
    event.shaped("kubejs:boat_template", [
        "BBB", 
        "BPB", 
        "BBB"
    ], {
        P: "minecraft:paper",
        B: '#minecraft:boats'
    })
    event.shaped("kubejs:button_template", [
        "BBB", 
        "BPB", 
        "BBB"
    ], {
        P: "minecraft:paper",
        B: '#minecraft:buttons'
    })
    event.shaped("kubejs:carpet_template", [
        "CCC",
        "CPC",
        "CCC",
    ], {
        P: "minecraft:paper",
        C: Ingredient.of(['#minecraft:wool_carpets', 'minecraft:moss_carpet'])
    })
    event.shaped("kubejs:color_template", [
        "ROY", 
        "MPI", 
        "UBL"
    ], {
        P: "minecraft:paper",
        R: "minecraft:red_dye",
        O: "minecraft:orange_dye",
        Y: "minecraft:yellow_dye",
        M: "minecraft:magenta_dye",
        I: "minecraft:lime_dye",
        U: "minecraft:purple_dye",
        B: "minecraft:blue_dye",
        L: "minecraft:light_blue_dye"
    })
    event.shaped("kubejs:door_template", [
        "DDD", 
        "DPD", 
        "DDD"
    ], {
        P: "minecraft:paper",
        D: '#minecraft:doors'
    })
    event.shaped("kubejs:fence_gate_template", [
        "FFF", 
        "FPF", 
        "FFF"
    ], {
        P: "minecraft:paper",
        F: '#forge:fence_gates'
    })
    event.shaped("kubejs:fence_template", [
        "FFF", 
        "FPF", 
        "FFF"
    ], {
        P: "minecraft:paper",
        F: '#minecraft:fences'
    })
    event.shaped("kubejs:glass_pane_template", [
        "GGG", 
        "GPG", 
        "GGG"
    ], {
        P: "minecraft:paper",
        G: '#forge:glass_panes'
    })
    event.shaped("kubejs:log_template", [
        "LLL", 
        "LPL", 
        "LLL"
    ], {
        P: "minecraft:paper",
        L: '#minecraft:logs'
    })
    event.shaped("kubejs:pressure_plate_template", [
        "SSS", 
        "SPS", 
        "SSS"
    ], {
        P: "minecraft:paper",
        S: Ingredient.of([
            '#minecraft:wooden_pressure_plates', 
            "minecraft:stone_pressure_plate", 
            "minecraft:polished_blackstone_pressure_plate", 
            "minecraft:light_weighted_pressure_plate", 
            "minecraft:heavy_weighted_pressure_plate"
        ])
    })
    event.shaped("kubejs:sign_template", [
        "SSS", 
        "SPS", 
        "SSS"
    ], {
        P: "minecraft:paper",
        S: '#minecraft:signs'
    })
    event.shaped("kubejs:slab_template", [
        "SSS", 
        "SPS", 
        "SSS"
    ], {
        P: "minecraft:paper",
        S: '#minecraft:slabs'
    })
    event.shaped("kubejs:stairs_template", [
        "SSS", 
        "SPS", 
        "SSS"
    ], {
        P: "minecraft:paper",
        S: '#minecraft:stairs'
    })
    event.shaped("kubejs:trapdoor_template", [
        "TTT", 
        "TPT", 
        "TTT"
    ], {
        P: "minecraft:paper",
        T: '#minecraft:trapdoors'
    })
    event.shaped("kubejs:wall_template", [
        "WWW", 
        "WPW", 
        "WWW"
    ], {
        P: "minecraft:paper",
        W: '#minecraft:walls'
    })
    event.shaped("kubejs:waxing_template", [
        "WWW", 
        "WPW", 
        "WWW"
    ], {
        P: "minecraft:paper",
        W: 'minecraft:honeycomb'
    })
    
    event.shaped("2x storagedrawers:compacting_drawers_3", [
        "SIS",
        "PDP",
        "SRS"
    ], {
        S: "minecraft:stone",
        I: "kubejs:iron_plate",
        P: "minecraft:piston",
        D: "#storagedrawers:drawers",
        R: "kubejs:iron_rotor"
    })
    
    event.shaped("storagedrawers:obsidian_storage_upgrade", [
        "SSS",
        "TOT",
        "SSS"
    ], {
        S: "minecraft:stick",
        T: "storagedrawers:upgrade_template",
        O: "minecraft:obsidian"
    })
    event.shaped("2x storagedrawers:obsidian_storage_upgrade", [
        "SCS",
        "TOT",
        "SCS"
    ], {
        S: "minecraft:stick",
        C: "minecraft:coal",
        T: "storagedrawers:upgrade_template",
        O: "minecraft:obsidian"
    })
    event.shaped("storagedrawers:iron_storage_upgrade", [
        "SSS",
        "UIU",
        "SSS"
    ], {
        S: "minecraft:stick",
        U: "storagedrawers:obsidian_storage_upgrade",
        I: "minecraft:iron_ingot"
    })
    event.shaped("storagedrawers:gold_storage_upgrade", [
        "SSS",
        "UIU",
        "SSS"
    ], {
        S: "minecraft:stick",
        U: "storagedrawers:iron_storage_upgrade",
        I: "minecraft:gold_ingot"
    })
    event.shaped("storagedrawers:diamond_storage_upgrade", [
        "SSS",
        "UIU",
        "SSS"
    ], {
        S: "minecraft:stick",
        U: "storagedrawers:gold_storage_upgrade",
        I: "minecraft:diamond"
    })
    event.shaped("storagedrawers:emerald_storage_upgrade", [
        "SSS",
        "UBU",
        "SSS"
    ], {
        S: "minecraft:stick",
        U: "storagedrawers:diamond_storage_upgrade",
        B: "minecraft:emerald_block",
    })

    event.shaped("32x pipez:item_pipe", [
        "BHB",
        "DRD",
        "BBB",
    ], {
        B: "kubejs:brass_plate",
        H: "minecraft:hopper",
        D: "minecraft:dropper",
        R: "minecraft:redstone_block"
    })
    event.shaped("16x pipez:fluid_pipe", [
        "CCC",
        "BRB",
        "CCC",
    ], {
        C: "kubejs:copper_plate",
        B: "minecraft:bucket",
        R: "minecraft:redstone_block"
    })
    event.shaped("3x pipez:ultimate_upgrade", [
        "NRN",
        "UUU",
        "NRN",
    ], {
        N: "minecraft:netherite_ingot",
        R: "minecraft:redstone_block",
        U: "pipez:advanced_upgrade"
    })
})