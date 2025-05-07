import mongoose from "mogoose"

const connectDB = async() => {
    try {
        await mongoose.connect("mongodb+srv://dannielgloria:sqk1AEo4KsYOyPmS@cluster-devf.kz3lcvn.mongodb.net/");
        console.log('MongoDB Connected...');
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
}

export default connectDB;