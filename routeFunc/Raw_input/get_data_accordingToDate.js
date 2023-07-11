const DB = require('../../config/database');
const url = require('url')
const querystring = require('querystring');

const Get_data_accordingToDate = (req, res) => {
    const urlString = req.url;
    const parsedUrl = url.parse(urlString);
    const queryParams = querystring.parse(parsedUrl.query);
    const end_date = queryParams.end_date;
    const start_date = queryParams.start_date;
    console.log(start_date, end_date)
    
    const sql = `SELECT * FROM rawmaterialsinventory WHERE date_of_receipt BETWEEN '${start_date}' AND '${end_date}'`;
    DB.connection.query(sql, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    
    })

}

module.exports = Get_data_accordingToDate;