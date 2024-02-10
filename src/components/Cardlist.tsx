import React from "react";
import "../styles/Cardlist.css";
import { useFetchCardsData } from "./hooks/useFetchCardsData";

function CardList({ searchTerm }) {
    const data = useFetchCardsData();

    const filteredData = data.filter(
        (cardData) =>
            cardData.url.toLowerCase().includes(searchTerm.toLowerCase()) ||
            cardData.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            cardData.description
                .toLowerCase()
                .includes(searchTerm.toLowerCase())
    );

    return (
        <div className="cardlist">
            <div className="cards-container">
                {filteredData.map((cardData) => (
                    <a
                        key={cardData.id}
                        href={cardData.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="card"
                    >
                        <img
                            src={
                                cardData.imageSource ||
                                "/images/noimageicon.png"
                            }
                            alt={cardData.title}
                            className="cards-image"
                        />
                        <div className="text-container">
                            {" "}
                            <span>{cardData.timePassed}</span>
                            <p>{cardData.description}</p>
                            <p className="date-number">
                                {cardData.formattedDate}
                            </p>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
}

export default CardList;
