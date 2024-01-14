import "./Cards.css";
import Card from "./Card";
import useGetFolderAsync from "../hooks/useGetFolderAsync";

export default function Cards() {
  const data = useGetFolderAsync();

  return (
    <div className="card-container">
      {data?.links?.map((data) => (
        <Card key={data.id} data={data} />
      ))}
    </div>
  );
}
