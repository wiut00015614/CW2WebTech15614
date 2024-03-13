const fs = require('fs')
// access global db file
const tickets = require(global.db)

// write service method implementations
const ticket_service = {
    getAll() {
        return tickets
    }
}

module.exports = ticket_service
