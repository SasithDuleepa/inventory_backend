const DB = require('../../config/database');
const url = require('url')
const querystring = require('querystring');


const Update = (req, res) => {
    const{input_name,input_SKU,input_unit_price,input_date,input_supplier}=req.body;
    const urlString = req.url;
    const parsedUrl = url.parse(urlString);
    const queryParams = querystring.parse(parsedUrl.query);
    const Raw_id = queryParams.Raw_id;

    const query = `UPDATE raw_inputs SET 
    input_name='${input_name}',
    input_SKU='${input_SKU}',
    input_unit_price='${input_unit_price}',
    input_date='${input_date}',
    input_supplier='${input_supplier}' WHERE idRaw_inputs='${Raw_id}'`;
    
     DB.connection.query(query, (err, result) => {
        if(result){
            
            res.status(200).json({error:false, message:"Product Updated Successfully"});
        }else{
            res.status(200).json({error:true, message:"Product Updated error"});
            
        }
     })
}


module.exports = Update;