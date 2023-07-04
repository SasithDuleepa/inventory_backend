const DB = require('../../config/database');

const GetAll = (req, res) => {
    
    
    const query = 'SELECT * FROM supplierrecord';
    DB.connection.query(query, (err, result) => {
        if(err){
            console.log(err);
        
        }else{
            res.send(result);
        }
    });
    
}

module.exports = GetAll;