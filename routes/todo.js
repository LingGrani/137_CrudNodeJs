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

module.exports = router;
