import React from 'react';
import './App.css';

function App(props) {
  const { data } = props;
  return (
    <div className="gallery-container">
      <h1>Kalvium gallary</h1>
      <div className="image-box">
        {data.map((i) => (
          <div key={i.id} className="image-container">
            <img src={i.img} alt={`Image ${i.id}`} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
