const router = require('express').Router()

const clothesService = require('../services/clothesService')

router.get('/', async (req, res) => {
    const menList = await clothesService.getMens()
    res.json({ mens: menList });

})

router.get('/womens', async (req, res) => {
    const womenList = await clothesService.getWomens()
    res.json({ womens: womenList });

})

router.get('/kids', async (req, res) => {
    const kidList = await clothesService.getKids()
    res.json({ kids: kidList });

})
module.exports = router;
