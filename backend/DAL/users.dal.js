import { collection } from "../dbConfig/db.js";


export async function createUserDAL(data) {
    data.email = data.email.toUpperCase();
    const { insertedId } = collection.insertOne({...data});
    data._id = insertedId;
    return data;
};

export async function findUserByEmail(email) {
    email = email.toUpperCase();
    const user = await collection.findOne({email});
    return user
};


export async function findUserById(_id) {
    return await collection.findOne({_id})
}

