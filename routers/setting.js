const express = require('express');

const Add_Units = require( '../routeFunc/setting/set_raw_unit');
const Get_all = require('./../routeFunc/setting/get_raw_unit');

const router = express.Router();

router.post('/add_unit', Add_Units);

router.get('/all_units', Get_all);

module.exports = router;