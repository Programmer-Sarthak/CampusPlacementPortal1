import express from 'express';
import userController from '../controllers/UserController.js';
import validateRegisterStudent from '../validation/userValidator.js';

const router = express.Router();

router.post('/registerStudent', validateRegisterStudent, userController.registerStudent);

export default router;

