import Button from "./Button";
import {useState} from "react";

export default function NewPlayerForm({dispatch}) {
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
    <form className="form-new-player" onSubmit={handlePlayerSubmit}>
      <label>Name</label>
      <input type="text" name="name" value={player.name} onChange={handleChange} />

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
  );
}
