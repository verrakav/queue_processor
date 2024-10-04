import Button from "./Button";

export default function CourtForm({number, setNumber, showCourts, setShowCourts}) {
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
