const DB = require('../../config/database');
const url = require('url')
const querystring = require('querystring');

const SearchAll = (req, res) => {
    
    
    const query = 'SELECT * FROM inventory_item';
    DB.connection.query(query, (err, result) => {
        if(err){
            console.log(err);
        
        }else{
            res.send(result);
        }
    });
    
}

module.exports = SearchAll;

