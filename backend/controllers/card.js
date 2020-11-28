const Card = require('../models/card');
exports.getCard = (req, res) => {
    Card.find().sort({'_id': -1}).exec((err, cards) => {
      if (err || !cards) {
        return res.json({ error: 'No Cards Found' });
      }
      return res.json(cards);
    });
  };

  exports.setCard=(req,res)=>{
    try {
      const card = new Card(req.body);
      card.save((err, card) => {
        if (err) {
          return res.status(400).json({ err: err });
        }
  
        return res.json(card);
      });
    } catch (error) {
      return res.status(500).json({ msg: 'Server error' });
    }
  }