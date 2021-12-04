import NextCheckButtons from "../VisualThinking/nextCheckButtons";
import FlashingPictureButtons from "../VisualThinking/picturesComponent";
import { useState } from "react";

export default function Level1_FlashingPictures() {
  var [displayTime, setDisplayTime] = useState("hidden");
  var [time, setTime] = useState(1000000000000000000000000);
  var [image, setImage] = useState("");
  var [level, setLevel] = useState("Level1");

  function displayPicture(buttonName) {
    let max = 15;
    if (buttonName !== "check") {
      if (level == "level1") {
        max = 20;
      }
      let random = Math.floor(Math.random() * max) + 1;
      setImage(JSON.stringify(random));
      setDisplayTime("visible");
      //   setTimeout(() => {
      //     setDisplayTime("visible");
      //   }, time);
      // } else {
      //   setDisplayTime("hidden");
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
      <FlashingPictureButtons
        flashRate={setTime}
        FlashRateDisplay="none"
        hiddenLetterDisplay="none"
        changeLevel={setLevel}
      />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
        }}
      >
        <img
          src={
            "/TurningOnYourBrain/TOYBL2EyeTracing/" +
            level +
            "/" +
            image +
            ".jpg"
          }
          style={{ visibility: displayTime }}
        />
      </div>
      <NextCheckButtons displayFunc={displayPicture} />
    </div>
  );
}
