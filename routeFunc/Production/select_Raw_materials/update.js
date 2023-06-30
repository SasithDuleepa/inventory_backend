const DB = require('../../../config/database')
const url = require('url')
const querystring = require('querystring');


const Update = (req, res) => {
    const{raw_material_name,qty,price,date,batch_no}=req.body;
    const urlString = req.url;
    const parsedUrl = url.parse(urlString);
    const queryParams = querystring.parse(parsedUrl.query);
    const Raw_id = queryParams.id;
   

    const query = `UPDATE select_raw_materials SET raw_material_name='${raw_material_name}',qty='${qty}',  unit_price='${price}', date='${date}', batch_no='${batch_no}' WHERE idselect_raw_materials='${Raw_id}'`;
    
     DB.connection.query(query, (err, result) => {
        if(result){
            console.log(result);
            // res.status(200).json({error:false, message:"Product Updated Successfully"});
        }else{
            // res.status(200).json({error:true, message:"Product Updated error"});
            console.log(err);
            
        }
     })
}


module.exports = Update;