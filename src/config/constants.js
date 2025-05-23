import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const envPath = path.resolve(__dirname, `../../.env.${process.env.NODE_ENV || 'development'}`);

dotenv.config({ path: envPath});

export const port = process.env.PORT_APP
export const uri = process.env.URI_APP
export const keyToken = process.env.JWT_SECRET

export const mongoDomain = process.env.MONGO_DOMAIN
export const mongoUser = process.env.MONGO_USER
export const mongoPwd = process.env.MONGO_PWD
export const mongoDb = process.env.MONGO_DATABASE

export const firebaseBucket = process.env.FIREBASE_STORAGE_BUCKET;
export const googleCredentials = process.env.GOOGLE_CREDENTIALS;
