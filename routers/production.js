const express = require('express');

const Save_production_raw_materials = require('./../routeFunc/Production/select_Raw_materials/save_materials');
const Search_all = require('./../routeFunc/Production/select_Raw_materials/search_all');
const Search = require('./../routeFunc/Production/select_Raw_materials/search');
const Search_One = require('./../routeFunc/Production/select_Raw_materials/search_a_raw');
const Update = require('./../routeFunc/Production/select_Raw_materials/update');
const get_pending = require('./../routeFunc/Production/select_Raw_materials/get_pending');


const router = express.Router();


router.post('/save_Raw_materials', Save_production_raw_materials);

router.get('/search_Raw_material', Search);

router.get('/search_Raw_materials', Search_all);

router.get('/search_Raw_material_one', Search_One)

router.put('/update_Raw_material', Update)

 router.get('/get_pending', get_pending)



module.exports = router;

