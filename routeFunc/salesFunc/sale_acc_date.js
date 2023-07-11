const DB = require('./../../config/database');
const url = require('url')
const querystring = require('querystring');

const Sale_acc_date = (req,res)=>{
    const urlString = req.url;
    const parsedUrl = url.parse(urlString);
    const queryParams = querystring.parse(parsedUrl.query);
    const parameter = queryParams.date;

    console.log(parameter);

    const query = `SELECT * FROM productsales WHERE sale_date = '${parameter}'`;
    DB.connection.query(query, (err, result) => {
        if(err){
            console.log(err);
        
        }else{
            res.send(result);
        }
    });

}


module.exports = Sale_acc_date;