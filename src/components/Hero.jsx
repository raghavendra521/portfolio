import RaghavImage from '../assets/raghavendra.jpeg'
import myResume from '../assets/raghavendra_resume.pdf';

const Hero = () => {

    const contactMe = () => {
        const url = `https://wa.me/8341324536?text=${encodeURIComponent('hi Raghavendra')}`;
        window.open(url, '_blank'); // Opens WhatsApp in a new tab/window
    };


    const openResume = () => {
        window.open(myResume, '_blank');
    };

    return (
        <div className='bg-black text-white text-center py-16' id=''>
            <img src={RaghavImage} alt="Hero Image" 
            className='mx-auto mb-8 w-48 h-48 rounded-full object-cover transform trasition-transform duration-300 hover:scale-105'/>
            <h1 className='text-4xl font-bold'>
                I'm {" "}
                <span className='text-transparent bg-clip-text bg-gradient-to-t from-green-400 to-blue-500'>Raghavendra</span>
                ,Web Developer
            </h1>
            <p className='mt-4 text-lg text-gray-400'>
                I am specialized in building web appplications.    
            </p>
            <div className="mt-8 space-x-4">
                <button onClick={contactMe} className="bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full">Contact with me</button>
                <button onClick={openResume} className="bg-gradient-to-r from-pink-400 to-yellow-500 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full">Resume</button>
            </div>
        </div>
    )
}
export default Hero