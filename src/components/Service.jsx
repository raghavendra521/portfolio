const services = [
    {
      id: 1,
      title: "Full Stack Development",
      description: "Front end and Backend technologies using Angular and Node.js for scalable web applications."
    },
    {
      id: 2,
      title: "API Development & Integration",
      description: "Custom RESTful API development using Express.js and MySQL, with secure integrations for third-party services."
    },
    {
      id: 3,
      title: "Single Page Application (SPA)",
      description: "Responsive and dynamic SPAs built using Angular, with real-time data handling via Node.js backend."
    },
    {
      id: 4,
      title: "Database Design & Management",
      description: "Efficient schema design and CRUD operations using MySQL with Sequelize for scalable data handling."
    },
    {
      id: 5,
      title: "Authentication & Authorization",
      description: "Secure user authentication using JWT, OAuth, and role-based access control within the Express and MySQL stack."
    },
    {
      id: 6,
      title: "Deployment & DevOps",
      description: "End-to-end deployment using Docker, CI/CD pipelines, and hosting on platforms like AWS, Heroku, or DigitalOcean."
    }
  ]
  
  
const Service = ()=> {

    return (
        <div className='bg-black text-white p-20' id='services'>
            <div className='container mx-auto px-8 md:px-16 lg:px-24'>
                <h2 className='text-4xl font-bold text-center mb-12'>My Services</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    {services.map(service => {
                        return (
                            <div key={service.id}
                            className='bg-gray-800 px-6 pb-6 rounded-lg hover:shadow-lg transform transition-transform 
                            duration-300 hover:scale-105'>
                                {/* <div className='text-right text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r
                                from-green-600 to-blue-400'>
                                    {service.id}
                                </div> */}
                                <h3 className='mt-2 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>
                                    {service.title}
                                </h3>
                                <p className='mt-2 text-gray-300'>{service.description}</p>
                                {/* <a href='#'>Read More</a> */}
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Service