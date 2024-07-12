ServerEvents.tags("item", event => {
    for(let i = 1; i < 4; i++){
        event.add("kubejs:inventory_hoppers_tier_" + i, "kubejs:inventory_hopper_down_facing_tier_" + i)
        event.add("kubejs:inventory_hoppers_tier_" + i, "kubejs:inventory_hopper_left_facing_tier_" + i)
        event.add("kubejs:inventory_hoppers_tier_" + i, "kubejs:inventory_hopper_up_facing_tier_" + i)
        event.add("kubejs:inventory_hoppers_tier_" + i, "kubejs:inventory_hopper_right_facing_tier_" + i)

        event.add("kubejs:inventory_pistons_tier_" + i, "kubejs:inventory_piston_down_facing_tier_" + i)
        event.add("kubejs:inventory_pistons_tier_" + i, "kubejs:inventory_piston_left_facing_tier_" + i)
        event.add("kubejs:inventory_pistons_tier_" + i, "kubejs:inventory_piston_up_facing_tier_" + i)
        event.add("kubejs:inventory_pistons_tier_" + i, "kubejs:inventory_piston_right_facing_tier_" + i)

        event.add("kubejs:inventory_sticky_pistons_tier_" + i, "kubejs:inventory_sticky_piston_down_facing_tier_" + i)
        event.add("kubejs:inventory_sticky_pistons_tier_" + i, "kubejs:inventory_sticky_piston_left_facing_tier_" + i)
        event.add("kubejs:inventory_sticky_pistons_tier_" + i, "kubejs:inventory_sticky_piston_up_facing_tier_" + i)
        event.add("kubejs:inventory_sticky_pistons_tier_" + i, "kubejs:inventory_sticky_piston_right_facing_tier_" + i)
    }
})