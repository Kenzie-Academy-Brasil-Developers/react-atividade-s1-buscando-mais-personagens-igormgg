import CharCard from "../CharCard";
import "./styles.css";

const Characters = ({ CharacterList }) => {
  return (
    <div className="mainBox">
      {CharacterList.map((character) => (
        <CharCard key={character.id} character={character} />
      ))}
    </div>
  );
};

export default Characters;
