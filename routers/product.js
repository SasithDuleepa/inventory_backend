const express = require('express');

const Save_product = require('./../routeFunc/productFunc/save_product');
const Search_product = require('./../routeFunc/productFunc/search_product');
const Search_one = require("./../routeFunc/productFunc/search_a_product");
const Search_All = require("./../routeFunc/productFunc/search_all_products");
const Update_product = require('./../routeFunc/productFunc/update_product');
const Delete_product = require('./../routeFunc/productFunc/delete_a_product');
const Available_product = require('./../routeFunc/productFunc/available_products');
const Available_QTY_POno = require('./../routeFunc/productFunc/avilable_QTY_POno');
const po_no = require('./../routeFunc/productFunc/po_no_according_to_P_no');
const Available_product_for_sale = require('./../routeFunc/productFunc/available_all');



const router = express.Router();

router.post('/save', Save_product);

router.get('/search', Search_product);

router.get('/searchone', Search_one);

router.get('/searchAll', Search_All);

router.put('/update', Update_product);

router.delete('/delete', Delete_product);
router.get('/available', Available_product);
router.get( '/available_QTY_POno', Available_QTY_POno)

router.get('/po_no', po_no)

router.get('/available_all', Available_product_for_sale)
module.exports = router;