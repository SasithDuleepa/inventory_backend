const DB = require('../../config/database');

const sale_category = (req,res)=>{

    const sql = 'SELECT product_name, SUM(units) AS total_units FROM sales GROUP BY product_name';
    DB.connection.query(sql,(err,result)=>{
        if(result.length > 0){
            res.send(result);
        }else{
            console.log(err);
        }
    }
    )
    
}

module.exports = sale_category;