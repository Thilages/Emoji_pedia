import React from "react";

function card(props) {
  console.log(props);
  return (
    <div className="card">
      <h1 className="card-head">{props.name}</h1>
      <div className="img-container">
        <img src={props.img} className="card-img" />
      </div>
      <p className="card-contact">PHONE:{props.contact}</p>
      <p className="card-mail">MAIL:{props.mail}</p>
    </div>
  );
}

export default card;
