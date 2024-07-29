ServerEvents.loaded(event => {
    event.server.runCommand('kubejs reload server_scripts')
})