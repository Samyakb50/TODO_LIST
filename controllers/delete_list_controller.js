const list = require('../models/list')


module.exports.delete_list = function(req, res){
    console.log(req.body);
    console.log("add");
    let id = req.body.delete;
    list.findByIdAndDelete(id, function(err){
        if(err){
            console.log('error in deleting object from database')
            return;
        }
        return res.redirect('back');
    });
}