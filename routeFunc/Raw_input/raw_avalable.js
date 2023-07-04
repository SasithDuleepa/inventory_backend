const DB = require('../../config/database');

const Raw_avalable= (req, res) => {
    
    
    const query = 'SELECT raw_material_name, available_quantity ,inventory_id,expiry_date FROM rawmaterialsinventory WHERE available_quantity > 0';
    DB.connection.query(query, (err, result) => {
        if(err){
            console.log(err);
        
        }else{
            res.send(result);
        }
    });
    
}

module.exports = Raw_avalable;

