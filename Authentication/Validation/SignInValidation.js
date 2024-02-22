const validator = require('validator');
const isEmpty = require('./empty');

module.exports= function SigninValidation(data){

    let errors = {};

    data.email = !isEmpty(data.email) ? data.email : "";
    data.password = !isEmpty(data.password) ? data.password : "";

    if(validator.isEmpty(data.email)){
        errors.email="Email feild is required";
    }else if(!validator.isEmail(data.email)){
        errors.email="Format Email required";
    }
    if(validator.isEmpty(data.password)){
        errors.password="Password feild is required";
    }
    return{
        errors,
        isValid:isEmpty(errors),
    };
};