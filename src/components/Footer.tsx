import Image from "next/image";
import logo from "../../public/assets/logo.png"

export default function Footer() {
    return(
<footer className="bg-[rgb(18,18,51)] text-white text-sm  py-12 px-5"
style={{
          backgroundImage: `url("/assets/background1.jpg")`,   
        }}
>
        <div className="max-w-[1200px] mx-auto text-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-5">
          <div>
            <div className="w-[100px] h-[26px] ml-10 mb-5 overflow-hidden">
          <Image
            alt="Company Logo"
            src={logo}
            width={100}
            height={26}
            className="object-cover object-center w-full h-full"
          />
        </div>
            <p className="leading-relaxed text-start pl-10 mb-5">
              FargoWiz Ltd Company is a PA, US-based software development and consulting company. We specialize in custom software development with cutting edge technology and platforms.
            </p>
          </div>
          <div className="px-10">
            <h3 className="text-sm font-bold mb-5 text-white">
              REACH US
            </h3>
            <ul className="text-start pl-10">
                <li>FARGOWIZ LTD COMPANY</li>
                <li>606 Liberty Avenue,</li>
                <li>3rd Floor,</li> 
                <li>Suite #107 Pittsburgh,</li>
                <li>PA 15222</li>
            </ul>
            
          </div>
          <div>
            <h3 className="text-sm font-bold mb-5 text-white">
              CONTACT INFO
            </h3>
            <p className="mb-2.5">
              <a
                href="mailto: contact@fargowiz.com"
                className="text-white hover:underline transition-colors duration-300 hover:text-[rgb(25,132,255)]"
              >
                contact@fargowiz.com
              </a>
            </p>
            <p>
              <a
                href="tel:+14085026736"
                className="text-white no-underline transition-colors duration-300 hover:text-[rgb(25,132,255)]"
              >
                (+1) 408-502-6736
              </a>
            </p>
          </div>
        </div>
        <div className="border-t border-[rgba(255,255,255,0.1)] pt-5 text-sm  text-center">
          <p>© 2022 FARGOWIZ LTD COMPANY. All rights reserved.</p>
        </div>
      </footer>
    );
};