


const DB = require('../../config/database');

const Save_sale = (req, res) => {
    const {sale_date,customer_name,payment_method,bill_id, bill} = req.body;
    // console.log(req.body);

    
            
    
    bill.forEach((item) => {
        const query = `INSERT INTO productsales (product_name,quantity_sold,unit_price,total_price,sale_date,customer_name,payment_method,bill_id) 
        VALUES ('${item.product_name}', ${item.quantity_sold}, ${item.unit_price}, ${item.quantity_sold * item.unit_price}, ${sale_date}, '${customer_name}', '${payment_method}', '${bill_id}')`;
        const update_query = `UPDATE productoutput SET available_quantity = available_quantity - ${item.quantity_sold} WHERE production_order_number = '${item.production_order_number}'`;
        DB.connection.query(query, function (err, result) {
            if (result) {
                console.log(item.production_order_number)

                DB.connection.query(update_query, function (err, result) {
                    if (result) {
                        console.log(result);
                        
                    } else{
                        console.log(err);
                    
                    }
            
                });
                
            }else{
                console.log(err);
            }
    })  
    

            
        
    });

    res.send('Sales saved successfully');
};

module.exports = Save_sale;
