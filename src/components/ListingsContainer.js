import React from "react";

 import ListingCard from "./ListingCard";

function ListingsContainer({list, handleDelete}) {
  const items = list.map(item=> <ListingCard key={item.id} handleDelete={handleDelete} item={item}/>)
  return (
    <main>
      <ul className="cards">
        {items}
      </ul>
    </main>
  );
}

export default ListingsContainer;
