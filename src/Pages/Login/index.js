import axios from 'axios';
import { useState } from 'react';
import './Login.scss';

export default function Login() {

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleSubmit = event => {
    event.preventDefault();

    const login = {
      email: email,
      password: senha
    }

    axios.post('/auth/login', login)
    .then(response => {
      const token = response.data.token;
      localStorage.setItem('token', token);
    })
  }

  return (
    <div className='login'>
      <h2 className='login__title'>Login</h2>
      <form className='login__form' onSubmit={handleSubmit}>
        <input 
          type="email" 
          placeholder="Email" 
          required
          onChange={event => setEmail(event.target.value)}
        />
        <input 
          type="password" 
          placeholder="Senha" 
          required
          onChange={event => setSenha(event.target.value)}
        />
        <input type="submit" value="Login"/>
      </form>
    </div>
  )
}