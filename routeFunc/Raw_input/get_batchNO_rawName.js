const DB = require('../../config/database');
const url = require('url')
const querystring = require('querystring');

const Get_batchNo_rawName = (req, res) => {
    const urlString = req.url;
    const parsedUrl = url.parse(urlString);
    const queryParams = querystring.parse(parsedUrl.query);
    const parameter = queryParams.raw_name;
    console.log(parameter)
    
    const sql = `SELECT batch_number FROM rawmaterialsinventory WHERE raw_material_name = ${parameter} AND available_quantity > 0 `;
    DB.connection.query(sql, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    
    })

}

module.exports = Get_batchNo_rawName;