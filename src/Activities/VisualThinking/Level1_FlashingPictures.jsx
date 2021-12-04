import NextCheckButtons from "./nextCheckButtons";
import FlashingPictureButtons from "./picturesComponent";
import { useState } from "react";

export default function Level1_FlashingPictures() {
  var [displayTime, setDisplayTime] = useState("hidden");
  var [time, setTime] = useState(1000);
  var [image, setImage] = useState("");
  var [dirPath, setDirPath] = useState("/VisualThinking/FlashingPictures/");

  async function displayPicture(buttonName) {
    if (buttonName !== "check") {
      let random = Math.floor(Math.random() * 91) + 1;
      setImage(JSON.stringify(random));

      setTimeout(() => {
        setDisplayTime("hidden");
        console.log("this is in timeout");
      }, time);
      setDisplayTime("visible");
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
      <FlashingPictureButtons
        flashRate={setTime}
        hiddenLetter={setDirPath}
        hiddenLetterDisplay="block"
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
          src={dirPath + image + ".jpg"}
          style={{ visibility: displayTime, width: "80%", height: "auto" }}
        />
      </div>
      <NextCheckButtons displayFunc={displayPicture} />
    </div>
  );
}
