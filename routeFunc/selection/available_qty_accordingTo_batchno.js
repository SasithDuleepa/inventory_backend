const DB = require('./../../config/database');
const url = require('url')
const querystring = require('querystring');

const qty = (req,res)=>{
    const urlString = req.url;
const parsedUrl = url.parse(urlString);
const queryParams = querystring.parse(parsedUrl.query);
const parameter = queryParams.batch_no;
if(parameter == undefined){
    res.send("Please enter a product name")
}else{
    const sql = `SELECT product_SKU FROM inventory_item WHERE batch_no = '${parameter}'`;
    DB.connection.query(sql,(err,result)=>{
        if(result){
            res.send(result)
        
        }else{
            res.send(err)
        }
    })
}


}

module.exports = qty;