const DB = require('../../config/database');
const url = require('url')
const querystring = require('querystring');


const Raw_qty = ( req, res)=>{
    const urlString = req.url;
const parsedUrl = url.parse(urlString);
const queryParams = querystring.parse(parsedUrl.query);
const parameter = queryParams.Raw_no;
console.log(parameter)
      
     
      const sql =` SELECT input_SKU  FROM raw_inputs   WHERE raw_no = '${parameter}'`;
      
      
      DB.connection.query(sql, (err, result)=>{
        if(err){
            console.log(err)
        
        }else{
           
            res.send(result)
            
        
        }
        
      });
    }



module.exports = Raw_qty;