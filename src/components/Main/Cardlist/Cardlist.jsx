import { useEffect, useState } from "react";
import Card from "../Card/Card";
import { getFolderInfo } from "../../../utils/api";
import "./Cardlist.css";

function Cardlist() {
  const [links, setLinks] = useState([]);

  useEffect(() => {
    const fetchFolderDate = async () => {
      try {
        const data = await getFolderInfo();

        setLinks(data.folder.links);
      } catch (error) {
        console.log(error);
      }
    };
    fetchFolderDate();
  });

  return (
    <section className="container">
      <ul className="cardlist">
        {links.map((data) => {
          return (
            <li className="card" key={data.id}>
              <Card data={data} key={data.id} />
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default Cardlist;
