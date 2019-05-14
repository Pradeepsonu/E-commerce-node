const router = require('express').Router()

const productService = require('../services/productService');

router.post('/', async (req, res) => {
    try {
        await productService.insert(req.body);
        res.json({ message: "Product added successfully" })
    }
    catch (err) {
        res.status(422).json({ message: err })
        console.log(err);
    }
})

module.exports = router