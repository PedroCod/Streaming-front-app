import "./CadFilme.scss";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function CadFilme() {
  
  const navigate = useNavigate();

  const hadleSubmit = async (ev) => {

    ev.preventDefault()
    
    const title = ev.target.title.value;
    const year = ev.target.year.value;
    const cover = ev.target.cover.value;
    const resume = ev.target.resume.value;
    const cast = ev.target.cast.value;
    const genres = ev.target.genres.value;

    const movie = {
      title: title,
      year: year,
      cover: cover,
      resume: resume,
      cast: cast,
      genres: genres,
    }

    await axios.post('/movie/create', movie).then((response) => {
      if(response === 201){
        alert('Filme Cadastrado com sucesso.');
         navigate('/')
      }else if(response ===401){
        alert('Usuario Não esta Logado.')
      }else{
        alert('Erro ao cadastrar.')
      }
    })
  
  }
  
  return (
    <div className="cadfilm">
      <div className="cardcadfilm">
        <form onSubmit={hadleSubmit} className="cardcadfilm__Form">
          <div className="cardcadfilm__Form__item">
            <label htmlFor="name">Title:</label>
            <input
              type="text"
              name="title"
              id="title"
              placeholder="enter movie title"
              required
            />
          </div>
          <div className="cardcadfilm__Form__item">
            <label htmlFor="year">Year:</label>
            <input
              type="number"
              name="year"
              id="year"
              placeholder="enter create year"
              required
            />
          </div>
          <div className="cardcadfilm__Form__item">
            <label htmlFor="cover">Cover:</label>
            <input
              type="text"
              name="cover"
              id="cover"
              placeholder="enter movie cover"
              required
            />
          </div>
          <div className="cardcadfilm__Form__item">
            <label htmlFor="resume">Resume:</label>
            <input
              type="text"
              name="resume"
              id="resume"
              placeholder="enter movie resume"
              required
            />
          </div>
          <div className="cardcadfilm__Form__item">
            <label htmlFor="cast">Casts:</label>
            <input
              type="text"
              name="cast"
              id="cast"
              placeholder="Enter cast of movie"
              required
            />
          </div>
          <div className="cardcadfilm__Form__item">
            <label htmlFor="genres">Genres:</label>
            <input
              type="text"
              name="genres"
              id="genres"
              placeholder="insert movie genres"
              required
            />
          </div>
          <div className="cardcadfilm__Form__Button">
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
