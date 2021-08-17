const express = require('express');
const router2 = express.Router();


const {
    createclothes,
    getclothes,
    getAllclothes,
    updateclothes,
    deleteclothes
} = require('../implementations/clothes-route-implementations');


router2.post('/clothes',createclothes);
router2.get('/clothes/:id',getclothes);
router2.get('/clothes',getAllclothes);
router2.put('/clothes/:id',updateclothes);
router2.delete('/clothes/:id',deleteclothes);

module.exports = router2;