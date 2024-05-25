StartupEvents.registry('item', e => {
    e.create('kubejs:inventory_hopper').unstackable()
    e.create('kubejs:inventory_hopper_left_facing').displayName("Left Facing Inventory Hopper").unstackable()
    e.create('kubejs:inventory_upper').unstackable()
    e.create('kubejs:inventory_hopper_right_facing').displayName("Right Facing Inventory Hopper").unstackable()
})