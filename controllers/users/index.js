const users_controller = {
    index: async (req, res) =>{
        res.render('');
    },
    add: async (req, res) =>{
        res.render('./add_update');
    },
    update: async (req, res) =>{
        res.render('./add_update');
    }
};
  
module.exports = users_controller;
