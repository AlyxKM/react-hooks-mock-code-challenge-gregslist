import React, {useState, useEffect} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {

  const [listData, setListData] = useState([])

  useEffect(() => {
    fetch("http://localhost:6001/listings")
    .then(res => res.json())
    .then(data => setListData(data))
  }, [])


  function handleDelete(id) {
    fetch(`http://localhost:6001/listings/${id}`, {
      method: "DELETE",
    })
    .then(res => res.json())
    .then(() => {
      const filteredListings = listData.filter(listing => listing.id !== id)
      setListData(filteredListings)
    })
  }


  return (
    <div className="app">
      <Header />
      <ListingsContainer listData={listData} handleDelete={handleDelete}/>
    </div>
  );
}

export default App;
