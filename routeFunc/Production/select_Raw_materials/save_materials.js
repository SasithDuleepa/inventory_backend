const DB = require('../../../config/database')

const Save = async(req,res) =>{
    // console.log(req.body)
    const{ production_order_number,raw_material_name,quantity_used,unit_of_measure,batch_number,date_time_of_usage,production_line,responsible_person,scrap_waste_quantity,remarks}= req.body;
    if(!production_order_number||!raw_material_name||!quantity_used||!unit_of_measure||!batch_number||!date_time_of_usage||!production_line||!responsible_person||!scrap_waste_quantity||!remarks){
        return res.status(400).json({error:"Please fill all the fields"})
    }else{
        const sql = `INSERT INTO rawmaterialusage (production_order_number,raw_material_name,quantity_used,unit_of_measure,batch_number,date_time_of_usage,production_line,responsible_person,scrap_waste_quantity,remarks)
        VALUES ('${production_order_number}','${raw_material_name}','${quantity_used}','${unit_of_measure}','${batch_number}','${date_time_of_usage}','${production_line}','${responsible_person}','${scrap_waste_quantity}','${remarks}')`
        DB.connection.query(sql, (err,result) =>{
            if(result){
                // console.log(result)
                
                res.status(200).json({ error: false, message: "Raw inputs added" });
            }
                else{
                    res.status(200).json({ error: true, message: "Raw inputs not added" });
                   
                }
        
})   
//     const query1 =`UPDATE raw_inputs SET input_SKU = input_SKU - ${QTY}   WHERE raw_no = '${raw_no}'`;
//     DB.connection.query(query1, (err,result) =>{
//         if(result){
//             // console.log(result)
            
//             // res.status(200).json({ error: false, message: "Raw inputs added" });
//         }
//             else{
//                 // res.status(200).json({ error: true, message: "Raw inputs not added" });
//                 console.log(err)
//             }
    
// })
    

//     const query =`UPDATE select_raw_materials SET status= 'pending' WHERE batch_no='${batch_no}' `;
//     DB.connection.query(query, (err,result) =>{
//         if(result){
//             // console.log(result)
            
//             // res.status(200).json({ error: false, message: "Raw inputs added" });
//         }
//             else{
//                 // res.status(200).json({ error: true, message: "Raw inputs not added" });
//                 console.log(err)
//             }
    
// })
    }}


module.exports = Save;