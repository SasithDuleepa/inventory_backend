const express = require('express');

const save_sales = require('./../routeFunc/salesFunc/save_sale');
const get_all = require('./../routeFunc/salesFunc/search_all')
const Daily_sales = require('./../routeFunc/salesFunc/search_daily');
const Search_bill_billID = require('./../routeFunc/salesFunc/search_bill_forBillId');
const Search_bill_data = require('./../routeFunc/salesFunc/search_bill_details_accordingToBillID');
const Sale_acc_date = require('./../routeFunc/salesFunc/sale_acc_date');


const router = express.Router();

router.post('/save', save_sales);

router.get('/get_all', get_all);

router.get('/daily', Daily_sales);

router.get('/search_bill_billID', Search_bill_billID);

router.get('/search_bill_data', Search_bill_data)

router.get('/sale_acc_date', Sale_acc_date)
module.exports = router;
