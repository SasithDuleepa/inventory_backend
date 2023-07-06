const DB = require('../../../config/database')

const Search_all =async(req, res) => {
    const sql = `SELECT DISTINCT production_order_number  FROM rawmaterialusage WHERE status = 'pending'`;
    DB.connection.query(sql, (err, result) => {
        if (result) {res.send(result);}
        else {res.send(err);}
        
    });
    
}

module.exports = Search_all;