import mongoose from 'mongoose';

// Define an asynchronous function to connect to the MongoDB database
const dbConnect = async () => {
    const url = process.env.MONGODB_URL; // Get the MongoDB connection URL from environment variables
    
    // Use Mongoose to connect to the MongoDB database with options
    mongoose
        .connect(url, {
            useNewUrlParser: true, // Use the new URL parser
        })
        .then(() => {
            console.log("Successfully connected to the database");
        })
        .catch((error) => {
            console.log("Database connection failed. Exiting now...");
            console.error(error);
        });
}

export default dbConnect; // Export the dbConnect function for use in other parts of the application
