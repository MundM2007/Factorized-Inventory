// priority: 100

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

ServerEvents.recipes(event => {
    global.hammers = InputItem.of([
        "kubejs:iron_hammer",
        "kubejs:steel_hammer",
    ])
    global.directions = ["up", "right", "down", "left"]
    
    //addStorageAll(event, "aluminum")
    addStorage(event, "battery_alloy")
    addStorage(event, "brass")
    addStorage(event, "bronze")
    //addStorageAll(event, "cobalt")
    //addStorage(event, "constantan")
    //addStorage(event, "electrum")
    addStorage(event, "invar")
    //addStorageAll(event, "iridium")
    //addStorage(event, "iridium_alloy")
    addStorageAll(event, "lead")
    addStorageAll(event, "nickel")
    //addStorageAll(event, "platinum")
    addStorage(event, "steel")
    addStorageAll(event, "tin")
    //addStorageAll(event, "titanium")
    addStorageAll(event, "zinc")
    event.shapeless("minecraft:copper_ingot", "9x kubejs:copper_nugget")
    event.shapeless("9x kubejs:copper_nugget", "minecraft:copper_ingot")

    event.shaped("4x minecraft:chest", [
        "LLL",
        "L L",
        "LLL"
    ], {
        L: "#minecraft:logs"
    })
    event.shaped("16x minecraft:stick", [
        "L",
        "L"
    ], {
        L: "#minecraft:logs"
    })
})