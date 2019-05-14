require('./db');
const app = require("express")()
const authController = require('./controller/authController');
const productController = require('./controller/productController')
const electronicController = require('./controller/electronicController')
const accessoryController = require('./controller/accessoryController')
const clothesController = require('./controller/clothesController')
const homeapplianceController = require('./controller/homeapplianceController')
const groceryController = require('./controller/groceryControlller')
const footwearController = require('./controller/footwearController')
const orderController = require('./controller/orderController');
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use('/auth', authController)
app.use('/product', productController)
app.use('/electronics', electronicController)
app.use('/accessory', accessoryController)
app.use('/clothes', clothesController)
app.use('/homeappliance', homeapplianceController)
app.use('/grocery', groceryController)
app.use('/footwear', footwearController)
app.use('/order', orderController)
app.get('/', (req, res) => {
    res.json({ message: "Hello world!" })
})

module.exports = app;