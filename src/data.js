import splogo from "/src/assets/splogo.webp"
import carfaxlogo from "/src/assets/carfaxlogo.png"
export const JOBS = [
    {
        image: carfaxlogo,
        image_alternative: splogo,
        company: 'Carfax / S&P Global',
        title: 'Associate Software Engineer',
        description: 'work work work lorem ipsum work',
        technologies: ['ReactJS', 'JavaScript', 'TypeScript', 'AWS', 'Java']
    },
    {
        image: carfaxlogo,
        company: 'Freelancer',
        title: 'Web Developer & JS/ReactJS Teacher',
        description: ['Customer acquisition, collecting requirements and setting a budget',
            'Rewriting legacy code into modern solutions',
            'Creating new functionalities on existing websites',
            'In spare time, teach JavaScript/React to people who want to enter the IT industry',
            'Tutoring for IT students'],
        technologies: 'ReactJS, JavaScript, TypeScript, AWS, Java'
    }
]

export const PROJECTS = [
    {
       title: 'matmax.koszalin.pl',
       description: 'Responsive webpage that uses React, Mapbox and EmailJS APIs. ' +
           'Page is hosted on private ftp server and is secured with valid certificate'

    }
]