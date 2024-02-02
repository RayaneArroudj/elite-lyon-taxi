import lyon4 from "../assets/lyon4.jpg";

const AboutUs = () => {
  return (
    <div
      className="w-full min-h-screen  bg-cover bg-center relative"
      style={{ backgroundImage: `url(${lyon4})` }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="absolute inset-0 flex items-center  text-white">
        <div className="mb-72 flex flex-col items-center ">
          <h1 className="text-4xl font-bold mb-4">Elite Lyon Taxi</h1>
          <p className="text-lg w-1/2 text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea qui
            expedita cum quis! Molestiae dolores vero exercitationem odit
            voluptatibus totam illum quae enim corrupti maiores voluptatem nemo
            tempora, magnam laborum. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Ea qui expedita cum quis! Molestiae dolores vero
            exercitationem odit voluptatibus totam illum quae enim corrupti
            maiores voluptatem nemo tempora, magnam laborum. Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Ea qui expedita cum quis!
            Molestiae dolores vero exercitationem odit voluptatibus totam illum
            quae enim corrupti maiores voluptatem nemo tempora, magnam laborum.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
