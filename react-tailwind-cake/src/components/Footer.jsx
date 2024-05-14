import {
  BsEnvelope,
  BsGeoAlt,
  BsTelephone,
  BsFacebook,
  BsInstagram,
  BsTwitterX,
} from "react-icons/bs";
import { curretYear } from "../helpers";

export const Footer = () => {
  return (
    <footer className="bg-[#f1ecec]">
      <div className="container mx-auto grid grid-cols-12 gap-2 px-4 py-20 xs:px-8">
        <div className="col-span-12 sm:col-span-6 lg:col-span-4">
          <figure className="flex h-20 items-center gap-2 pb-6">
            <img className="h-full" src="./img/logo.png" alt="logo" />
            <figcaption className="font-lobster text-2xl">Dulzura</figcaption>
          </figure>
          <ul>
            <li className="flex items-center gap-[10px] py-2">
              <BsEnvelope className="text-primary-300 text-2xl" />
              <a className="break-all" href="#">
                dulzura@example.com
              </a>
            </li>
            <li className="flex items-center gap-[10px] py-2">
              <BsTelephone className="text-primary-300 text-2xl" />
              <a className="break-all" href="#">
                (+54) 2284 - 123456789
              </a>
            </li>
            <li className="flex items-center gap-[10px] py-2">
              <BsGeoAlt className="text-primary-300 text-2xl" />
              <p className="break-all">Colón 1234, Olavarría</p>
            </li>
          </ul>
        </div>
        <div className="col-span-12 py-5 sm:col-span-6 sm:py-0 lg:col-span-4">
          <span className="text-primary-300 mb-5 block font-lobster text-xl">
            Opening Hours
          </span>
          <div className="flex flex-col gap-5">
            <div className="flex gap-10">
              <span className="text-shuttle-gray-900 font-bold">Mon - Fri</span>
              <div>
                <span className="block">8:00am - 11:30pm</span>
                <span className="block">16:00pm - 20.30pm</span>
              </div>
            </div>
            <div className="flex gap-10">
              <span className="text-shuttle-gray-900 font-bold">Saturday</span>
              <span>8:00am - 11:30pm</span>
            </div>
          </div>
        </div>
        <div className="col-span-12 lg:col-span-4">
          <span className="text-primary-300 mb-5 block font-lobster text-xl">
            Newsletter
          </span>
          <form>
            <div className="flex">
              <input
                className="focus:border-primary-300 w-full rounded-l-lg border-2 border-r-0 border-slate-200 pl-2 outline-none transition-all duration-300 focus:ring-0"
                type="text"
                placeholder="Your email address"
              />
              <button
                className="bg-primary-300 hover:bg-primary-400 rounded-r-lg p-1 px-2 font-medium text-white transition-all duration-300"
                type="submit"
              >
                <span>Suscribe</span>
              </button>
            </div>
          </form>
          <div className="flex gap-2 py-2">
            <div className="hover:bg-primary-300 h-8 w-8 rounded-full bg-[#e3d7d7] transition-all duration-300">
              <a className="flex h-8 w-8 items-center justify-center" href="#">
                <BsFacebook className="text-white" />
              </a>
            </div>
            <div className="hover:bg-primary-300 h-8 w-8 rounded-full bg-[#e3d7d7] transition-all duration-300">
              <a className="flex h-8 w-8 items-center justify-center" href="#">
                <BsTwitterX className="text-white" />
              </a>
            </div>
            <div className="hover:bg-primary-300 h-8 w-8 rounded-full bg-[#e3d7d7] transition-all duration-300">
              <a className="flex h-8 w-8 items-center justify-center" href="#">
                <BsInstagram className="text-white" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="pb-5">
        <p className="text-center text-sm">
          © {curretYear} Example. All rights reserved
        </p>
      </div>
    </footer>
  );
};
