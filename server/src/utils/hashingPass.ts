const bcrypt = require('bcrypt');

export function hashNewPassword(password: string) {
    bcrypt.hash(password,12,(err : Error, hashedPassword : string)=>{
        if(err){throw err};
        return hashedPassword;
    });
}

export function compareToHashedPassword(password: string, hashedPassword: string){
    bcrypt.compare(password,hashedPassword, (err:Error, isMatch: Boolean)=>{
        if(err){throw err}
        return isMatch;
    });
}
