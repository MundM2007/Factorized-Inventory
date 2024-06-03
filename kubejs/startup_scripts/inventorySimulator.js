StartupEvents.registry('block', event => {
    event.create('kubejs:inventory_simulator_tier_1')
    .soundType('metal')
    .displayName('Tier 1 Inventory Simulator')
    .blockEntity(entityInfo => {
        entityInfo.inventory(9, 3)
        entityInfo.initialData({age: 0, machineData: {}})
        entityInfo.rightClickOpensInventory()
        entityInfo.serverTick(1, 0, entity => {
            let time = entity.data.age++
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
                        global.tickInventoryItem(entity.block, inventory, data, "block")
                    }
                }
            }
        })
    })
})


StartupEvents.registry('block', event => {
    event.create('kubejs:inventory_simulator_tier_2')
    .soundType('metal')
    .displayName('Tier 2 Inventory Simulator')
    .blockEntity(entityInfo => {
        entityInfo.inventory(9, 6)
        entityInfo.initialData({age: 0, machineData: {}})
        entityInfo.rightClickOpensInventory()
        entityInfo.serverTick(1, 0, entity => {
            let time = entity.data.age++
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
                        global.tickInventoryItem(entity.block, inventory, data, "block")
                    }
                }
            }
        })
    })
})