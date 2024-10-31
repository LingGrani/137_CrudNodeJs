const express = require("express");
const router = express.Router();

let todo = [
    {
        id: 1, task: "Belajar node.js", complete: false
    },
    {
        id: 2, task: "Membuat API", complete: true
    }
];

router.get('/', (req, res) => {
    res.json(todo);
});

router.post('/', (req, res) => {
  const newTodo = {
    id: todo.length + 1,
    task: req.body.task,
    completed: false
  };
  todo.push(newTodo);
  res.status(201).json(newTodo);
});

module.exports = router;

router.delete('/:id', (req, res) => {
    const todoIndex = todo.findIndex(t => t.id === parseInt(req.params.id));
    if (todoIndex === -1) return res.status(404).json({ message: 'Tugas tidak ditemukan' });

    const deletedTodo = todo.splice(todoIndex, 1)[0];
    res.status(200).json({ message: `Tugas '${deletedTodo.task}' telah dihapus` });
});

router.put('/:id', (req, res) =>{
    const todos = todo.find(t => t.id === parseInt(req.params.id));
    if (!todos) return res.status(404).json({message: 'Tugas tidak ditemukan'});
    todos.task = req.body.task || todos.task;
    res.status(200).json ({
        message: `tugas dengan ID ${todos.id} telah diperbarui`,
        updateTodo: todo
    })
})