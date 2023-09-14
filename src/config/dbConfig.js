const mongoose = require('mongoose');

const uri = "mongodb://localhost:27017/cubicle-september-2023";

async function dbConnect() {
    await mongoose.connect(uri);
}

module.exports = dbConnect;