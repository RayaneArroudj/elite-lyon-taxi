import { useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const Nav = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
    if (!click) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  };

  const closeMenu = () => {
    setClick(false);
    document.body.classList.remove("overflow-hidden");
  };

  const content = (
    <>
      <div className="lg:hidden block fixed top-14 w-full left-0 bg-slate-800 transition z-50">
        <ul className="text-center text-xl p-20">
          <Link spy={true} smooth={true} to="/">
            <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">
              Acceuil
            </li>
          </Link>
          <Link
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            to="aboutUs"
            onClick={closeMenu}
          >
            <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">
              Qui sommes-nous
            </li>
          </Link>
          <Link
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            to="services"
            onClick={closeMenu}
          >
            <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">
              Nos services
            </li>
          </Link>
          <Link
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            to="formReservation"
            onClick={closeMenu}
          >
            <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">
              Devis / réservations
            </li>
          </Link>
        </ul>
      </div>
    </>
  );
  return (
    <nav className="bg-slate-800">
      <div className="h-10vh flex justify-between z-50 text-white lg:py-5 px-20 py-4 ">
        <div className="flex items-center flex-1 ">
          <span className="text-3xl1 font-bold">Logo</span>
        </div>
        <div className="lg:flex md:flex lg:flex-1 items center justify-end font-normal hidden">
          <div className="flex-10">
            <ul className="flex gap-10 mr-16 text-[15px]">
              <Link
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                to="aboutUs"
                onClick={closeMenu}
              >
                <li className="hover:text-fuchsia-600 transition border-b2 border-slate-800 hover:border-fuchsia-600 cursor-pointer">
                  Acceuil
                </li>
              </Link>
              <Link
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                to="services"
                onClick={closeMenu}
              >
                <li className="hover:text-fuchsia-600 transition border-b2 border-slate-800 hover:border-fuchsia-600 cursor-pointer">
                  Qui sommes-nous
                </li>
              </Link>
              <Link
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                to="formReservation"
                onClick={closeMenu}
              >
                <li className="hover:text-fuchsia-600 transition border-b2 border-slate-800 hover:border-fuchsia-600 cursor-pointer">
                  Nos services
                </li>
              </Link>
              <Link
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                to="formReservation"
                onClick={closeMenu}
              >
                <li className="hover:text-fuchsia-600 transition border-b2 border-slate-800 hover:border-fuchsia-600 cursor-pointer">
                  Devis / réservations
                </li>
              </Link>
            </ul>
          </div>
        </div>
        <div>{click && content}</div>
        <button className="block md:hidden transition" onClick={handleClick}>
          {click ? <FaTimes /> : <CiMenuFries />}
        </button>
      </div>
    </nav>
  );
};

export default Nav;
