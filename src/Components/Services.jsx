import { FaBriefcaseMedical, FaBusinessTime, FaTaxi } from "react-icons/fa";
import { IoIosArrowDropright } from "react-icons/io";

const Services = () => {
  return (
    <ul
      className="min-h-72 lg:flex lg:flex-row lg:justify-center lg:gap-10 sm:flex sm:justify-center sm:gap-6 w-full flex flex-col items-center gap-10 bg-zinc-300"
      id="services"
    >
      <li className="w-80 bg-slate-800 text-center border-solid border-2 border-sky-500 text-white px-1 py-2.5">
        <div className="flex items-center justify-center gap-5">
          <FaTaxi />
          Transport Privé
        </div>
        <ul className="mt-1">
          <li className="flex items-center gap-5">
            <IoIosArrowDropright className="justify-start" />
            <div className="">Vos trajets privés quand vous voulez</div>
          </li>
          <li className="flex items-center gap-5">
            <IoIosArrowDropright className="justify-start" />
            <div className="self-center">Tansports privés réguliers</div>
          </li>
        </ul>
      </li>
      <li className="w-80 bg-slate-800 text-center border-solid border-2 border-sky-500 text-white px-1 py-2.5">
        <div className="flex items-center justify-center gap-5">
          <FaBusinessTime />
          Transport professionnel
        </div>
        <ul className="mt-1">
          <li className="flex items-center gap-5">
            <IoIosArrowDropright />
            <div>Tous vos trajets professionnels</div>
          </li>
          <li className="flex items-center gap-5">
            <IoIosArrowDropright /> Tansports aéroport
          </li>
        </ul>
      </li>
      <li className="w-80 bg-slate-800 text-center border-solid border-2 border-sky-500 text-white px-1 py-2.5">
        <div className="flex items-center justify-center gap-5">
          <FaBriefcaseMedical />
          Transport Médical
        </div>
        <ul className="mt-1">
          <li className="flex items-center gap-5">
            <IoIosArrowDropright />
            Tous nos taxis sont conventionnés
          </li>
          <li className="flex items-center gap-5">
            <IoIosArrowDropright />
            Tansports médicaux réguliers ou non
          </li>
        </ul>
      </li>
    </ul>
  );
};

export default Services;
