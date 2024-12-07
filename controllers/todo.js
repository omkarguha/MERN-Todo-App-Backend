const todoModel = require('../models/todo');

module.exports.getToDo = async(req, res)=>{
    const todo = await todoModel.find();
    res.send(todo);
}

module.exports.saveTodo= async(req, res)=>{
    const {text} = req.body;

    await todoModel.create({text})
    .then((data)=>{
        // console.log("added successfully");
        // console.log(data);
        res.send(data);
    })
}

module.exports.updateTodo= async(req, res)=>{
    const {_id, text} = req.body;
    await todoModel.findByIdAndUpdate(_id, {text})
    .then(()=> {
        res.send("updated successfully");
    }).catch((err)=> console.log(err));
}


module.exports.deleteTodo= async(req, res)=>{
    const {_id} = req.body;
    await todoModel.findByIdAndDelete(_id)
    .then(()=> {
        res.send("deleted successfully");
    }).catch((err)=> console.log(err));
}