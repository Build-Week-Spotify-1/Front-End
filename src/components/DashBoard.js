import React, { useState, useEffect } from "react";
import ButtonDropDown from "./ButtonDropDown";
import '../App.css'
import axios from "axios";
import DummyData from "../DummyData" 
import SongCard from "./SongCard"


export default function DashBoard(props){
  const [search, setSearch] = useState('');
  const [results, setResults] = useState([]);

  const handleChange = e => {
    setSearch( e.target.value );
  };

  axios
  .get()
  .then(response => {
      console.log(response)
      setResults(response.data.results)
      
  })
  
return (
    <section className="search-form">
    <form>
      <label>
        Artist/Song:
      <input
      id="name"
      type="text"
      name="textfield"
      placeholder="Search"
      value={ search }
      onChange={ handleChange }
      />
      </label>
    </form>
    <form>
     <ButtonDropDown/>

    </form>
    <div className="song-list">
    {results.map((c, index) => {
        return <SongCard key={index} artist={c.Artist} song={c.Song} album={c.Album} />
    
    })}
    </div>
    </section>
    
)

}