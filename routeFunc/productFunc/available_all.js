const DB = require('../../config/database');
const url = require('url')
const querystring = require('querystring');

const Available = (req, res) => {
    
    
    const query = 'SELECT * FROM productoutput WHERE available_quantity > 0 ';
    DB.connection.query(query, (err, result) => {
        if(err){
            console.log(err);
        
        }else{
            res.send(result);
        }
    });
    
}

module.exports = Available;

