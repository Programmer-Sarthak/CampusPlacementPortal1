//Controller layer for authorized user

import { createAuthorizedUserService ,loginAuthorizedUserService} from '../services/authorizedUserService.js'

const addAuthorizedUser = async (req, res) => {
    const data = req.body;
    data.createdBy = req.user;
    const user = await createAuthorizedUserService(data);



    res.status(200)
        .json({
            message: "user added successfully",
            data: {
                name: user.name,
                email: user.contact.email,
                status: user.status
            }
        })
}

const loginAuthorizedUser = async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    console.log(email, password + "  Controller");
    const user = await loginAuthorizedUserService(email, password );
    res.status(200)
    .json(
        {
            message:"login successful",
            data:{
                name:user.name,
                email:user.email,
                role:user.role,
                token:user.token
            }
        }
    )
}

export {
    addAuthorizedUser,
    loginAuthorizedUser
}
