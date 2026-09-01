import mongoose from 'mongoose';

const authorizedUserSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        passwordHash: {
            type: String,
            required: true
        },
        contact: {
            email: {
                type: String,
                required: true
            },
            phoneNumber: {
                type: String,
                required: true
            }
        },
        role: {
            type: String,
            enum: ['director', 'placementFaculty', 'tpo', 'companyHR'],
            required: true
        },
        department: {
            type: String
        },
        status: {
            type: String,
            enum: ['active', 'inactive'],
            default: 'active'
        },

        companyId: {
            // type: mongoose.Schema.Types.ObjectId,
            // ref:'Company'
        },

        createdAt: {
            type: Date,
            default: Date.now,
        },
        createdBy: {
            // type: mongoose.Schema.Types.ObjectId,
            // ref: 'AuthorizedUser'
        },
        updatedAt: {
            type: Date,
            default: Date.now
        },
        updatedBy: {
            // type: mongoose.Schema.Types.ObjectId,
            // ref: 'AuthorizedUser'
        }



    }
);
const AuthorizedUser = mongoose.model('AuthorizedUser', authorizedUserSchema);
export default AuthorizedUser;