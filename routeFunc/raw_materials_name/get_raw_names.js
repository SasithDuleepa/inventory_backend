
const DB = require('../../config/database');

const Get_raw_name = (req, res) => {
    
        const query = `SELECT * FROM raw_materials_name`; 
       

        DB.connection.query(query, function (err, result) {
            if (result) {
                res.send(result);
                
            }else{
                console.log(err);
            }
    })

 

   
};

module.exports = Get_raw_name;
