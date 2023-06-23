const DB = require('../../config/database');

const SearchAll = (req, res) => {
    
    
    const query = 'SELECT * FROM sales';
    DB.connection.query(query, (err, result) => {
        if(err){
            console.log(err);
        
        }else{
            res.send(result);
        }
    });
    
}

module.exports = SearchAll;