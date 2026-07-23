import jwt from 'jsonwebtoken';
import { envData } from '../config/env.js';
import statusMessages from '../utils/statusMessages.js';

const authenticateJWT = (req, res, next) => {
  const authHeader = req.headers.authorization || req.headers.Authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(statusMessages.UNAUTHORIZED.code).json({
      message: statusMessages.UNAUTHORIZED.message,
    });
  }

  const token = authHeader.split(' ')[1];

  try {
    const decoded = jwt.verify(token, envData.jwtSecret);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(statusMessages.UNAUTHORIZED.code).json({
      message: statusMessages.UNAUTHORIZED.message,
    });
  }
};

export default authenticateJWT;
