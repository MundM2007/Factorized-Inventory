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
        tickSimpleMachine(inventory, "cuttingMachine", data, type, parseInt(item.charAt(item.length - 1)))
    }else if(/kubejs:inventory_wiremill_tier_.$/.test(item)){
        tickSimpleMachine(inventory, "wiremill", data, type, parseInt(item.charAt(item.length - 1)) + 1)
    }else if(/kubejs:inventory_coke_oven_tier_.$/.test(item)){
        tickSimpleMachine(inventory, "cokeOven", data, type, parseInt(item.charAt(item.length - 1)))
    }else if(/kubejs:inventory_blast_furnace_tier_.$/.test(item)){
        tickBlastFurnace(inventory, data, type, parseInt(item.charAt(item.length - 1)))
    }else if(/kubejs:inventory_mixer_tier_.$/.test(item)){
        tickMixer(inventory, data, type, parseInt(item.charAt(item.length - 1)) + 1)
    }else if(/kubejs:inventory_quarry_tier_.$/.test(item)){
        tickQuarry(inventory, data, type, parseInt(item.charAt(item.length - 1)) + 1)
    }else if(/kubejs:inventory_assembler_tier_.$/.test(item)){
        tickAssembler(inventory, data, type, parseInt(item.charAt(item.length - 1)) + 1)
    }
}


