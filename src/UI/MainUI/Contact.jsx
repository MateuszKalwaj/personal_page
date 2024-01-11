import {useEffect, useRef} from "react";

function Contact({refToScroll, setRefToScroll}) {
    const myRef = useRef(null);

    useEffect(() => {
        if (refToScroll === 'contact' && myRef.current) {
            myRef.current.scrollIntoView({behavior: 'smooth'})
            setRefToScroll(null);
        }
    }, [refToScroll, setRefToScroll]);

    return (
        <div ref={myRef} className='contact' id="contact">
            <section>I am a software developer with four years of commercial experience
                focused on JavaScript, TypeScript, and React.
                <br/>
                Currently working as a freelancer and have successfully
                acquired my first clients. Additionally, I teach JavaScript and React
                to people willing to enter the IT industry.
                <br/>
                <br/>
                Before that I worked for Carfax where I developed few new
                products and integrated them into our API. I also created a project
                from scratch - Ftp-manager and contributed to Carfax design
                systems.
                <br/>
                Currently I'm seeking opportunities in React, TypeScript, or
                JavaScript development. I’d be happy to contribute my skills and
                expertise to a dynamic team committed to achieving goals.

            </section>
        </div>
    )
}

export default Contact;