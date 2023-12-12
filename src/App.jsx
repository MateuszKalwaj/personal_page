import Footer from "./UI/MainUI/Footer.jsx";
import Navigate from "./UI/MainUI/Navigate.jsx";
import ExperienceCards from "./UI/MainUI/ExperienceCards.jsx";
import Contact from "./UI/MainUI/Contact.jsx";
import Projects from "./UI/MainUI/Projects.jsx";
import AfterHours from "./UI/MainUI/AfterHours.jsx";

function App() {
    return (
        <>
            <div className='container'>
            <Navigate/>
            <Contact/>
            <ExperienceCards/>
            <Projects/>
            <AfterHours/>
            <Footer/>
            </div>
        </>
    )
}

export default App
