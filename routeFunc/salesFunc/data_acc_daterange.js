const DB = require('./../../config/database');
const url = require('url')
const querystring = require('querystring');
const e = require('express');

const Sale_acc_date = (req,res)=>{
    const urlString = req.url;
    const parsedUrl = url.parse(urlString);
    const queryParams = querystring.parse(parsedUrl.query);
    const start_date = queryParams.start;
    const end_date = queryParams.end;

    console.log(start_date, end_date);

    const sql = `SELECT * FROM productsales WHERE sale_date BETWEEN '${start_date}' AND '${end_date}'`;
    DB.connection.query(sql, (err, result) => {
        if(err){
            console.log(err);
        
        }else{
            res.send(result);
        }
    });

}


module.exports = Sale_acc_date;