let student = [{
    id: 1,
    name: 'Dan'
}, {
    id: 2,
    name: 'Karen'
}, {
    id: 3,
    name: 'jim'
}, {
    id: 4,
    name: 'Michael'
}, {
    id: 5,
    name: 'Pam'
}, {
    id: 5,
    name: 'Dwight'
}]
const express = require('express')
const router = express.Router()


router.get('/', async (req, res) => {
    await res.send(student)
});
router.get('/:id', async (req, res) => {

    await res.send(student[req.params.id])
});
router.post('/', (req, res) => {
    let newStu = {}
    newStu.id = student.length
    newStu.name = req.body[0].name

    student.push(newStu)
    res.send(student)
})
router.put('/:id', (req, res) => {

    student[req.params.id].name = req.body[0].name
    res.send(student)
});
router.delete('/:id', (req, res) => {
    res.delete(student[req.params.id])
});

module.exports = router;