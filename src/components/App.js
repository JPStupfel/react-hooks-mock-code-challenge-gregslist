import React, {useState, useEffect} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {

  const [list, setList] = useState([])

  function handleDelete(id){

    const newList = list.filter(e=>e.id !== id)

    setList(newList)

    //fetch(`http://localhost:6001/listings/${id}`,{method:"Delete"}).catch(e=>alert(e))

  }

  function handleSearch(keyWord){
    console.log('search by'+keyWord)
    const searchedList = list.filter(e=>e.description.toLowerCase().includes(keyWord.toLowerCase()))
    setList(searchedList)

  }

useEffect(()=>
  fetch(`http://localhost:6001/listings`).then(r=>r.json()).then(d=>setList(d)),[]
)
// console.log(list)
  return (
    <div className="app">
      <Header handleSearch={handleSearch} />
      <ListingsContainer  handleDelete={handleDelete} list={list}/>
    </div>
  );
}

export default App;
