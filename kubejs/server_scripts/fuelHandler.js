let fuelItems = {}
const $RecipeType = Java.loadClass('net.minecraft.world.item.crafting.RecipeType')
const $ForgeHooks = Java.loadClass('net.minecraftforge.common.ForgeHooks')
Ingredient.all.stacks.forEach(item => {
    let burnTime = $ForgeHooks.getBurnTime(item, $RecipeType.SMELTING)
    if (burnTime > 0) {
        fuelItems[item.id] = burnTime
    }
})


function getFuel(inventory, extractSlotIndex){
    if(!extractSlotIndex) return Item.of("minecraft:air")
    let slotItem = inventory.getItem(extractSlotIndex)
    if(!/minecraft:.*shulker_box/.test(slotItem.id)) return fuelItems[slotItem.id] ? slotItem : Item.of("minecraft:air")
    if(!slotItem.nbt) return Item.of("minecraft:air")
    if(!slotItem.nbt.BlockEntityTag) return Item.of("minecraft:air")
    if(!slotItem.nbt.BlockEntityTag.Items) return Item.of("minecraft:air")
    if(slotItem.nbt.BlockEntityTag.Items.length == 0) return Item.of("minecraft:air")
    for(let i = 0; i < slotItem.nbt.BlockEntityTag.Items.length; i++){
        let item = $ItemStack.of(slotItem.nbt.BlockEntityTag.Items[i])
        if(fuelItems[item.id]) item
    }
    return Item.of("minecraft:air")
}