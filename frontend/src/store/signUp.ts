import { useFetch } from "./useFetch";

type UserRegister = {
    email:string,
    userName:string,
    password:string
};

const API_URL:string = import.meta.env.VITE_API_URI;

export async function register(user: UserRegister) {
    const newUser = await useFetch(API_URL + "/register", {
        headers: {
            "content-type": "application/json"
        },
        method: "POST",
        body: JSON.stringify(user)
    });
    return newUser;
}
