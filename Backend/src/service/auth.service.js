
import { json } from "express";
import { createUser, findUserByEmail } from "../dao/user.dao";
import User from "../models/user.model"

export const registerUser = async (name,email,password)=>{
    const user = await findUserByEmail({email})
    if(user)throw new Error("User Pahile Se Exist karta hai");
    const newUser = await createUser({name,email,password});
    const token = jsonwebtoken.sign({id: newUser._id},process.env.JWT_SECRET,{expiresIn: "1d"})
    return token;
}