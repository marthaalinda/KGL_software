const express = require('express');
const  Sale = require('../models/Sale');
const Form = require('../models/Form');

const router = express.Router();

router.get('/sales', (req, res) => {
  res.render('sales', {
    title: 'Product Sales',
  });
});
router.get('/form', (req, res) => {
  res.render('form', {
    title: 'Product Sales',
  });
});
router.get('/index', (req, res) => {
  res.render('index', {
    title: 'Product Sales',
  });
});
router.get('/login', (req, res) => {
  res.render('login', {
    title: 'Product Sales',
  });
});


router.post('/sales', async (req, res) => {
  try {
    const sales = new Sale(req.body);
    await sales.save();
    res.redirect('/salesreport');
     console.log(req.body);
  } catch (err) {
    res.status(400).render('sales');
  }
});

router.get('/salesreport', async (req, res) => {
  try {
    const sales = await Sale.find();
    res.render('salesreport', { sales: sales });
  } catch (err) {
    console.log(err);
    res.send('Failed to retrieve sales Details.');
  }
});

router.post('/salesreport/delete', async (req, res) => {
  try {
    await Sale.deleteOne({ _id: req.body.id });
    res.redirect('back');
  } catch (error) {
    res.status(400).send('Unable to delete item in the database');
  }
});

router.get('/salesreport/edit/:id', async (req, res)=>{
  
  try
    {
    const sale = await Sale.findOne({ _id:req.params.id});
    res.render('salesedit', {sale:sale});
    } 
  catch (err) {
    res.status(400).send("Unable to delete item in the database");
  }  
  //res.render ("login")
 
});

router.post('/salesreport/edit', async (req, res)=>{
  try{
     await Sale.findOneAndUpdate({ _id:req.query.id},req.body);
    res.redirect("/salesreport");
    } 
  catch (err) {
    res.status(400).send("Unable to update item in the database");
  }   
 
});

router.post('/form', async (req, res) => {
  try {
    const form = new Form(req.body);
    await form.save();
    res.redirect('/formreport');
     console.log(req.body);
  } catch (err) {
    res.status(400).render('form');
  }
});

router.get('/formreport', async (req, res) => {
  try {
    const form = await Form.find();
    res.render('formreport', { form: form });
  } catch (err) {
    console.log(err);
    res.send('Failed to retrieve Form Details.');
  }
});
// router.get('/editproduct', (req, res)=> {
//   res.render('editproduct')
// }) 

router.post('/formreport/delete', async (req, res) => {
  try {
    await Form.deleteOne({ _id: req.body.id });
    res.redirect('back');
  } catch (error) {
    res.status(400).send('Unable to delete item in the database');
  }
});

router.get('/formreport/edit/:id', async (req, res)=>{
  
  try
    {
    const newform = await Form.findOne({ _id:req.params.id});
    res.render('formedit', {newform:newform});
    } 
  catch (err) {
    res.status(400).send("Unable to delete item in the database");
  }  
  //res.render ("login")
 
});

router.post('/formreport/edit', async (req, res)=>{
  try{
     await Form.findOneAndUpdate({ _id:req.query.id},req.body);
    res.redirect("/formreport");
    } 
  catch (err) {
    res.status(400).send("Unable to update item in the database");
  }   
 
});
module.exports = router;
