import { nanoid } from "nanoid";
import { cookieOptions } from "../config/config.js";
export const genearateNanoID = (length)=>{
    return nanoid(length);
}

export const signToken = (payload)=>{
    return jsonwebtoken.sign(payload,process.env.JWT_SECRET,cookieOptions)
}

// export const 