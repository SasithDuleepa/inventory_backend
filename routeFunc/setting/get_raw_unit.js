const DB = require('../../config/database');


const Get_all = (req, res) => {
    
    
    const query = 'SELECT * FROM units';
    DB.connection.query(query, (err, result) => {
        if(err){
            console.log(err);
        
        }else{
            res.send(result);
        }
    });
    
}

module.exports = Get_all;

