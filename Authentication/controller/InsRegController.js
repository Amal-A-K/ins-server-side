const Registration = require('../model/InsRegSchema');
const User=require('../model/UserSchema');
module.exports = {
    addINS: async (req, res) => {
        const { InstitutionName, Address, PhoneNumber, Email, Category, Index, State, District, CityOrTown, CourseCategory, CourseName, CourseCode } = req.body;

        try {
            const result = await Registration.create({
                InstitutionName,
                Address,
                PhoneNumber,
                Email,
                // Category,
                Index,
                State,
                District,
                CityOrTown,
                // CourseCategory,
                // CourseName,
                // CourseCode,
            });
            // console.log(result);
            const insid = result._id
            res.status(200).json({ success: "Success", "Instituteid": insid });
        }
        catch (err) {
            res.status(400).json({ err });

        }
    },
    getINS: async (req, res) => {
        try {
            const result2 = await Registration.find()
            res.status(200).json({ "insdata":result2 });
        }
        catch (err) {
            res.status(400).json({ err });
        }
    },
    getINSByid: async (req, res) => {
        const id = req.params.id;
        try {
            const result3 = await Registration.findById(id)
            res.status(200).json({ "insdata":result3 });
        }
        catch (err) {
            res.status(400).json({ err })
        }
    },
    updateINSbyid: async (req, res) => {
        const id = req.params.id
        try {
            await Registration.findByIdAndUpdate(id,
                {
                    InstitutionName: req.body.InstitutionName,
                    Address: req.body.Address,
                    PhoneNumber: req.body.PhoneNumber,
                    Email: req.body.Email,
                    // Category: req.body.Category,
                    // Index: req.body.Index,
                    State: req.body.State,
                    District: req.body.District,
                    CityOrTown: req.body.CityOrTown,
                    // CourseCategory: req.body.CourseCategory,
                    // CourseName: req.body.CourseName,
                    // CourseCode: req.body.CourseCode
                });
            res.status(200).json("update success")
        }
        catch (err) {SS
            res.status(400).json("updation failed")
            console.log(err);
        }
    },
    secondupdateINS: async (req, res) => {
        const InstituteId = req.params.id
        const UserId=req.params.userid
        console.log(req.body);
        
        try {
            await Registration.findByIdAndUpdate(InstituteId,
                {
                    Index: req.body.Index

                });
                try{
                    await User.findByIdAndUpdate(UserId,{
                        InstituteId:InstituteId
                    });
                    res.status(200).json('Update Success1')
                }
                catch(err){
                    res.status(400).json('Updation Error')
                }
                // res.status(200).json('Update success2')
        }
        catch (err) {
            res.status(400).json('err')
        }

    },
    deleteINS: async (req, res) => {
        const id = req.params.id
        try {
            await Registration.findByIdAndDelete(id)
            res.status(200).json("delete success")
        }
        catch (err) {
            res.status(400).json("deletion failed")
        }
    }
}