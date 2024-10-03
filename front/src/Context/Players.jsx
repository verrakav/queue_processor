import {createContext, useContext} from "react";
import {useReducer} from "react";

const PlayersContext = createContext();

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

export const PlayersProvider = ({children}) => {
  //keeps track of players yet to play
  const [players, dispatch] = useReducer(reducer, initialState);

  return (
    <PlayersContext.Provider value={{players, dispatch}}>
      {children}
    </PlayersContext.Provider>
  );
};

export const usePlayers = () => useContext(PlayersContext);
