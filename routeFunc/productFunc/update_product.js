const DB = require('../../config/database');
const url = require('url')
const querystring = require('querystring');
const { error } = require('console');

const Update = (req, res) => {
    const{product_name,product_description,product_SKU,product_price,product_supplier}=req.body;
    const urlString = req.url;
    const parsedUrl = url.parse(urlString);
    const queryParams = querystring.parse(parsedUrl.query);
    const product_id = queryParams.product_id;

    const query = `UPDATE inventory_item SET 
     product_name='${product_name}',
     product_description='${product_description}',
     product_SKU='${product_SKU}',
     product_price='${product_price}',
     product_supplier='${product_supplier}' WHERE idinventory_item_id='${product_id}'`;
    
     DB.connection.query(query, (err, result) => {
        if(result){
            res.status(200).json({error:false, message:"Product Updated Successfully"});
        }else{
            res.status(200).json({error:true, message:"Product Updated error"});
        }
     })
}


module.exports = Update;