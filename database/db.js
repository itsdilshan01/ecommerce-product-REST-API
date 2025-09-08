const mongoose = require('mongoose');

const connectDB = async() =>{
    try {
        await mongoose.connect('mongodb+srv://vimukthidilshan574_db_user:kStNRVAs9tJOcNUS@cluster0.kuh1qih.mongodb.net/');
        console.log('Database connected successfully');
    } catch (error) {
        console.error(error.message);
        process.exit(1);
    }
}

module.exports = connectDB;
