import service from '../services/userService.js';
import statusMessages from '../utils/statusMessages.js';

const registerStudent = async (req, res) => {
  try {
    const userData = req.body;
    const user = await service.registerStudent(userData);

    const safeUser = user.toObject();
    delete safeUser.passWordHash;

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

export default {
  registerStudent,
}; 