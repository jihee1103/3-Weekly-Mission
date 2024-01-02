import "./Cards.css";
import Card from "./Card";

import noImgLogo from "../assets/no-img-logo.svg";
import { getFolders } from "../api";
import { useState, useEffect } from "react";

export default function Cards() {
  const [links, setLinks] = useState([]);

  const getFolder = async () => {
    const { folder } = await getFolders();
    const { links } = folder;

    setLinks(links);
  };

  useEffect(() => {
    getFolder();
  }, []);

  return (
    <div className="card-container">
      {links.map((link)=> <Card key={link.id} link={link} alt={noImgLogo}></Card>)}
    </div>
  );
}
