const express = require('express');

const Get_all = require('./../routeFunc/product_names/get_all_names');
const get_unit = require('./../routeFunc/product_names/get_unit_accordingToname');
const save_productName = require('./../routeFunc/product_names/save_productname');
const router = express.Router();



router.get('/get_all_names', Get_all);
router.get('/get_unit_accordingToname', get_unit)

router.post('/save_productname', save_productName)


module.exports = router;