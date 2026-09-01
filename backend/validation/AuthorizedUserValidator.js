//Validation layer for authorized user

import { body, validationResult } from 'express-validator';

export const validateAuthorizedUserRules = [
    
    body('name')
    .trim()
    .notEmpty()
    .withMessage('Name is required')
    .isString(),
    
    body('password')
    .trim()
    .isString()
    .notEmpty()
    .withMessage('Password is required')
    .isLength({ min: 8, max: 25 })
    .withMessage('password must be bewteen 8 to 25 charecters'),
    
    body('contact.email')
    .trim()
    .notEmpty()
    .withMessage('Email is required')
    .isEmail()
    .withMessage('Invaild Email'),
    
    body('contact.phoneNumber')
    .notEmpty()
    .withMessage('Phone number is required')
    .matches(/^[0-9]{10}$/)
    .withMessage('Phone number must be 10 digits'),
    
    body('role')
    .notEmpty()
    .withMessage('Role is required')
    .isIn(['director', 'placementFaculty', 'tpo', 'companyHR'])
    .withMessage('Role invalid'),
    
    body('status')
    .notEmpty()
    .withMessage('Status is required')
    .isIn(['active', 'inactive'])
    .withMessage('Status invalid'),


];

export const validateAuthorizedUser =(req, res, next) =>{

    const errors = validationResult(req);
    if(!errors.isEmpty()){
        console.log(errors.array());
       return res.status(400)
        .json({
            message:"validation failed",
            errors:errors.array()
        });
    }
    next();
};


export const validateLoginRules =[
    body('email')
    .notEmpty()
    .withMessage('email is required')
    .isEmail()
    .withMessage('Invalid email'),

    body('password')
    .notEmpty()
    .withMessage('password is required')
    .isLength({min:8,max:25})

]

export const validateLogin =(req,res,next) =>{
    const errors =validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400)
        .json({
            message:"Bad Request",
            errors:errors.array()
        })
    }

    next();
}