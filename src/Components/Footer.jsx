import { IoIosArrowDropright } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="relative text-white">
      <div className="absolute top-0 left-0 w-full overflow-hidden  bg-slate-800 ">
        {" "}
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="relative bloc fill-zinc-300"
          ></path>
        </svg>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 p-20 gap-15">
          <div className="flex flex-col gap-5">
            <h2 className="text-3xl text-pink-500 uppercase">Contactez-nous</h2>
            <p>Vous pouvez nous contacter par mail ou téléphone:</p>
            <ul>
              <li className="my-4 list-none flex items-center gap-5 hover:text-fuchsia-600 cursor-pointer">
                <IoIosArrowDropright />
                Mail : monmail@mail.com
              </li>
              <li className="my-4 list-none flex items-center gap-5 hover:text-fuchsia-600 cursor-pointer">
                <IoIosArrowDropright />
                Téléphone: 0102030405
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-5">
            <h2 className="text-3xl text-pink-500">Menu</h2>
            <ul>
              <li className="my-4 list-none flex items-center gap-5 hover:border-fuchsia-600  hover:text-fuchsia-600 cursor-pointer">
                <IoIosArrowDropright />
                Acceuil
              </li>
              <li className="my-4 list-none flex items-center gap-5 hover:text-fuchsia-600 cursor-pointer">
                <IoIosArrowDropright />
                Qui sommes-nous
              </li>
              <li className="my-4 list-none flex items-center gap-5 hover:text-fuchsia-600 cursor-pointer">
                <IoIosArrowDropright />
                Nos services
              </li>
              <li className="my-4 list-none flex items-center gap-5 hover:text-fuchsia-600 cursor-pointer">
                <IoIosArrowDropright />
                Mentions légales et Politique de confidentialité
              </li>
              <li className="my-4 list-none flex items-center gap-5 hover:text-fuchsia-600 cursor-pointer">
                <IoIosArrowDropright />
                Fiche Google My Business
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
