const DB = require('./../../config/database');
const url = require('url')
const querystring = require('querystring');

const Delete = async (req, res) => {
    const urlString = req.url;
    const parsedUrl = url.parse(urlString);
    const queryParams = querystring.parse(parsedUrl.query);
    const RawId = queryParams.Raw_id;

    const sql = `DELETE FROM raw_inputs WHERE idRaw_inputs ='${RawId}'`;
    DB.connection.query(sql, (err, result) => {
        if(result){
            res.status(200).json({error:false, message:"Product Delete Successfully"});
        }else{
            res.status(200).json({error:true, message:"Product Delete Error"});
        
        }
    })

}
module.exports = Delete;