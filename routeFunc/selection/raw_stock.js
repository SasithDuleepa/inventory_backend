const DB = require('../../config/database');
const url = require('url')
const querystring = require('querystring');


const Raw_stock = ( req, res)=>{
    const urlString = req.url;
const parsedUrl = url.parse(urlString);
const queryParams = querystring.parse(parsedUrl.query);
const parameter = queryParams.Raw_name;
      
     
      const sql = `SELECT input_name, SUM(input_SKU) AS total_input_SKU  FROM raw_inputs  WHERE input_name = ${parameter} GROUP BY input_name;`
      
      DB.connection.query(sql, (err, result)=>{
        if(err){
            console.log(err)
        
        }else{
            res.send(result)
            
        
        }
        
      });
    }



module.exports = Raw_stock;