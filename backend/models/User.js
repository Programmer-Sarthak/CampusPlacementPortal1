import mongoose from 'mongoose';

const resultRecordSchema = new mongoose.Schema(
    {
        termNumber: Number,
        scoreType: {
            type: String,
            enum: ['cgpa', 'percentage'],
            required: true,
        },
        score: Number,
        atktNumber: Number,
    },
    {
        _id: false,
    }
);

const qualificationSchema = new mongoose.Schema(
    {
        qualificationType: {
            type: String,
            enum: ['UG', 'PG', 'PhD', 'Diploma', 'Other'],
        },
        courseName: String,
        branch: String,
        specialization: String,
        university: String,
        yearOfAdmission: Number,
        yearOfPassing: Number,
        overallScore: Number,
        evaluationType: {
            type: String,
            enum: ['trimester', 'semester', 'year'],
            required: true,
        },
        activeBacklogs: Number,
        backlogHistory: Number,
        resultRecord: [resultRecordSchema],
    },
    {
        _id: false,
    }
);

const experienceSchema = new mongoose.Schema(
    {
        companyName: String,
        role: String,
        startDate: Date,
        endDate: Date,
        durationMonths: Number,
        description: String,
    },
    {
        _id: false,
    }
);

const userSchema = new mongoose.Schema(
    {
        role: {
            type: String,
            enum: ['admin', 'student', 'company'],
            required: true,
        },
        userName: {
            type: String,
            required: true,
            unique: true,
        },
        passWordHash: {
            type: String,
            required: true,
        },
        personalInfo: {
            name: {
                type: String,
                required: true,
                maxlength: [80, 'Name cannot exceed 80 characters'],
                minlength: [3, 'Name should have atleast 3 characters'],
            },
            dateOfBirth: {
                type: Date,
                required: true,
            },
            gender: String,
            category: {
                type: String,
                enum: ['General', 'OBC', 'SC', 'ST'],
                required: true,
            },
        },
        contact: {
            contactNumber: {
                type: String,
                required: true,
            },
            alternateContactNumber: {
                type: String,
                required: false,
            },
            email: {
                type: String,
                required: true,
                unique: true,
            },
        },
        address: {
            localAddress: {
                type: String,
                required: true,
            },
            permanentAddress: {
                type: String,
                required: true,
            },
            hometown: String,
            state: String,
            country: String,
            pincode: String,
        },
        academicInfo: {
            academicGap: Number,
            ssc: {
                schoolName: String,
                board: String,
                yearOfPassing: Number,
                percentage: Number,
            },
            hsc: {
                schoolName: String,
                board: String,
                yearOfPassing: Number,
                percentage: Number,
            },
            qualification: [qualificationSchema],
        },
        experience: [experienceSchema],
        lastLogin: {
            type: Date,
            default: Date.now,
        },
    }
);

const User = mongoose.model('User', userSchema);
export default User;
