const express = require('express');


const Save_inputs = require('./../routeFunc/Raw_input/save_inputs');
const Search_all = require('./../routeFunc/Raw_input/search_all');
const Search = require('./../routeFunc/Raw_input/search_Raw');
const Search_one = require('./../routeFunc/Raw_input/search_a_product');
const Update = require('./../routeFunc/Raw_input/Update_raw');
const Delete = require('./../routeFunc/Raw_input/delete_a_Raw');
const Raw_avalable = require('./../routeFunc/Raw_input/raw_avalable');
const Get_batchNo_rawName = require('./../routeFunc/Raw_input/get_batchNO_rawName');
const Get_qty_batchNo = require('./../routeFunc/Raw_input/get_qty_batchNo');
const Get_data_accordingTorawName = require('./../routeFunc/Raw_input/get_data_accordingTorawName');
const Get_data_accordingTosupplier = require('./../routeFunc/Raw_input/get_data_accordingTosupplier');
const Get_data_accordingToDate = require('./../routeFunc/Raw_input/get_data_accordingToDate');
const router = express.Router();

router.post('/save_inputs', Save_inputs);

router.get('/search_all', Search_all);

router.get('/search_Raw', Search);

router.get('/search_a_product', Search_one);

router.put('/update_raw', Update)

router.delete('/delete_raw', Delete)

router.get('/raw_avalable', Raw_avalable);

router.get('/get_batch_no',Get_batchNo_rawName);

router.get('/get_available_qty',Get_qty_batchNo);

router.get('/get_data_accordingTorawName',Get_data_accordingTorawName)

router.get('/get_data_accordingTosupplier',Get_data_accordingTosupplier)

router.get('/get_data_accordingToDate',Get_data_accordingToDate)


module.exports = router;