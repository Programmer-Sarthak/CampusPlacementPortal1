import express from 'express';
import userController from '../controllers/UserController.js';
import authenticateJWT from '../middlewares/authMiddleware.js';
import { validateRegisterStudent, validateLoginStudent, validateUpdateStudent } from '../validation/userValidator.js';

const router = express.Router();

router.post('/registerStudent', validateRegisterStudent, userController.registerStudent);
router.post('/login', validateLoginStudent, userController.loginStudent);
router.patch('/updateStudent/:enrollmentNumber', authenticateJWT, validateUpdateStudent, userController.updateStudent);

export default router;

