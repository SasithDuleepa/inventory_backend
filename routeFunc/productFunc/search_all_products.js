const DB = require('../../config/database');

const SearchAll = (req, res) => {
    
    
    const query = 'SELECT * FROM productoutput';
    DB.connection.query(query, (err, result) => {
        if(err){
            console.log(err);
        
        }else{
            res.send(result);
        }
    });
    
}

module.exports = SearchAll;

