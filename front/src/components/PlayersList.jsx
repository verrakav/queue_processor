export default function PlayersList({players}) {
  return (
    <>
      <ul>
        {players.map(player => {
          return (
            <li className="player" key={player.id}>
              {player.name}
            </li>
          );
        })}
      </ul>
    </>
  );
}
