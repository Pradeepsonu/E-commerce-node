const router = require('express').Router()

const homeapplianceService = require('../services/homeapplianceService')

router.get('/', async (req, res) => {
    const tvList = await homeapplianceService.getTvs()
    res.json({ tv: tvList });

})

router.get('/fridge', async (req, res) => {
    const fridgeList = await homeapplianceService.getFridges()
    res.json({ fridge: fridgeList });


})

router.get('/washings', async (req, res) => {
    const wmList = await homeapplianceService.getWashings()
    res.json({ wash: wmList });

})

router.get('/ac', async (req, res) => {
    const acList = await homeapplianceService.getAcs()
    res.json({ ac: acList })
})
module.exports = router;

