import playersMale from "../dummies/dummy1";
import "./App.css";
import {useState, useReducer} from "react";

export default function App() {
  // NOTE 4 for dev | manages the number of courts
  const [number, setNumber] = useState(4);
  // NOTE true for dev | manages the initial court render (supposed to be used once)
  const [showCourts, setShowCourts] = useState(true);
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
        <Courts number={number} showCourts={showCourts} />
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

//NOTE: reducer setup
const initialState = [];
const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_PLAYER":
      return [...state, {...action.payload, id: state.length + 1}];
    default:
      return new Error("Non-existent action type");
  }
};

function PlayersContainer() {
  //keeps track of players yet to play
  const [players, dispatch] = useReducer(reducer, initialState);
  const [player, setPlayer] = useState({
    name: "",
    category: "",
    phoneNumber: ""
  });

  const handleChange = e => {
    setPlayer({...player, [e.target.name]: e.target.value});
  };

  const handlePlayerSubmit = e => {
    e.preventDefault();
    dispatch({type: "ADD_PLAYER", payload: player});
    setPlayer({name: "", category: "", phoneNumber: ""});
    // console.log(players);
  };

  return (
    <>
      <div className="players-container">
        {/* form to get players */}
        {/* NOTE: extract into a separate comp? NewPlayerForm*/}
        <form className="form-new-player" onSubmit={handlePlayerSubmit}>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={player.name}
            onChange={handleChange}
          />

          <label>Category</label>
          <input
            type="text"
            name="category"
            value={player.category}
            onChange={handleChange}
          />

          <label>Phone Number</label>
          <input
            type="text"
            name="phoneNumber"
            value={player.phoneNumber}
            onChange={handleChange}
          />
          <Button className={"btn-generate"}>Add player!</Button>
        </form>
        {/* show players next to the form */}
        {/* NOTE: extract into a separate comp? PlayersList*/}
        <ul>
          {players.map(player => {
            return (
              <li className="player" key={player.id}>
                {player.name}
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
