import { useEffect, useRef } from "react";
import { useForm } from "../Hooks/useForm";

export const FormularioComponent = () => {
  const focusRef = useRef();
  console.log(focusRef);
  /*EL initialForm lo paso por el Hook useForm es un Hook propio el cual el initialForm pasa vacio
  para despues por teclado igresa datos.
  */
  const initialForm = {
    userName: "",
    email: "",
    password: "",
  };
  const { formState, userName, email, password, onInputChange } =
    useForm(initialForm);
  const onSubmit = (event) => {
    event.preventDefault();
    console.log(formState);
  };
  useEffect(() => {
    focusRef.current.focus();
  }, []);

  return (
    <form onSubmit={onSubmit}>
      <div className="mb-3">
        <label htmlFor="userName" className="form-label">
          User Name:
        </label>
        <input
          ref={focusRef}
          type="text"
          className="form-control"
          name="userName"
          aria-describedby="emailHelp"
          placeholder="Ingresa tu usuario"
          value={userName}
          onChange={onInputChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email address:
        </label>
        <input
          type="email"
          className="form-control"
          name="email"
          aria-describedby="emailHelp"
          placeholder="Ingresa tu correo"
          value={email}
          onChange={onInputChange}
        />
        <div id="emailHelp" className="form-text"></div>
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">
          Password:
        </label>
        <input
          type="password"
          className="form-control"
          name="password"
          placeholder="Ingresa tu ontraseña"
          value={password}
          onChange={onInputChange}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Registrar
      </button>
    </form>
  );
};
