import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({listData, handleDelete}) {
  return (
    <main>
      <ul className="cards">
        {listData.map(listing => <ListingCard listData={listing} handleDelete={handleDelete}/>)}
      </ul>
    </main>
  );
}

export default ListingsContainer;
