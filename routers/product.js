const express = require('express');

const Save_product = require('./../routeFunc/productFunc/save_product');
const Search_product = require('./../routeFunc/productFunc/search_product');
const Search_one = require("./../routeFunc/productFunc/search_a_product");
const Search_All = require("./../routeFunc/productFunc/search_all_products");
const Update_product = require('./../routeFunc/productFunc/update_product');
const Delete_product = require('./../routeFunc/productFunc/delete_a_product');
const Available_product = require('./../routeFunc/productFunc/available_products');
const Available_QTY_POno = require('./../routeFunc/productFunc/avilable_QTY_POno');


const router = express.Router();

router.post('/save', Save_product);

router.get('/search', Search_product);

router.get('/searchone', Search_one);

router.get('/searchAll', Search_All);

router.put('/update', Update_product);

router.delete('/delete', Delete_product);
router.get('/available', Available_product);
router.get( '/available_QTY_POno', Available_QTY_POno)

module.exports = router;