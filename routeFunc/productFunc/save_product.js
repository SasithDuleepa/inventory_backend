const DB = require('../../config/database');

const Save =(req,res)=>{
    console.log(req.body);
    const{product_name,product_description,product_SKU,product_price,batch_no,date}=req.body;
    

    if(product_name,product_description,product_SKU,product_price,batch_no==""){
        res.status(200).json({ error: true, message: "Please fill all the fields" });
    }else{
        const sql=`INSERT INTO inventory_item (product_name,product_description,product_SKU,product_price,batch_no,date)
         VALUES ('${product_name}','${product_description}','${product_SKU}','${product_price}','${batch_no}','${date}')`
        DB.connection.query(sql, function (err, result) {
            if(result){
                res.status(200).json({ error: false, message: "product added" });
            }else{
                res.status(200).json({ error: true, message: "product not added" });
                console.log(err);
            }
        }
        )

        const query = `UPDATE select_raw_materials SET status= 'done' WHERE batch_no='${batch_no}' `
        DB.connection.query(query, function (err, result) {
            if(result){
                console.log(result)
                // res.status(200).json({ error: false, message: "product added" });
            }else{
                console.log(err)
                // res.status(200).json({ error: true, message: "product not added" });
                // console.log(err);
            }
        }
        )

    
        

    }
}


module.exports = Save;