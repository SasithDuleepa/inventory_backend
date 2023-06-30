const DB = require('./../../config/database');
const url = require('url')
const querystring = require('querystring');

const search_bill_data = (req,res)=>{
    const urlString = req.url;
    const parsedUrl = url.parse(urlString);
    const queryParams = querystring.parse(parsedUrl.query);
    const parameter = queryParams.bill_number;

    console.log(parameter);

    const query = `SELECT * FROM sales WHERE bill_number = '${parameter}'`;
    DB.connection.query(query, (err, result) => {
        if(err){
            console.log(err);
        
        }else{
            res.send(result);
        }
    });

}


module.exports = search_bill_data;