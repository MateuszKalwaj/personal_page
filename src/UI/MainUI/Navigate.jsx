import Header from "../Header.jsx";
import './Navigate.css';

function Navigate() {

    const links = [
        {name: "Contact", id: "contact"}, {name: "Experience", id: "experience"}, {name: "Projects", id: "projects"}, {name: "After hours", id: 'after-hours'}
    ]

    const handleClick = (id) => {
        const target = document.getElementById(id.toLowerCase());
        target.scrollIntoView({behavior: "smooth"})
    }

    return (
        <>
        <Header/>
        <ul>
            {links.map((link) => {
                return <button key={link.name} className='nav-button' onClick={()=> handleClick(link.id)}>{link.name}</button>
            })}
        </ul>
        </>
    )

}

export default Navigate;