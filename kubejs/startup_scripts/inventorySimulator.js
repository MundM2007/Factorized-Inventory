StartupEvents.registry('block', event => {
    event.create('kubejs:inventory_simulator')
    .soundType('metal')
    .blockEntity(entityInfo => {
        entityInfo.inventory(9, 6)
        entityInfo.initialData({machineData: {}})
        entityInfo.rightClickOpensInventory()
        entityInfo.serverTick(1, 0, entity => {
            let time = entity.level.time
            let updated = false
            if(time % 40 == 0){
                global.updateMachineDataBlockEntity(entity)
                updated = true
            }
            let inventory = entity.inventory
            let machineData = entity.data.machineData
            for (let ticks in machineData) {
                if(time % parseInt(ticks.replace("t", "")) == 0){
                    if(!updated){
                        for(let data of machineData[ticks]){
                            if(!inventory.getItem(data.slotIndex).is(data.item)) {global.updateMachineDataBlockEntity(entity); updated = true; break}
                        }
                    }
                    for(let data of machineData[ticks]){
                        global.tickInventoryItem(inventory, data, "block")
                    }
                }
            }
        })
    })
})