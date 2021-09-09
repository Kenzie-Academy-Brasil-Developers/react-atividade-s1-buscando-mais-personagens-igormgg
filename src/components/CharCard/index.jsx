import "./styles.css";

const CharCard = ({ character: { name, image, status } }) => {
  return (
    <div className="card">
      {status === "Alive" ? (
        <div className="card__alive">
          <p className="card__name"> {name} </p>
          <p> {status} </p>
          <img src={image} alt={name} />
        </div>
      ) : (
        <div className="card__dead">
          <p className="card__name"> {name} </p>
          <p> {status} </p>
          <img src={image} alt={name} />
        </div>
      )}
    </div>
  );
};

export default CharCard;
