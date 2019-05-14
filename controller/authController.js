const router = require('express').Router()

const authService = require('../services/authService');

router.post('/login', async (req, res) => {
    try {
        await authService.login(req.body);
        res.json({ message: "User successfully logged in" })
    }
    catch (err) {
        console.log(err)
        res.status(422).json({ message: err })
    }
})

router.post('/register', async (req, res) => {
    try {
        await authService.insert(req.body)
        res.json({ message: "In user post" })
    }
    catch (err) {
        res.status(422).json({ message: err });
    }
})

module.exports = router;