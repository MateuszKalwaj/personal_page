import Card from "../Card.jsx";
import {JOBS} from "../../data.js";
import {useEffect, useRef} from "react";
function ExperienceCards({refToScroll}) {

    const myRef = useRef(null);

    useEffect(() => {
        if (refToScroll === 'experience' && myRef.current) {
            myRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [refToScroll]);

    return (
        <>
            <div ref={myRef} className='experience'>
                {JOBS.map((job) => <Card {...job} />)}
            </div>
        </>
    )
}

export default ExperienceCards;