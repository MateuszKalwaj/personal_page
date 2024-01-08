import './Card.css';
function Card({image,image_alternative, company, title, description, technologies}) {
    return (
        <>
            <li className='card'>
                <img className='img-logo' src={image} alt=''/>
                <img className='img-logo_alternative' src={image_alternative} alt=''/>
                <h2 className='card-company'>{company}</h2>
                <h3 className='card-title'>{title}</h3>
                <p className='card-description'>{description}</p>
                <p className='card-technologies'>{technologies}</p>
            </li>
        </>
    )
}

export default Card;