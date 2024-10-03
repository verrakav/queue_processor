import playersMale from "../dummies/dummy1";
import "./App.css";
import {useState, useReducer} from "react";

const initialState = playersMale;
const reducer = (state, action) => {
  switch (action) {
    case "ADD_PLAYER":
      return;
  }
};

export default function App() {
  // NOTE 4 for dev | manages the number of courts
  const [number, setNumber] = useState(4);
  // NOTE true for dev | manages the initial court render (supposed to be used once)
  const [showCourts, setShowCourts] = useState(true);
  //keeps track of players yet to play
  const [players, displatch] = useReducer(reducer, initialState);
  // const [players, setPlayers] = useState(playersMale);

  // function getPairs(playersArr) {
  //   const pairedPlayers = playersArr.reduce((acc, cur, idx) => {
  //     if (idx % 2 === 0) acc.push([cur]);
  //     else acc[acc.length - 1].push(cur);
  //   }, []);
  //   return pairedPlayers;
  // }
  const handleReset = () => {
    setNumber(0);
    setShowCourts(false);
  };

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

      <PlayersContainer />
      <Button className="btn-reset" onClick={handleReset}>
        RESET
      </Button>
    </>
  );
}

function CourtSetup({number, setNumber, showCourts, setShowCourts}) {
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
        <Button className={"btn-generate"} onClick={() => setShowCourts(!showCourts)}>
          generate
        </Button>
      </form>
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

function PlayersContainer() {
  return (
    <>
      <div className="players-container">
        {/* form to get players */}
        <form className="form-new-player">
          <label>Name</label>
          <input type="text" />

          <label>Category</label>
          <input type="text" />

          <label>Phone Number</label>
          <input type="text" />
          <Button className={"btn-generate"}>Add player!</Button>
        </form>
        {/* show players next to the form */}
        <ul>
          {playersMale.map(el => {
            return (
              <li className="player" key={el.id}>
                {el.name}
              </li>
            );
          })}
        </ul>
      </div>
    </>
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
