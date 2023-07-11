const DB = require('../../config/database');
const url = require('url')
const querystring = require('querystring');


const Update = (req, res) => {
    const{raw_material_name,supplier_name,purchase_order_number,quantity,unit_of_measure,unit_price,batch_number,date_of_receipt,expiry_date,location,responsible_person,remarks}=req.body;
    const urlString = req.url;
    const parsedUrl = url.parse(urlString);
    const queryParams = querystring.parse(parsedUrl.query);
    const Raw_id = queryParams.Raw_id;

    const query = `UPDATE rawmaterialsinventory SET 
    raw_material_name='${raw_material_name}',
    supplier_name='${supplier_name}',
    purchase_order_number='${purchase_order_number}',
    quantity=${quantity},
    unit_of_measure='${unit_of_measure}',
    unit_price='${unit_price}',
    batch_number='${batch_number}', 
    date_of_receipt='${date_of_receipt}',
    expiry_date='${expiry_date}',
    location='${location}',
    responsible_person='${responsible_person}',
    remarks='${remarks}' WHERE inventory_id=${Raw_id}`;
    
    // console.log(Raw_id)
     DB.connection.query(query, (err, result) => {
        if(result){
            
            res.status(200).json({error:false, message:"Product Updated Successfully"});
            console.log(result)
        }else{
            res.status(200).json({error:true, message:"Product Updated error"});
            console.log(err)
            
        }
     })
}


module.exports = Update;