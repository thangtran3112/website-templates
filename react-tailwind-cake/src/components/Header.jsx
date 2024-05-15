import { useEffect, useState } from "react";
import { BsFacebook, BsInstagram, BsList, BsTwitterX } from "react-icons/bs";
import { Link } from "react-scroll";

/*
 * Header component responsible for displaying navigation links and social media icons.
 * @param {function} onToggleMenu Function to toggle the mobile menu.
 */
export const Header = ({ onToggleMenu }) => {
  const [isSticky, setSticky] = useState(false);

  // Function to handle scroll events and determine whether the header should be sticky.
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  useEffect(() => {
    // Add event listener for scroll when the component mounts.
    window.addEventListener("scroll", handleScroll);
    return () => {
      // Remove event listener when the component unmounts to avoid memory leaks.
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`${isSticky ? "sticky top-0 z-40 backdrop-blur" : ""} flex h-20 border-b border-gray-200 bg-white/70 py-2 transition-all duration-300 hover:bg-white`}
    >
      <div className="container mx-auto flex items-center justify-between gap-2 px-4 xs:px-8">
        <figure className="flex h-10 items-center gap-2">
          <img className="h-full" src="./img/logo.png" alt="logo" />
          <figcaption className="font-lobster text-xl">Dulzura</figcaption>
        </figure>
        <nav className="nav hidden lg:flex">
          <ul className="flex gap-10">
            <li>
              <Link
                className="relative cursor-pointer font-bold after:absolute after:-bottom-[5px] after:left-0 after:right-0 after:h-1 after:w-full after:origin-center after:scale-x-0 after:bg-primary-300 after:text-shuttle-gray-900 after:transition-transform after:duration-200 after:content-[''] hover:after:scale-x-100"
                activeClass="active"
                to="intro"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className="relative cursor-pointer font-bold after:absolute after:-bottom-[5px] after:left-0 after:right-0 after:h-1 after:w-full after:origin-center after:scale-x-0 after:bg-primary-300 after:text-shuttle-gray-900 after:transition-transform after:duration-200 after:content-[''] hover:after:scale-x-100"
                activeClass="active"
                to="services"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                className="relative cursor-pointer font-bold after:absolute after:-bottom-[5px] after:left-0 after:right-0 after:h-1 after:w-full after:origin-center after:scale-x-0 after:bg-primary-300 after:text-shuttle-gray-900 after:transition-transform after:duration-200 after:content-[''] hover:after:scale-x-100"
                activeClass="active"
                to="products"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                className="relative cursor-pointer font-bold after:absolute after:-bottom-[5px] after:left-0 after:right-0 after:h-1 after:w-full after:origin-center after:scale-x-0 after:bg-primary-300 after:text-shuttle-gray-900 after:transition-transform after:duration-200 after:content-[''] hover:after:scale-x-100"
                activeClass="active"
                to="team"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                The Team
              </Link>
            </li>
            <li>
              <Link
                className="relative cursor-pointer font-bold after:absolute after:-bottom-[5px] after:left-0 after:right-0 after:h-1 after:w-full after:origin-center after:scale-x-0 after:bg-primary-300 after:text-shuttle-gray-900 after:transition-transform after:duration-200 after:content-[''] hover:after:scale-x-100"
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                className="relative cursor-pointer font-bold after:absolute after:-bottom-[5px] after:left-0 after:right-0 after:h-1 after:w-full after:origin-center after:scale-x-0 after:bg-primary-300 after:text-shuttle-gray-900 after:transition-transform after:duration-200 after:content-[''] hover:after:scale-x-100"
                activeClass="active"
                to="testimonials"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                Testimonials
              </Link>
            </li>
            <li>
              <Link
                className="relative cursor-pointer font-bold after:absolute after:-bottom-[5px] after:left-0 after:right-0 after:h-1 after:w-full after:origin-center after:scale-x-0 after:bg-primary-300 after:text-shuttle-gray-900 after:transition-transform after:duration-200 after:content-[''] hover:after:scale-x-100"
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        <div className="hidden items-center gap-5 lg:flex">
          <a
            className="text-slate-500 transition-all duration-300 hover:text-primary-400"
            href="#"
          >
            <BsFacebook className="text-lg" />
          </a>
          <a
            className="text-slate-500 transition-all duration-300 hover:text-primary-400"
            href="#"
          >
            <BsTwitterX className="text-lg" />
          </a>
          <a
            className="text-slate-500 transition-all duration-300 hover:text-primary-400"
            href="#"
          >
            <BsInstagram className="text-lg" />
          </a>
        </div>
        <button
          className="cursor-pointer hover:text-primary-400 lg:hidden"
          onClick={onToggleMenu}
        >
          <BsList className="text-3xl" />
        </button>
      </div>
    </header>
  );
};
