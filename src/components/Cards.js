import "./Cards.css";
import Card from "./Card";

import { getFolders } from "../api";
import { useState, useEffect } from "react";

export default function Cards() {
  const [links, setLinks] = useState([]);

  useEffect(() => {
    const getFolder = async () => {
      const { folder:{links} } = await getFolders();
      setLinks(links);
    };

    getFolder();
  }, []);

  return (
    <div className="card-container">
      {links.map((link)=> <Card key={link.id} link={link}></Card>)}
    </div>
  );
}
