import { useState } from "react";
import "./App.css";
import ImageContainer from "./ImageContainer";
import SearchBar from "./SearchBar";
import searchImages from "./Api";
import { LinearProgress } from "@mui/material";

function App() {
  const [images, setImages] = useState([]);

  const handleApiCall = async (term) => {
    const res = await searchImages(term);

    setImages(res);
  };

  return (
    <div className="App">
      <h1>Imagify</h1>
      <SearchBar callApi={handleApiCall} />
      <ImageContainer images={images} />
    </div>
  );
}

export default App;
