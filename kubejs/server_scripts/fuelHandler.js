let fuelItems = {}

Ingredient.all.stacks.forEach(item => {
    let burnTime = $ForgeHooks.getBurnTime(item, $RecipeType.SMELTING)
    if (burnTime > 0) {
        fuelItems[item.id] = burnTime
    }
})


function getFuel(inventory, extractSlotIndex){
    if(!extractSlotIndex) return Item.of("minecraft:air")
    let slotItem = inventory.getItem(extractSlotIndex)
    return getFuelItem(slotItem)
}


function getFuelItem(slotItem){
    if(/minecraft:.*shulker_box/.test(slotItem.id)){
        if(!slotItem.nbt) return Item.of("minecraft:air")
        if(!slotItem.nbt.BlockEntityTag) return Item.of("minecraft:air")
        if(!slotItem.nbt.BlockEntityTag.Items) return Item.of("minecraft:air")
        if(slotItem.nbt.BlockEntityTag.Items.length == 0) return Item.of("minecraft:air")
        for(let i = 0; i < slotItem.nbt.BlockEntityTag.Items.length; i++){
            let item = $ItemStack.of(slotItem.nbt.BlockEntityTag.Items[i])
            if(fuelItems[item.id]) return item
        }
        return Item.of("minecraft:air")
    }else if(/kubejs:inventory_puller_tier_.$/.test(slotItem.id)){
        if(!slotItem.nbt) return Item.of("minecraft:air")
        if(!slotItem.nbt.Item) return Item.of("minecraft:air")
        let item = $ItemStack.of(slotItem.nbt.Item)
        if(fuelItems[item.id]) return item
        return Item.of("minecraft:air")
    }else{
        if(fuelItems[slotItem.id]) return slotItem
        return Item.of("minecraft:air")
    }
}