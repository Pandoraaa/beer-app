import React, { useEffect, useState } from "react";

export function BeerList() {
  const [beers, setBeers] = useState([]);
  useEffect(() => {
    fetch("https://api.punkapi.com/v2/beers")
    .then(response => response.json())
    .then(setBeers);
  }, []);

  return (
    <div>
      <h1>Beer List</h1>
      <ul>
        {beers.map(beer => (
          <li key={beer.id}>{beer.name}</li>
        ))}
      </ul>
    </div>
  );
}
