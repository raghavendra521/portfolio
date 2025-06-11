import { useState } from "react"

const NavBar = () => {
    
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const onConnectMe = ()=> {
        window.open("https://www.linkedin.com/in/baratam-raghavendra-1560611a2/", "_blank");
    }

    return (
        <div className="bg-black text-white px-8 md:px-16 lg:px-24">
            <div className="container py-2 flex justify-center md:justify-between items-center">
                <div className="text-2xl font-bold hidden md:inline">Raghav</div>
                <div className="space-x-6">
                    <a href="#home" className="hover:text-gray-400">Home</a>
                    <a href="#about" className="hover:text-gray-400">About Me</a>
                    <a href="#services" className="hover:text-gray-400">Services</a>
                    {/* <a href="#projects" className="hover:text-gray-400">Projects</a> */}
                    <a href="#contact" className="hover:text-gray-400">Contact</a>
                </div>
                <button onClick={onConnectMe} className="bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full">Connect Me</button>
            </div>        
        </div>
        // <div className="navbar">
        //     <div className="flex-inline">
        //         <div className={`name ${isMenuOpen ? "show-menu" : ""}`}>Raghav</div>
        //         <div className={`nav-links ${isMenuOpen ? "show-menu" : ""}`}>
        //             <a href="#home" className="hover: text-gray-400">Home</a>
        //             <a href="#about" className="hover: text-gray-400">About Me</a>
        //             <a href="#services" className="hover: text-gray-400">Services</a>
        //             <a href="#projects" className="hover: text-gray-400">Projects</a>
        //             <a href="#contact" className="hover: text-gray-400">Contact</a>
        //         </div>
        //         <div class="menu-toggle" onClick={toggleMenu}>☰</div>
        //         {/* <div className="flex-inline"> */}
        //         <button className="connectme button">Connect Me</button>
        //     </div>
        // </div>
    )
}

export default NavBar