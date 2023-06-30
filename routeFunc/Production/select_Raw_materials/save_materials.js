const DB = require('../../../config/database')

const Save = async(req,res) =>{
    // console.log(req.body)
    const{ batch_no,raw_material_name,raw_no,QTY,unit_price,date}= req.body;
    if(!batch_no || !raw_material_name ||!raw_no || !QTY || !date){
        return res.status(400).json({error:"Please fill all the fields"})
    }else{
        const sql = `INSERT INTO select_raw_materials (batch_no,raw_material_name,raw_no,QTY,unit_price,date)
        VALUES ('${batch_no}','${raw_material_name}','${raw_no}','${QTY}','${unit_price}','${date}')`
        DB.connection.query(sql, (err,result) =>{
            if(result){
                // console.log(result)
                
                res.status(200).json({ error: false, message: "Raw inputs added" });
            }
                else{
                    res.status(200).json({ error: true, message: "Raw inputs not added" });
                }
        
})   
    const query1 =`UPDATE raw_inputs SET input_SKU = input_SKU - ${QTY}   WHERE raw_no = '${raw_no}'`;
    DB.connection.query(query1, (err,result) =>{
        if(result){
            // console.log(result)
            
            // res.status(200).json({ error: false, message: "Raw inputs added" });
        }
            else{
                // res.status(200).json({ error: true, message: "Raw inputs not added" });
                console.log(err)
            }
    
})
    

    const query =`UPDATE select_raw_materials SET status= 'pending' WHERE batch_no='${batch_no}' `;
    DB.connection.query(query, (err,result) =>{
        if(result){
            // console.log(result)
            
            // res.status(200).json({ error: false, message: "Raw inputs added" });
        }
            else{
                // res.status(200).json({ error: true, message: "Raw inputs not added" });
                console.log(err)
            }
    
})
    }}


module.exports = Save;