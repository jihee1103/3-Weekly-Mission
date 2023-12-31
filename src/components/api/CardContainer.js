import React, { useState, useEffect } from "react";

function calculateTimePassed(createdAt) {
  const createdDate = new Date(createdAt);
  const now = new Date();
  const differenceInSeconds = Math.floor((now - createdDate) / 1000);
  const differenceInMinutes = Math.floor(differenceInSeconds / 60);
  const differenceInHours = Math.floor(differenceInMinutes / 60);
  const differenceInDays = Math.floor(differenceInHours / 24);
  const differenceInMonths = Math.floor(differenceInDays / 30);
  const differenceInYears = Math.floor(differenceInMonths / 12);

  if (differenceInSeconds < 120) {
    return "1 minute ago";
  } else if (differenceInMinutes < 60) {
    return `${differenceInMinutes} minutes ago`;
  } else if (differenceInHours < 2) {
    return "1 hour ago";
  } else if (differenceInHours < 24) {
    return `${differenceInHours} hours ago`;
  } else if (differenceInDays < 2) {
    return "1 day ago";
  } else if (differenceInDays <= 30) {
    return `${differenceInDays} days ago`;
  } else if (differenceInMonths < 2) {
    return "1 month ago";
  } else if (differenceInMonths <= 11) {
    return `${differenceInMonths} months ago`;
  } else if (differenceInYears < 2) {
    return "1 year ago";
  } else {
    return `${Math.floor(differenceInMonths / 12)} years ago`;
  }
}

function formatDate(dateString) {
  const date = new Date(dateString);
  const year = date.getFullYear().toString().substr(2, 2);
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");

  return `${year}.${month}.${day}`;
}

export function useFetchCardsData() {
  const [cardsData, setCardsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://bootcamp-api.codeit.kr/api/sample/folder`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setCardsData(
          data.folder.links.map((link) => ({
            ...link,
            timePassed: calculateTimePassed(link.createdAt),
            formattedDate: formatDate(link.createdAt),
          }))
        );
      } catch (error) {
        console.error("Error fetching card data:", error);
      }
    };

    fetchData();
  }, []);

  return cardsData;
}