function getSlotInDirection(slot, direction, type) {
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


function weightedRandom(items, weights) {
    let i;
    
    for (i = 1; i < weights.length; i++)
        weights[i] += weights[i - 1];

    let random = Math.random() * weights[weights.length - 1];

    for (i = 0; i < weights.length; i++)
        if (weights[i] > random)
            return items[i];
}


function resetSimpleMachineItemNbt(machineItem, fully){
    if(!fully) fully = false
    if(fully){
        machineItem.nbt.fuel = 0
        machineItem.nbt.CustomModelData = 0
    }
    machineItem.nbt.recipeProgress = 0
    machineItem.nbt.currentInputItem = "minecraft:air"
    machineItem.nbt.currentTime = 0
}


function resetQuarryItemNbt(machineItem, fully){
    if(!fully) fully = false
    if(fully){
        machineItem.nbt.fuel = 0
        machineItem.nbt.CustomModelData = 0
    }
    machineItem.nbt.recipeProgress = 0
    machineItem.nbt.currentInputItem = "minecraft:air"
    machineItem.nbt.currentOutputItem = "minecraft:air"
    machineItem.nbt.currentTime = 0
}



function resetRecipeIndexedMachineItemNbt(machineItem, fully){
    if(!fully) fully = false
    if(fully){
        machineItem.nbt.fuel = 0
        machineItem.nbt.CustomModelData = 0
    }
    machineItem.nbt.recipeProgress = 0
    machineItem.nbt.currentRecipe = -1
    machineItem.nbt.currentTime = 0
}


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


function tickSimpleMachine(inventory, machine, data, type, tier){
    if(tier == 1 || tier == 2){
        let {slotIndex, countProcess, ticksPerTick, fuelPerTick} = data
        let recipe, slotItem

        // reduce fuel
        let machineItem = inventory.getItem(slotIndex)
        if(machineItem.nbt.fuel >= fuelPerTick) machineItem.nbt.fuel -= fuelPerTick
        else {machineItem.nbt.fuel = 0, machineItem.nbt.CustomModelData = 0}

        // get recipe
        let inputSlotIndex = getSlotInDirection(slotIndex, "up", type)
        if(inputSlotIndex == null){resetSimpleMachineItemNbt(machineItem); return}
        else{
            slotItem = inventory.getItem(inputSlotIndex)
            recipe = getRecipeSimpleMachine(machine, slotItem)
            if(recipe.length == 0){resetSimpleMachineItemNbt(machineItem); return}
            slotItem = recipe[0]
            recipe = recipe[1]
        }

        // checks if the output can be inserted
        let outputItem = Item.of(recipe.output)
        let resultSlotIndex = getSlotInDirection(slotIndex, "down", type)
        let amountCanInsert = getAmountCanInsert(inventory, resultSlotIndex, outputItem.copyWithCount(countProcess * outputItem.count))
        if(amountCanInsert == 0){resetSimpleMachineItemNbt(machineItem); return}

        // check current input item and reset progress if it's different
        let inputItem = Item.of(recipe.input)
        if(machineItem.nbt.currentInputItem == "minecraft:air"){
            machineItem.nbt.currentInputItem = inputItem.id
            machineItem.nbt.currentTime = recipe.time
        }else if(!inputItem.is(machineItem.nbt.currentInputItem)){
            machineItem.nbt.recipeProgress = 0
            machineItem.nbt.currentInputItem = inputItem.id
            machineItem.nbt.currentTime = recipe.time
        }

        // adds fuel if needed, and progresses recipe
        if(machineItem.nbt.fuel < fuelPerTick){
            let fuel, slot, fuelRequired
            for(let direction of ["left", "right"] ){
                slot = getSlotInDirection(slotIndex, direction, type)
                fuel = getFuel(inventory, slot)
                if(!fuel.isEmpty()) break
            }
            if(fuel.isEmpty()){resetSimpleMachineItemNbt(machineItem, true); return}
            if(fuelItems[fuel.id] < fuelPerTick - machineItem.nbt.fuel){
                fuelRequired = Math.ceil((fuelPerTick - machineItem.nbt.fuel) / fuelItems[fuel.id])
                if(fuelRequired > fuel.count){resetSimpleMachineItemNbt(machineItem, true); return}
            }else{
                fuelRequired = 1
            }
            extractItem(inventory, slot, fuel.copyWithCount(fuelRequired))
            machineItem.nbt.fuel = fuelItems[fuel.id] * fuelRequired
            machineItem.nbt.CustomModelData = 1
        }
        machineItem.nbt.recipeProgress += ticksPerTick

        // processes recipe if done
        if(machineItem.nbt.recipeProgress >= recipe.time){
            let canProcess = countProcess
            if(amountCanInsert < canProcess * outputItem.count) canProcess = Math.floor(amountCanInsert / outputItem.count)
            if(slotItem.count < canProcess * inputItem.count) canProcess = Math.floor(slotItem.count / inputItem.count)

            extractItem(inventory, inputSlotIndex,  inputItem.copyWithCount(canProcess * inputItem.count))
            insertItem(inventory, resultSlotIndex, outputItem.copyWithCount(canProcess * outputItem.count))
            machineItem.nbt.recipeProgress = 0
            if(canProcess < countProcess || !canExtract(inventory, inputSlotIndex, inputItem) || !canInsert(inventory, resultSlotIndex, outputItem)){
                machineItem.nbt.currentInputItem = "minecraft:air"
                machineItem.nbt.currentTime = 0
                return
            }
        }
    }
}


function tickQuarry(inventory, data, type, tier){
    if(tier == 2){
        let {slotIndex, countProcess, ticksPerTick, fuelPerTick} = data
        let recipe, slotItem

        // reduce fuel
        let machineItem = inventory.getItem(slotIndex)
        if(machineItem.nbt.fuel >= fuelPerTick) machineItem.nbt.fuel -= fuelPerTick
        else {machineItem.nbt.fuel = 0, machineItem.nbt.CustomModelData = 0}

        let resultSlotIndex = getSlotInDirection(slotIndex, "down", type)
        if(!canInsertAnyItem(inventory, resultSlotIndex)){resetQuarryItemNbt(machineItem); return}

        // get recipe
        let inputSlotIndex = getSlotInDirection(slotIndex, "up", type)
        if(inputSlotIndex == null){resetQuarryItemNbt(machineItem); return}
        else{
            slotItem = inventory.getItem(inputSlotIndex)
            recipe = getRecipeSimpleMachine("quarry", slotItem)
            if(recipe.length == 0){resetQuarryItemNbt(machineItem); return}
            slotItem = recipe[0]
            recipe = recipe[1]
        }

        // check current input item and reset progress if it's different
        let inputItem = Item.of(recipe.input)
        if(machineItem.nbt.currentInputItem == "minecraft:air"){
            machineItem.nbt.currentInputItem = inputItem.id
            machineItem.nbt.currentTime = recipe.time
        }else if(!inputItem.is(machineItem.nbt.currentInputItem)){
            machineItem.nbt.recipeProgress = 0
            machineItem.nbt.currentInputItem = inputItem.id
            machineItem.nbt.currentOutputItem = weightedRandom(recipe.outputs, recipe.weights.slice())
            machineItem.nbt.currentTime = recipe.time
        }

        // checks if the output can be inserted
        if(machineItem.nbt.currentOutputItem == "minecraft:air"){
            machineItem.nbt.currentOutputItem = weightedRandom(recipe.outputs, recipe.weights.slice())
        }
        let outputItem = Item.of(machineItem.nbt.currentOutputItem)
        let amountCanInsert = getAmountCanInsert(inventory, resultSlotIndex, outputItem.copyWithCount(countProcess * outputItem.count))
        if(amountCanInsert == 0){resetQuarryItemNbt(machineItem); return}

        // adds fuel if needed, and progresses recipe
        if(machineItem.nbt.fuel < fuelPerTick){
            let fuel, slot, fuelRequired
            for(let direction of ["left", "right"] ){
                slot = getSlotInDirection(slotIndex, direction, type)
                fuel = getFuel(inventory, slot)
                if(!fuel.isEmpty()) break
            }
            if(fuel.isEmpty()){resetQuarryItemNbt(machineItem, true); return}
            if(fuelItems[fuel.id] < fuelPerTick - machineItem.nbt.fuel){
                fuelRequired = Math.ceil((fuelPerTick - machineItem.nbt.fuel) / fuelItems[fuel.id])
                if(fuelRequired > fuel.count){resetQuarryItemNbt(machineItem, true); return}
            }else{
                fuelRequired = 1
            }
            extractItem(inventory, slot, fuel.copyWithCount(fuelRequired))
            machineItem.nbt.fuel = fuelItems[fuel.id] * fuelRequired
            machineItem.nbt.CustomModelData = 1
        }
        machineItem.nbt.recipeProgress += ticksPerTick

        // processes recipe if done
        if(machineItem.nbt.recipeProgress >= recipe.time){
            let canProcess = countProcess
            if(amountCanInsert < canProcess * outputItem.count) canProcess = Math.floor(amountCanInsert / outputItem.count)
            
            let processes = 0
            let consumed = 0
            for(let i = 0; i < canProcess; i++){
                if(Math.random() <= recipe.consumeInputChance){
                    extractItem(inventory, inputSlotIndex,  inputItem.copyWithCount(inputItem.count))
                    consumed++
                    if(consumed == slotItem.count) break
                }
                processes++
            }
            insertItem(inventory, resultSlotIndex, outputItem.copyWithCount(processes * outputItem.count))

            machineItem.nbt.currentOutputItem = weightedRandom(recipe.outputs, recipe.weights.slice())
            outputItem = Item.of(machineItem.nbt.currentOutputItem)
            machineItem.nbt.recipeProgress = 0
            if(canProcess < countProcess || !canExtract(inventory, inputSlotIndex, inputItem) || !canInsert(inventory, resultSlotIndex, outputItem)){
                machineItem.nbt.currentInputItem = "minecraft:air"
                machineItem.nbt.currentOutputItem = "minecraft:air"
                machineItem.nbt.currentTime = 0
                return
            }
        }
    }
}


function tickBlastFurnace(inventory, data, type, tier){
    if(tier == 1 || tier == 2){
        let {slotIndex, countProcess, ticksPerTick, fuelPerTick} = data
        let slotItems = []
        let recipe

        // reduce fuel
        let machineItem = inventory.getItem(slotIndex)
        if(machineItem.nbt.fuel >= fuelPerTick) machineItem.nbt.fuel -= fuelPerTick
        else {machineItem.nbt.fuel = 0, machineItem.nbt.CustomModelData = 0}

        // get recipe
        let input2SlotIndex = getSlotInDirection(slotIndex, "up", type)
        let input1SlotIndex = getSlotInDirection(input2SlotIndex, "left", type)
        let input3SlotIndex = getSlotInDirection(input2SlotIndex, "right", type)
        let inputSlotIndexes = [input1SlotIndex, input2SlotIndex, input3SlotIndex].filter(slotIndex => slotIndex != null)

        if(input1SlotIndex == null && input2SlotIndex == null && input3SlotIndex == null){resetRecipeIndexedMachineItemNbt(machineItem); return}
        else{
            for(let slotIndex of inputSlotIndexes){
                slotItems.push(inventory.getItem(slotIndex))
            }
            recipe = getRecipeBlastFurnace(slotItems)
            if(recipe.length == 0){resetRecipeIndexedMachineItemNbt(machineItem); return}
            slotItems = recipe[0]
            recipe = recipe[1]
        }

        // checks if the output can be inserted
        let outputItem = Item.of(recipe.output)
        let resultSlotIndex = getSlotInDirection(slotIndex, "down", type)
        let amountCanInsert = getAmountCanInsert(inventory, resultSlotIndex, outputItem.copyWithCount(countProcess * outputItem.count))
        if(amountCanInsert == 0){resetRecipeIndexedMachineItemNbt(machineItem); return}

        // check current input item and reset progress if it's different
        if(machineItem.nbt.currentRecipe == -1){
            machineItem.nbt.currentRecipe = recipe.index
            machineItem.nbt.currentTime = recipe.time
        }else if(machineItem.nbt.currentRecipe != recipe.index){
            machineItem.nbt.recipeProgress = 0
            machineItem.nbt.currentRecipe = recipe.index
            machineItem.nbt.currentTime = recipe.time
        }

        // adds fuel if needed, and progresses recipe
        if(machineItem.nbt.fuel < fuelPerTick){
            let fuel, slot, fuelRequired
            for(let direction of ["left", "right"] ){
                slot = getSlotInDirection(slotIndex, direction, type)
                fuel = getFuel(inventory, slot)
                if(!fuel.isEmpty()) break
            }
            if(fuel.isEmpty()){resetRecipeIndexedMachineItemNbt(machineItem, true); return}
            if(fuelItems[fuel.id] < fuelPerTick - machineItem.nbt.fuel){
                fuelRequired = Math.ceil((fuelPerTick - machineItem.nbt.fuel) / fuelItems[fuel.id])
                if(fuelRequired > fuel.count){resetRecipeIndexedMachineItemNbt(machineItem, true); return}
            }else{
                fuelRequired = 1
            }
            extractItem(inventory, slot, fuel.copyWithCount(fuelRequired))
            machineItem.nbt.fuel = fuelItems[fuel.id] * fuelRequired
            machineItem.nbt.CustomModelData = 1
        }
        machineItem.nbt.recipeProgress += ticksPerTick

        // processes recipe if done
        if(machineItem.nbt.recipeProgress >= recipe.time){
            let canProcess = countProcess
            let inputItems = []
            for(let i = 0; i < slotItems.length; i++){
                let slotItem = slotItems[i]
                let inputItem = Item.of(recipe.inputs[slotItems[i][1]])
                inputItems.push(inputItem)
                if(slotItem.count < canProcess * inputItem.count) canProcess = Math.floor(slotItem.count / inputItem.count)

            }
            for(let i = 0; i < inputItems.length; i++){
                let inputSlotIndex = inputSlotIndexes[i]
                let inputItem = inputItems[i]
                if(inputSlotIndex != null) extractItem(inventory, inputSlotIndex, inputItem.copyWithCount(canProcess * inputItem.count))
            }
            insertItem(inventory, resultSlotIndex, outputItem.copyWithCount(canProcess * outputItem.count))
            machineItem.nbt.recipeProgress = 0
            if(
                canProcess < countProcess || 
                !canInsert(inventory, resultSlotIndex, outputItem) ||
                !canExtract(inventory, inputSlotIndexes[0], inputItems[0]) || 
                !canExtract(inventory, inputSlotIndexes[1], inputItems[1]) ||
                !canExtract(inventory, inputSlotIndexes[2], inputItems[2])
            ){
                machineItem.nbt.currentRecipe = -1
                machineItem.nbt.currentTime = 0
                return
            }
        }
    }
}


function tickMixer(inventory, data, type, tier){
    if(tier == 2){
        let {slotIndex, countProcess, ticksPerTick, fuelPerTick} = data
        let slotItems = []
        let recipe

        // reduce fuel
        let machineItem = inventory.getItem(slotIndex)
        if(machineItem.nbt.fuel >= fuelPerTick) machineItem.nbt.fuel -= fuelPerTick
        else {machineItem.nbt.fuel = 0, machineItem.nbt.CustomModelData = 0}

        // get recipe
        let input2SlotIndex = getSlotInDirection(slotIndex, "up", type)
        let input1SlotIndex = getSlotInDirection(input2SlotIndex, "left", type)
        let input3SlotIndex = getSlotInDirection(input2SlotIndex, "right", type)
        let inputSlotIndexes = [input1SlotIndex, input2SlotIndex, input3SlotIndex].filter(slotIndex => slotIndex != null)

        if(input1SlotIndex == null && input2SlotIndex == null && input3SlotIndex == null){resetRecipeIndexedMachineItemNbt(machineItem); return}
        else{
            for(let slotIndex of inputSlotIndexes){
                slotItems.push(inventory.getItem(slotIndex))
            }
            recipe = getRecipeMixer(slotItems)
            if(recipe.length == 0){resetRecipeIndexedMachineItemNbt(machineItem); return}
            slotItems = recipe[0]
            recipe = recipe[1]
        }

        // checks if the output can be inserted
        let outputItem = Item.of(recipe.output)
        let resultSlotIndex = getSlotInDirection(slotIndex, "down", type)
        let amountCanInsert = getAmountCanInsert(inventory, resultSlotIndex, outputItem.copyWithCount(countProcess * outputItem.count))
        if(amountCanInsert == 0){resetRecipeIndexedMachineItemNbt(machineItem); return}

        // check current input item and reset progress if it's different
        if(machineItem.nbt.currentRecipe == -1){
            machineItem.nbt.currentRecipe = recipe.index
            machineItem.nbt.currentTime = recipe.time
        }else if(machineItem.nbt.currentRecipe != recipe.index){
            machineItem.nbt.recipeProgress = 0
            machineItem.nbt.currentRecipe = recipe.index
            machineItem.nbt.currentTime = recipe.time
        }

        // adds fuel if needed, and progresses recipe
        if(machineItem.nbt.fuel < fuelPerTick){
            let fuel, slot, fuelRequired
            for(let direction of ["left", "right"] ){
                slot = getSlotInDirection(slotIndex, direction, type)
                fuel = getFuel(inventory, slot)
                if(!fuel.isEmpty()) break
            }
            if(fuel.isEmpty()){resetRecipeIndexedMachineItemNbt(machineItem, true); return}
            if(fuelItems[fuel.id] < fuelPerTick - machineItem.nbt.fuel){
                fuelRequired = Math.ceil((fuelPerTick - machineItem.nbt.fuel) / fuelItems[fuel.id])
                if(fuelRequired > fuel.count){resetRecipeIndexedMachineItemNbt(machineItem, true); return}
            }else{
                fuelRequired = 1
            }
            extractItem(inventory, slot, fuel.copyWithCount(fuelRequired))
            machineItem.nbt.fuel = fuelItems[fuel.id] * fuelRequired
            machineItem.nbt.CustomModelData = 1
        }
        machineItem.nbt.recipeProgress += ticksPerTick

        // processes recipe if done
        if(machineItem.nbt.recipeProgress >= recipe.time){
            let canProcess = countProcess
            let inputItems = []
            for(let i = 0; i < slotItems.length; i++){
                let slotItem = slotItems[i]
                let inputItem = Item.of(recipe.inputs[slotItems[i][1]])
                inputItems.push(inputItem)
                if(slotItem.count < canProcess * inputItem.count) canProcess = Math.floor(slotItem.count / inputItem.count)

            }
            for(let i = 0; i < inputItems.length; i++){
                let inputSlotIndex = inputSlotIndexes[i]
                let inputItem = inputItems[i]
                if(inputSlotIndex != null) extractItem(inventory, inputSlotIndex, inputItem.copyWithCount(canProcess * inputItem.count))
            }
            insertItem(inventory, resultSlotIndex, outputItem.copyWithCount(canProcess * outputItem.count))
            machineItem.nbt.recipeProgress = 0
            if(
                canProcess < countProcess || 
                !canInsert(inventory, resultSlotIndex, outputItem) ||
                !canExtract(inventory, inputSlotIndexes[0], inputItems[0]) || 
                !canExtract(inventory, inputSlotIndexes[1], inputItems[1]) ||
                !canExtract(inventory, inputSlotIndexes[2], inputItems[2])
            ){
                machineItem.nbt.currentRecipe = -1
                machineItem.nbt.currentTime = 0
                return
            }
        }
    }
}


function tickAssembler(inventory, data, type, tier){
    if(tier == 2){
        let {slotIndex, countProcess, ticksPerTick, fuelPerTick} = data
        let slotItems = []
        let recipe

        // reduce fuel
        let machineItem = inventory.getItem(slotIndex)
        if(machineItem.nbt.fuel >= fuelPerTick) machineItem.nbt.fuel -= fuelPerTick
        else {machineItem.nbt.fuel = 0, machineItem.nbt.CustomModelData = 0}

        // get recipe
        let input3SlotIndex = getSlotInDirection(slotIndex, "up", type)
        let input2SlotIndex = getSlotInDirection(input3SlotIndex, "left", type)
        let input1SlotIndex = getSlotInDirection(input2SlotIndex, "left", type)
        let input4SlotIndex = getSlotInDirection(input3SlotIndex, "right", type)
        let input5SlotIndex = getSlotInDirection(input4SlotIndex, "right", type)

        let inputSlotIndexes = [input1SlotIndex, input2SlotIndex, input3SlotIndex, input4SlotIndex, input5SlotIndex].filter(slotIndex => slotIndex != null)

        if(input1SlotIndex == null && input2SlotIndex == null && input3SlotIndex == null && input4SlotIndex == null && input5SlotIndex == null){
            resetRecipeIndexedMachineItemNbt(machineItem); return
        }
        else{
            for(let slotIndex of inputSlotIndexes){
                slotItems.push(inventory.getItem(slotIndex))
            }
            recipe = getRecipeAssembler(slotItems)
            if(recipe.length == 0){resetRecipeIndexedMachineItemNbt(machineItem); return}
            slotItems = recipe[0]
            recipe = recipe[1]
        }

        // checks if the output can be inserted
        let outputItem = Item.of(recipe.output)
        let resultSlotIndex = getSlotInDirection(slotIndex, "down", type)
        let amountCanInsert = getAmountCanInsert(inventory, resultSlotIndex, outputItem.copyWithCount(countProcess * outputItem.count))
        if(amountCanInsert == 0){resetRecipeIndexedMachineItemNbt(machineItem); return}

        // check current input item and reset progress if it's different
        if(machineItem.nbt.currentRecipe == -1){
            machineItem.nbt.currentRecipe = recipe.index
            machineItem.nbt.currentTime = recipe.time
        }else if(machineItem.nbt.currentRecipe != recipe.index){
            machineItem.nbt.recipeProgress = 0
            machineItem.nbt.currentRecipe = recipe.index
            machineItem.nbt.currentTime = recipe.time
        }

        // adds fuel if needed, and progresses recipe
        if(machineItem.nbt.fuel < fuelPerTick){
            let fuel, slot, fuelRequired
            for(let direction of ["left", "right"] ){
                slot = getSlotInDirection(slotIndex, direction, type)
                fuel = getFuel(inventory, slot)
                if(!fuel.isEmpty()) break
            }
            if(fuel.isEmpty()){resetRecipeIndexedMachineItemNbt(machineItem, true); return}
            if(fuelItems[fuel.id] < fuelPerTick - machineItem.nbt.fuel){
                fuelRequired = Math.ceil((fuelPerTick - machineItem.nbt.fuel) / fuelItems[fuel.id])
                if(fuelRequired > fuel.count){resetRecipeIndexedMachineItemNbt(machineItem, true); return}
            }else{
                fuelRequired = 1
            }
            extractItem(inventory, slot, fuel.copyWithCount(fuelRequired))
            machineItem.nbt.fuel = fuelItems[fuel.id] * fuelRequired
            machineItem.nbt.CustomModelData = 1
        }
        machineItem.nbt.recipeProgress += ticksPerTick

        // processes recipe if done
        if(machineItem.nbt.recipeProgress >= recipe.time){
            let canProcess = countProcess
            let inputItems = []
            for(let i = 0; i < slotItems.length; i++){
                if(slotItems[i][1] == -1) {inputItems.push(Item.of("minecraft:air")); continue}
                let slotItem = slotItems[i]
                let inputItem = Item.of(recipe.inputs[slotItems[i][1]])
                inputItems.push(inputItem)
                if(slotItem.count < canProcess * inputItem.count) canProcess = Math.floor(slotItem.count / inputItem.count)
            }
            for(let i = 0; i < inputItems.length; i++){
                let inputSlotIndex = inputSlotIndexes[i]
                let inputItem = inputItems[i]
                if(canExtract(inventory, inputSlotIndex, inputItem)){
                    if(inputSlotIndex != null) extractItem(inventory, inputSlotIndex, inputItem.copyWithCount(canProcess * inputItem.count))
                }
            }
            insertItem(inventory, resultSlotIndex, outputItem.copyWithCount(canProcess * outputItem.count))
            machineItem.nbt.recipeProgress = 0
            if(
                canProcess < countProcess || 
                !canInsert(inventory, resultSlotIndex, outputItem) ||
                !canExtract(inventory, inputSlotIndexes[0], inputItems[0]) || 
                !canExtract(inventory, inputSlotIndexes[1], inputItems[1]) ||
                !canExtract(inventory, inputSlotIndexes[2], inputItems[2]) ||
                !canExtract(inventory, inputSlotIndexes[3], inputItems[3]) ||
                !canExtract(inventory, inputSlotIndexes[4], inputItems[4])
            ){
                machineItem.nbt.currentRecipe = -1
                machineItem.nbt.currentTime = 0
                return
            }
        }
    }
}