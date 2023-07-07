const express = require('express');

const Add_Units = require( '../routeFunc/setting/set_raw_unit');
const Get_all = require('./../routeFunc/setting/get_raw_unit');


const Get_product_unit = require( './../routeFunc/setting/product_unit/get_product_unit');
const Set_product_unit = require( './../routeFunc/setting/product_unit/set_product_unit');


const router = express.Router();

router.post('/add_unit', Add_Units);//for raw
router.get('/all_units', Get_all);//for raw


router.get('/All_productUnits', Get_product_unit);
router.post('/save_productUnits', Set_product_unit)


module.exports = router;