const User = require('../models/user');

module.exports = {
    index,
};


function index (req,res) {
    console.log('user: ', req.user)
}