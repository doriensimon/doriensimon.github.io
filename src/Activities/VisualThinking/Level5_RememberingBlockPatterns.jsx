import { useState } from "react";
import FlashingPictureButtons from "./picturesComponent";
import NextCheckButtons from "./nextCheckButtons";

export default function Level5_RememberingBlockPatterns() {
  var [displayTime, setDisplayTime] = useState("hidden");
  var [time, setTime] = useState(1000);
  var [image, setImage] = useState("");

  function displayPicture(buttonName) {
    if (buttonName !== "check") {
      let random = Math.floor(Math.random() * 91) + 1;
      setImage(JSON.stringify(random));
      setDisplayTime("visible");
      setTimeout(() => {
        setDisplayTime("hidden");
      }, time);
    } else {
      setDisplayTime("visible");
    }
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "column",
        height: "100%",
      }}
    >
      <FlashingPictureButtons flashRate={setTime} hiddenLetterDisplay="none" />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
        }}
      >
        <img
          src={"/VisualThinking/RememberingBlockPatterns/" + image + ".jpg"}
          style={{ visibility: displayTime }}
        />
      </div>
      <NextCheckButtons displayFunc={displayPicture} />
    </div>
  );
}
