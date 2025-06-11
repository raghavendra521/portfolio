import { FaCopyright, FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa"

const Footer = ()=>{
    return (
        // <Footer>
            <div className="bg-black text-white border-t border-gray-600 pt-4 flex flex-row md:flex-row items-center">
                {/* <div className="flex"> */}
                    <p className="text-white flex gap-4 mr-100">
                       &copy; {new Date().getFullYear()} Raghavendra All rights reserved.
                    </p>
                    <div className="flex space-x-4 my-4 md:my-2">
                        <a href="https://www.facebook.com/baratam.raghavendra" target="_blank">
                            <FaFacebook />
                        </a>
                        <a href="https://www.linkedin.com/in/baratam-raghavendra-1560611a2/" target="_blank">
                            <FaLinkedin />
                        </a>
                        <a href="https://github.com/raghavendra521" target="_blank">
                            <FaGithub />
                        </a>
                        <a href="https://x.com/Raghavendra521" target="_blank">
                            <FaTwitter />
                        </a>
                    </div>
                {/* </div> */}
            </div>
        // </Footer>
    )
}

export default Footer