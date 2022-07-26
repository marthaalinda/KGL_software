const express = require('express');
 // Product = require('../models/Product');

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

// router.post('/', async (req, res) => {
//   try {
//     const product = new Product(req.body);
//     await product.save();
//     res.redirect('products/productlist');
//     // console.log(req.body);
//   } catch (err) {
//     res.status(400).render('pdtsales');
//   }
// });

// router.get('/productlist', async (req, res) => {
//   try {
//     const pdtDetails = await Product.find();
//     res.render('pdtlist', { products: pdtDetails, title: 'Product Details' });
//   } catch (err) {
//     console.log(err);
//     res.send('Failed to retrieve Product Details.');
//   }
// });

// router.post('/delete', async (req, res) => {
//   try {
//     await Product.deleteOne({ _id: req.body.id });
//     res.redirect('back');
//   } catch (error) {
//     res.status(400).send('Unable to delete item in the database');
//   }
// });

// router.get('/edit/:id', (req, res) => {
//   Product.findById(req.params.id, (err, product) => {
//     res.render('editproduct', {
//       title: '',
//       product: product,
//     });
//   });
// });

// router.post('/edit/:id', (req, res) => {
//   let product = {};
//   product.pdtname = req.body.pdtname;
//   product.price = req.body.price;

//   let query = { _id: req.params.id };

//   Product.updateOne(query, product, (err) => {
//     if (err) {
//       console.error(err);
//       return;
//     } else {
//       req.flash('success', 'Product updated!!');
//       res.redirect('/');
//     }
//   });
// });

// router.get('/editproduct', (req, res)=> {
//   res.render('editproduct')
// }) 

module.exports = router;
