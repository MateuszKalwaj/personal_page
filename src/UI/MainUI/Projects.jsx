import Project from "../Project.jsx";
import {useEffect, useRef} from "react";

    function Projects({ refToScroll }) {
        const myRef = useRef(null);

        useEffect(() => {
            if (refToScroll === 'projects' && myRef.current) {
                myRef.current.scrollIntoView({ behavior: 'smooth' });
            }
        }, [refToScroll]);

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