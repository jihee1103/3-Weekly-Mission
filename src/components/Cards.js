import "./Cards.css";
import Card from "./Card";

import { getFolder } from "../api";
import useGetFolderAsync from "../hooks/useGetFolderAsync";

export default function Cards() {
  const folder = useGetFolderAsync(getFolder);

  return (
    <div className="card-container">
      {folder?.links.map((link) => (
        <Card key={link.id} link={link}></Card>
      ))}
    </div>
  );
}
