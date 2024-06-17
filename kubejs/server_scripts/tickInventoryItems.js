global.tickInventoryItem = function(block, inventory, data, type){
    let item = data.item
    if(/kubejs:inventory_hopper_tier_.$/.test(item)){
        tickHopper(inventory, data.slotIndex, data.countProcess, "up", "down", type)
    }else if(/kubejs:inventory_hopper_left_facing_tier_.$/.test(item)){
        tickHopper(inventory, data.slotIndex, data.countProcess, "right", "left", type)
    }else if(/kubejs:inventory_upper_tier_.$/.test(item)){
        tickHopper(inventory, data.slotIndex, data.countProcess, "down", "up", type)
    }else if(/kubejs:inventory_hopper_right_facing_tier_.$/.test(item)){
        tickHopper(inventory, data.slotIndex, data.countProcess, "left", "right", type)
    }else if(/kubejs:inventory_pusher_tier_.$/.test(item)){
        if(type == "player") return
        tickPusher(block, inventory, data.slotIndex, data.countProcess)
    }else if(/kubejs:inventory_puller_tier_.$/.test(item)){
        if(type == "player") return
        tickPuller(block, inventory, data.slotIndex, data.countProcess)
    }else if(/kubejs:inventory_furnace_tier_.$/.test(item)){
        tickSimpleMachine(inventory, "furnace", data, type, parseInt(item.charAt(item.length - 1)))
    }else if(/kubejs:inventory_macerator_tier_.$/.test(item)){
        tickSimpleMachine(inventory, "macerator", data, type, parseInt(item.charAt(item.length - 1)))
    }else if(/kubejs:inventory_compressor_tier_.$/.test(item)){
        tickSimpleMachine(inventory, "compressor", data, type, parseInt(item.charAt(item.length - 1)))
    }else if(/kubejs:inventory_cutting_machine_tier_.$/.test(item)){
        tickCuttingMachine(inventory, data, type, parseInt(item.charAt(item.length - 1)))
    }else if(/kubejs:inventory_packer_tier_.$/.test(item)){
        tickPacker(inventory, data, type, parseInt(item.charAt(item.length - 1)))
    }else if(/kubejs:inventory_unpacker_tier_.$/.test(item)){
        tickMultiOutput(inventory, "unpacker", data, type, parseInt(item.charAt(item.length - 1)), 3)
    }else if(/kubejs:inventory_wiremill_tier_.$/.test(item)){
        tickSimpleMachine(inventory, "wiremill", data, type, parseInt(item.charAt(item.length - 1)) + 1)
    }else if(/kubejs:inventory_coke_oven_tier_.$/.test(item)){
        tickSimpleMachine(inventory, "cokeOven", data, type, parseInt(item.charAt(item.length - 1)))
    }else if(/kubejs:inventory_blast_furnace_tier_.$/.test(item)){
        tickRecipeIndexedMachine(inventory, "blastFurnace", data, type, parseInt(item.charAt(item.length - 1)), 3)
    }else if(/kubejs:inventory_mixer_tier_.$/.test(item)){
        tickRecipeIndexedMachine(inventory, "mixer", data, type, parseInt(item.charAt(item.length - 1)) + 1, 3)
    }else if(/kubejs:inventory_quarry_tier_.$/.test(item)){
        tickQuarry(inventory, data, type, parseInt(item.charAt(item.length - 1)) + 1)
    }else if(/kubejs:inventory_assembler_tier_.$/.test(item)){
        tickRecipeIndexedMachine(inventory, "assembler", data, type, parseInt(item.charAt(item.length - 1)) + 1, 3)
    }
}


function getSlotInDirection(slot, direction, type) {
    if(slot == null) return null
    if(type == "player") {
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
    }else if(type == "block") {
        if(direction == "up") {
            if(Math.floor(slot / 9) == 0) return null
            return slot - 9
        }else if(direction == "down") {
            if(Math.floor(slot / 9) == 5) return null
            return slot + 9
        }else if(direction == "left") {
            if(slot % 9 == 0) return null
            return slot - 1
        }else if(direction == "right") {
            if(slot % 9 == 8) return null
            return slot + 1
        }
    }
    return null
}