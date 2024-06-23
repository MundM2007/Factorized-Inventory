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
    if(/minecraft:.*shulker_box/.test(slotItem.id)){
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
    }else if(/kubejs:inventory_pusher_tier_.$/.test(slotItem.id)){
        if(!slotItem.nbt) return true
        if(!slotItem.nbt.Item) return true
        let pusherItem = $ItemStack.of(slotItem.nbt.Item)
        if(pusherItem.isEmpty()) return true
        if($ItemStack.isSameItemSameTags(pusherItem, item)){
            if((pusherItem.getMaxStackSize() - pusherItem.count) >= item.count) return true
        }
    }
    return false
}


function canInsertAnyItem(inventory, slotIndex){
    if(inventory.getContainerSize() < slotIndex) return false
    let slotItem = inventory.getItem(slotIndex)
    if(slotItem.isEmpty()) return true
    if(/minecraft:.*shulker_box/.test(slotItem.id)){
        if(!slotItem.nbt) return true
        if(!slotItem.nbt.BlockEntityTag) return true
        if(!slotItem.nbt.BlockEntityTag.Items) return true
        if(slotItem.nbt.BlockEntityTag.Items.length < 27) return true
    }else if(/kubejs:inventory_pusher_tier_.$/.test(slotItem.id)){
        if(!slotItem.nbt) return true
        if(!slotItem.nbt.Item) return true
        if($ItemStack.of(slotItem.nbt.Item).isEmpty()) return true
    }
    return false
}


function getAmountCanInsert(inventory, slotIndex, item){
    if(slotIndex == null || slotIndex == undefined) return 0
    if(inventory.getContainerSize() < slotIndex) return 0
    let slotItem = inventory.getItem(slotIndex)
    if(slotItem.isEmpty()) return item.getMaxStackSize()
    if(/minecraft:.*shulker_box/.test(slotItem.id)){
        if(!slotItem.nbt) return item.count
        if(!slotItem.nbt.BlockEntityTag) return item.count
        if(!slotItem.nbt.BlockEntityTag.Items) return item.count
        if(slotItem.nbt.BlockEntityTag.Items.length < 27) return item.count
        let canInsert = 0
        for(let i = 0; i < slotItem.nbt.BlockEntityTag.Items.length; i++){
            let shulkerItem = $ItemStack.of(slotItem.nbt.BlockEntityTag.Items[i])
            if($ItemStack.isSameItemSameTags(shulkerItem, item)){
                canInsert += shulkerItem.getMaxStackSize() - shulkerItem.count
                if(canInsert > item.count) return item.count
            }
        }
        return canInsert
    }else if(/kubejs:inventory_pusher_tier_.$/.test(slotItem.id)){
        if(!slotItem.nbt) return item.count
        if(!slotItem.nbt.Item) return item.count
        let pusherItem = $ItemStack.of(slotItem.nbt.Item)
        if(pusherItem.isEmpty()) return item.count
        if($ItemStack.isSameItemSameTags(pusherItem, item)){
            let AmountCanInsert = pusherItem.getMaxStackSize() - pusherItem.count
            if(AmountCanInsert > item.count) return item.count
            return AmountCanInsert
        }
    }
    if($ItemStack.isSameItemSameTags(slotItem, item)){
        if(slotItem.getMaxStackSize() - slotItem.count > item.count) return item.count
        return slotItem.getMaxStackSize() - slotItem.count
    }
    return 0
}


function getAmountCanInsertFromArray(items, containerSize, item){
    if(items.length < containerSize) return item.count
    let canInsert = 0
    for(let i = 0; i < items.length; i++){
        let slotItem = items[i]
        if($ItemStack.isSameItemSameTags(slotItem, item)){
            canInsert += slotItem.getMaxStackSize() - slotItem.count
            if(canInsert >= item.count) return item.count
        }
    }
    return canInsert
}
    
