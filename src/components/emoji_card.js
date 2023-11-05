import React from "react";

function Emomji_card(detail) {
  return (
    <div className="emoji-card">
      <h1 className="emoji-img">{detail.emoji}</h1>
      <h2 className="emj-detail emoji-name">{detail.emoji_name}</h2>
      <h3 className="emj-detail emoji-meaning">{detail.meaning}</h3>
    </div>
  );
}

export default Emomji_card;
