const DB = require('../../config/database');
const url = require('url')
const querystring = require('querystring');
const { error } = require('console');

const Update = (req, res) => {
    const{production_order_number,product_name,quantity_produced,unit_of_measure,date_time_of_production,responsible_person,remarks}=req.body;
    const urlString = req.url;
    const parsedUrl = url.parse(urlString);
    const queryParams = querystring.parse(parsedUrl.query);
    const product_id = queryParams.product_id;

   

    const query = `UPDATE productoutput SET 
    production_order_number='${production_order_number}',
    product_name='${product_name}',
    quantity_produced=${quantity_produced},
    unit_of_measure='${unit_of_measure}',
    date_time_of_production='${date_time_of_production}',
    responsible_person='${responsible_person}',
    remarks='${remarks}'     WHERE output_id=${product_id}`;
    
     DB.connection.query(query, (err, result) => {
        if(result){
            res.status(200).json({error:false, message:"Product Updated Successfully"});

        }else{
            res.status(200).json({error:true, message:"Product Updated error"});
            console.log(err);
        }
     })
}


module.exports = Update;