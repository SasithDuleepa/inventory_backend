const DB = require('../../config/database');

const Get_suppliers = (req, res) => {
    
    
    const query = 'SELE';
    DB.connection.query(query, (err, result) => {
        if(err){
            console.log(err);
        
        }else{
            res.send(result);
        }
    });
    
}

module.exports = Get_suppliers;