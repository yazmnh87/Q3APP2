const validator = require('validator')
const isEmpty = require('./is-empty')


module.exports = function validateRegisterInput(data){
    console.log(data)
    let errors = {}
    data.firstName = !isEmpty(data.firstName) ? data.firstName : '';
    data.lastName = !isEmpty(data.lastName) ? data.lastName : '';
    data.email= !isEmpty(data.email) ? data.email : '';
    data.password = !isEmpty(data.password) ? data.password : '';
    data.password2 = !isEmpty(data.password2) ? data.pasword2 : '';

    // if(!validator.isLength(data.name, {min: 2, max: 30})){
    //     errors.name = "name must be between 2 and 30 characters"
    // }
    if(validator.isEmpty(data.firstName && data.lastName || data.firstName || data.lastName)) {
        errors.name = "Name field is required"
    }

    // if(!validator.isEmpty(data.email)){
    //     errors.email = "Email field is required"
    // }
    if(validator.isEmpty(data.password)){
        errors.password = "Password is required"
    }

    if(!validator.isLength(data.password, {min: 6, max: 30})){
        errors.password = "Password must be at least 6 chracters"
    }

    // if(validator.isEmpty(data.password2)){
    //     errors.password2 = "Confirm Password is required"
    // }

    // if(!validator.equals(data.password, data.password2)){
    //     errors.password2 = "Passwords must match"
    // }

    return{
        errors, 
        isValid: isEmpty(errors)
    }
    
    
}