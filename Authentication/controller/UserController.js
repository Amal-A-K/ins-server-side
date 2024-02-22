const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../model/UserSchema");

const SignupValidation = require("../Validation/SignUpValidation");
const SigninValidation = require("../Validation/SignInValidation");
module.exports = {
    signup: async (req, res) => {
        const { firstName, lastName, email, password } = req.body;

        const { errors, isValid } = SignupValidation(req.body);

        try {
            if (!isValid) {
                res.status(404).json(errors);
            } else {
                await User.findOne({ email }).then(async (exist) => {
                    if (exist) {
                        errors.email = "Email already in use";
                        res.status(404).json(errors);
                    } else {
                        const hashedpassword = bcrypt.hashSync(password, 8);
                        const result = await User.create({
                            firstName,
                            lastName,
                            InstituteId: "none",
                            email,
                            password: hashedpassword,
                            role: "Owner",
                        });

                        console.log(result);
                        res.status(201).json({ message: "user added with success",user_id:result._id });
                    }
                });
            }
        } catch (error) {
            console.log(error.message);
        }
    },
    signin: async (req, res) => {
        const { email, password } = req.body;
        const { errors, isValid } = SigninValidation(req.body);

        try {
            if (!isValid) {
                res.status(404).json(errors);
            } else {
                await User.findOne({ email }).then(async (user) => {
                    if (!user) {
                        errors.email =
                            "Email does not exist ! please Enter the right Email or You can make account";
                        res.status(404).json(errors);
                    }
                    // Compare sent in password with found user hashed password
                    const passwordMatch = bcrypt.compareSync(password, user.password);
                    if (!passwordMatch) {
                        errors.password = "Wrong Password";
                        res.status(404).json(errors);
                    } else {
                        // generating a token and storing it in a cookie
                        const token = jwt.sign({ _id: user._id, role: user.role }, "success", {
                            expiresIn: "8h",
                        });




                        // console.log(data);
                        // res.cookie("Authorization", token, options);
                        res.status(201).json({
                            token,
                            role: user.role
                        });
                    }
                });
            }
        } catch (error) {
            console.log(error.message);
        }
    },
    verifyToken: async (req, res) => {
        try {
            const token = req.body.token;
            const decoded = jwt.verify(token, 'success')
            res.status(200).json(decoded)
        }
        catch (error) {
            return res.status(401).json({
                message: 'Auth Failed'
            });
        }
    },
    getUser: async (req, res) => {
        const id = req.params.id;
        console.log(id, "id success");
        try {
            const userdata = await User.findById(id);
            console.log(userdata," ","userdata");
            const data = {
                firstName: userdata.firstName,
                lastName: userdata.lastName,
                email: userdata.email,
                InstituteId:userdata.InstituteId
                // courseReg : userdata.courseReg
            }
            console.log(userdata," ","userdata");
            res.status(200).json(data)

        } catch (error) {
            res.status(400).json(error)

        }
    },
    updateUser: async (req, res) => {
        const id = req.params.id;
        console.log(id, "id success2");
        try {
            await User.findByIdAndUpdate(id, {
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email
            });


            res.status(200).json({ success: true, message: "User updation successful" })

        } catch (error) {

            res.status(400).json(error)
        }
    },
    deleteUser: async (req, res) => {
        const id = req.params.id
        try {
            await User.findByIdAndDelete(id)
            res.status(200).json("Deleted User Successfully")
        }
        catch (err) {
            res.status(400).json(err)
        }
    }
}
