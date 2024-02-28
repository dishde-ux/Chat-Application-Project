import mongoose from 'mongoose';

const Connection = async (username, password) => {
    const URL = `mongodb://${username}:${password}@ac-zroqxzu-shard-00-00.apy2eba.mongodb.net:27017,ac-zroqxzu-shard-00-01.apy2eba.mongodb.net:27017,ac-zroqxzu-shard-00-02.apy2eba.mongodb.net:27017/?ssl=true&replicaSet=atlas-4kd66r-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Whatsapp`;
    try {
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false });
        console.log('Database Connected Succesfully');
    } catch(error) {
        console.log('Error: ', error.message);
    }

};

export default Connection;