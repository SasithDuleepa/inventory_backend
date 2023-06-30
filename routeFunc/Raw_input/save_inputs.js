const DB = require('../../config/database');

const Save_inputs = async (req, res) => {
    // console.log(req.body);
    const{input_name,Raw_no, input_date,input_SKU,input_unit_price,input_supplier} = req.body;

    if(!input_name || !input_date || !input_SKU || !input_unit_price || !input_supplier || !Raw_no){
        return res.status(400).json({msg: 'Please fill all fields'});
    }else{
        
        const sql = `INSERT INTO raw_inputs (input_name,raw_no,input_date,input_SKU,input_unit_price,input_supplier)
        VALUES ('${input_name}','${Raw_no}','${input_date}','${input_SKU}','${input_unit_price}','${input_supplier}')`
        DB.connection.query(sql, (err, result) => {
            if(result){
                res.status(200).json({ error: false, message: "Raw inputs added" });
            }else{
                res.status(200).json({ error: true, message: "Raw inputs not added" });
            
            }
        })
    }

}


module.exports = Save_inputs;