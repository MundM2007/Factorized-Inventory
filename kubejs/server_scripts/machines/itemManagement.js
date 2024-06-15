function tickPusher(block, inventory, slotIndex, countProcess){
    let pusherItem = inventory.getItem(slotIndex)
    if(!pusherItem.nbt) return
    if(!pusherItem.nbt.Item) return
    let insertBlock = block.down
    if(insertBlock.entityData){
        if(insertBlock.entityData.Items){
            let items = insertBlock.entityData.Items
            let itemToInsert = $ItemStack.of(pusherItem.nbt.Item)
            let containerSize = insertBlock.entity.getContainerSize()
            let canInsert = getAmountCanInsertFromArray(items, containerSize, itemToInsert)
            if(canInsert > countProcess) canInsert = countProcess
            if(canInsert > 0){
                let entityData = insertBlock.entityData
                entityData.put("Items", insertItemInArray(items, containerSize, itemToInsert.copyWithCount(canInsert)))
                insertBlock.setEntityData(entityData)
                pusherItem.nbt.Item.Count -= canInsert
                if(pusherItem.nbt.Item.Count == 0) pusherItem.nbt = {}
            }   
        }
    }
}
 

function tickPuller(block, inventory, slotIndex, countProcess){
    let pullerItem = inventory.getItem(slotIndex)
    let extractBlock = block.up
    if(extractBlock.entityData){
        if(extractBlock.entityData.Items){
            let items = extractBlock.entityData.Items
            if(pullerItem.nbt && pullerItem.nbt.filter && pullerItem.nbt.filter != "minecraft:air"){
                if(pullerItem.nbt.Item) {
                    let ItemInPuller = $ItemStack.of(pullerItem.nbt.Item)
                    if(!ItemInPuller.is(pullerItem.nbt.filter)) return
                    let canInsert = ItemInPuller.getMaxStackSize() - ItemInPuller.count
                    if(countProcess > canInsert) countProcess = canInsert
                }
                let canExtract = getAmountCanExtractFromArray(items, Item.of(pullerItem.nbt.filter, countProcess))
                if(canExtract > countProcess) canExtract = countProcess
                if(canExtract > 0){
                    let itemToExtract = Item.of(pullerItem.nbt.filter, canExtract)
                    let entityData = extractBlock.entityData
                    entityData.put("Items", extractItemInArray(items, itemToExtract))
                    extractBlock.setEntityData(entityData)
                    if(!pullerItem.nbt) {pullerItem.nbt = {filter: pullerItem.nbt.filter, Item: itemToExtract}; return}
                    if(!pullerItem.nbt.Item) {pullerItem.nbt.Item = itemToExtract; return}
                    pullerItem.nbt.Item.Count += canExtract
                }
            }else{
                if(pullerItem.nbt && pullerItem.nbt.Item) {
                    let itemInPuller = $ItemStack.of(pullerItem.nbt.Item)
                    let canExtract = getAmountCanExtractFromArray(items, itemInPuller.copyWithCount(countProcess))
                    let canInsert =  itemInPuller.getMaxStackSize() - itemInPuller.count
                    if(countProcess > canExtract) countProcess = canExtract
                    if(countProcess > canInsert) countProcess = canInsert
                    if(countProcess > 0){
                        let itemToExtract = itemInPuller.copyWithCount(countProcess)
                        let entityData = extractBlock.entityData
                        entityData.put("Items", extractItemInArray(items, itemToExtract))
                        extractBlock.setEntityData(entityData)
                        pullerItem.nbt.Item.Count += itemToExtract.count
                    }
                }else{
                    let itemToExtract = getExtractItemFromArray(items)
                    if(itemToExtract.isEmpty()) return
                    if(itemToExtract.count > countProcess) itemToExtract = itemToExtract.copyWithCount(countProcess)
                    if(itemToExtract.count > 0){
                        let entityData = extractBlock.entityData
                        entityData.put("Items", extractItemInArray(items, itemToExtract))
                        extractBlock.setEntityData(entityData)
                        if(!pullerItem.nbt) {pullerItem.nbt = {Item: convertToJson(itemToExtract, 0)}; return}
                        pullerItem.nbt.Item = convertToJson(itemToExtract, 0)
                    }
                }
            }
        }
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