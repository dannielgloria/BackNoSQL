import mongoose from "mogoose"
import {mongoDomain,mongoUser,mongoPwd,mongoDb} from './constants.js'

const connectDB = async() => {
    try {
        await mongoose.connect(`${mongoDomain}${mongoUser}:${mongoPwd}@${mongoDb}`);
        console.log('MongoDB Connected...');
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
}

export default connectDB;