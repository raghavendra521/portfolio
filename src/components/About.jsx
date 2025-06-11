import RaghavImage from '../assets/raghavendra.jpeg'
const About = () => {
    const courses = [
        {id: 'html',course_name: 'HTML', known: 7.5}, 
        {id: 'tailwindcss',course_name: 'Tailwind CSS', known: 7.5}, 
        {id:'nodejs', course_name: 'Node.js', known: 9.5}, 
        {id: 'angular', course_name: 'Angular', known: 8.5},
        {id: 'react', course_name: 'React', known: 8}
    ]
    return (
        <div className='bg-black text-white py-20' id='about'>
            <div className='container mx-auto px-8 md:px-16 lg:px-24'>
                <h2 className='text-4xl font-bold text-center mb-12'>About me</h2>
                <div className='flex flex-col md:flex-row items-center md:space-x-12'>
                    <img src={RaghavImage} alt='about me image' 
                    className='w-72 h-80 rounded object-cover mb-8 md:mb-0'/>
                    <div className='flex-1'>
                        <p className='tex-lg mb-8'>
                            I am a passionate full stack developer with focus on building modern and responsive web appplications
                            with a strong foundation in both front end and backend technologies.
                        </p>
                        {
                            courses.map(course => {
                                return (
                                <div className='space-y-4 md:space-y-8'>
                                    <div className='flex items-center'>
                                        <label htmlFor={course.id} className='w-2/12'>
                                            {course.course_name}
                                        </label>
                                        <div className='grow bg-gray-800 rounded-full h-2.5'>
                                            {/* <div className={`bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-${course.known}/12`}> */}
                                            <div style={{ width: `${(course.known / 10) * 100}%`}}className={`bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105`}>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                )
                            })
                        }
                        <div className='mt-12 flex justify-around text-center'>
                            <div>
                                <h3 className='text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'> 2+</h3>
                                <p>Years Experience</p>
                            </div>
                            <div>
                                <h3 className='text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'> 10+</h3>
                                <p>Modules Worked On</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
export default About