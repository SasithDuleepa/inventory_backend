const DB = require('../../config/database');
const url = require('url')
const querystring = require('querystring');


const Search_one = ( req, res)=>{
    const urlString = req.url;
const parsedUrl = url.parse(urlString);
const queryParams = querystring.parse(parsedUrl.query);
const parameter = queryParams.product_id;
      
      console.log(parameter)
      const sql = `SELECT * FROM inventory_item WHERE idinventory_item_id = ${parameter}`
      DB.connection.query(sql, (err, result)=>{
        if(err){
            console.log(err)
        
        }else{
            res.send(result)
            
        
        }
        
      });
    }



module.exports = Search_one;