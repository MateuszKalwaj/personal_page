function Card({image, company, title, description, technologies}) {
    return (
        <>
            <li className='card'>
                <img id='img-logo' src={image} alt=''/>
                <h2>{company}</h2>
                <h3>{title}</h3>
                <p>{description}</p>
                <p>{technologies}</p>
            </li>
        </>
    )
}

export default Card;