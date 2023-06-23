const exprss = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const DB = require('./config/database');
const products = require('./routers/product');
const sales = require('./routers/sales');

require('dotenv').config();


const app = exprss();
app.use(bodyParser.json());
app.use(cors());

DB.connect();

app.use('/products', products);
app.use('/sales', sales);

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});