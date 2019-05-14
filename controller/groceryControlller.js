const router = require('express').Router()

const groceryService = require('../services/groceryService')

router.get('/', async (req, res) => {
    const grocery = await groceryService.getGrocery()
    res.json({ grocery: grocery });
})

module.exports = router;
