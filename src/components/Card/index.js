import { useNavigate } from "react-router-dom";
import "./Card.scss";

export default function Card(props) {
  const navigate = useNavigate();
  const goToView = () => {
    navigate(`/film/${props.id}`);
  };

  return (
    <div className="card" onClick={goToView}>
      <img src={props.image} alt={props.name} />
    </div>
  );
}
