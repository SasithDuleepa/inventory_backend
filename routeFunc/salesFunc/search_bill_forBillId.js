const DB = require('./../../config/database');
const url = require('url')
const querystring = require('querystring');

const Search_bill_billId = (req, res) => {
    const urlString = req.url;
const parsedUrl = url.parse(urlString);
const queryParams = querystring.parse(parsedUrl.query);
const parameter = queryParams.bill_id;

console.log(parameter)
const query = `SELECT DISTINCT bill_number FROM sales WHERE bill_number LIKE '%${parameter}%'`;
DB.connection.query(query, (err, result) => {
    if(err){
        console.log(err);
    
    }else{
        res.send(result);
    }
});

}


module.exports = Search_bill_billId;