const express = require('express');
const router = express.Router();
const {setCard,getCard}=require('../controllers/card')
router.post('/tinder/card', setCard);
router.get('/tinder/card', getCard);

module.exports = router;
