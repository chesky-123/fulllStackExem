import bcrypt from "bcrypt";


export async function hashPassword(password) {
    console.log("password:", password);

    return bcrypt.hash(password, 10);
};

export async function comparePassword(password, hashPassword) {
    return bcrypt.compare(password, hashPassword);
};
