let test = [{
    id: 1,
    subject: 'English',
    score: 78,
    studentId: 1
}, {
    id: 2,
    subject: 'Math',
    score: 95,
    studentId: 2
}, {
    id: 3,
    subject: 'History',
    score: 83,
    studentId: 23
}]

const express = require('express')
const router = express.Router()

router.get('/', async (req, res) => {
    await res.send(test)
});
router.get('/:id', async (req, res) => {
    await res.send(test[req.params.id])
});
router.post('/', (req, res) => {
    let newTest = {}
    newTest.id = test.length;
    newTest.subject = req.body.subject
    newTest.score = req.body.score
    newTest.studentId = req.body.studentId
    test.push(newTest)
    res.send(test)
})
router.put('/:id', (req, res) => {

});
router.delete('/:id', (req, res) => {

});
module.exports = router