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




const db = require('./models');
const dbConfig = require('./config/db.config');
const Products = db.products;
db.mongoose.connect(`mongodb://${dbConfig.HOST}:${dbConfig.PORT}/${dbConfig.DB}`,{
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
    res.json({message: "Bismillah ir-rahman ir-rahim - U ime Allaha Mislostivog, Samilosnog!"})
})

const PORT = process.env.PORT || 8080;

app.listen(PORT, ()=>{
    console.log(`Server is running on port: ${PORT}.`)
})