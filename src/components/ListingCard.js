import React, {useState} from "react";

function ListingCard({listData, handleDelete}) {

  const [isFavor, setIsFavor] = useState(false)


  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={listData.image} alt={listData.description} />
      </div>
      <div className="details">
        {isFavor ? (
          <button onClick={() => setIsFavor(false)}className="emoji-button favorite active">★:</button>
        ) : (
          <button onClick={() => setIsFavor(true)}className="emoji-button favorite">☆</button>
        )}
        <strong>{listData.description}</strong>
        <span> · {listData.location}</span>
        <button onClick={() => handleDelete(listData.id)} className="emoji-button delete">🗑</button>
        
      </div>
    </li>
  );
}

export default ListingCard;
