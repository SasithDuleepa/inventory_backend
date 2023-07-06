const exprss = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const DB = require('./config/database');
const products = require('./routers/product');
const sales = require('./routers/sales');
const Raw_input = require('./routers/Raw_input');
const select_Raw_materials = require('./routers/production');
const Dashboad = require('./routers/dashboad');
const Selection = require('./routers/selection');
const Supplier = require('./routers/supplier');
const Raw_name = require('./routers/raw_material_name');
const Product_names = require('./routers/Product_names');

const Setting = require('./routers/setting');
require('dotenv').config();


const app = exprss();
app.use(bodyParser.json());
app.use(cors());

DB.connect();

app.use('/products', products);
app.use('/sales', sales);
app.use('/raw_input', Raw_input );
app.use('/production', select_Raw_materials)
app.use('/dashboad', Dashboad);
app.use('/selection', Selection);
app.use('/supplier', Supplier);
app.use('/setting', Setting);
app.use('/raw_material_name', Raw_name)
app.use('/product_name', Product_names  )

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});