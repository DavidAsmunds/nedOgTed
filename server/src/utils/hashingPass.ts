const bcrypt = require('bcrypt');

export function hashNewPassword(password: string) : string {
    var hashedPass : string;
    hashedPass = bcrypt.hash(password,12,(err : Error, hashedPassword : string)=>{
        if(err){throw err};
    });
    return hashedPass;
}

export function compareToHashedPassword(password: string, hashedPassword: string){
    bcrypt.compare(password,hashedPassword, (err:Error, isMatch: Boolean)=>{
        if(err){throw err}
        return isMatch;
    });
}
