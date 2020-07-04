var express = require('express');
var router = express.Router();
const reviewDataServices = require('../data-services/review');


router.post('/getReviews', async function (req, res, next) {
  try {
    const response = await reviewDataServices.getReview(req.body.userId);
    res.status(200).json(response);
  }
  catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
});


router.post('/addReview', async function (req, res, next) {
  const payload = { userId: req.body.userId, reviewerName: req.body.reviewerName,ratting: req.body.ratting, description: req.body.description };

  try {
    await reviewDataServices.addReview(payload);
    res.status(200).json("added");
  }
  catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
});


module.exports = router;
