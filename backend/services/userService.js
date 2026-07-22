import bcrypt from 'bcryptjs';
import User from '../models/User.js';
import statusMessages from '../utils/statusMessages.js';

const registerStudent = async (userData) => {
  const existingUser = await User.findOne({
    $or: [{ userName: userData.userName }, { 'contact.email': userData.contact.email }],
  });

  if (existingUser) {
    const conflictError = new Error(statusMessages.USER_ALREADY_EXISTS.message);
    conflictError.statusCode = statusMessages.CONFLICT.code;
    throw conflictError;
  }

  const salt = await bcrypt.genSalt(10);
  userData.passWordHash = await bcrypt.hash(userData.passWordHash, salt);

  const user = new User(userData);
  return await user.save();
};

export default {
  registerStudent,
};
