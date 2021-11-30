import React from "react";
import "./PeopleCard.css"

export const PeopleCard = ({ title, label, height, source, width }) => {
  return (
    <div class="card">
      <div>
        <img src={source} style={{
          height: height,
          width: width
        }}/>
      </div>
      <div>
        <div class="card-title">{title}</div>
        <div class="card-label">{label}</div>
      </div>
    </div>
  );
};
