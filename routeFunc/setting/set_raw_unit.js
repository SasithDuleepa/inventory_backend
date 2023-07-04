const DB = require('../../config/database');

const Add_Units = (req, res) => {
    console.log(req.body);
    const {units} = req.body;
    
        const query = `INSERT INTO units (unit_name) VALUES ('${units}')`;
        

        DB.connection.query(query, function (err, result) {
            if (result) {
                res.status(200).json({ error: false, message: "unit added" });
                console.log(result)
                
            }else{
                res.status(200).json({ error: true, message: "unit not added" });
                
            }

            
        });
   

    
};

module.exports = Add_Units;
