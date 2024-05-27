function isSimpleMachine(machine){
    return [
        "furnace",
    ].includes(machine)
}


function getRecipe(machine, extractSlotIndex, inventory){
    if(!extractSlotIndex) return {}
    let recipes = global.recipes[machine]
    if(isSimpleMachine(machine)){
        let slotItem = inventory.getItem(extractSlotIndex)
        if(!/minecraft:.*shulker_box/.test(slotItem.id)) return recipes[slotItem.id] ?? {}
        if(!slotItem.nbt) return {}
        if(!slotItem.nbt.BlockEntityTag) return {}
        if(!slotItem.nbt.BlockEntityTag.Items) return {}
        if(slotItem.nbt.BlockEntityTag.Items.length == 0) return {}
        for(let i = 0; i < slotItem.nbt.BlockEntityTag.Items.length; i++){
            let recipe = recipes[slotItem.nbt.BlockEntityTag.Items[i].id]
            if(recipe) return recipe
        }
    }
    return {}
}