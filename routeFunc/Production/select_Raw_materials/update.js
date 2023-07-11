const DB = require('../../../config/database')
const url = require('url')
const querystring = require('querystring');


const Update = (req, res) => {
    const{production_order_number,raw_material_name,quantity_used,unit_of_measure,batch_number,date_time_of_usage,production_line,responsible_person,scrap_waste_quantity,remarks}=req.body;
    const urlString = req.url;
    const parsedUrl = url.parse(urlString);
    const queryParams = querystring.parse(parsedUrl.query);
    const Raw_id = queryParams.id;
    console.log(Raw_id);    
   
    const query = `UPDATE rawmaterialusage SET production_order_number='${production_order_number}',raw_material_name='${raw_material_name}',quantity_used=${quantity_used},unit_of_measure='${unit_of_measure}',batch_number='${batch_number}',
    date_time_of_usage='${date_time_of_usage}',production_line='${production_line}',responsible_person='${responsible_person}',scrap_waste_quantity=${scrap_waste_quantity},remarks='${remarks}' WHERE usage_id='${Raw_id}'`;

    
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