function insertItem(inventory, slotIndex, item){
    let slotItem = inventory.getItem(slotIndex)
    if(/minecraft:.*shulker_box/.test(slotItem.id)){
        if(!slotItem.nbt){
            slotItem.nbt = {BlockEntityTag: {ForgeCaps: {}, Items: [convertToJson(item, 0)], id: "minecraft:shulker_box"}}
        }else if(!slotItem.nbt.BlockEntityTag){
            slotItem.nbt.BlockEntityTag = {ForgeCaps: {}, Items: [convertToJson(item, 0)]}
        }else if (!slotItem.nbt.BlockEntityTag.Items){
            slotItem.nbt.BlockEntityTag.Items = [convertToJson(item, 0)]
        }else{
            let leftToInsert = item.count
            let lastSlot = -1
            for(let i = 0; i < 27; i++){
                let shulkerItemJson = slotItem.nbt.BlockEntityTag.Items[i]
                if(!shulkerItemJson){
                    slotItem.nbt.BlockEntityTag.Items.addTag(i, convertToJson(item.copyWithCount(leftToInsert), i))
                    break
                }
                if(++lastSlot != shulkerItemJson.Slot) {
                    slotItem.nbt.BlockEntityTag.Items.addTag(i, convertToJson(item.copyWithCount(leftToInsert), i))
                    break
                }
                let shulkerItem = $ItemStack.of(shulkerItemJson)
                if(shulkerItem.count == shulkerItem.getMaxStackSize()) continue
                if($ItemStack.isSameItemSameTags(shulkerItem, item)){
                    let countCanInsert = shulkerItem.getMaxStackSize() - shulkerItem.count
                    if(countCanInsert < leftToInsert) {
                        shulkerItemJson.Count = shulkerItem.getMaxStackSize()
                        leftToInsert -= countCanInsert
                    }else{
                        shulkerItemJson.Count = leftToInsert + shulkerItem.count
                        break
                    }
                }
            }
        }
    }else if(/kubejs:inventory_pusher_tier_.$/.test(slotItem.id)){
        if(!slotItem.nbt) slotItem.nbt = {Item: convertToJson(item, 0)}
        else{
            if(slotItem.nbt.Item){ slotItem.nbt.Item.Count += item.count}
            else slotItem.nbt.Item = convertToJson(item, 0)
        }
    }else{
        inventory.insertItem(slotIndex, item, false); return
    }
}


function insertItemInArray(items, containerSize, item){
    let leftToInsert = item.count
    let lastSlot = -1
    for(let i = 0; i < containerSize; i++){
        let slotItemJson = items[i]
        if(!slotItemJson){
            items.addTag(i, convertToJson(item.copyWithCount(leftToInsert), i))
            return items
        }
        if(++lastSlot != slotItemJson.Slot) {
            items.addTag(i, convertToJson(item.copyWithCount(leftToInsert), i))
            return items
        }
        let slotItem = $ItemStack.of(slotItemJson)
        if(slotItem.count == slotItem.getMaxStackSize()) continue
        if($ItemStack.isSameItemSameTags(slotItem, item)){
            let countCanInsert = slotItem.getMaxStackSize() - slotItem.count
            if(countCanInsert < leftToInsert) {
                slotItemJson.Count = slotItem.getMaxStackSize()
                leftToInsert -= countCanInsert
            }else{
                slotItemJson.Count = leftToInsert + slotItem.count
                return items
            }
        }
    }
}

function canExtract(inventory, slotIndex, item){
    if(!item) return true
    if(item.isEmpty()) return true
    if(inventory.getContainerSize() < slotIndex) return false
    let slotItem = inventory.getItem(slotIndex)
    if(slotItem.isEmpty()) return false
    if(slotItem.is(item.id)){
        if(slotItem.count >= item.count) return true
        return false
    }
    else if(/minecraft:.*shulker_box/.test(slotItem.id)){
        if(!slotItem.nbt) return false
        if(!slotItem.nbt.BlockEntityTag) return false
        if(!slotItem.nbt.BlockEntityTag.Items) return false
        if(slotItem.nbt.BlockEntityTag.Items.length == 0) return false
        let leftToExtract = item.count
        for(let i = 0; i < slotItem.nbt.BlockEntityTag.Items.length; i++){
            let shulkerItem = $ItemStack.of(slotItem.nbt.BlockEntityTag.Items[i])
            if(shulkerItem.is(item.id)){
                leftToExtract -= shulkerItem.count
                if(leftToExtract <= 0) return true
            }
        }
    }else if(/kubejs:inventory_puller_tier_.$/.test(slotItem.id)){
        if(!slotItem.nbt) return false
        if(!slotItem.nbt.Item) return false
        let pullerItem = $ItemStack.of(slotItem.nbt.Item)
        if(pullerItem.isEmpty()) return false
        if(pullerItem.is(item.id)){
            if(pullerItem.count >= item.count) return true
        }
    }
    return false
}


