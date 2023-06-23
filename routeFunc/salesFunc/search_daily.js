const DB = require('../../config/database');

const Daily = async (req, res) => {
    const query = 'SELECT DATE(date) AS sale_date, product_name, SUM(units) AS total_quantity_sold FROM sales GROUP BY DATE(date), product_name';
    DB.connection.query(query, (err, result) => {
        if(err){
            res.status(500).send(err);
        
        }
        else{
            res.status(200).send(result);
        }
    })
}


module.exports = Daily;