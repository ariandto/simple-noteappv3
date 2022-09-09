import React, { useState } from 'react';
import './style.css';

export default function App() {
  //state
  let [data, setData] = useState([]);
  //buat function
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.info(e.target.note.value);
    setData([...data, e.target.note.value]);
    // console.info(data);
    e.target.note.value = '';
  };

  return (
    <div className="container">
      <h1>Simple Note APP</h1>
      <form className="note_form" onSubmit={handleSubmit}>
        <div className="form_group">
          <label htmlFor="note">Catatan</label>
          <textarea id="note"></textarea>
        </div>

        <button type="submit">Submit</button>
      </form>
      <div className="card_container">
        {data.map((e, i) => {
          return <div className="card">{e}</div>;
        })}
      </div>
    </div>
  );
}
