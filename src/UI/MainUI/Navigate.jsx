import Header from "../Header.jsx";

function Navigate({setRefToScroll}) {
    return (
        <>
        <Header/>
        <ul>
            <button>Contact</button>
            <button onClick={() => setRefToScroll('experience')}>Experience</button>
            <button onClick={()=> setRefToScroll('projects')}>Projects</button>
            <button>After hours</button>
        </ul>
        </>
    )

}

export default Navigate;