const DB = require('../../config/database');


const Get_all_names = (req, res) => {
    
    
    const query = 'SELECT * FROM product_names';
    DB.connection.query(query, (err, result) => {
        if(err){
            console.log(err);
        
        }else{
            res.send(result);
        }
    });
    
}

module.exports = Get_all_names;

