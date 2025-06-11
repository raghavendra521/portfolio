import RaghavImage from '../assets/raghavendra.jpeg'
const projects = [
    {
        id: 1,
        name: "BMs",
        technologies: "MERN stack",
        image: RaghavImage,
        github: 'https://github.com/raghavendra521'
    },
    {
        id: 2,
        name: "BMs",
        technologies: "MERN stack",
        image: RaghavImage,
        github: 'https://github.com/raghavendra521'
    },
    {
        id: 3,
        name: "BMs",
        technologies: "MERN stack",
        image: RaghavImage,
        github: 'https://github.com/raghavendra521'
    },
]

const Projects = ()=> {
    return (
        <div className='bg-black text-white py-20' id='projects'>
            <div className='container mx-auto px-8 md:px-16 lg:px-24'>
                <h2 className='text-4xl font-bold text-center mb-12'>My Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {
                        projects.map(project=>
                            <div className="bg-gray-800 p-6 rounded-lg hover:shadow-lg transform transition-transform duration-300 hover:scale-105">
                                <img src={project.image} alt="Project image" className='rounded-lg mb-4 w-full h-48 object-cover'/>
                                <h3 className='text-2xl font-bold mb-2'>{project.name}</h3>
                                <p className='text-gray-400 mb-4'>{project.technologies}</p>
                                <a href={project.github} target='_blank' className='inline-block bg-gradient-to-r from-green-400 to-blue-500
                                text-white px-4 py-2 rounded-sm'>GitHub</a>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Projects