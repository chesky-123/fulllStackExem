import { Router } from 'express'
import { isValidGetData, isValidPostData } from '../middelwares/user.Middelware.js';
import { createUser } from '../ctrls/postUser.js';
import { getCurrentUser, loginUser } from '../ctrls/getUser.js';


export const router = Router();


router.post("/register", isValidPostData, createUser);

router.post("/login", isValidGetData, loginUser)

router.get("/profile",getCurrentUser)







