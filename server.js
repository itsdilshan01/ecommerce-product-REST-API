const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./database/db');
const productRoutes = require('./routers/Product-router');

const app = express();

// Load environment variables from .env file
dotenv.config();

app.use(express.json());

// import routes
app.use('/api/products', productRoutes);


// our ports
const PORT = process.env.PORT || 3000;

// Connect to the database
connectDB().then(()=>{
    app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
});
}).catch((e)=>{
    console.log(e);
});