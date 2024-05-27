PlayerEvents.loggedIn(event => {
    if (!event.player.stages.has('starting')) {
        event.player.stages.add('starting')
        event.player.give('ftbquests:book')

        player.persistentData.machineData = {}
    }
})