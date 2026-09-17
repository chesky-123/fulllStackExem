import { MongoClient } from 'mongodb';


const MONGO_URI = process.env.MONGO_URI

const client = new MongoClient(MONGO_URI);

const db = client.db('verification');

try {
    await client.connect();
    console.log("DB connected");
} catch (e) {
    console.error(e);
    process.exit(1);
} 

export const collection = db.collection('users');