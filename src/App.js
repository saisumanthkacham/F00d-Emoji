import React, { useState } from "react";
import "./styles.css";

// database

var emojiDictionary = {
  "🍔": "Burger",
  "🍟": "Frenchfries",
  "🍕": "Pizza",
  "🌭": "Hotdog",
  "🥪": "Sandwich",
  "🌮": "Taco",
  "🍨": "Ice Cream",
  "🍩": "Doughnut",
  "🍪": "Biscuit",
  "🎂": "Cake",
  "🍫": "Chocolate",
  "🍭": "Lollipop"
};

var revEmojiDictionary = {
  burger: "🍔",
  frenchfries: "🍟",
  pizza: "🍕",
  hotdog: "🌭",
  sandwich: "🥪",
  taco: "🌮",
  lollipop: "🍭",
  chocolate: "🍫",
  cake: "🎂",
  biscuit: "🍪",
  doughnut: "🍩",
  icecream: "🍨"
};

var dictList = Object.keys(emojiDictionary);

export default function App() {
  var [inputt, setInputt] = useState();

  // input-{emoji or Text}-handler

  function inputHandler(event) {
    var input = event.target.value;

    if (emojiDictionary[input]) {
      setInputt(emojiDictionary[input]);
    } else if (revEmojiDictionary[input]) {
      setInputt(revEmojiDictionary[input]);
    } else {
      setInputt("not defined in our database");
    }
  }

  // click-handler

  function clickhandler(event) {
    var ip = event.target.innerHTML;
    var emojiIp = emojiDictionary[ip];
    setInputt(emojiIp);
  }

  return (
    <div className="App">
      {/* heading */}
      <h1 className="heading">
        <span style={{ color: "orange" }}>F</span>ood-
        <span style={{ color: "orange" }}>Em🍪ji</span>
      </h1>

      {/* inputbox */}

      <input
        onChange={inputHandler}
        placeholder="Enter Emoji or Type Emoji Name here... "
      />

      {/* output */}

      <div className="output">= {inputt} </div>

      <h2>The emojies we know </h2>

      {/* printing-emoji-list */}

      {dictList.map((emoji) => (
        <span className="emoji-class" onClick={clickhandler} key={emoji}>
          {emoji}
        </span>
      ))}
    </div>
  );
}
