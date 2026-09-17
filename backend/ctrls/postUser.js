import { createUserDAL, findUserByEmail } from "../DAL/users.dal.js";
import { hashPassword } from "../services/hashPassword.js";


export async function createUser(req, res) {

    try {
        const { email, userName, password } = req.body;

        const existsUser = await findUserByEmail(email);

        if (existsUser) return res.status(409).json({ message: 'user already exists' });


        const passwordHash = await hashPassword(password);

        const newUser = await createUserDAL({ email: email, userName: userName, password: passwordHash });

        delete newUser.password;

        res.status(201).json({ success: true, message: "user created successfuly", ...newUser })

    } catch (err) {
        return res.status(500).json({ message: "server faild" })
    }
}













