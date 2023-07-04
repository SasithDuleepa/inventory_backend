const DB = require('../../config/database');

const Add_supplier = (req, res) => {
    console.log(req.body);
    const {supplier_name,contact_name, contact_email,contact_phone,address,city,state,country,postal_code,website,remarks} = req.body;
    
        const query = `INSERT INTO supplierrecord ( supplier_name,contact_name,contact_email,contact_phone,address,city,state,country,postal_code,website,remarks) 
        VALUES ('${supplier_name}','${contact_name}','${contact_email}', '${contact_phone}', '${address}', '${city}', '${state}', '${country}', '${postal_code}','${website}','${remarks}')`;

        DB.connection.query(query, function (err, result) {
            if (err) {
                res.status(200).json({ error: true, message: "supplier not added" });
                return;
            }

            
        });
   

    res.status(200).json({ error: false, message: "supplier added" });;
};

module.exports = Add_supplier;
