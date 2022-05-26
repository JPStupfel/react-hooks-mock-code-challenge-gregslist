import React, {useState} from "react";

function ListingCard({item, handleDelete}) {

  const [isLiked, setIsLiked] = useState(false)

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={item.image} alt={item.description} />
      </div>
      <div className="details">
        {isLiked ? (
          <button onClick={()=>setIsLiked(liked=>!liked)} className="emoji-button favorite active">★</button>
        ) : (
          <button onClick={()=>setIsLiked(liked=>!liked)} className="emoji-button favorite">☆</button>
        )}
        <strong>{item.description}</strong>
        <span> · {item.location}</span>
        <button onClick={()=>handleDelete(item.id)} className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
