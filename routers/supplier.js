const express = require('express');

const Add_supplier = require('./../routeFunc/Supplier/Add_Supplier');
const Get_all = require('./../routeFunc/Supplier/Get_all');
const get_suppliers = require('./../routeFunc/Supplier/Get_Suppliers');


const router = express.Router();

router.post('/Add_supplier', Add_supplier);

router.get('/Get_all', Get_all);

router.get('/Get_suppliers', get_suppliers);

module.exports = router;