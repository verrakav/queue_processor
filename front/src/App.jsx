import "./App.css";
import {useState} from "react";

export default function App() {
  const [number, setNumber] = useState("");
  const [isPlaceActive, setIsPlaceActive] = useState(false);

  return (
    <div className="container">
      <NumberInput
        number={number}
        setNumber={setNumber}
        isPlaceActive={isPlaceActive}
        setIsPlaceActive={setIsPlaceActive}
      />
      <Place number={number} isPlaceActive={isPlaceActive} />
    </div>
  );
}

function NumberInput({number, setNumber, isPlaceActive, setIsPlaceActive}) {
  const handleSubmit = e => {
    e.preventDefault();
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
    </div>
  );
}

function Button({children, className, onClick}) {
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
}

function Place({number, isPlaceActive}) {
  //make arr with length of the input number
  const myArray = Array.from({length: number}, (_, idx) => idx + 1);

  return (
    <div>
      {isPlaceActive > 0 && (
        <ul className="places">
          {myArray.map((el, idx) => {
            return (
              <div className="place-item" key={idx}>
                Ima place nummer {el}
              </div>
            );
          })}
        </ul>
      )}
    </div>
  );
}
