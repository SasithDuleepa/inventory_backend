const DB = require('../../../config/database')

const Search_all =async(req, res) => {
    const sql = 'SELECT * FROM rawmaterialusage';
    DB.connection.query(sql, (err, result) => {
        if (result) {res.send(result);}
        else {res.send(err);}
        
    });
    
}

module.exports = Search_all;