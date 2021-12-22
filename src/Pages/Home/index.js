import './Home.scss';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Card from '../../components/Card'

export default function Home() {
  
  const [film, setFilm] = useState([])
  
  const [montado, setMontado] = useState(false)
  
  const getFilm = async () => {
    await axios.get('/movie/findMany')
    .then(response => {
      if(montado) {
        setFilm(response.data);
      }
    })
  }

  useEffect(() => {
    setMontado(true)
    getFilm();
  }, [montado])

  return (
    <div className='home'>
      <div className='home__title'>
      <h1>Pagina Inicial</h1>
      </div>
      <div className='home__cards'>
        {
          film.map(item => (
            <Card
              id={item.id}
              image={item.cover}
              key={item.id}
            />
          ))
        }
      </div>
    </div>
  )
}
