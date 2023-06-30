const DB = require('../../config/database');
// const url = require('url')
// const querystring = require('querystring');


const proccessing_batchNo = ( req, res)=>{
//     const urlString = req.url;
// const parsedUrl = url.parse(urlString);
// const queryParams = querystring.parse(parsedUrl.query);
// const parameter = queryParams.Raw_no;
// console.log(parameter)
      
     
      const sql =`SELECT DISTINCT batch_no  FROM select_raw_materials WHERE status = 'pending';
      `;
     
      
      
      DB.connection.query(sql, (err, result)=>{
        if(err){
            console.log(err)
        
        }else{
           
            res.send(result)
            
        
        }
        
      });
    }



module.exports = proccessing_batchNo;