const router = require('express').Router()

const footwearService = require('../services/footwearService')

router.get('/', async (req, res) => {
    const mens = await footwearService.getMen()
    res.json({ men: mens });
})

router.get('/women', async (req, res) => {
    const womens = await footwearService.getWomen()
    res.json({ women: womens })
})

module.exports = router;
