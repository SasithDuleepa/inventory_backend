
const DB = require('../../config/database');

const Save_raw_name = (req, res) => {
    const {raw_name} = req.body;
    
    
        const query = `INSERT INTO raw_materials_name (raw_material)   VALUES ('${raw_name}')`;

        DB.connection.query(query, function (err, result) {
            if (result) {
                console.log(result);
                
            }else{
                console.log(err);
            }
 

    });

    res.send('Sales saved successfully');
};

module.exports = Save_raw_name;
