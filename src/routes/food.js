const express = require('express');
const router = express.Router();


const {
    getAllfood,
    createfood,
    getfood,
    updatefood,
    deletefood,
} = require('../implementations/food-route-implementations');


router.post('/food',createfood);
router.get('/food/:id',getfood);
router.get('/food',getAllfood);
router.put('/food/:id',updatefood);
router.delete('/food/:id',deletefood);

module.exports = router;