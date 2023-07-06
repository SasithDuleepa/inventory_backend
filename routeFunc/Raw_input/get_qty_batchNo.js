const DB = require('../../config/database');
const url = require('url')
const querystring = require('querystring');

const Get_qty_batchNo = (req, res) => {
    const urlString = req.url;
    const parsedUrl = url.parse(urlString);
    const queryParams = querystring.parse(parsedUrl.query);
    const parameter = queryParams.batch_no;
    console.log(parameter)
    
    const sql = `SELECT available_quantity,unit_of_measure FROM rawmaterialsinventory WHERE batch_number = ${parameter} `;
    DB.connection.query(sql, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    
    })

}

module.exports = Get_qty_batchNo;