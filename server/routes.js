
const express = require('express');

const todoRoutes = express.Router();

const Todo = require('./todo');

// get all todos in the db
todoRoutes.route('/all').get((req, res, next) => {
    Todo.find((err, todos) => {
        if (err) {
            return next(new Error(err));
        }

        return res.json(todos);
    });
});

// create a todo item
todoRoutes.route('/add').post((req, res) => {
    Todo.create(
        {
            name: req.body.name,
            done: false,
        },
        (error, todo) => {
            if (error) {
                res.status(400).send('Unable to create todo list');
            }
            res.status(200).json(todo);
        }
    );
});

// delete a todo item
todoRoutes.route('/delete/:id').get((req, res, next) => {
    let id = req.params.id;
    Todo.findByIdAndRemove(id, (err, todo) => {
        if (err) {
            return next(new Error('Todo was not found'));
        }

        return res.json('Successfully removed');
    });
});

// perform update on todo item
todoRoutes.route('/update/:id').post((req, res, next) => {
    let id = req.params.id;

    Todo.findById(id, (error, todo) => {
        if (error) {
            return next(new Error('Todo was not found'));
        }

        todo.name = req.body.name;
        todo.done = req.body.done;

        todo.save(
            function (err, savedTodo) {
                if (err) {
                    return res.status(400).send('Unable to update todo');
                } else {
                    return res.status(200).json(savedTodo);
                }
            }
        );
    });
});

module.exports = todoRoutes;