function getAmountCanExtractFromArray(items, item){
    let canExtract = 0
    for(let i = 0; i < items.length; i++){
        let slotItem = $ItemStack.of(items[i])
        if($ItemStack.isSameItemSameTags(slotItem, item)){
            canExtract += slotItem.count
            if(canExtract  >= item.count) return item.count
        }
    }
    return canExtract
}


function extractItem(inventory, slotIndex, item){
    let slotItem = inventory.getItem(slotIndex)
    if(/minecraft:.*shulker_box/.test(slotItem.id)){
        let leftToExtract = item.count 
        let toSplice = []
        for(let i = 0; i < slotItem.nbt.BlockEntityTag.Items.length; i++){
            let shulkerItem = $ItemStack.of(slotItem.nbt.BlockEntityTag.Items[i])
            if(!shulkerItem.is(item.id)) continue
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
    }else if(/kubejs:inventory_puller_tier_.$/.test(slotItem.id)){
        let pullerItem = $ItemStack.of(slotItem.nbt.Item)
        if(pullerItem.count > item.count){
            slotItem.nbt.Item.Count = pullerItem.count - item.count
        }else{
            slotItem.nbt = {filter: slotItem.nbt.filter}
        }
    }else inventory.setItem(slotIndex, slotItem.copyWithCount(slotItem.count - item.count))
}


function extractItemInArray(items, item){
    let leftToExtract = item.count
    let toSplice = []
    for(let i = 0; i < items.length; i++){
        let slotItem = $ItemStack.of(items[i])
        if(!slotItem.is(item.id)) continue
        if(slotItem.count > leftToExtract){
            items[i].Count = slotItem.count - leftToExtract
            break
        }else if(slotItem.count == leftToExtract){
            toSplice.push(i)
            break
        }else{
            leftToExtract -= slotItem.count
            toSplice.push(i)
        }
    }
    for(let i = toSplice.length - 1; i >= 0; i--){
        items.remove(toSplice[i])
    }
    return items
}

function getExtractItem(inventory, slotIndex){
    if(slotIndex == null || slotIndex == undefined) return Item.of("minecraft:air")
    let slotItem = inventory.getItem(slotIndex)
    if(/minecraft:.*shulker_box/.test(slotItem.id)){
        if(!slotItem.nbt) return Item.of("minecraft:air")
        if(!slotItem.nbt.BlockEntityTag) return Item.of("minecraft:air")
        if(!slotItem.nbt.BlockEntityTag.Items) return Item.of("minecraft:air")
        for(let i = 0; i < slotItem.nbt.BlockEntityTag.Items.length; i++){
            if($ItemStack.of(slotItem.nbt.BlockEntityTag.Items[i]).id == "minecraft:air") continue
            return $ItemStack.of(slotItem.nbt.BlockEntityTag.Items[i])
        }
        return Item.of("minecraft:air")
    }else if(/kubejs:inventory_puller_tier_.$/.test(slotItem.id)){
        if(!slotItem.nbt) return Item.of("minecraft:air")
        if(!slotItem.nbt.Item) return Item.of("minecraft:air")
        return $ItemStack.of(slotItem.nbt.Item)
    }
    return slotItem
}


function getExtractItemFromArray(items){
    if(items.length == 0) return Item.of("minecraft:air")
    return $ItemStack.of(items[0])
}