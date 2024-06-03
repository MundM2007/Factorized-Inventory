ServerEvents.loaded(event => {
    event.server.runCommand('reload')
})