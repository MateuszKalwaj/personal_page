import Project from "../Project.jsx";
import {useEffect, useRef} from "react";
import './Projects.css';

    function Projects({ refToScroll, setRefToScroll }) {
        const myRef = useRef(null);

        useEffect(() => {
            if (refToScroll === 'projects' && myRef.current) {
                myRef.current.scrollIntoView({ behavior: 'smooth' });
                setRefToScroll(null);
            }
        }, [refToScroll, setRefToScroll]);

    return (
        <div ref={myRef} className='projects'>
            <Project/>
            <br/>
            <Project/>
            <br/>
            <Project/>
        </div>
    )
}

export default Projects;