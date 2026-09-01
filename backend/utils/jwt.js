import jwt from 'jsonwebtoken';
import {envData} from '../config/env.js';

const generateToken = (payload) =>{
        const token = jwt.sign(payload, envData.jwtSecret, {
          expiresIn: envData.jwtExpiresIn,
        });
        return token;
}

export default generateToken;
