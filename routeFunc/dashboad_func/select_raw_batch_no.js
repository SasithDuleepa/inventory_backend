const DB = require('../../config/database');

const Search_batch_no = (req, res) => {
    const sql = 'SELECT DISTINCT batch_no FROM select_raw_materials';
    DB.connection.query(sql, (err, result) => {
        if(result){
            res.send(result);
        }else{
            console.log(err);
        }
    })
}


module.exports = Search_batch_no;