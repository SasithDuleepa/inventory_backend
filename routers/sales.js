const express = require('express');

const save_sales = require('./../routeFunc/salesFunc/save_sale');
const get_all = require('./../routeFunc/salesFunc/search_all')
const Daily_sales = require('./../routeFunc/salesFunc/search_daily');


const router = express.Router();

router.post('/save', save_sales);

router.get('/get_all', get_all);

router.get('/daily', Daily_sales);

module.exports = router;
