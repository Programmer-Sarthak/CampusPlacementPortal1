import bcrypt from 'bcryptjs';
import User from '../models/User.js';
import statusMessages from '../utils/statusMessages.js';

const registerStudent = async (userData) => {
  const existingUser = await User.findOne({
    $or: [{ enrollmentNumber: userData.enrollmentNumber }, { 'contact.email': userData.contact.email }],
  });

  if (existingUser) {
    const conflictError = new Error(statusMessages.USER_ALREADY_EXISTS.message);
    conflictError.statusCode = statusMessages.CONFLICT.code;
    throw conflictError;
  }

  const salt = await bcrypt.genSalt(5);
  userData.passWordHash = await bcrypt.hash(userData.passWordHash, salt);

  const user = new User(userData);
  return await user.save();
};

const loginStudent = async ({ enrollmentNumber, password }) => {
  const user = await User.findOne({ enrollmentNumber });

  if (!user) {
    const authError = new Error(statusMessages.INVALID_CREDENTIALS.message);
    authError.statusCode = statusMessages.INVALID_CREDENTIALS.code;
    throw authError;
  }

  const passwordMatch = await bcrypt.compare(password, user.passWordHash);
  if (!passwordMatch) {
    const authError = new Error(statusMessages.INVALID_CREDENTIALS.message);
    authError.statusCode = statusMessages.INVALID_CREDENTIALS.code;
    throw authError;
  }

  return user;
};

const updateStudent = async (enrollmentNumber, updateData) => {
  const allowedFields = ['academicInfo', 'experience'];
  const filteredUpdate = {};

  for (const key of allowedFields) {
    if (Object.prototype.hasOwnProperty.call(updateData, key)) {
      filteredUpdate[key] = updateData[key];
    }
  }

  if (Object.keys(filteredUpdate).length === 0) {
    const validationError = new Error('Only academicInfo and experience may be updated');
    validationError.statusCode = statusMessages.UNPROCESSABLE_ENTITY.code;
    throw validationError;
  }

  const updatedUser = await User.findOneAndUpdate(
    { enrollmentNumber },
    { $set: filteredUpdate },
    { new: true, runValidators: true }
  );

  if (!updatedUser) {
    const notFoundError = new Error(statusMessages.USER_NOT_FOUND.message);
    notFoundError.statusCode = statusMessages.NOT_FOUND.code;
    throw notFoundError;
  }

  return updatedUser;
};

export default {
  registerStudent,
  loginStudent,
  updateStudent,
};
