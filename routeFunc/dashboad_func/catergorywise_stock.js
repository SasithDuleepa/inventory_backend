const DB = require('../../config/database');

const Stock_products = ( req, res)=>{
    const sql = 'SELECT product_name, SUM(product_SKU) AS total_units FROM inventory_item GROUP BY product_name';
    DB.connection.query(sql,(err,result)=>{
        if(result.length > 0){
            res.send(result);
        }else{
            console.log(err);
        }
    }
    )
}

module.exports = Stock_products;
