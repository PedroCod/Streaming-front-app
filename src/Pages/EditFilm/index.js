import "./Edit.scss";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function EditFilm() {
  const navigate = useNavigate();

  const { id } = useParams();
  const [film, setFilm] = useState({
      title: "",
      year: "",
      cover: "",
      resume: "",
      cast: "",
      genres: "",
  })
  useEffect(()=>{
      getFilm();
  })
  
  const getFilm = async () => {
      const request = await axios.get(`/movie/findUnique/${id}`);
      const film = await request.data;
      setFilm(film)
  }
  const handleFieldsChange = (ev) => {
      const camps = {...film};
      camps[ev.target.title] = ev.target.value
      setFilm(camps)
  }

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    await axios.patch(`/movie/update/${id}`).then((response)=> {
        if(response === 201 || 200){
          alert('Filme Atualizado com sucesso')
          navigate('/')
        } 
    })
  }
  
  return (
    <div className="cadfilm">
      <div className="cardeditfilm">
        <form onSubmit={handleSubmit} className="cardcadfilm__Form">
          <div className="cardeditfilm__Form__item">
            <label htmlFor="name">Title:</label>
            <input
              type="text"
              name="title"
              id="title"
              placeholder="enter movie title"
              value={film.title}
              onChange={handleFieldsChange}
              required
            />
          </div>
          <div className="cardeditfilm__Form__item">
            <label htmlFor="year">Year:</label>
            <input
              type="number"
              name="year"
              id="year"
              placeholder="enter create year"
              value={film.year}
              onChange={handleFieldsChange}
              required
            />
          </div>
          <div className="cardeditfilm__Form__item">
            <label htmlFor="cover">Cover:</label>
            <input
              type="text"
              name="cover"
              id="cover"
              placeholder="enter movie cover"
              value={film.cover}
              onChange={handleFieldsChange}
              required
            />
          </div>
          <div className="cardeditfilm__Form__item">
            <label htmlFor="resume">Resume:</label>
            <input
              type="text"
              name="resume"
              id="resume"
              placeholder="enter movie resume"
              value={film.resume}
              onChange={handleFieldsChange}
              required
            />
          </div>
          <div className="cardeditfilm__Form__item">
            <label htmlFor="cast">Casts:</label>
            <input
              type="text"
              name="cast"
              id="cast"
              placeholder="Enter cast of movie"
              value={film.cast}
              onChange={handleFieldsChange}
              required
            />
          </div>
          <div className="cardeditfilm__Form__item">
            <label htmlFor="genres">Genres:</label>
            <input
              type="text"
              name="genres"
              id="genres"
              placeholder="insert movie genres"
              value={film.genres}
              onChange={handleFieldsChange}
              required
            />
          </div>
          <div className="cardeditfilm__Form__Button">
            <button className="Cad__Button" type="submit">
              Editar
            </button>
            <button className="cancel__Button">Cancelar</button>
          </div>
        </form>
      </div>
    </div>
  );
}
