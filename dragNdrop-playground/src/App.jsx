import "./App.css";

const queueItems = [
  {id: 1, name: "Jo", category: "male", phoneNumber: "0495 333 222"},
  {id: 2, name: "Mike", category: "male", phoneNumber: "0495 321 123"},
  {id: 3, name: "Phil", category: "male", phoneNumber: "0455 535 321"},
  {id: 4, name: "Bart", category: "female", phoneNumber: "0465 565 623"},
  {id: 5, name: "Clive", category: "female", phoneNumber: "0444 434 341"},
  {id: 6, name: "Rick", category: "male", phoneNumber: "0455 905 900"},
  {id: 7, name: "Nick", category: "male", phoneNumber: "0475 396 099"},
  {id: 8, name: "Moe", category: "male", phoneNumber: "0434 335 654"},
  {id: 9, name: "Alan", category: "male", phoneNumber: "0484 392 201"},
  {id: 10, name: "Jack", category: "male", phoneNumber: "0465 478 512"}
];

function App() {
  const renderItems = queueItems.map(item => (
    <div className="item" key={item.id}>
      {item.name}
    </div>
  ));
  return <div className="container">{renderItems}</div>;
}

export default App;
