import React, { useState, useEffect } from "react";
import ButtonDropDown from "./ButtonDropDown";
import '../App.css'

export default function DashBoard(){
  const [search, setSearch] = useState('');
  const [results, setResults] = useState([]);

  const handleChange = e => {
    setSearch( e.target.value );
  };

  
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
    </section>

)

}