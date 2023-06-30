const express = require('express');

const Raw_names = require('./../routeFunc/selection/input_raw_names');
const Raw_no = require('./../routeFunc/selection/rawNumber_according_to_name');
const Raw_qty = require('./../routeFunc/selection/raw_QTY_accordingto_rawNo');
const proccessing_batchNo = require('./../routeFunc/selection/pending_batch_no');
const qty_batchNo = require('./../routeFunc/selection/available_qty_accordingTo_batchno');
const Availble_products = require('./../routeFunc/selection/avilable_product_catergory');
const Sale_details = require('./../routeFunc/selection/sale_details');
const Raw_stock = require('./../routeFunc/selection/raw_stock');


const router = express.Router();

router.get('/raw_names',Raw_names);

router.get('/raw_no',Raw_no);

router.get('/raw_qty',Raw_qty);

router.get('/proccessing_batchNo',proccessing_batchNo);

router.get('/qty_batchNo',qty_batchNo);

router.get('/Availble_products',Availble_products)

router.get('/sale_details',Sale_details);

router.get('/raw_stock',Raw_stock);




module.exports = router;