import { useForm } from "react-hook-form";

const FromReservation = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  console.log(watch("example")); // watch input value by passing the name of it
  return (
    <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      <div>
        <label>Nom</label>
        <input placeholder="Nom" {...register("name", { required: true })} />
      </div>
      <div>
        <label>Prénom</label>
        <input
          placeholder="Prénom"
          {...register("firstName", { required: true })}
        />
      </div>
      {/* include validation with required or other standard HTML validation rules */}
      <div>
        <label placeholder="email">Email</label>
        <input placeholder="email" {...register("email", { required: true })} />
      </div>
      <div>
        <label placeholder="Adresse de départ">Adresse de départ</label>
        <input
          placeholder="Adresse de départ"
          {...register("departureAdress", { required: true })}
        />
      </div>
      <div>
        <label placeholder="Adresse d'arrivée">Adresse darrivée</label>
        <input
          placeholder="Adresse d'arrivée"
          {...register("destinationAdress", { required: true })}
        />
      </div>

      {/* errors will return when field validation fails  */}
      {errors.exampleRequired && <span>This field is required</span>}

      <input type="submit" />
    </form>
  );
};

export default FromReservation;
