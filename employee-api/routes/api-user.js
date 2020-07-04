var express = require('express');
var router = express.Router();
const userDataServices = require('../data-services/user');

router.get('/getEmployees', async function (req, res, next) {
  try {
    const employees = await userDataServices.getEmployees();
    res.status(200).json({ employees });
  }
  catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
});

router.post('/getUser', async function (req, res, next) {
  try {
    const response = await userDataServices.getUser(req.body.email, req.body.isAdmin);
    if (response) {
      res.status(200).json(response)
    }
    else {
      res.status(400).json({ msg: 'Wrong email or role' })
    }
  }
  catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
});

router.post('/updateUser', async function (req, res, next) {
  const payload = { email: req.body.email, name: req.body.name, phoneNumber: req.body.phoneNumber };
  try {
    await userDataServices.updateUser(payload);
    res.status(200).json({ msg: 'updated' });
  }
  catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
});

router.post('/addEmployee', async function (req, res, next) {
  const payload = { email: req.body.email, name: req.body.name, phoneNumber: req.body.phoneNumber };
  try {
    const response = await userDataServices.findUser(req.body.email)
    if (!response) {
      await userDataServices.addEmployee(payload);
      res.status(200).json({ msg: 'added' });
    }
    else {
      res.status(400).json({ msg: 'email already exists' });
    }
  }
  catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
});


module.exports = router;
