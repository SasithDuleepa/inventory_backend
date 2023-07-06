const DB = require('../../config/database');
const url = require('url')
const querystring = require('querystring');

const SearchAvailable = (req, res) => {
    
    
    const query = 'SELECT product_name, SUM(available_quantity) AS total_quantity FROM productoutput WHERE available_quantity > 0 GROUP BY product_name';
    DB.connection.query(query, (err, result) => {
        if(err){
            console.log(err);
        
        }else{
            res.send(result);
        }
    });
    
}

module.exports = SearchAvailable;

