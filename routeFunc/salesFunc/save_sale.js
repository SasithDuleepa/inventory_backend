// const DB = require('../../config/database');


// const Save_sale = (req, res) => {
    

//     const data = req.body;
//     data.forEach((item)=>{
//         const query = `INSERT INTO sales (product_name, units, unit_price, customer, date, bill_number, batch_no) VALUES ('${item.product_name}', '${item.units}', '${item.unit_price}', '${item.customer}', '${item.date}','${item.bill_id}','${item.batch_no}')`;
//         // const values = [item.product_name, item.units, item.unit_price, item.customer, item.date];

//         DB.connection.query(query, function(err,result){
//             if(result){
                

//                 const update_query = `UPDATE inventory_item SET product_SKU = product_SKU - ${item.units} WHERE product_name = '${item.product_name}'`;
//         DB.connection.query(update_query, function(err,result){
//             if(result){
//                 res.send('okkk')
//             }
//             else{console.log(err)}
        
//         })
               
//             }
//             else{console.log(err)}
//         })

        
    
    
//     }
//         )

//     //set new stock qty




    
    
// }

// module.exports = Save_sale;


const DB = require('../../config/database');

const Save_sale = (req, res) => {
    const {sale_date,customer_name,payment_method,bill_id, bill} = req.body;
    
    bill.forEach((item) => {
        const query = `INSERT INTO productsales (product_name,quantity_sold,unit_price,total_price,sale_date,customer_name,payment_method,bill_id) 
        VALUES ('${item.product_name}', '${item.quantity_sold}', '${item.unit_price}', '${item.quantity_sold * item.unit_price}', '${sale_date}', '${customer_name}', '${payment_method}', '${bill_id}')`;

        DB.connection.query(query, function (err, result) {
            if (result) {
                console.log(result);
                
            }else{
                console.log(err);
            }
    })

    //         const update_query = `UPDATE inventory_item SET product_SKU = product_SKU - ${item.units} WHERE product_name = '${item.product_name}'`;
    //         DB.connection.query(update_query, function (err, result) {
    //             if (err) {
    //                 console.log(err);
    //                 return;
    //             }

    //             console.log('Sale saved successfully');
    //         });
    //     });
    });

    res.send('Sales saved successfully');
};

module.exports = Save_sale;
