const list = require('../models/list')


module.exports.add_list = function(req, res){
    console.log(req.body);
    console.log("add");
    
    list.create({
        description: req.body.description,
        category: req.body.category,
        dueDate: req.body.duedate        //req.body["due-date"] // -->>original format which was fetched
    }, function(err, newList){
        if(err){
            console.log('Error in creating the new list.', err);
            return;
        }
        console.log(`Lists added successfully: ${newList}`);
        return res.redirect('back');
    });

};