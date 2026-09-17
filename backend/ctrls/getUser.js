import { findUserByEmail, findUserById } from "../DAL/users.dal.js";
import { generateToken } from "../services/generateToken.js";
import { comparePassword } from "../services/hashPassword.js";



export async function loginUser(req, res) {
    try {
        const { email, userName, password } = req.body;

        const existsUser = await findUserByEmail(email);

        if (!existsUser) return res.status(404).json({ message: 'user not found' });

        const valid = await comparePassword(password, existsUser.password);

        if (!valid) return res.status(401).json({ message: "username / password not correct" });

        const token = generateToken(existsUser._id);

        res.json({ token, email: existsUser.email, userName });


    } catch (err) {
        return res.status(500).json({ message: "server faild" })
    }
}




export async function getCurrentUser(req, res) {
    try {
        const existsUser = await findUserById(req.user.userId);
        if (!existsUser) return res.status(404).json({ message: 'user not found' });
        delete existsUser.password;
        res.json(existsUser);

    } catch (err) {
        return res.status(500).json({ message: "server faild" })
    }
}
