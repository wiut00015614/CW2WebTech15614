const fs = require('fs')

// access global db file
const tickets = require(global.db)

// write service method implementations
const ticket_service = {
    getAll() {
        return tickets
    },
    getById(id) {
        return tickets.find(t => t.id == id)
    },    
    create(req, res) {
        let new_id = genRandId(4)
                
        const ticket = req.body

        const new_ticket = {
            id: new_id,
            ticket: ticket
        }

        tickets.push(new_ticket)
        
        writeToFile(tickets)
        
        return new_ticket
    },
    delete(id) {
        const index = tickets.findIndex(u => u.id == id)
        tickets.splice(index, 1)    
        writeToFile(tickets)
    }
}

// create function for overwriting the db file updated db content
let writeToFile = async (users) => {
    await 
        fs.writeFileSync(
            global.db,
            JSON.stringify(
                users, null, 4
            ),
            'utf8'
        )
}

// generate random id inspired by uuid
let genRandId = (count) =>{
    let result = ''
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    const charactersLength = characters.length
    for (let i = 0; i < count; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength))
    }
    return result
}

module.exports = ticket_service
