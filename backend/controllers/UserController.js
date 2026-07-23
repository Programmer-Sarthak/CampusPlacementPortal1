import jwt from 'jsonwebtoken';
import service from '../services/userService.js';
import statusMessages from '../utils/statusMessages.js';
import { envData } from '../config/env.js';

const registerStudent = async (req, res) => {
  try {
    const userData = req.body;
    const user = await service.registerStudent(userData);

    const safeUser = {
      enrollmentNumber: user.enrollmentNumber,
      role: user.role,
      email: user.contact.email,
    };

    return res.status(statusMessages.CREATED.code).json({
      message: statusMessages.CREATED.message,
      data: safeUser,
    });
  } catch (error) {
    const statusCode = error.statusCode || statusMessages.INTERNAL_SERVER_ERROR.code;
    return res.status(statusCode).json({
      message: error.message || statusMessages.INTERNAL_SERVER_ERROR.message,
    });
  }
};

const loginStudent = async (req, res) => {
  try {
    const { enrollmentNumber, password } = req.body;
    const user = await service.loginStudent({ enrollmentNumber, password });

    const tokenPayload = {
      id: user._id,
      enrollmentNumber: user.enrollmentNumber,
      role: user.role,
    };

    const token = jwt.sign(tokenPayload, envData.jwtSecret, {
      expiresIn: envData.jwtExpiresIn,
    });

    return res.status(statusMessages.SUCCESS.code).json({
      message: 'Login successful',
      data: {
        token,
        user: {
          enrollmentNumber: user.enrollmentNumber,
          role: user.role,
          email: user.contact.email,
        },
      },
    });
  } catch (error) {
    const statusCode = error.statusCode || statusMessages.INTERNAL_SERVER_ERROR.code;
    return res.status(statusCode).json({
      message: error.message || statusMessages.INTERNAL_SERVER_ERROR.message,
    });
  }
};

const updateStudent = async (req, res) => {
  try {
    const { enrollmentNumber } = req.params;
    const updateData = req.body;
    const user = await service.updateStudent(enrollmentNumber, updateData);

    const safeUser = {
      enrollmentNumber: user.enrollmentNumber,
      role: user.role,
      email: user.contact.email,
      academicInfo: user.academicInfo,
      experience: user.experience,
    };

    return res.status(statusMessages.SUCCESS.code).json({
      message: 'Student updated successfully',
      data: safeUser,
    });
  } catch (error) {
    const statusCode = error.statusCode || statusMessages.INTERNAL_SERVER_ERROR.code;
    return res.status(statusCode).json({
      message: error.message || statusMessages.INTERNAL_SERVER_ERROR.message,
    });
  }
};

export default {
  registerStudent,
  loginStudent,
  updateStudent,
}; 