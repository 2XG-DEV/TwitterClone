import { Button, Avatar } from "@material-ui/core";
import React, { useState } from "react";
import db from "./firebase";
import "./Tweetbox.css";

const Tweetbox = () => {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const sendTweet = (e) => {
    e.preventDefault();
    db.collection("posts").add({
      displayName: "Gigel",
      userName: "gigi",
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      avatar:
        "https://images.trenta.ro/Products/Original/Diavola_-_Homepage_B-3224.jpg",
    });
    setTweetImage("");
    setTweetMessage("");
  };

  return (
    <div className="tweetbox">
      <form>
        <div className="tweetbox__input">
          <Avatar />
          <input
            type="text"
            value={tweetMessage}
            placeholder="Was geht?"
            onChange={(e) => setTweetMessage(e.target.value)}
          />
        </div>
        <input
          value={tweetImage}
          onChange={(e) => setTweetImage(e.target.value)}
          type="text"
          placeholder="Enter Image URL"
          className="tweetbox__inputimg"
        />
        <Button onClick={sendTweet} type="submit" className="tweetbox__button">
          Tweet
        </Button>
      </form>
    </div>
  );
};

export default Tweetbox;
