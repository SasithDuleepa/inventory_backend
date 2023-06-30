const express = require('express');

const sale_category = require('./../routeFunc/dashboad_func/catergorywisw_sale');
const Stock_products = require('./../routeFunc/dashboad_func/catergorywise_stock');
const Search_batch_no = require('./../routeFunc/dashboad_func/select_raw_batch_no');
const BatchNo_Product = require('./../routeFunc/dashboad_func/batch_no_according_to_product');
const Available_products = require('./../routeFunc/dashboad_func/available_products');

const router = express.Router();


router.get('/sale_catergory', sale_category);

router.get('/stock_products', Stock_products);


router.get('/search_batch_no', Search_batch_no);

router.get('/batch_no_product', BatchNo_Product);

router.get('/available_products', Available_products)


module.exports = router;