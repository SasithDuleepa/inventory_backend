const express = require('express');

const save_raw = require('./../routeFunc/raw_materials_name/save_raw_material')
const Get_all = require('./../routeFunc/raw_materials_name/get_raw_names')



const router = express.Router();

router.post('/save_raw_material',save_raw);
router.get('/get_raw_names',Get_all)


module.exports = router;