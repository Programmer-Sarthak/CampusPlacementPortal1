import { body, param, validationResult } from 'express-validator';
import statusMessages from '../utils/statusMessages.js';

export const validateRegisterUser = [
  body('role')
    .exists({ checkFalsy: true })
    .withMessage('role is required')
    .bail()
    .equals('student')
    .withMessage('role must be student'),
  body('enrollmentNumber')
    .exists({ checkFalsy: true })
    .withMessage('enrollmentNumber is required')
    .bail()
    .isString()
    .withMessage('enrollmentNumber must be a string')
    .bail()
    .isLength({ min: 3, max: 20 })
    .withMessage('enrollmentNumber must be between 3 and 20 characters'),
  body('passWordHash')
    .exists({ checkFalsy: true })
    .withMessage('passWordHash is required')
    .bail()
    .isString()
    .withMessage('passWordHash must be a string')
    .bail()
    .isLength({ min: 6 })
    .withMessage('passWordHash must be at least 6 characters'),

  body('personalInfo').exists().withMessage('personalInfo is required').bail().isObject().withMessage('personalInfo must be an object'),
  body('personalInfo.name')
    .exists({ checkFalsy: true })
    .withMessage('personalInfo.name is required')
    .bail()
    .isString()
    .withMessage('personalInfo.name must be a string')
    .bail()
    .isLength({ min: 3 })
    .withMessage('personalInfo.name must be at least 3 characters'),
  body('personalInfo.dateOfBirth')
    .exists({ checkFalsy: true })
    .withMessage('personalInfo.dateOfBirth is required')
    .bail()
    .isISO8601()
    .toDate()
    .withMessage('personalInfo.dateOfBirth must be a valid date'),
  body('personalInfo.category')
    .exists({ checkFalsy: true })
    .withMessage('personalInfo.category is required')
    .bail()
    .isIn(['General', 'OBC', 'SC', 'ST'])
    .withMessage('personalInfo.category must be one of General, OBC, SC, ST'),

  body('contact').exists().withMessage('contact is required').bail().isObject().withMessage('contact must be an object'),
  body('contact.contactNumber')
    .exists({ checkFalsy: true })
    .withMessage('contact.contactNumber is required')
    .bail()
    .matches(/^[0-9]{7,15}$/)
    .withMessage('contact.contactNumber must be a valid phone number'),
  body('contact.alternateContactNumber')
    .optional({ nullable: true })
    .matches(/^[0-9]{7,15}$/)
    .withMessage('contact.alternateContactNumber must be a valid phone number'),
  body('contact.email')
    .exists({ checkFalsy: true })
    .withMessage('contact.email is required')
    .bail()
    .isEmail()
    .withMessage('contact.email must be a valid email address'),

  body('address').exists().withMessage('address is required').bail().isObject().withMessage('address must be an object'),
  body('address.localAddress')
    .exists({ checkFalsy: true })
    .withMessage('address.localAddress is required'),
  body('address.permanentAddress')
    .exists({ checkFalsy: true })
    .withMessage('address.permanentAddress is required'),

  body('academicInfo').optional().isObject().withMessage('academicInfo must be an object'),
  body('academicInfo.qualification').optional().isArray().withMessage('academicInfo.qualification must be an array'),
  body('academicInfo.qualification.*.qualificationType')
    .optional()
    .isIn(['UG', 'PG', 'PhD', 'Diploma', 'Other'])
    .withMessage('qualificationType must be one of UG, PG, PhD, Diploma, Other'),
  body('academicInfo.qualification.*.courseName')
    .optional()
    .notEmpty()
    .withMessage('qualification.courseName is required'),
  body('academicInfo.qualification.*.evaluationType')
    .optional()
    .isIn(['trimester', 'semester', 'year'])
    .withMessage('qualification.evaluationType must be trimester, semester, or year'),
  body('academicInfo.qualification.*.resultRecord').optional().isArray().withMessage('qualification.resultRecord must be an array'),
  body('academicInfo.qualification.*.resultRecord.*.scoreType')
    .optional()
    .isIn(['cgpa', 'percentage'])
    .withMessage('qualification.resultRecord.scoreType must be cgpa or percentage'),

  body('experience').optional().isArray().withMessage('experience must be an array'),
  body('experience.*.companyName')
    .optional()
    .notEmpty()
    .withMessage('experience.companyName is required'),
  body('experience.*.role')
    .optional()
    .notEmpty()
    .withMessage('experience.role is required'),
  body('experience.*.startDate')
    .optional()
    .isISO8601()
    .toDate()
    .withMessage('experience.startDate must be a valid date'),
  body('experience.*.endDate')
    .optional()
    .isISO8601()
    .toDate()
    .withMessage('experience.endDate must be a valid date'),

  (req, res, next) => {
    const errors = validationResult(req);
    if (errors.isEmpty()) {
      return next();
    }

    const formatted = errors.array().map((error) => error.msg);
    return res.status(statusMessages.UNPROCESSABLE_ENTITY.code).json({
      message: statusMessages.UNPROCESSABLE_ENTITY.message,
      errors: formatted,
    });
  },
];

