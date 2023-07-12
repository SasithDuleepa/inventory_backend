const DB = require('./../../config/database');
const url = require('url')
const querystring = require('querystring');

const Sale_acc_productname = (req,res)=>{
    const urlString = req.url;
    const parsedUrl = url.parse(urlString);
    const queryParams = querystring.parse(parsedUrl.query);
    const parameter = queryParams.product_name;

    console.log(parameter);

    const query = `SELECT * FROM productsales WHERE product_name = '${parameter}'`;
    DB.connection.query(query, (err, result) => {
        if(err){
            console.log(err);
        
        }else{
            res.send(result);
        }
    });

}


module.exports = Sale_acc_productname;