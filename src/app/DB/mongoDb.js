const mongoose = require("mongoose");

export const connectMongoDB = async () => {
    try {
        await mongoose.connect('mongodb://ibra7emdev:wuIlq87TBZL20WLW@cluster0-shard-00-00.1ofhe.mongodb.net:27017,cluster0-shard-00-01.1ofhe.mongodb.net:27017,cluster0-shard-00-02.1ofhe.mongodb.net:27017/AcUser?ssl=true&replicaSet=atlas-9be8hr-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0');
        console.log("connected to MongoDB");
    } catch (error) {
        console.log("ERROR WITH CONNECTING  MongoDB", error);
    }
};