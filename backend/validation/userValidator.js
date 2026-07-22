import statusMessages from '../utils/statusMessages.js';

const isValidDate = (value) => {
  const date = new Date(value);
  return !Number.isNaN(date.getTime());
};

const isEmail = (value) => typeof value === 'string' && /^\S+@\S+\.\S+$/.test(value);

const isPhoneNumber = (value) => typeof value === 'string' && /^[0-9]{7,15}$/.test(value);

const validateQualification = (qualification, index) => {
  const errors = [];
  if (typeof qualification !== 'object' || qualification === null) {
    errors.push(`qualification[${index}] must be an object`);
    return errors;
  }

  const validTypes = ['UG', 'PG', 'PhD', 'Diploma', 'Other'];
  if (!qualification.qualificationType || !validTypes.includes(qualification.qualificationType)) {
    errors.push(`qualification[${index}].qualificationType must be one of ${validTypes.join(', ')}`);
  }

  if (!qualification.courseName) {
    errors.push(`qualification[${index}].courseName is required`);
  }

  if (!qualification.evaluationType || !['trimester', 'semester', 'year'].includes(qualification.evaluationType)) {
    errors.push(`qualification[${index}].evaluationType must be trimester, semester, or year`);
  }

  if (qualification.resultRecord) {
    if (!Array.isArray(qualification.resultRecord)) {
      errors.push(`qualification[${index}].resultRecord must be an array`);
    } else {
      qualification.resultRecord.forEach((record, recordIndex) => {
        if (typeof record !== 'object' || record === null) {
          errors.push(`qualification[${index}].resultRecord[${recordIndex}] must be an object`);
          return;
        }
        if (!record.scoreType || !['cgpa', 'percentage'].includes(record.scoreType)) {
          errors.push(`qualification[${index}].resultRecord[${recordIndex}].scoreType must be cgpa or percentage`);
        }
      });
    }
  }

  return errors;
};

const validateRegisterStudent = (req, res, next) => {
  const data = req.body;
  const errors = [];

  if (!data || typeof data !== 'object') {
    return res.status(statusMessages.UNPROCESSABLE_ENTITY.code).json({
      message: statusMessages.UNPROCESSABLE_ENTITY.message,
      errors: ['Request body must be a JSON object'],
    });
  }

  if (!data.role || data.role !== 'student') {
    errors.push('role is required and must be student');
  }

  if (!data.userName || typeof data.userName !== 'string' || data.userName.trim().length < 3) {
    errors.push('userName is required and must be at least 3 characters');
  }

  if (!data.passWordHash || typeof data.passWordHash !== 'string' || data.passWordHash.length < 6) {
    errors.push('passWordHash is required and must be at least 6 characters');
  }

  if (!data.personalInfo || typeof data.personalInfo !== 'object') {
    errors.push('personalInfo is required');
  } else {
    const { name, dateOfBirth, category } = data.personalInfo;
    if (!name || typeof name !== 'string' || name.trim().length < 3) {
      errors.push('personalInfo.name is required and must be at least 3 characters');
    }
    if (!dateOfBirth || !isValidDate(dateOfBirth)) {
      errors.push('personalInfo.dateOfBirth is required and must be a valid date');
    }
    if (!category || !['General', 'OBC', 'SC', 'ST'].includes(category)) {
      errors.push('personalInfo.category is required and must be one of General, OBC, SC, ST');
    }
  }

  if (!data.contact || typeof data.contact !== 'object') {
    errors.push('contact is required');
  } else {
    if (!isPhoneNumber(data.contact.contactNumber)) {
      errors.push('contact.contactNumber is required and must be a valid phone number');
    }
    if (data.contact.alternateContactNumber && !isPhoneNumber(data.contact.alternateContactNumber)) {
      errors.push('contact.alternateContactNumber must be a valid phone number when provided');
    }
    if (!isEmail(data.contact.email)) {
      errors.push('contact.email is required and must be a valid email address');
    }
  }

  if (!data.address || typeof data.address !== 'object') {
    errors.push('address is required');
  } else {
    if (!data.address.localAddress || typeof data.address.localAddress !== 'string') {
      errors.push('address.localAddress is required');
    }
    if (!data.address.permanentAddress || typeof data.address.permanentAddress !== 'string') {
      errors.push('address.permanentAddress is required');
    }
  }

  if (data.academicInfo) {
    if (typeof data.academicInfo !== 'object') {
      errors.push('academicInfo must be an object when provided');
    } else {
      if (data.academicInfo.qualification) {
        if (!Array.isArray(data.academicInfo.qualification)) {
          errors.push('academicInfo.qualification must be an array');
        } else {
          data.academicInfo.qualification.forEach((qualification, index) => {
            errors.push(...validateQualification(qualification, index));
          });
        }
      }
    }
  }

  if (data.experience) {
    if (!Array.isArray(data.experience)) {
      errors.push('experience must be an array when provided');
    } else {
      data.experience.forEach((item, index) => {
        if (!item.companyName || typeof item.companyName !== 'string') {
          errors.push(`experience[${index}].companyName is required`);
        }
        if (!item.role || typeof item.role !== 'string') {
          errors.push(`experience[${index}].role is required`);
        }
        if (item.startDate && !isValidDate(item.startDate)) {
          errors.push(`experience[${index}].startDate must be a valid date`);
        }
        if (item.endDate && !isValidDate(item.endDate)) {
          errors.push(`experience[${index}].endDate must be a valid date`);
        }
      });
    }
  }

  if (errors.length) {
    return res.status(statusMessages.UNPROCESSABLE_ENTITY.code).json({
      message: statusMessages.UNPROCESSABLE_ENTITY.message,
      errors,
    });
  }

  next();
};

export default validateRegisterStudent;
