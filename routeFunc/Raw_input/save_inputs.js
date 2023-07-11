const DB = require('../../config/database');

const Save_inputs = async (req, res) => {
    console.log(req.body);
    const{raw_material_name,supplier_name,purchase_order_number,quantity,unit_of_measure,unit_price,batch_number,date_of_receipt,expiry_date,location, responsible_person, remarks} = req.body;

    if(!raw_material_name||!supplier_name||!purchase_order_number||!quantity||!unit_of_measure||!unit_price||!batch_number||!date_of_receipt||!expiry_date||!location||! responsible_person||! remarks){
        return res.status(200).json({ error: true, message: 'Please fill all fields'});
    }else{
        
        const sql = `INSERT INTO rawmaterialsinventory (raw_material_name,supplier_name,purchase_order_number,quantity,unit_of_measure,unit_price,batch_number,date_of_receipt,expiry_date,location, responsible_person, remarks,available_quantity)
        VALUES ('${raw_material_name}','${supplier_name}','${purchase_order_number}',${quantity},'${unit_of_measure}','${unit_price}','${batch_number}','${date_of_receipt}','${expiry_date}','${location}','${responsible_person}','${remarks}',${quantity})`
        DB.connection.query(sql, (err, result) => {
            if(result){
                res.status(200).json({ error: false, message: "Raw inputs added" });
                // console.log(result)
            }else{
                res.status(200).json({ error: true, message: "Raw inputs not added" });
                console.log(err)
            
            }
        })
    }

}


module.exports = Save_inputs;