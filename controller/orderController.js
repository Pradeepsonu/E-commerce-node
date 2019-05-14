const router = require('express').Router()

const orderService = require('../services/orderService')

router.post('/', async (req, res) => {
    try {
        await orderService.insert(req.body)
        res.json({ message: "Order Placed Successfully" })
    }
    catch (err) {
        res.status(422).json({ message: err });
    }
})

module.exports = router