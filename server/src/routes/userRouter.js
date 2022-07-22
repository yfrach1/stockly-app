const express = require('express');
const router = express.Router();
const userSerivce = require('../services/userSerivce');

router.post('/user', async (req, res) => {
    const item = await userSerivce.handleUser(req.body.item);
    res.status(201).json(item);
})

module.exports = router
