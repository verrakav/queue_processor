import playersMale from "../dummies/dummy1";
import "./App.css";
import {useState} from "react";

export default function App() {
  // NOTE 4 for dev | manages the number of courts
  const [number, setNumber] = useState(0);
  // NOTE true for dev | manages the initial court render (supposed to be used once)
  const [showCourts, setShowCourts] = useState(false);
  //changes the content
  const [players, setPlayers] = useState(playersMale);

  function getPairs(playersArr) {
    const pairedPlayers = playersArr.reduce((acc, cur, idx) => {
      if (idx % 2 === 0) acc.push([cur]);
      else acc[acc.length - 1].push(cur);
    }, []);
    return pairedPlayers;
  }

  return (
    <>
      <div className="container">
        <CourtSetup
          number={number}
          setNumber={setNumber}
          showCourts={showCourts}
          setShowCourts={setShowCourts}
        />
        <Courts number={number} showCourts={showCourts} players={players} />
      </div>

      <PlayersList />
    </>
  );
}

function CourtSetup({number, setNumber, showCourts, setShowCourts}) {
  const handleSubmit = e => {
    e.preventDefault();
  };

  const handleReset = () => {
    setNumber(0);
    setShowCourts(false);
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
        <Button className={"btn-generate"} onClick={() => setShowCourts(!showCourts)}>
          generate
        </Button>
      </form>
      <Button className="btn-reset" onClick={handleReset}>
        RESET
      </Button>
    </div>
  );
}
function Courts({number, showCourts, players}) {
  //need a state to track which court is selected
  const [selectedCourt, setSelectedCourt] = useState();

  // generates arr to render courts
  const myArray = Array.from({length: number}, (_, idx) => idx + 1);

  return (
    <>
      {showCourts && number > 0 && (
        <ul className="courts">
          {myArray.map((el, idx) => {
            return (
              <li className="place-item" key={idx}>
                court num {el}
                <p>{selectedCourt === idx ? players : "None assigned"}</p>
                <Button
                  idx={idx}
                  onClick={() => {
                    if (selectedCourt) setSelectedCourt(idx);
                    else setSelectedCourt(idx);
                  }}
                  className="btn-next">
                  next pair
                </Button>
              </li>
            );
          })}
        </ul>
      )}
      {/* useEffect to show it correctly? */}
      {/* {number <= 0 && <ErrorMessage />} */}
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

function ErrorMessage() {
  return <span className="error-msg">Opps, did you enter a number?</span>;
}
