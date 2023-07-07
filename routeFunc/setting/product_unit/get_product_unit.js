const DB = require('../../../config/database');


const Get_product_unit = (req, res) => {
    
    
    const query = 'SELECT * FROM unitproduct';
    DB.connection.query(query, (err, result) => {
        if(err){
            console.log(err);
        
        }else{
            res.send(result);
        }
    });
    
}

module.exports = Get_product_unit;

