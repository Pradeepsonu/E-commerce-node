const router = require('express').Router()

const electronicService = require('../services/electronicService')

router.get('/', async (req, res) => {
    const mobilesList = await electronicService.getMobiles()
    res.json({ mobiles: mobilesList });

})

router.get('/tabs', async (req, res) => {
    const tabList = await electronicService.getTabs()
    res.json({ tabs: tabList });


})

router.get('/laptops', async (req, res) => {
    const laptopList = await electronicService.getLaptops()
    res.json({ laptops: laptopList });

})
module.exports = router;
