import Header from "../Header.jsx";
import './Navigate.css';

function Navigate({setRefToScroll}) {
    return (
        <>
        <Header/>
        <ul>
            <button className='nav-button'>Contact</button>
            <button className='nav-button' onClick={() => setRefToScroll('experience')}>Experience</button>
            <button className='nav-button' onClick={()=> setRefToScroll('projects')}>Projects</button>
            <button className='nav-button'>After hours</button>
        </ul>
        </>
    )

}

export default Navigate;