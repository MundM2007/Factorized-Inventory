ServerEvents.recipes(event => {
    event.remove({type: "minecraft:blasting"})
    event.remove({type: "minecraft:smelting"})
    event.remove({type: "minecraft:smoking"})
    event.remove({type: "minecraft:campfire_cooking"})

    event.remove({mod: "itemfilters"})
})