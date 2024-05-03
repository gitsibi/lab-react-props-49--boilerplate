import React, { Component } from "react";
import './App.css';

export default class AppClass extends Component {
  render() {
    const { data } = this.props;
    return (
      <div className="gallery-container">
        <h1>Kalvium gallary</h1>
        <div className="image-box">
          {data.map((i) => (
            <div key={i.id} className="image-container">
              <img src={i.img} alt={`Image ${i.id}`}/>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
