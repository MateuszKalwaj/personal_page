import Card from "../Card.jsx";
import {JOBS} from "../../data.js";
function ExperienceCards() {
    return (
        <>
            <div className='cards-container'>
                {JOBS.map((job) => <Card {...job} />)}
            </div>
        </>
    )
}

export default ExperienceCards;