import jwt from 'jsonwebtoken';
import {envData} from '../config/env.js';

export const generateToken = (payload) =>{
        const token = jwt.sign(payload, envData.jwtSecret, {
          expiresIn: envData.jwtExpiresIn,
        });
        return token;
}

export const verifyToken = (token) => {
  try {
    const decoded = jwt.verify(token, envData.jwtSecret);
    return decoded;
  } catch (error) {
    throw new Error('Invalid token');
  }
}
