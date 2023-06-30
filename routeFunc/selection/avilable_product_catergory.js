const DB = require('../../config/database');
const url = require('url')
const querystring = require('querystring');


const Search_one = ( req, res)=>{
//     const urlString = req.url;
// const parsedUrl = url.parse(urlString);
// const queryParams = querystring.parse(parsedUrl.query);
// const parameter = queryParams.Raw_id;
      
     
      const sql = 'SELECT DISTINCT product_name FROM inventory_item;'
      
      DB.connection.query(sql, (err, result)=>{
        if(err){
            console.log(err)
        
        }else{
            res.send(result)
            
        
        }
        
      });
    }



module.exports = Search_one;