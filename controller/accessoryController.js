const router = require('express').Router()

const accessoryService = require('../services/accessoryService')

router.get('/', async (req, res) => {
    const heaphoneList = await accessoryService.getHeads()
    res.json({ heads: heaphoneList });

})

router.get('/backcover', async (req, res) => {
    const coverList = await accessoryService.getCovers()
    res.json({ covers: coverList });


})

router.get('/drives', async (req, res) => {
    const driveList = await accessoryService.getDrives()
    res.json({ drives: driveList });

})
module.exports = router;
