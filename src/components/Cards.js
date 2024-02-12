import "./Cards.css";
import Card from "./Card";

export default function Cards({ data }) {
  return (
    <div className="card-container">
      {data?.map((data) => (
        <Card key={data.id} data={data} />
      ))}
    </div>
  );
}
