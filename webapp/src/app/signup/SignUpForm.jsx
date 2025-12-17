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
        <>
            <form onSubmit={handlePostDataForm}>
                <label htmlFor="name"> Nafn: </label>
                <input type="text" id="name" name="name" required placeholder="t.d. Jón Jónsson"></input>

                <label htmlFor="kennitala"> Kennitala: </label>
                <input type="text" id="kennitala" name="kennitala" required placeholder="000000-0000"></input>

                <label htmlFor="phoneNumber"> Símanúmer: </label>
                <input type="text" id="phoneNumber" name="phoneNumber" required placeholder="5812345"></input>

                <label htmlFor="generalEmail"> Netfang: </label>
                <input type="text" id="generalEmail" name="generalEmail" required placeholder="t.d. gmail@gmail.is"></input>

                <label htmlFor="uniEmail"> Skólanetfang: </label>
                <input type="text" id="uniEmail" name="uniEmail" required placeholder="t.d. daa@hi.is"></input>

                <button type="submit">
                    Submit
                </button>
            </form>
        </>
    );
}