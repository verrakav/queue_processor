import "./App.css";
import {useState} from "react";
import {PlayersProvider, usePlayers} from "./Context/Players";
import playersMale from "../dummies/dummy1";

export default function App() {
  // NOTE 4 for dev | manages the number of courts
  const [number, setNumber] = useState(4);
  // NOTE true for dev | manages the initial court render (supposed to be used once)
  const [showCourts, setShowCourts] = useState(true);

  const handleReset = () => {
    setNumber(0);
    setShowCourts(false);
  };

  return (
    <PlayersProvider>
      <div className="container">
        <CourtForm
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
    </PlayersProvider>
  );
}

function CourtForm({number, setNumber, showCourts, setShowCourts}) {
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

function Courts({number, showCourts}) {
  const [selectedCourt, setSelectedCourt] = useState(null);
  const [queues, setQueues] = useState(Array(number).fill([]));
  // const [queueNumber, setQueueNumber] = useState(null);
  // const [queueContent, setQueueContent] = useState([]);
  /*a queue is an arr of obj: 
  [
    {queueNumber: 1, queueContent: [{name: 'Jo'...}, {name: 'Mike'}]},
    {queueNumber: 2, queueContent: [{name: 'Phil'}, {name: 'Bart'}]}
  ]
  
    // const handleXperiment = el => {
    //   setQueue(prevQueue => [...prevQueue, {queueNumber: el, queueContent: "hi"}]);
    // };
  */
  // const handleQueueNumber = idx => {
  //   setQueueNumber(idx);
  // };
  // const handleQueueContent = queueNumber => {
  //   setQueueContent(prev => [...prev, players]);
  // };
  // accessing players context
  // const {players} = usePlayers();
  const players = playersMale;

  // NOTE:
  const handleAssignPlayers = idx => {
    setQueues(prev => {
      const upadtedQueues = [...prev];
      const newPair = players.slice(idx, idx + 2);
      upadtedQueues[idx] = [...upadtedQueues[idx], ...newPair];
      return upadtedQueues;
    });
  };
  const handleNextPair = idx => {
    setQueues(prev => {
      const updatedQueues = [...prev];
      updatedQueues[idx].shift();
      players.shift();
      return updatedQueues;
    });
  };
  // generates arr to render courts
  const myArray = Array.from({length: number}, (_, idx) => idx + 1);

  return (
    <>
      {showCourts && number > 0 && (
        <div className="courts">
          {myArray.map((el, idx) => {
            return (
              <Court className={"place-item"} key={idx}>
                court num {el}
                <p>
                  {queues[idx] && queues[idx].length > 0
                    ? queues[idx].map(player => player.name).join(", ")
                    : "None assigned"}
                </p>
                <Button
                  idx={idx}
                  onClick={() => {
                    setSelectedCourt(idx);
                    handleAssignPlayers(idx);
                  }}
                  className="btn-next">
                  set players
                </Button>
                <Button
                  idx={idx}
                  onClick={() => handleNextPair(idx)}
                  className="btn-next">
                  next pair
                </Button>
              </Court>
            );
          })}
        </div>
      )}
      {/* useEffect to show it correctly? */}
      {/* {number <= 0 && <ErrorMessage />} */}
    </>
  );
}

function PlayersContainer() {
  //keeps track of all players yet to play
  const {players, dispatch} = usePlayers();
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
function Court({children, className}) {
  return <div className={className}>{children}</div>;
}
