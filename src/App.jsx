import Footer from "./UI/MainUI/Footer.jsx";
import Navigate from "./UI/MainUI/Navigate.jsx";
import ExperienceCards from "./UI/MainUI/ExperienceCards.jsx";
import Contact from "./UI/MainUI/Contact.jsx";
import Projects from "./UI/MainUI/Projects.jsx";
import AfterHours from "./UI/MainUI/AfterHours.jsx";
import {useState} from "react";

function App() {

    const [refToScroll, setRefToScroll] = useState(null);
    return (
        <>
            <Navigate setRefToScroll={setRefToScroll}/>
            <Contact/>
            <ExperienceCards refToScroll={refToScroll}/>
            <Projects refToScroll={refToScroll}/>
            <AfterHours/>
            <Footer/>
        </>
    )
}

export default App
