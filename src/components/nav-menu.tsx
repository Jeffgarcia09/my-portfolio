import Image from "next/image";
import logo from "@/src/assets/vic.png";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRef, useState } from "react";
import { FaWindowClose } from "react-icons/fa";
import { TbBrandGithub } from "react-icons/tb";
import { SlSocialYoutube } from "react-icons/sl";
import {
  SlSocialLinkedin,
  SlSocialFacebook,
  SlSocialInstagram,
} from "react-icons/sl";

const Navbar = () => {
  const ref = useRef<string | any>("");
  const [ShowMenu, SetShowMenu] = useState(false);
  const HandleLink = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    SetShowMenu(false);
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({
      behavior: "smooth",
    });
    //update the classname
    const links = document.querySelectorAll(".nav-link");
    links.forEach((link) => {
      link.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
  };
  function HandleClick(e: any) {
    if (e.target.contains(ref.current)) {
      SetShowMenu(false);
    }
  }

  return (
    <div className="w-full shadow-navbarShadow h-14 lg:h-[10vh] sticky top-0 z-50 bg-[#223c5ecc] px-4">
      <div className="max-w-container h-full mx-auto py-1 font-titleFont flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <a href="">
            <Image className="w-9 ml-6 " src={logo} alt="logo"></Image>
          </a>
        </motion.div>
        <div className="hidden mdl:inline-flex items-center gap-11">
          <ul className="flex text-[13px] gap-7">
            <Link
              href="#home"
              onClick={HandleLink}
              className="flex items-center gap-1 font-medium text-base text-[#fff] hover:text-textGreen cursor-pointer duration-300 nav-link"
            >
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.1, delay: 0.1 }}
              >
                Home
              </motion.li>
            </Link>
            <Link
              href="#about"
              onClick={HandleLink}
              className="flex items-center gap-1 font-medium text-base text-[#fff] hover:text-textGreen cursor-pointer duration-300 nav-link"
            >
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.2, delay: 0.2 }}
              >
                About
              </motion.li>
            </Link>
            <Link
              href="#tech"
              onClick={HandleLink}
              className="flex items-center gap-1 font-medium text-base text-[#fff] hover:text-textGreen cursor-pointer duration-300 nav-link"
            >
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.3 }}
              >
                Stacks
              </motion.li>
            </Link>
            {/* <Link
              href="#experience"
              className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
            >
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.3 }}
              >
                Experience
              </motion.li>
            </Link> */}
            <Link
              href="#project"
              onClick={HandleLink}
              className="flex items-center gap-1 font-medium text-base text-[#fff] hover:text-textGreen cursor-pointer duration-300 nav-link"
            >
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.4 }}
              >
                Projects
              </motion.li>
            </Link>
            <Link
              href="#contact"
              onClick={HandleLink}
              className="flex items-center gap-1 font-medium text-base text-[#fff] hover:text-textGreen cursor-pointer duration-300 nav-link"
            >
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                Contact
              </motion.li>
            </Link>
          </ul>
          <a
            href="https://drive.google.com/file/d/1JkIcvOutDN4S-qezSEI-Oqs0sqzNJl90/view?usp=sharing"
            target="_blank"
          >
            <motion.button
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="px-8 py-2 rounded-md text-[#fff] text-base border border-white hover:bg-hoverColor duration-300"
            >
              Resume
            </motion.button>
          </a>
        </div>
        {/* hamburger icon */}
        <div
          onClick={() => SetShowMenu(true)}
          className="w-6 h-5 flex flex-col justify-between items-center mdl:hidden text-4xl text-textGreen cursor-pointer overflow-hidden group"
        >
          <span className="w-full h-[2px] bg-[#c5c3c3] inline-flex transform group-hover:translate-x-2 transition-all ease-in-out duration-300"></span>
          <span className="w-full h-[2px] bg-[#c5c3c3] inline-flex transform translate-x-3 group-hover:translate-x-0 transition-all ease-in-out duration-300"></span>
          <span className="w-full h-[2px] bg-[#c5c3c3] inline-flex transform translate-x-2 group-hover:translate-x-3 transition-all ease-in-out duration-300"></span>
        </div>
        {ShowMenu && (
          <div
            ref={(node) => (ref.current = node)}
            onClick={HandleClick}
            className="absolute md:hidden top-0 right-0 w-full h-screen bg-black bg-opacity-50 flex flex-col items-end"
          >
            <motion.div
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.1 }}
              className="w-[80%] h-full overflow-y-scroll scrollbar-none bg-[#112240] flex flex-col items-center px-4 py-10 relative"
            >
              <FaWindowClose
                onClick={() => SetShowMenu(false)}
                className="text-3xl text-[#5e5d5d] cursor-pointer hover:text-red-700 absolute top-4 right-4"
              />
              <div className="flex flex-col items-center gap-7">
                <ul className="flex flex-col text-base gap-7">
                  <Link
                    href="#home"
                    onClick={HandleLink}
                    className="flex items-center gap-1 ml-[7px] font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
                  >
                    <motion.li
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.1, delay: 0.1, ease: "easeIn" }}
                    >
                      Home
                    </motion.li>
                  </Link>
                  <Link
                    href="#about"
                    onClick={HandleLink}
                    className="flex items-center gap-1 ml-[7px] font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
                  >
                    <motion.li
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.2, delay: 0.2, ease: "easeIn" }}
                    >
                      About
                    </motion.li>
                  </Link>
                  <Link
                    href="#tech"
                    onClick={HandleLink}
                    className="flex items-center gap-1 ml-[5px] font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
                  >
                    <motion.li
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.3, delay: 0.4, ease: "easeIn" }}
                    >
                      Stacks
                    </motion.li>
                  </Link>
                  {/* <Link
              href="#experience"
              className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
            >
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.3 }}
              >
                Experience
              </motion.li>
            </Link> */}
                  <Link
                    href="#project"
                    onClick={HandleLink}
                    className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
                  >
                    <motion.li
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.4, delay: 0.4, ease: "easeIn" }}
                    >
                      Projects
                    </motion.li>
                  </Link>
                  <Link
                    href="#contact"
                    onClick={HandleLink}
                    className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
                  >
                    <motion.li
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.5, ease: "easeIn" }}
                    >
                      Contact
                    </motion.li>
                  </Link>
                </ul>
                <a
                  href="https://drive.google.com/file/d/1JkIcvOutDN4S-qezSEI-Oqs0sqzNJl90/view?usp=sharing"
                  target="_blank"
                >
                  <motion.button
                    initial={{ y: -10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="px-5 py-2 rounded-md text-textGreen text-[13px] border border-textGreen hover:bg-hoverColor duration-300"
                  >
                    Resume
                  </motion.button>
                </a>
                <div className="flex flex-row gap-4">
                  <motion.a
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.6, ease: "easeIn" }}
                    href="https://github.com/Jeffgarcia09"
                    target="_blank"
                  >
                    <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
                      <TbBrandGithub />
                    </span>
                  </motion.a>
                  <motion.a
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.7, ease: "easeIn" }}
                    href="https://www.youtube.com/channel/UCa0dRzz6uhrZf-KaXMMM2HQ"
                    target="_blank"
                  >
                    <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
                      <SlSocialYoutube />
                    </span>
                  </motion.a>
                  <motion.a
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.8, ease: "easeIn" }}
                    href="https://www.linkedin.com/in/jefferson-garcia-68a588250/"
                    target="_blank"
                  >
                    <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
                      <SlSocialLinkedin />
                    </span>
                  </motion.a>
                  <motion.a
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.9, ease: "easeIn" }}
                    href="https://www.facebook.com/m.Zenith.me"
                    target="_blank"
                  >
                    <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
                      <SlSocialFacebook />
                    </span>
                  </motion.a>
                  <motion.a
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 1, ease: "easeIn" }}
                    href="https://www.instagram.com/echiboijepp/"
                    target="_blank"
                  >
                    <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
                      <SlSocialInstagram />
                    </span>
                  </motion.a>
                </div>
                <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
                  <a
                    href="mailto:jeffersongarcia520@gmail.com"
                    className="text-indigo-500"
                  >
                    Jeffersongarcia520@gmail.com
                  </a>
                  <p className="leading-normal my-5">
                    Dinas, Zamboanga Del Sur
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
