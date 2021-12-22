import './Navbar.scss';

export default function Navbar(props) {
  return (
    <div className="navbar">
      <a className="navbar__logo" href='/'>
      <img
       src={props.image} height={props.altura} width={props.largura} alt=''/>
      Films Finder
      </a>
      <ul className="navbar__links">
        <a className="navbar__links__items" href="/caduser">
          <li>Cadastrar</li>
        </a>
        <a className="navbar__links__items" href="/mylist">
          <li>Minha Lista</li>
        </a>
        <a className="navbar__links__items" href="/profile">
          <li>Perfil</li>
        </a>
        <a className="navbar__links__items" href="/login">
          <li>Login</li>
        </a>
      </ul>
    </div>
  );
}
