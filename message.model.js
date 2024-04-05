import mongoose from "mongoose";
const Schema = mongoose.Schema;

// Define the schema for the main model
const YourModelSchema = new Schema({
    message: Schema.Types.Mixed
});

// Create the Mongoose model
const message = mongoose.model('message', YourModelSchema);

export default message;

