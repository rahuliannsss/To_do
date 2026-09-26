import mongoose from "mongoose";

const dbConnect = async () => {
    try{

        if(!process.env.MONGO_URL){
            console.log("Connection string not found");
            process.exit(1);
        }

        
        const conn = await mongoose.connect(process.env.MONGO_URL);
        console.log(`MongoDB Atlas Connected`);
        return conn;

        
    } catch (error) {
        console.error('Error connecting to MongoDB:',error.message);
        process.exit(1);
    }
}

export default dbConnect;