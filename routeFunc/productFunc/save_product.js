const DB = require('../../config/database');

const Save =(req,res)=>{
    console.log(req.body);
    const{production_order_number, product_name, quantity_produced, unit_of_measure, date_time_of_production, production_line, responsible_person, remarks}=req.body;
    

    if(product_name==""){
        res.status(200).json({ error: true, message: "Please fill all the fields" });
    }else{
        const sql=`INSERT INTO ProductOutput (production_order_number, product_name, quantity_produced, available_quantity ,unit_of_measure, date_time_of_production, production_line, responsible_person, remarks)
         VALUES ('${production_order_number}','${product_name}','${quantity_produced}','${quantity_produced}','${unit_of_measure}','${date_time_of_production}','${production_line}','${responsible_person}','${remarks}')`
        DB.connection.query(sql, function (err, result) {
            if(result){
                res.status(200).json({ error: false, message: "product added" });
            }else{
                res.status(200).json({ error: true, message: "product not added" });
                console.log(err);
            }
        }
        )

        // const query = `UPDATE select_raw_materials SET status= 'done' WHERE batch_no='${batch_no}' `
        // DB.connection.query(query, function (err, result) {
        //     if(result){
        //         console.log(result)
        //         // res.status(200).json({ error: false, message: "product added" });
        //     }else{
        //         console.log(err)
        //         // res.status(200).json({ error: true, message: "product not added" });
        //         // console.log(err);
        //     }
        // }
        // )

    
        

    }
}


module.exports = Save;