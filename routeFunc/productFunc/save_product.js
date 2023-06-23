const DB = require('../../config/database');

const Save =(req,res)=>{
    const{product_name,product_description,product_SKU,product_price,product_supplier}=req.body;
    

    if(product_name,product_description,product_SKU,product_price,product_supplier==""){
        res.status(200).json({ error: true, message: "Please fill all the fields" });
    }else{
        const sql=`INSERT INTO inventory_item (product_name,product_description,product_SKU,product_price,product_supplier)
         VALUES ('${product_name}','${product_description}','${product_SKU}','${product_price}','${product_supplier}')`
        DB.connection.query(sql, function (err, result) {
            if(result){
                res.status(200).json({ error: false, message: "product added" });
            }else{
                res.status(200).json({ error: true, message: "product not added" });
                console.log(err);
            }
        }
        )
    
        

    }
}


module.exports = Save;