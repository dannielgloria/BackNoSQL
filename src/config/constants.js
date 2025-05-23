import dotenv, { config } from 'dotenv';
import path from 'path';
import { env } from 'process';

const envPath = path.resolve(process.cwd(),`.env.${process.env.NODE_ENV || 'development'}`)
console.log("Environment:", process.env.NODE_ENV);

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
