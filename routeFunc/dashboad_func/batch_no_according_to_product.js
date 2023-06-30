const DB = require('./../../config/database');
const url = require('url')
const querystring = require('querystring');

const BatchNo_Product = (req,res)=>{
    const urlString = req.url;
const parsedUrl = url.parse(urlString);
const queryParams = querystring.parse(parsedUrl.query);
const parameter = queryParams.product_name;
if(parameter == undefined){
    res.send("Please enter a product name")
}else{
    const sql = `SELECT batch_no,date FROM inventory_item WHERE product_name = '${parameter}'`;
    DB.connection.query(sql,(err,result)=>{
        if(result){
            res.send(result)
        
        }else{
            res.send(err)
        }
    })
}
console.log(parameter)

}

module.exports = BatchNo_Product;