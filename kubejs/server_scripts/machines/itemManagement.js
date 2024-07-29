function tickPusher(block, inventory, slotIndex, countProcess){
    let pusherItem = inventory.getItem(slotIndex)
    if(!pusherItem.nbt) return
    if(!pusherItem.nbt.Item) return
    let insertBlock = block.down
    if(insertBlock == "minecraft:air") return
    let insertInventory = insertBlock.inventory
    if(!insertInventory) return

    let itemToInsert = $ItemStack.of(pusherItem.nbt.Item)
    if(itemToInsert.count > countProcess) itemToInsert = itemToInsert.copyWithCount(countProcess)
    let canInsert = getAmountCanInsertFromInvWrapper(insertInventory, itemToInsert, insertBlock.id)
    if(itemToInsert.count > canInsert) itemToInsert = itemToInsert.copyWithCount(canInsert)

    if(itemToInsert.count > 0){
        insertItemInInvWrapper(insertInventory, itemToInsert, insertBlock.id)
        pusherItem.nbt.Item.Count -= itemToInsert.count
        if(pusherItem.nbt.Item.Count == 0) pusherItem.nbt = {}
    }
}
 

function tickPuller(block, inventory, slotIndex, countProcess){
    let pullerItem = inventory.getItem(slotIndex)
    if(pullerItem.nbt && pullerItem.nbt.filter && !pullerItem.nbt.filter.type) pullerItem.nbt.filter = {type: "item", item: pullerItem.nbt.filter}

    let extractBlock = block.up
    if(extractBlock == "minecraft:air") return
    let extractInventory = extractBlock.inventory
    if(!extractInventory) return

    let item
    if(pullerItem.nbt){
        if(pullerItem.nbt.Item) {
            let ItemInPuller = $ItemStack.of(pullerItem.nbt.Item)
            if(pullerItem.nbt.filter && pullerItem.nbt.filter.item != "minecraft:air"){
                if(pullerItem.nbt.filter.type == "item") if(!ItemInPuller.is(pullerItem.nbt.filter.item)) return
                else if (pullerItem.nbt.filter.type == "itemfilters") if(!$ItemFiltersAPI.filter(Item.of(pullerItem.nbt.filter.item, pullerItem.nbt.filter.nbt), ItemInPuller)) return
            }

            item = ItemInPuller.copyWithCount(Math.min(
                ItemInPuller.getMaxStackSize() - ItemInPuller.count, 
                getAmountCanExtractFromInvWrapper(extractInventory, ItemInPuller.copyWithCount(countProcess), extractBlock.id)
            ))
        }else{
            if(pullerItem.nbt.filter && pullerItem.nbt.filter.item != "minecraft:air"){
                if(pullerItem.nbt.filter.type == "item"){
                    let FilterInPuller = Item.of(pullerItem.nbt.filter.item).copyWithCount(countProcess)
                    item = FilterInPuller.copyWithCount(getAmountCanExtractFromInvWrapper(extractInventory, FilterInPuller, extractBlock.id))
                }else if(pullerItem.nbt.filter.type == "itemfilters"){
                    item = getFirstFilterMatchFromInvWrapper(extractInventory, Item.of(pullerItem.nbt.filter.item, pullerItem.nbt.filter.nbt), countProcess, extractBlock.id)
                    if(item.isEmpty()) return
                }else return
            }else{
                item = getExtractItemFromInvWrapper(extractInventory, extractBlock.id)
                if(item.isEmpty()) return
                if(item.count > countProcess) item = item.copyWithCount(countProcess)
            }
        }
    }else{
        item = getExtractItemFromInvWrapper(extractInventory, extractBlock.id)
        if(item.isEmpty()) return
        if(item.count > countProcess) item = item.copyWithCount(countProcess)
    }

    if(item.count > 0){
        extractItemInInvWrapper(extractInventory, item, extractBlock.id)
        if(!pullerItem.nbt) {pullerItem.nbt = {filter: {type: "item", item: "minecraft:air"}, Item: convertToJson(item, 0)}; return}
        if(!pullerItem.nbt.Item) {pullerItem.nbt.Item = convertToJson(item, 0); return}
        pullerItem.nbt.Item.Count += item.count
    }
}

