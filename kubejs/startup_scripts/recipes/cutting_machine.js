function addCuttingMachineRecipes(material){
    // rod from plate
    addCuttingMachineRecipe(`3x kubejs:${material}_rod`, `kubejs:${material}_plate`);

    // bolt from rod
    addCuttingMachineRecipe(`2x kubejs:${material}_bolt`, `kubejs:${material}_rod`);
}

addCuttingMachineRecipes("aluminum")
addCuttingMachineRecipes("brass")
addCuttingMachineRecipes("bronze")
addCuttingMachineRecipes("cobalt")
addCuttingMachineRecipes("constantan")
addCuttingMachineRecipes("copper")
addCuttingMachineRecipes("diamond")
addCuttingMachineRecipes("electrum")
addCuttingMachineRecipes("emerald")
addCuttingMachineRecipes("gold")
addCuttingMachineRecipes("invar")
addCuttingMachineRecipes("iridium")
addCuttingMachineRecipes("iridium_alloy")
addCuttingMachineRecipes("iron")
addCuttingMachineRecipes("lapis_lazuli")
addCuttingMachineRecipes("lead")
addCuttingMachineRecipes("nickel")
addCuttingMachineRecipes("platinum")
addCuttingMachineRecipes("steel")
addCuttingMachineRecipes("tin")
addCuttingMachineRecipes("titanium")
addCuttingMachineRecipes("zinc")

