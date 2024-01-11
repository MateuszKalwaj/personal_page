import Card from "../Card.jsx";
import {JOBS} from "../../data.js";
import './ExperienceCards.css';

function ExperienceCards() {

    return (

            <div className='container' id="experience">
                <div className='experience' >
                    {JOBS.map((job) => <Card {...job} />)}
                </div>
            </div>

    )
}

export default ExperienceCards;