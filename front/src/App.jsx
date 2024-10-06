import "./App.css";
//components
import Button from "./components/Button";
import CourtForm from "./components/CourtForms";
import NewPlayerForm from "./components/NewPlayerForm";
import PlayersList from "./components/PlayersList";
//hooks
import {useState} from "react";
import {PlayersProvider, usePlayers} from "./Context/Players";
//mock data
import playersMale from "../dummies/dummy1";

// Initialize players with assignedToQueue property
const playersMaleUpdated = playersMale.map(e => {
  e.assignedToQueue = false;
  return e;
});

// Initial queue setup
const initialQueues = [
  {queueNumber: 1, queueItems: []},
  {queueNumber: 2, queueItems: []},
  {queueNumber: 3, queueItems: []},
  {queueNumber: 4, queueItems: []}
];

const App = () => {
  const [queues, setQueues] = useState(initialQueues);
  const [players, setPlayers] = useState(playersMaleUpdated);

  // Function to add a player to a queue
  const addItemToQueue = (item, queueIndex) => {
    const newQueues = [...queues];
    const newPlayers = [...players];

    newPlayers[item.id - 1].assignedToQueue = true;
    newQueues[queueIndex].queueItems.push(newPlayers[item.id - 1]);

    setPlayers(newPlayers);
    setQueues(newQueues);
  };

  // Function to add all players to the queues
  const addAllToQueues = () => {
    const newQueues = [...queues];
    const totalItems = players.length;
    let queueIndex = 0;

    for (let i = 0; i < totalItems; i++) {
      if (queueIndex === newQueues.length) queueIndex = 0;
      addItemToQueue(players[i], queueIndex);
      queueIndex++;
    }
  };

  // Function to progress a queue one step
  const progressQueueOneStep = queueIndex => {
    const newQueues = [...queues];
    newQueues[queueIndex].queueItems.shift();
    setQueues(newQueues);
  };

  return (
    <div>
      <h1>Queue Management</h1>

      <div className="players-container">
        <h2>Players</h2>
        {players.map(player => (
          <div key={player.id}>
            {player.name}{" "}
            {!player.assignedToQueue && (
              <button
                onClick={() => addItemToQueue(player, 0)} // Add to first queue as an example
              >
                Add to Queue 1
              </button>
            )}
          </div>
        ))}
      </div>

      <div className="courts">
        <h2>Queues</h2>
        {queues.map((queue, index) => (
          <div key={queue.queueNumber}>
            <h3>Queue {queue.queueNumber}</h3>
            {queue.queueItems.length > 0 ? (
              <ul>
                {queue.queueItems.map((item, idx) => (
                  <li key={idx}>{item.name}</li>
                ))}
              </ul>
            ) : (
              <p>No items in queue</p>
            )}
            <button className="btn-reset" onClick={() => progressQueueOneStep(index)}>
              Progress Queue
            </button>
          </div>
        ))}
      </div>

      <button className="btn-reset" onClick={addAllToQueues}>
        Add All Players to Queues
      </button>
    </div>
  );
};

export default App;

//NOTE: MY VERSION here NOTE:
// export default function App() {
//   // NOTE 4 for dev | manages the number of courts
//   const [number, setNumber] = useState(4);
//   // NOTE true for dev | manages the initial court render (supposed to be used once)
//   const [showCourts, setShowCourts] = useState(true);

//   //NOTE: DISCONNECTED
//   // const handleReset = () => {
//   //   setNumber(0);
//   //   setShowCourts(false);
//   // };

//   return (
//     <PlayersProvider>
//       <div className="container">
//         {/*NOTE: DISCONNECTED form <CourtForm
//           number={number}
//           setNumber={setNumber}
//           showCourts={showCourts}
//           setShowCourts={setShowCourts}
//         /> */}
//         <Courts number={number} showCourts={showCourts} />
//       </div>

//       {/*/*NOTE: DISCONNECTED form <PlayersContainer />
//       <Button className="btn-reset" onClick={handleReset}>
//         RESET
//       </Button>*/}
//       <Button className={"btn-reset"}>add 1 player to the queue</Button>
//       <Button className={"btn-generate"}> add all players to the queues</Button>
//     </PlayersProvider>
//   );
// }

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
  const {players} = usePlayers();
  // const players = playersMale;

  // NOTE: DISCONNECTED || prob will be changed
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
  // generates arr to render courts || DISCONNECTED
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
                  {/* TODO: make a component for queue? */}
                  {/* {queues[idx] && queues[idx].length > 0
                    ? queues[idx].map(player => player.name).join(", ")
                    : "None assigned"} */}
                </p>
                {/*NOTE: DISCONNECTED || might get rid of it altogether
                 <Button
                  idx={idx}
                  onClick={() => {
                    setSelectedCourt(idx);
                    handleAssignPlayers(idx);
                  }}
                  className="btn-next">
                  set players
                </Button> */}
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

// NOTE: DISCONNECTED up in the <App/>
function PlayersContainer() {
  // //keeps track of all players yet to play
  const {players, dispatch} = usePlayers();

  return (
    <div className="players-container">
      <NewPlayerForm dispatch={dispatch} />
      <PlayersList players={players} />
    </div>
  );
}

function Court({children, className}) {
  return <div className={className}>{children}</div>;
}
