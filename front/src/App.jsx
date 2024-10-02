import playersMale from "../dummies/dummy1";
import "./App.css";
import {useState} from "react";

export default function App() {
  // NOTE 4 for dev
  const [number, setNumber] = useState("");
  // NOTE true for dev
  const [isPlaceActive, setIsPlaceActive] = useState(false);

  return (
    <>
      <div className="container">
        <NumberInput
          number={number}
          setNumber={setNumber}
          isPlaceActive={isPlaceActive}
          setIsPlaceActive={setIsPlaceActive}
        />
        <Court number={number} isPlaceActive={isPlaceActive} />
      </div>

      <PlayersList />
    </>
  );
}
function NumberInput({number, setNumber, isPlaceActive, setIsPlaceActive}) {
  const handleSubmit = e => {
    e.preventDefault();
  };

  const handleReset = () => {
    setNumber(0);
    setIsPlaceActive(false);
  };

  return (
    <div className="sidebar">
      <form className="form" onSubmit={handleSubmit}>
        <label>Enter number of courts</label>
        <input
          type="number"
          value={number}
          onChange={e => setNumber(e.target.value)}
        />
        <Button
          className={"btn-generate"}
          onClick={() => setIsPlaceActive(!isPlaceActive)}>
          generate
        </Button>
      </form>
      <Button className="btn-reset" onClick={handleReset}>
        RESET
      </Button>
    </div>
  );
}
function Court({number, isPlaceActive}) {
  // generates arr to render courts
  const myArray = Array.from({length: number}, (_, idx) => idx + 1);

  return (
    <>
      {isPlaceActive > 0 && (
        <ul className="courts">
          {myArray.map((el, idx) => {
            return (
              <div className="place-item" key={idx}>
                court num {el}
                <p>None assigned</p>
                <Button className="btn-next">next pair</Button>
              </div>
            );
          })}
        </ul>
      )}
    </>
  );
}

function PlayersList() {
  return (
    <ul className="players-container">
      {playersMale.map(el => {
        return (
          <li className="player" key={el.id}>
            {el.name}
          </li>
        );
      })}
    </ul>
  );
}
function Button({children, className, onClick}) {
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
}
