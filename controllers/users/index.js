const ticket_service = require('../../services/ticket')


const users_controller = {
    index: async (req, res) =>{
        res.render('');
    },
    add: async (req, res) =>{
        res.render('./add_update', { mode: 'Add' });
    },
    update: async (req, res) =>{
        const eventData = await ticket_service.getById(req.params.id);
        res.render('./add_update', { mode: 'Update', eventData: eventData });
    }
};
  
module.exports = users_controller;
