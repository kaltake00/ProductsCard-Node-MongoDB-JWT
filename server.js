const express = require('express')
const cors = require('cors')
const app = express()
var corsOptions = {
    origin: "http://localhost:8081"
};
app.use(cors(corsOptions))

const bodyParser = require('body-parser');
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));

const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, './.env') });

const db = require('./models');
const dbConfig = require('./config/db.config');
const Products = db.products;
db.mongoose.connect(process.env.MONGODB_URI,{
    dbName: process.env.DB_NAME,
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>{
    console.log("Successfully connected to MongoDB.");
}).catch(err=>{
    console.error('Connection error', err)
    process.exit()
})

// routes
require('./routes/auth.routes')(app);
require('./routes/user.routes')(app);
require('./routes/product.routes')(app);

app.get("/", (req,res)=>{
    res.json({message: "Welcome to the products list app"})
})

const PORT = process.env.PORT || 8080;

app.listen(PORT, ()=>{
    console.log(`Server is running on port: ${PORT}.`)
})