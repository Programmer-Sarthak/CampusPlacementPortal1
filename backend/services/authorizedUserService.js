//Service layer for AuthorizedUser 


/*  Remaning things

adding a check so only authorized userd can add other authorized users


*/ 

import AuthorizedUser from "../models/AuthorizedUser.js";
import bcrypt from "bcryptjs";
import generateToken from "../utils/jwt.js";

export const addAuthorizedUserService = async (userData)=>{
    let userExists = await AuthorizedUser.findOne({email:userData.email});
    if(!userExists){
       userData.passwordHash = await bcrypt.hash(userData.password,10);

       const authorizedUser = new AuthorizedUser(userData);
        
        let savedUser = await authorizedUser.save();
        console.log(savedUser);
        return savedUser;
       
       
       
       
        
    }
    const conflictError = new Error("User already Exists");
        conflictError.statusCode = 409;
        throw conflictError;
}


export const loginAuthorizedUserService = async (email ,password) => {
    console.log(email,password + "  Service");
    const user = await AuthorizedUser.findOne({ "contact.email" : email});
    console.log(user );
    if(user){
        const passwordMatch = await bcrypt.compare(password,user.passwordHash);
        if(passwordMatch){
            const tokenPayload ={
                id:user._id,
                email:user.contact.email,
                role:user.role
            }
            const jwtToken = generateToken(tokenPayload);
            console.log(user,+ " token:" ,jwtToken);
            user.token = jwtToken;
            return user;
        }
    }
    const conflictError = new Error("Invalid credentials");
    conflictError.statusCode = 401;
    throw conflictError;
}



