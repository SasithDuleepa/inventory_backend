const DB = require('../../config/database');


const Save_sale = (req, res) => {
    const{product_name,units,unit_price,customer,date,bill_id}= req.body;

    const data = req.body;
    data.forEach((item)=>{
        const query = `INSERT INTO sales (product_name, units, unit_price, customer, date, bill_number) VALUES ('${item.product_name}', '${item.units}', '${item.unit_price}', '${item.customer}', '${item.date}','${item.bill_id}')`;
        // const values = [item.product_name, item.units, item.unit_price, item.customer, item.date];

        DB.connection.query(query, function(err,result){
            if(result){

                const update_query = `UPDATE inventory_item SET product_SKU = product_SKU - ${item.units} WHERE product_name = '${item.product_name}'`;
        DB.connection.query(update_query, function(err,result){
            if(result){
                res.send('okkk')
            }
            else{console.log(err)}
        
        })
               
            }
            else{console.log(err)}
        })

        
    
    
    }
        )

    //set new stock qty




    
    
}

module.exports = Save_sale;