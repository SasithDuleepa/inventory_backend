
const DB = require('../../config/database');

const Save_raw_name = (req, res) => {
    const {sale_date,customer_name,payment_method,bill_id, bill} = req.body;
    
    bill.forEach((item) => {
        const query = `INSERT INTO raw_materials_name (raw_material) 
        VALUES ('${item.product_name}')`;

        DB.connection.query(query, function (err, result) {
            if (result) {
                console.log(result);
                
            }else{
                console.log(err);
            }
    })

    });

    res.send('Sales saved successfully');
};

module.exports = Save_raw_name;
