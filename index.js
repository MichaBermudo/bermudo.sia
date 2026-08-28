// Pakage Imports
const app = require('express')

//server setup
const server = app()
const PORT = 1234
const HOSTNAME = 'O.O.O.O'
server.listen(PORT, HOSTNAME, () => {
    console.log('Server is running in ${HOSTNAME}:${PORT}')
})