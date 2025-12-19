"use client";
import { useState } from "react";

export default function SignUpForm(){
    //Using states so parent component knows a valid submition has occurred
    const [isSubmitted, setIsSubmitted] = useState(false);
    //name, kennitala, phonenumber, generalEmail, uniEmail
    function handlePostDataForm(e){
        e.preventDefault();
        const formData = {
            name: e.target.name.value,
            kennitala: e.target.kennitala.value,
            phoneNumber: e.target.phoneNumber.value,
            generalEmail: e.target.generalEmail.value,
            uniEmail:  e.target.uniEmail.value
        };

        fetch("http://localhost:8080/application",{
            method: "POST",
            headers: { "Content-Type" : "application/json" },
            body: JSON.stringify(formData)
        })
        //async so the proper error message can go through
        .then(async res =>{ 
            if(!res.ok){
                const errorData = await res.json()
                throw new Error(errorData.error);
            }
            setIsSubmitted(true);
            return res.json();
        })
        .then(data => {
            console.log("Success: ",data)        
        })
        .catch(err =>{
            alert(err);
            console.log("Error: ", err)
        })
    }

    if(isSubmitted){
        return(
            <div>
                <h1>Til hamingju!, þú ert nú skráður í nemendafélagið Ned og Ted!</h1>
            </div>
        );
    }

    return (
        <form onSubmit={handlePostDataForm} className="signup-form">
            <div className="signup-form-title"> 
                <h2> Félagsskráning </h2>
            </div>

            <div className="signup-form-row">
                <label htmlFor="name"> Nafn: </label>
                <input type="text" id="name" name="name" required className="form-signup-text" 
                    placeholder="t.d. Jón Jónsson" />
            </div>

            <div className="signup-form-row">
                <label htmlFor="kennitala"> Kennitala: </label>
                <input type="text" id="kennitala" name="kennitala" required
                    className="form-signup-text" placeholder="000000-0000" />
            </div>

            <div className="signup-form-row">
                <label htmlFor="phoneNumber"> Símanúmer: </label>
                <input type="text" id="phoneNumber" name="phoneNumber" required 
                    className="form-signup-text" placeholder="5812345" />
            </div>

            <div className="signup-form-row">
                <label htmlFor="generalEmail"> Netfang: </label>
                <input type="text" id="generalEmail" name="generalEmail" required
                    className="form-signup-text" placeholder="t.d. gmail@gmail.is" />
            </div>

            <div className="signup-form-row">
                <label htmlFor="uniEmail"> Skólanetfang: </label>
                <input type="text" id="uniEmail" name="uniEmail" required className="form-signup-text" 
                    placeholder="t.d. daa@hi.is"/>
            </div>

            <button type="submit">
                Submit
            </button>
        </form>
    );
}