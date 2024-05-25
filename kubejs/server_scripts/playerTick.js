function getSlotInDirection(slot, direction) {
    if(direction == "up") {
        if(Math.floor(slot / 9) == 1) return null
        if(slot >= 18) return slot - 9
        return slot + 27
    }else if(direction == "down") {
        if(Math.floor(slot / 9) == 0) return null
        if(slot <= 26) return slot + 9
        return slot - 27
    }else if(direction == "left") {
        if(slot % 9 == 0) return null
        return slot - 1
    }else if(direction == "right") {
        if(slot % 9 == 8) return null
        return slot + 1
    }
}


PlayerEvents.tick(event => {
    let time8 = event.level.time % 8 == 0
    let inventory = event.player.inventory
    for(let i = 0; i < event.player.inventory.items.size(); i++){
        let id = inventory.getItem(i).id
        if(time8){
            if(id == "kubejs:inventory_hopper"){
                let slot_up = getSlotInDirection(i, "up")
                let slot_down = getSlotInDirection(i, "down")
                let item = getExtractItem(event.player.inventory, slot_up).copyWithCount(1)
                if((!item.isEmpty()) && canInsert(inventory, slot_down, item)){
                    extractItem(inventory, slot_up, item)
                    insertItem(inventory, slot_down, item)
                }
            }else if(id == "kubejs:inventory_hopper_left_facing"){
                let slot_right = getSlotInDirection(i, "right")
                let slot_left = getSlotInDirection(i, "left")
                let item = getExtractItem(event.player.inventory, slot_right).copyWithCount(1)
                if((!item.isEmpty()) && canInsert(inventory, slot_left, item)){
                    extractItem(inventory, slot_right, item)
                    insertItem(inventory, slot_left, item)
                }
            }else if(id == "kubejs:inventory_upper"){
                let slot_down = getSlotInDirection(i, "down")
                let slot_up = getSlotInDirection(i, "up")
                let item = getExtractItem(event.player.inventory, slot_down).copyWithCount(1)
                if((!item.isEmpty()) && canInsert(inventory, slot_up, item)){
                    extractItem(inventory, slot_down, item)
                    insertItem(inventory, slot_up, item)
                }
            }else if(id == "kubejs:inventory_hopper_right_facing"){
                let slot_left = getSlotInDirection(i, "left")
                let slot_right = getSlotInDirection(i, "right")
                let item = getExtractItem(event.player.inventory, slot_left).copyWithCount(1)
                if((!item.isEmpty()) && canInsert(inventory, slot_right, item)){
                    extractItem(inventory, slot_left, item)
                    insertItem(inventory, slot_right, item)
                }
            }
        }
    }
})