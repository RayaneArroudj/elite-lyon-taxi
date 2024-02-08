import lyon6 from "../assets/lyon4.jpg";

const AboutUs = () => {
  return (
    <div
      className="w-full min-h-screen  bg-cover bg-center relative"
      style={{ backgroundImage: `url(${lyon6})` }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="absolute inset-0 flex   text-white">
        <div className="flex flex-col items-center mt-20  ">
          <h1 className="text-4xl font-bold mb-4">Elite Lyon Taxi</h1>
          <p className="text-lg w-1/2 text-center">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus distinctio id, voluptates commodi temporibus dicta
            recusandae praesentium magni repudiandae dolorem debitis, eius,
            sapiente ipsa nulla nisi? Quae nisi corporis repudiandae. Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Repudiandae vero
            minus amet harum quod enim pariatur itaque minima natus praesentium
            saepe, voluptatibus blanditiis similique ducimus ipsa alias
            reprehenderit. Laboriosam, praesentium!
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
