function isInventoryItem(item){
    return global.inventoryItems.hasOwnProperty(item.id)
}


function updateMachineDataPlayer(player){
    player.persistentData.machineData = {}
    let inventory = player.inventory
    for(let i = 0; i < inventory.getContainerSize(); i++){
        let item = inventory.getItem(i)
        if(item.isEmpty()) continue
        if(isInventoryItem(item)){
            let dataInventoryItem = global.inventoryItems[item.id]
            if(player.persistentData.machineData.hasOwnProperty("t" + dataInventoryItem.ticks.toString())){
                player.persistentData.machineData.get("t" + dataInventoryItem.ticks.toString()).push({
                    slotIndex: i, 
                    item: item.id,
                    countProcess: dataInventoryItem.countProcess,
                    ticksPerTick: dataInventoryItem.ticksPerTick,
                    fuelPerTick: dataInventoryItem.fuelPerTick
                })
            }else{
                player.persistentData.machineData.put("t" + dataInventoryItem.ticks.toString(), [{
                    slotIndex: i, 
                    item: item.id,
                    countProcess: dataInventoryItem.countProcess,
                    ticksPerTick: dataInventoryItem.ticksPerTick,
                    fuelPerTick: dataInventoryItem.fuelPerTick
                }])
            }
        }
    }
}


global.updateMachineDataBlockEntity = function(entity){
    entity.data.machineData = {}
    let inventory = entity.inventory
    for(let i = 0; i < inventory.getContainerSize(); i++){
        let item = inventory.getItem(i)
        if(item.isEmpty()) continue
        if(isInventoryItem(item)){
            let dataInventoryItem = global.inventoryItems[item.id]
            if(entity.data.machineData.hasOwnProperty("t" + dataInventoryItem.ticks.toString())){
                entity.data.machineData.get("t" + dataInventoryItem.ticks.toString()).push({
                    slotIndex: i, 
                    item: item.id,
                    countProcess: dataInventoryItem.countProcess,
                    ticksPerTick: dataInventoryItem.ticksPerTick,
                    fuelPerTick: dataInventoryItem.fuelPerTick
                })
            }else{
                entity.data.machineData.put("t" + dataInventoryItem.ticks.toString(), [{
                    slotIndex: i, 
                    item: item.id,
                    countProcess: dataInventoryItem.countProcess,
                    ticksPerTick: dataInventoryItem.ticksPerTick,
                    fuelPerTick: dataInventoryItem.fuelPerTick
                }])
            }
        }
    }
}