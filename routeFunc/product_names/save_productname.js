const DB = require('../../config/database');

const Add_product_name = (req, res) => {
    console.log(req.body);
    const {product_name} = req.body;
    
        const query = `INSERT INTO product_names (product_name) VALUES ('${product_name}')`;
        

        DB.connection.query(query, function (err, result) {
            if (result) {
                res.status(200).json({ error: false, message: "unit added" });
                console.log(result)
                
            }else{
                res.status(200).json({ error: true, message: "unit not added" });
                
            }

            
        });
   

    
};

module.exports = Add_product_name;
