const ClassRoomSchema = require('../Model/ClassroomSchema');
module.exports = {
    addClassRoom: async (req, res) => {
        const { Year, Category, Branch, Section, Student } = req.body;
        try {
            const result = await ClassRoomSchema.create({
                Year,
                Category,
                Branch,
                Section,
                Student
            });
            res.status(200).json({ "message": "Successfully added classroom", "data": result })
        }
        catch (err) {
            res.status(400).json({ "message": "Failed to add classroom", "err": err })
        }
    },
    getClassRoom:async (req,res)=>{
        try{
            const result=await ClassRoomSchema.find()
            if(result.length>0){
                res.status(200).json({"message":"Found the class room","result":result})
            }
            else{
                res.status(400).json({"message":"Couldn't find class room"})
            }
        }
        catch(err){
            res.status(400).json({"message":"Something wrong to find the class","err":err})
        }
    },
    getClassRoomById:async (req,res)=>{
        const id= req.params.id;
        try{
            const result=await ClassRoomSchema.findById(id)
            if(result!==null){
                res.status(200).json({"message":"Finded the class room by id","result":result})
            }
            else{
                res.status(400).json({"message":"Failed to get class room by id"})
            }
        }
        catch(err){
            res.status(400).json({"message":"Something wrong to find the class room by id","err":err})
        }
    },
    updateClassRoom: async (req,res)=>{
        const id = req.params.id
        try{
            if(!id){
                return res.status(400).json({"message":"Id is missing in params"})
            }
            const result = await ClassRoomSchema.findByIdAndUpdate(id,{
                Year:req.body.Year,
                Category:req.body.Category,
                Branch:req.body.Branch,
                Section:req.body.Section,
                Student:req.body.Student
            },{new:true}) 
            if(result){
                res.status(200).json({"message":"Successfully updated class room","result":result})
            }
            else{
                res.status(400).json({"message":"Failed to update class room"})
            }
        }
        catch(err){
            res.status(400).json({"message":"Something wrong to update class room","err":err})
        }
    },
    deleteClassRoom : async (req,res) =>{
        const id = req.params.id
        try{
            const result=await ClassRoomSchema.findByIdAndDelete(id)
            if(result){
                res.status(200).json({"message":"Successfully deleted class room","result":result})
            }
            else{
                res.status(400).json({"message":"Failed to delete class room"})
            }
        }
        catch(err){
            res.status(400).json({"message":"Something wrong to delete class room","err":err})
        }
    }
}