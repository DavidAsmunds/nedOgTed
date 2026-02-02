const bcrypt = require('bcrypt');

export async function hashNewPassword(password: string) : Promise<string> {
    const hashedPass = await bcrypt.hash(password,12)
    return hashedPass;
}

export function compareToHashedPassword(password: string, hashedPassword: string){
    bcrypt.compare(password,hashedPassword, (err:Error, isMatch: Boolean)=>{
        if(err){throw err}
        return isMatch;
    });
}
