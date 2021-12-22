import { useNavigate } from "react-router-dom";
import "./CadUser.scss";
import axios from "axios";

export default function CadUser() {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const birthdate = event.target.birthdate.value;
    const password = event.target.password.value;
    const passwordConfirmation = event.target.passwordConfirmation.value;
    const imageUrl = event.target.imageUrl.value;

    const user = {
      name: name,
      email: email,
      birthdate: birthdate,
      password: password,
      passwordConfirmation: passwordConfirmation,
      imageUrl: imageUrl,
    };

    axios.post("/user/create", user).then((response) => {
      navigate("/");
    });
  };

  return (
    <div className="caduser">
      <h1>Cadastro de usuario</h1>
      <div className="cardcad">
        <form onSubmit={handleSubmit} className="card__Form">
          <div className="cardcad__Form__item">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="enter your name"
              required
            />
          </div>
          <div className="cardcad__Form__item">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="enter your email"
              required
            />
          </div>
          <div className="cardcad__Form__item">
            <label htmlFor="birthdate">Birthdate:</label>
            <input
              type="date"
              name="birthdate"
              id="birthdate"
              placeholder="enter your birthdate"
              required
            />
          </div>
          <div className="cardcad__Form__item">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="enter your password"
              required
            />
          </div>
          <div className="cardcad__Form__item">
            <label htmlFor="passwordConfirmation">Confirm Password:</label>
            <input
              type="password"
              name="passwordConfirmation"
              id="passwordConfirmation"
              placeholder="Confirm Password"
              required
            />
          </div>
          <div className="cardcad__Form__item">
            <label htmlFor="imageUrl">Image Url:</label>
            <input
              type="text"
              name="imageUrl"
              id="imageUrl"
              placeholder="insert image url"
              required
            />
          </div>
          <div className="cardcad__Form__Button">
            <button className="Cad__Button" type="submit">
              Cadastrar
            </button>
            <button className="cancel__Button">Cancelar</button>
          </div>
        </form>
      </div>
    </div>
  );
}
