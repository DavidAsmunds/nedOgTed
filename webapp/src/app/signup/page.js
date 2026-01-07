import SignUpForm from "./SignUpForm";
import Image from "next/image";

export default function SignUp(){

    return (
        <section className="section">
             
            <SignUpForm className="signup-form"/>

            <div className="signup-right-side">
                <div className="signup-image-content">
                    <h2> Öll velkomin! </h2>
                    <p> 
                        Hér er hægt að skrá sig í félagatal Ned og Ted. Það þarf að fylla í alla liði.
                        Kennitölu og símanúmer skal skrá í samfelldri runu án bandstriks t.d. "5812345".
                    </p>
                </div>
                <div className="signup-image">
                    <Image
                            src="/nedogtedLogo.png"
                            alt="Ned & Ted Logo"
                            fill
                            style={{objectFit:"contain"}}
                    />
                </div>
            </div>
        </section>
    );
}