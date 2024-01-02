const list = require('../models/list')

module.exports.home = function(req, res){
    list.find({}, function(err, lists){
        if(err){
            console.log('Error in fetching the lists');
            return;
        }
    
        return res.render('todo_list', {
            title: "TODO App",
            task_list: lists
        });
    });
}