function tickHopper(inventory, slotIndex, countProcess, directionExtract, directionInsert, type){
    let slotExtract = getSlotInDirection(slotIndex, directionExtract, type)
    let item = getExtractItem(inventory, slotExtract)
    if(item.isEmpty()) return
    if(item.count > countProcess) item = item.copyWithCount(countProcess)
    let slotInsert = getSlotInDirection(slotIndex, directionInsert, type)
    let canInsert = getAmountCanInsert(inventory, slotInsert, item)
    if(canInsert < item.count) item = item.copyWithCount(canInsert)
    if(item.count > 0){
        extractItem(inventory, slotExtract, item)
        insertItem(inventory, slotInsert, item)
    }
}


function tickPiston(inventory, slotIndex, countProcess, directionFacing, type){
    let slotExtract = getSlotInDirection(slotIndex, directionFacing, type)
    let item = getExtractItem(inventory, slotExtract)
    if(item.isEmpty()) return
    if(item.count > countProcess) item = item.copyWithCount(countProcess)
    let slotInsert = getSlotInDirection(slotExtract, directionFacing, type)
    let canInsert = getAmountCanInsert(inventory, slotInsert, item)
    if(canInsert < item.count) item = item.copyWithCount(canInsert)
    if(item.count > 0){
        extractItem(inventory, slotExtract, item)
        insertItem(inventory, slotInsert, item)
    }
}

function tickStickyPiston(inventory, slotIndex, countProcess, directionFacing, type){
    let slotInsert = getSlotInDirection(slotIndex, directionFacing, type)
    if(slotInsert == null || slotInsert == undefined) return
    let slotExtract = getSlotInDirection(slotInsert, directionFacing, type)
    let item = getExtractItem(inventory, slotExtract)
    if(item.isEmpty()) return
    if(item.count > countProcess) item = item.copyWithCount(countProcess)
    let canInsert = getAmountCanInsert(inventory, slotInsert, item)
    if(canInsert < item.count) item = item.copyWithCount(canInsert)
    if(item.count > 0){
        extractItem(inventory, slotExtract, item)
        insertItem(inventory, slotInsert, item)
    }
}


function tickSorter(inventory, slotIndex, countProcess, directionExtract, type){
    let sorterItem = inventory.getItem(slotIndex)
    if(sorterItem.nbt && sorterItem.nbt.filter && !sorterItem.nbt.filter.type) sorterItem.nbt.filter = {type: "item", item: sorterItem.nbt.filter}
    let slotExtract = getSlotInDirection(slotIndex, directionExtract, type)
    let item = getExtractItem(inventory, slotExtract)
    if(item.isEmpty()) return
    if(item.count > countProcess) item = item.copyWithCount(countProcess)
    
    let isFiltered = false
    let side = "left"
    if(sorterItem.nbt){
        if(sorterItem.nbt.filter && sorterItem.nbt.filter.item != "minecraft:air"){
            if(sorterItem.nbt.filter.type == "item"){
                if($ItemStack.isSameItemSameTags(item, Item.of(sorterItem.nbt.filter.item))) isFiltered = true
            }else if(sorterItem.nbt.filter.type == "itemfilters"){
                if($ItemFiltersAPI.filter(Item.of(sorterItem.nbt.filter.item, sorterItem.nbt.filter.nbt), item)) isFiltered = true
            }
        }
        if(sorterItem.nbt.side) side = sorterItem.nbt.side
        if(!isFiltered) side = getOppositeDirection(side)
    }

    let slotInsert = getSlotInDirection(slotIndex, getDirectionOutputSorter(directionExtract, side), type)
    let canInsert = getAmountCanInsert(inventory, slotInsert, item)
    if(item.count > canInsert){
        item = item.copyWithCount(canInsert)
    }
    if(item.count > 0){
        extractItem(inventory, slotExtract, item)
        insertItem(inventory, slotInsert, item)
    }
}