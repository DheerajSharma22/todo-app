import mongoose from 'mongoose';

let isConnected = false;

const connectToDB = async () => {
    if (isConnected) {
        console.log("Already connected with db...");
        return;
    }

    try {
        await mongoose.connect("mongodb://localhost:27017");
        isConnected = true;
        console.log("Connected with db successfully...");
    } catch (error) {
        console.log("Failed to connect with db...");        
    }
}

export default connectToDB;