export const validateLoginUser = [
  body('enrollmentNumber')
    .exists({ checkFalsy: true })
    .withMessage('enrollmentNumber is required')
    .bail()
    .isString()
    .withMessage('enrollmentNumber must be a string'),
  body('password')
    .exists({ checkFalsy: true })
    .withMessage('password is required')
    .bail()
    .isString()
    .withMessage('password must be a string')
    .bail()
    .isLength({ min: 6 })
    .withMessage('password must be at least 6 characters'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (errors.isEmpty()) {
      return next();
    }

    const formatted = errors.array().map((error) => error.msg);
    return res.status(statusMessages.UNPROCESSABLE_ENTITY.code).json({
      message: statusMessages.UNPROCESSABLE_ENTITY.message,
      errors: formatted,
    });
  },
];

export const validateUpdateUser = [
  param('enrollmentNumber')
    .exists({ checkFalsy: true })
    .withMessage('enrollmentNumber parameter is required')
    .bail()
    .isString()
    .withMessage('enrollmentNumber must be a string'),
  body().custom((value, { req }) => {
    const allowedKeys = ['academicInfo', 'experience'];
    const bodyKeys = Object.keys(req.body || {});
    if (bodyKeys.length === 0) {
      throw new Error('At least one field is required for update');
    }

    const invalidKeys = bodyKeys.filter((key) => !allowedKeys.includes(key));
    if (invalidKeys.length > 0) {
      throw new Error(`Only academicInfo and experience may be updated. Invalid fields: ${invalidKeys.join(', ')}`);
    }

    return true;
  }),
  body('academicInfo')
    .optional()
    .isObject()
    .withMessage('academicInfo must be an object'),
  body('academicInfo.qualification')
    .optional()
    .isArray()
    .withMessage('academicInfo.qualification must be an array'),
  body('academicInfo.qualification.*.qualificationType')
    .optional()
    .isIn(['UG', 'PG', 'PhD', 'Diploma', 'Other'])
    .withMessage('qualificationType must be one of UG, PG, PhD, Diploma, Other'),
  body('academicInfo.qualification.*.courseName')
    .optional()
    .notEmpty()
    .withMessage('qualification.courseName is required'),
  body('academicInfo.qualification.*.evaluationType')
    .optional()
    .isIn(['trimester', 'semester', 'year'])
    .withMessage('qualification.evaluationType must be trimester, semester, or year'),
  body('academicInfo.qualification.*.resultRecord')
    .optional()
    .isArray()
    .withMessage('qualification.resultRecord must be an array'),
  body('academicInfo.qualification.*.resultRecord.*.scoreType')
    .optional()
    .isIn(['cgpa', 'percentage'])
    .withMessage('qualification.resultRecord.scoreType must be cgpa or percentage'),
  body('experience')
    .optional()
    .isArray()
    .withMessage('experience must be an array'),
  body('experience.*.companyName')
    .optional()
    .notEmpty()
    .withMessage('experience.companyName is required'),
  body('experience.*.role')
    .optional()
    .notEmpty()
    .withMessage('experience.role is required'),
  body('experience.*.startDate')
    .optional()
    .isISO8601()
    .toDate()
    .withMessage('experience.startDate must be a valid date'),
  body('experience.*.endDate')
    .optional()
    .isISO8601()
    .toDate()
    .withMessage('experience.endDate must be a valid date'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (errors.isEmpty()) {
      return next();
    }

    const formatted = errors.array().map((error) => error.msg);
    return res.status(statusMessages.UNPROCESSABLE_ENTITY.code).json({
      message: statusMessages.UNPROCESSABLE_ENTITY.message,
      errors: formatted,
    });
  },
];

