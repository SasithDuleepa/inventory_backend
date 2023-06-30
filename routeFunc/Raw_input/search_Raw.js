const DB = require('../../config/database');
const url = require('url')
const querystring = require('querystring');

const Search = (req, res) => {
    const urlString = req.url;
    const parsedUrl = url.parse(urlString);
    const queryParams = querystring.parse(parsedUrl.query);
    const parameter = queryParams.search;
    console.log(parameter)
    
    const sql = `SELECT * FROM raw_inputs WHERE input_name LIKE '%${parameter}%'`;
    DB.connection.query(sql, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    
    })

}

module.exports = Search;