global.tickInventoryItem = function(block, inventory, data, type){
    let item = data.item
    if(/kubejs:inventory_hopper_.*_facing_tier_.$/.test(item)){
        let directionInsert = getDirectionFromItemName(item)
        tickHopper(inventory, data.slotIndex, data.countProcess, getOppositeDirection(directionInsert), directionInsert, type)
    }else if(/kubejs:inventory_pusher_tier_.$/.test(item)){
        if(type == "player") return
        tickPusher(block, inventory, data.slotIndex, data.countProcess)
    }else if(/kubejs:inventory_puller_tier_.$/.test(item)){
        if(type == "player") return
        tickPuller(block, inventory, data.slotIndex, data.countProcess)
    }else if(/kubejs:inventory_piston_.*_facing_tier_.$/.test(item)){
        tickPiston(inventory, data.slotIndex, data.countProcess, getDirectionFromItemName(item), type)
    }else if(/kubejs:inventory_sticky_piston_.*_facing_tier_.$/.test(item)){
        tickStickyPiston(inventory, data.slotIndex, data.countProcess, getDirectionFromItemName(item), type)
    }else if(/kubejs:inventory_sorter_.*_facing_tier_.$/.test(item)){
        tickSorter(inventory, data.slotIndex, data.countProcess, getDirectionFromItemName(item), type)
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
        tickRecipeIndexedMachine(inventory, "assembler", data, type, parseInt(item.charAt(item.length - 1)) + 1, 5)
    }
}


function getDirectionFromItemName(item){
    if(item.includes("up")) return "up" 
    if(item.includes("down")) return "down"
    if(item.includes("left")) return "left"
    if(item.includes("right")) return "right"
}


function getOppositeDirection(direction){
    if(direction == "up") return "down"
    if(direction == "down") return "up"
    if(direction == "left") return "right"
    if(direction == "right") return "left"
}


function getDirectionOutputSorter(direction, side){
    if(direction == "up") return side
    if(direction == "down") return getOppositeDirection(side)
    if(direction == "left") return side == "left" ? "down" : "up"
    if(direction == "right") return side == "left" ? "up" : "down"
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