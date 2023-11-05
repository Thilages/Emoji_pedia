import React from "react";

import Header from "./components/header.js"
import Emoji from "./emoji.js"
import Em_card from "./components/emoji_card.js"

function app() {
  return (
    <div className="main-div">
      <Header/>
      <div className="content-div">
        {Emoji.map(Em_card)}
      </div>
    </div>
  );
}

export default app;
