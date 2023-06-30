const { response } = require('express');
const DB = require('./../../config/database');


const available_products = async (req,res) => {
    const sql = 'SELECT product_name, GROUP_CONCAT(DISTINCT product_SKU) AS available_SKUs,SUM(product_SKU) AS sum_product_SKU FROM inventory_item GROUP BY product_name';
    DB.connection.query(sql, function(err, result) { 
        if (result) {
            res.send(result);
        }
        else{
            console.log(err);
        
        }
        
    
    })
}

module.exports = available_products;