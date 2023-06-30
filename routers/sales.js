const express = require('express');

const save_sales = require('./../routeFunc/salesFunc/save_sale');
const get_all = require('./../routeFunc/salesFunc/search_all')
const Daily_sales = require('./../routeFunc/salesFunc/search_daily');
const Search_bill_billID = require('./../routeFunc/salesFunc/search_bill_forBillId');
const Search_bill_data = require('./../routeFunc/salesFunc/search_bill_details_accordingToBillID');


const router = express.Router();

router.post('/save', save_sales);

router.get('/get_all', get_all);

router.get('/daily', Daily_sales);

router.get('/search_bill_billID', Search_bill_billID);

router.get('/search_bill_data', Search_bill_data)
module.exports = router;
