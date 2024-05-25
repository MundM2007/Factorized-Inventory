let $ItemStack = Java.loadClass("net.minecraft.world.item.ItemStack")

function convertToJson(itemStack, slotIndex){
    let json = {
        id: itemStack.id,
        Count: itemStack.count,
        Slot: slotIndex,
    }
    if(itemStack.nbt) json.tag = itemStack.nbt
    return json
}


function canInsert(inventory, slotIndex, item){
    if(inventory.getContainerSize() < slotIndex) return false
    let slotItem = inventory.getItem(slotIndex)
    if(slotItem.isEmpty()) return true
    if($ItemStack.isSameItemSameTags(slotItem, item)){
        if((slotItem.getMaxStackSize() - slotItem.count) >= item.count) return true
        return false
    }
    if(!/minecraft:.*shulker_box/.test(slotItem.id)) return false
    if(!slotItem.nbt) return true
    if(!slotItem.nbt.BlockEntityTag) return true
    if(!slotItem.nbt.BlockEntityTag.Items) return true
    if(slotItem.nbt.BlockEntityTag.Items.length < 27) return true
    let leftToInsert = item.count
    for(let i = 0; i < slotItem.nbt.BlockEntityTag.Items.length; i++){
        let shulkerItem = $ItemStack.of(slotItem.nbt.BlockEntityTag.Items[i])
        if($ItemStack.isSameItemSameTags(shulkerItem, item)){
            leftToInsert -= shulkerItem.getMaxStackSize() - shulkerItem.count
            if(leftToInsert <= 0) return true
        }
    }
    return false
}
    
function insertItem(inventory, slotIndex, item){
    let slotItem = inventory.getItem(slotIndex)
    if(!/minecraft:.*shulker_box/.test(slotItem.id)) {inventory.add(slotIndex, item); return}
    if(!slotItem.nbt){
        slotItem.nbt = {BlockEntityTag: {ForgeCaps: {}, Items: [convertToJson(item, 0)], id: "minecraft:shulker_box"}}
    }else if(!slotItem.nbt.BlockEntityTag){
        slotItem.nbt.BlockEntityTag = {ForgeCaps: {}, Items: [convertToJson(item, 0)]}
    }else if (!slotItem.nbt.BlockEntityTag.Items){
        slotItem.nbt.BlockEntityTag.Items = [convertToJson(item, 0)]
    }else{
        let leftToInsert = item.count
        let lastSlot = -1
        for(let i = 0; i < slotItem.nbt.BlockEntityTag.Items.length; i++){
            if(++lastSlot != slotItem.nbt.BlockEntityTag.Items[i].Slot) {
                slotItem.nbt.BlockEntityTag.Items.addTag(i, convertToJson(item.copyWithCount(leftToInsert), i))
                break
            }
            let shulkerItem = $ItemStack.of(slotItem.nbt.BlockEntityTag.Items[i])
            if($ItemStack.isSameItemSameTags(shulkerItem, item)){
                let countCanInsert = shulkerItem.getMaxStackSize() - shulkerItem.count
                if(countCanInsert < leftToInsert) {
                    slotItem.nbt.BlockEntityTag.Items[i].Count = countCanInsert + shulkerItem.count
                    leftToInsert -= countCanInsert
                }else{
                    slotItem.nbt.BlockEntityTag.Items[i].Count = leftToInsert + shulkerItem.count
                    break
                }
            }
        }
    }
}


function canExtract(inventory, slotIndex, item){
    if(inventory.getContainerSize() < slotIndex) return false
    let slotItem = inventory.getItem(slotIndex)
    if(slotItem.isEmpty()) return false
    if($ItemStack.isSameItemSameTags(slotItem, item)){
        if(slotItem.count >= item.count) return true
        return false
    }
    if(!/minecraft:.*shulker_box/.test(slotItem.id)) return false
    if(!slotItem.nbt) return false
    if(!slotItem.nbt.BlockEntityTag) return false
    if(!slotItem.nbt.BlockEntityTag.Items) return false
    if(slotItem.nbt.BlockEntityTag.Items.length == 0) return false
    let leftToExtract = item.count
    for(let i = 0; i < slotItem.nbt.BlockEntityTag.Items.length; i++){
        let shulkerItem = $ItemStack.of(slotItem.nbt.BlockEntityTag.Items[i])
        if($ItemStack.isSameItemSameTags(shulkerItem, item)){
            leftToExtract -= shulkerItem.count
            if(leftToExtract <= 0) return true
        }
    }
    return false
}

function extractItem(inventory, slotIndex, item){
    let slotItem = inventory.getItem(slotIndex)
    if(!/minecraft:.*shulker_box/.test(slotItem.id)){inventory.setItem(slotIndex, slotItem.copyWithCount(slotItem.count - item.count)); return}
    let leftToExtract = item.count 
    let toSplice = []
    for(let i = 0; i < slotItem.nbt.BlockEntityTag.Items.length; i++){
        let shulkerItem = $ItemStack.of(slotItem.nbt.BlockEntityTag.Items[i])
        if(!$ItemStack.isSameItemSameTags(shulkerItem, item)) continue
        if(shulkerItem.count > leftToExtract){
            slotItem.nbt.BlockEntityTag.Items[i].Count = shulkerItem.count - leftToExtract
            break
        }else if(shulkerItem.count == leftToExtract){
            toSplice.push(i)
            break
        }else{
            leftToExtract -= shulkerItem.count
            toSplice.push(i)
        }
    }
    for(let i = toSplice.length - 1; i >= 0; i--){
        slotItem.nbt.BlockEntityTag.Items.remove(toSplice[i])
    }
}


function getExtractItem(inventory, slotIndex){
    let slotItem = inventory.getItem(slotIndex)
    if(!/minecraft:.*shulker_box/.test(slotItem.id)) return slotItem
    if(!slotItem.nbt) return Item.of("minecraft:air")
    if(!slotItem.nbt.BlockEntityTag) return Item.of("minecraft:air")
    if(!slotItem.nbt.BlockEntityTag.Items) return Item.of("minecraft:air")
    for(let i = 0; i < slotItem.nbt.BlockEntityTag.Items.length; i++){
        if($ItemStack.of(slotItem.nbt.BlockEntityTag.Items[i]).id == "minecraft:air") continue
        return $ItemStack.of(slotItem.nbt.BlockEntityTag.Items[i])
    }
    return Item.of("minecraft:air")
}