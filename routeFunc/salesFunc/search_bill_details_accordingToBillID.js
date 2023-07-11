const DB = require('./../../config/database');
const url = require('url')
const querystring = require('querystring');

const search_bill_data = (req,res)=>{
    const urlString = req.url;
    const parsedUrl = url.parse(urlString);
    const queryParams = querystring.parse(parsedUrl.query);
    const parameter = queryParams.bill_id;

    console.log(parameter);

    const query = `SELECT * FROM productsales WHERE bill_id = '${parameter}'`;
    DB.connection.query(query, (err, result) => {
        if(err){
            console.log(err);
        
        }else{
            // console.log(result)
            res.send(result);
        }
    });

}


module.exports = search_bill_data;