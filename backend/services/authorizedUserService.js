//Service layer for AuthorizedUser 


/*  Remaning things

adding a check so only authorized userd can add other authorized users


*/

import AuthorizedUser from "../models/AuthorizedUser.js";
import bcrypt from "bcryptjs";
import { generateToken } from "../utils/jwt.js";

export const createAuthorizedUserService = async (userData) => {

    //check if the user is authorized to add other authorized users
    const creater = await AuthorizedUser.findOne({ "contact.email": userData.createdBy.email, "role": userData.createdBy.role });
console.log(creater);
    if (creater) {

        //check for existing user with same email
        const userExists = await AuthorizedUser.findOne({ "contact.email": userData.contact.email });
        console.log(userExists);

        //convert password into hashcode

        const salt = await bcrypt.genSalt(5);
        userData.passwordHash = await bcrypt.hash(userData.password, salt);

        if (!userExists) {
            const authorizedUser = new AuthorizedUser(userData);
            return await authorizedUser.save();
        }else{
        const userExistsError = new Error("User already Exists");
        userExistsError.statusCode= 409 ;
        throw userExistsError;
        }
        
    }else{
        const unauthorizedError = new Error("Not Authorized");
        unauthorizedError.statusCode = 401; 
        throw unauthorizedError;
    }




}


export const loginAuthorizedUserService = async (email, password) => {
    console.log(email, password + "  Service");
    const user = await AuthorizedUser.findOne({ "contact.email": email });
    console.log(user);
    if (user) {
        const passwordMatch = await bcrypt.compare(password, user.passwordHash);
        if (passwordMatch) {
            const tokenPayload = {
                id: user._id,
                email: user.contact.email,
                role: user.role
            }
            const jwtToken = generateToken(tokenPayload);
            console.log(user, + " token:", jwtToken);
            user.token = jwtToken;
            return user;
        }
    }
    const conflictError = new Error("Invalid credentials");
    conflictError.statusCode = 401;
    throw conflictError;
}



