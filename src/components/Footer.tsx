// import Image from "next/image";
// import logo from "../../public/assets/logo.png"

// export default function Footer() {
//     return(
// <footer id="footer" className="bg-[rgb(18,18,51)] text-white text-sm  py-12 px-5"
// style={{
//           backgroundImage: `url("/assets/background1.jpg")`,   
//         }}
// >
//         <div className="max-w-[1200px] mx-auto md:text-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-5">
//           <div>
//             <div className="w-[100px] h-[26px] ml-10 mb-5 overflow-hidden">
//           <Image
//             alt="Company Logo"
//             src={logo}
//             width={100}
//             height={26}
//             className="object-cover object-center w-full h-full"
//           />
//         </div>
//             <p className="leading-relaxed text-start pl-10 mb-5">
//               FargoWiz Ltd Company is a PA, US-based software development and consulting company. We specialize in custom software development with cutting edge technology and platforms.
//             </p>
//           </div>
//           <div className="px-10">
//             <h3 className="text-sm font-bold mb-5 text-white">
//               REACH US
//             </h3>
//             <ul className=" pl-10">
//                 <li>FARGOWIZ LTD COMPANY</li>
//                 <li>606 Liberty Avenue,</li>
//                 <li>3rd Floor,</li> 
//                 <li>Suite #107 Pittsburgh,</li>
//                 <li>PA 15222</li>
//             </ul>
            
//           </div>
//           <div className="md:pl-10">
//             <h3 className="text-sm font-bold mb-5 text-white">
//               CONTACT INFO
//             </h3>
//             <p className="mb-2.5">
//               <a
//                 href="mailto: contact@fargowiz.com"
//                 className="text-white hover:underline transition-colors duration-300 hover:text-[rgb(25,132,255)]"
//               >
//                 contact@fargowiz.com
//               </a>
//             </p>
//             <p>
//               <a
//                 href="tel:+14085026736"
//                 className="text-white no-underline transition-colors duration-300 hover:text-[rgb(25,132,255)]"
//               >
//                 (+1) 408-502-6736
//               </a>
//             </p>
//           </div>
//         </div>
//         <div className="border-t border-[rgba(255,255,255,0.1)] pt-5 text-sm  text-center">
//           <p>© 2022 FARGOWIZ LTD COMPANY. All rights reserved.</p>
//         </div>
//       </footer>
//     );
// };


import Image from "next/image";
import logo from "../../public/assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer
      id="footer"
      className="bg-[rgb(18,18,51)] text-white text-sm sm:pl-20 pl-10 py-10 px-5"
      style={{
        backgroundImage: `url("/assets/background1.jpg")`,
      }}
    >
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-5">
        {/* Logo and Description */}
        <div className="flex flex-col items-start  sm:text-center">
          <div className="w-[100px] h-[26px] mb-5">
            <Image
              alt="Company Logo"
              src={logo}
              width={100}
              height={26}
              className="object-cover object-center w-full h-full"
            />
          </div>
          <p className="leading-relaxed text-left">
            FargoWiz Ltd Company is a PA, US-based software development and consulting company. We specialize in custom software development with cutting-edge technology and platforms.
          </p>
        </div>

        {/* Reach Us */}
        <div className="sm:text-center">
          <h3 className="text-sm font-bold mb-5">REACH US</h3>
          <ul className=" text-start sm:pl-20 space-y-1">
            <li>FARGOWIZ LTD COMPANY</li>
            <li>606 Liberty Avenue,</li>
            <li>3rd Floor,</li>
            <li>Suite #107 Pittsburgh,</li>
            <li>PA 15222</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="sm:text-center">
          <h3 className="text-sm font-bold mb-5">CONTACT INFO</h3>
          <p className="text-start sm:pl-20  mb-2.5">
            <a
              href="mailto:contact@fargowiz.com"
              className="hover:underline  transition-colors duration-300 hover:text-[rgb(25,132,255)]"
            >
              contact@fargowiz.com
            </a>
          </p>
          <p className="text-start sm:pl-20">
            <a
              href="tel:+14085026736"
              className="no-underline transition-colors  duration-300 hover:text-[rgb(25,132,255)]"
            >
              (+1) 408-502-6736
            </a>
          </p>
        </div>
      </div>

      {/* Social Media Icons */}
      <div className="flex justify-center sm:justify-start space-x-6 mt-8">
        <a
          href="https://www.facebook.com/YourPage"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-blue-500 transition-colors duration-300"
        >
          <FontAwesomeIcon icon={faFacebookF} size="xl" />
        </a>
        <a
          href="https://twitter.com/YourProfile"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-blue-400 transition-colors duration-300"
        >
          <FontAwesomeIcon icon={faTwitter} size="xl" />
        </a>
        <a
          href="https://www.linkedin.com/in/YourProfile"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-blue-700 transition-colors duration-300"
        >
          <FontAwesomeIcon icon={faLinkedinIn} size="xl" />
        </a>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-[rgba(255,255,255,0.1)] pt-5 text-sm text-center mt-8">
        <p>© 2022 FARGOWIZ LTD COMPANY. All rights reserved.</p>
      </div>
    </footer>
  );
}
