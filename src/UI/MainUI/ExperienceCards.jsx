import Card from "../Card.jsx";
import {JOBS} from "../../data.js";
import {useEffect, useRef} from "react";
import './ExperienceCards.css';

function ExperienceCards({refToScroll, setRefToScroll}) {

    const myRef = useRef(null);

    useEffect(() => {
        if (refToScroll === 'experience' && myRef.current) {
            myRef.current.scrollIntoView({behavior: 'smooth'});
            setRefToScroll(null);
        }
    }, [refToScroll, setRefToScroll]);

    return (
        <>
            <div className='container'>
                <div ref={myRef} className='experience'>
                    {JOBS.map((job) => <Card {...job} />)}
                </div>
            </div>
        </>
    )
}

export default ExperienceCards;