PlayerEvents.tick(event => {
    let time = event.player.age
    let updated = false
    if(time % 20 == 0){
        updateMachineDataPlayer(event.player)
        updated = true
    }
    let inventory = event.player.inventory
    let machineData = event.player.persistentData.machineData
    for (let ticks in machineData) {
        if(time % parseInt(ticks.replace("t", "")) == 0){
            if(!updated){
                for(let data of machineData[ticks]){
                    if(!inventory.getItem(data.slotIndex).is(data.item)) {updateMachineDataPlayer(event.player); updated = true; break}
                }
            }
            for(let data of machineData[ticks]){
                global.tickInventoryItem("", inventory, data, "player")
            }
        }
    }
})