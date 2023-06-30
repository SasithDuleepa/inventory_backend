const DB = require('../../config/database');
const url = require('url')
const querystring = require('querystring');


const Raw_no = ( req, res)=>{
    const urlString = req.url;
const parsedUrl = url.parse(urlString);
const queryParams = querystring.parse(parsedUrl.query);
const parameter = queryParams.Raw_name;
console.log(parameter)
      
     
      const sql =` SELECT raw_no  FROM raw_inputs   WHERE input_name = '${parameter}'`;
      
      
      DB.connection.query(sql, (err, result)=>{
        if(err){
            console.log(err)
        
        }else{
            
            res.send(result)
            
        
        }
        
      });
    }



module.exports = Raw_no;