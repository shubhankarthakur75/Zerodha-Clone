import React, { useState } from "react";
import "./PeopleCard.css"

export const PeopleCard = ({
  title,
  label,
  height,
  source,
  width,
  bio,
}) => {
  const [showBio, setShowBio] = useState(false)

  function handleBio() {
    setShowBio(!showBio)
  }

  return (
    <div class="card">
      <div>
        <img className="img" src={source} style={{
          height: height,
          width: width
        }} />
      </div>
      <div>
        <div class="card-title">{title}</div>
        <div class="card-label">{label}</div>
        {bio ? (
          <>
            <div onClick={handleBio}>Bio</div>
            {showBio ? (
              <div>{bio}</div>
            ) : null}
          </>
        ) : null}
      </div>
    </div>
  );
};
