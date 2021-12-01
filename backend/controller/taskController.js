const Task = require('../models/Task');
const taskMethods = {}

taskMethods.createTask = async (req, res) => {
    const { title, description, dueDate } = req.body;
    const newTask = new Task({
        userId: req.userID,
        title: title,
        description: description,
        dueDate: dueDate
    });

    newTask.save()
    .then(data => {
        return res.status(200).json({code: 0, message: "Se anadio tarea correctamente", task: data});
    })
    .catch(error => {
        return res.status(500).json(error);
    });
}

taskMethods.updateTask = async (req, res) => {
    const { idTask, title, description, dueDate, isChecked } = req.body;
    try {
        await Task.findByIdAndUpdate(idTask, {$set: {
            title: title,
            description: description,
            dueDate: dueDate,
            isChecked: isChecked
        }});

        return res.status(200).json({code: 0, message: "Tarea actualizada"});
    } catch (error) {
        console.error(error);
        res.status(500).json(error);
    }
}

taskMethods.deleteTask = async (req, res) => {
    const { idTask } = req.body;
    try {
        await Task.findByIdAndRemove(idTask)

        return res.status(200).json({code: 0, message: "Tarea eliminada"});
    } catch (error) {
        console.error(error);
        res.status(500).json(error);
    }
}

taskMethods.getTasks = async (req, res) => {
    try {

        const task = await Task.find({userId: req.userID});
        if(task.length === 0){
            return res.status(200).json({code: 1, message: "Usuario no tiene tareas creadas"});
        }

        return res.status(200).json({code: 0, message: "OK", tasks: task});

    } catch (error) {
        console.error(error);
        res.status(500).json(error);
    }
}

module.exports = taskMethods;
