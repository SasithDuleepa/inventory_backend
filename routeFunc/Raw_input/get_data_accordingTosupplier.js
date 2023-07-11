const DB = require('../../config/database');
const url = require('url')
const querystring = require('querystring');

const Get_data_accordingTorawName = (req, res) => {
    const urlString = req.url;
    const parsedUrl = url.parse(urlString);
    const queryParams = querystring.parse(parsedUrl.query);
    const parameter = queryParams.supplier_name;
    console.log(parameter)
    
    const sql = `SELECT * FROM rawmaterialsinventory WHERE supplier_name = '${parameter}' `;
    DB.connection.query(sql, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    
    })

}

module.exports = Get_data_accordingTorawName;