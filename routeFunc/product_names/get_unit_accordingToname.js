const DB = require('../../config/database');
const url = require('url')
const querystring = require('querystring');

const unit = (req, res) => {
    const urlString = req.url;
    const parsedUrl = url.parse(urlString);
    const queryParams = querystring.parse(parsedUrl.query);
    const parameter = queryParams.product_name;
    console.log(parameter)
    
    const sql = `SELECT unit FROM product_names WHERE product_name = ${parameter} `;
    DB.connection.query(sql, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    
    })

}

module.exports = unit;