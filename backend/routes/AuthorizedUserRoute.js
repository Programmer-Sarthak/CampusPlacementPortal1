//Routes for authorized user 
import express from "express";


import { validateAuthorizedUserRules, validateAuthorizedUser , validateLoginRules ,validateLogin } from "../validation/AuthorizedUserValidator.js";
import { addAuthorizedUser , loginAuthorizedUser} from "../controllers/AuthorizedUserController.js";

const router =express.Router();

router.post('/addAuthorizedUser' , validateAuthorizedUserRules, validateAuthorizedUser, addAuthorizedUser);
router.post('/loginAuthorizedUser', validateLoginRules, validateLogin, loginAuthorizedUser);
export default router;