import express from 'express';
import { validateRegisterUser, validateLoginUser, validateUpdateUser } from '../validation/userValidator.js';
import authenticateJWT from '../middlewares/authMiddleware.js';
import userController from '../controllers/UserController.js';

const router = express.Router();

router.post('/registerUser', validateRegisterUser, userController.registerUser);
router.post('/login', validateLoginUser, userController.loginUser);
router.patch('/updateUser/:enrollmentNumber', authenticateJWT, validateUpdateUser, userController.updateUser);

export default router;

