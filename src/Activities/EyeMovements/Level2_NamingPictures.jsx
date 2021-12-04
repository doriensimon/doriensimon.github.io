import NextCheckButtons from "../VisualThinking/nextCheckButtons";
import FlashingPictureButtons from "./NamingPicturesButtons";
import { useState } from "react";
import { last } from "underscore";

export default function Level2_NamingPictures() {
  var [displayTime, setDisplayTime] = useState("hidden");
  var [time, setTime] = useState(1000);
  var [row, setRow] = useState(1);
  var [lastArray, setLastArray] = useState([]);
  var imageArray = [];
  for (let i = 1; i < row + 1; i++) {
    for (let j = 0; j < 5; j++) {
      let random = Math.floor(Math.random() * 25) + 1;
      imageArray.push(JSON.stringify(random));
    }
  }
  function displayPicture(buttonName) {
    if (buttonName !== "check") {
      setDisplayTime("visible");
      setTimeout(() => {
        setDisplayTime("hidden");
        setLastArray(imageArray);
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
      <FlashingPictureButtons
        flashRate={setTime}
        hiddenLetterDisplay="block"
        ChangeRow={setRow}
      />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
        }}
      >
        <div>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <img
              src={"/EyeMovements/NamingPictures/" + imageArray[0] + ".jpg"}
              style={{ visibility: displayTime }}
            />
            <img
              src={"/EyeMovements/NamingPictures/" + imageArray[1] + ".jpg"}
              style={{ visibility: displayTime }}
            />
            <img
              src={"/EyeMovements/NamingPictures/" + imageArray[2] + ".jpg"}
              style={{ visibility: displayTime }}
            />
            <img
              src={"/EyeMovements/NamingPictures/" + imageArray[3] + ".jpg"}
              style={{ visibility: displayTime }}
            />
            <img
              src={"/EyeMovements/NamingPictures/" + imageArray[4] + ".jpg"}
              style={{ visibility: displayTime }}
            />
          </div>
          {row >= 2 ? (
            <div style={{ display: "flex", flexDirection: "row" }}>
              <img
                src={"/EyeMovements/NamingPictures/" + imageArray[5] + ".jpg"}
                style={{ visibility: displayTime }}
              />
              <img
                src={"/EyeMovements/NamingPictures/" + imageArray[6] + ".jpg"}
                style={{ visibility: displayTime }}
              />
              <img
                src={"/EyeMovements/NamingPictures/" + imageArray[7] + ".jpg"}
                style={{ visibility: displayTime }}
              />
              <img
                src={"/EyeMovements/NamingPictures/" + imageArray[8] + ".jpg"}
                style={{ visibility: displayTime }}
              />
              <img
                src={"/EyeMovements/NamingPictures/" + imageArray[9] + ".jpg"}
                style={{ visibility: displayTime }}
              />
            </div>
          ) : (
            ""
          )}

          {row >= 3 ? (
            <div style={{ display: "flex", flexDirection: "row" }}>
              <img
                src={"/EyeMovements/NamingPictures/" + imageArray[10] + ".jpg"}
                style={{ visibility: displayTime }}
              />
              <img
                src={"/EyeMovements/NamingPictures/" + imageArray[11] + ".jpg"}
                style={{ visibility: displayTime }}
              />
              <img
                src={"/EyeMovements/NamingPictures/" + imageArray[12] + ".jpg"}
                style={{ visibility: displayTime }}
              />
              <img
                src={"/EyeMovements/NamingPictures/" + imageArray[13] + ".jpg"}
                style={{ visibility: displayTime }}
              />
              <img
                src={"/EyeMovements/NamingPictures/" + imageArray[14] + ".jpg"}
                style={{ visibility: displayTime }}
              />
            </div>
          ) : (
            ""
          )}
          {row === 4 ? (
            <div style={{ display: "flex", flexDirection: "row" }}>
              <img
                src={"/EyeMovements/NamingPictures/" + imageArray[15] + ".jpg"}
                style={{ visibility: displayTime }}
              />
              <img
                src={"/EyeMovements/NamingPictures/" + imageArray[16] + ".jpg"}
                style={{ visibility: displayTime }}
              />
              <img
                src={"/EyeMovements/NamingPictures/" + imageArray[17] + ".jpg"}
                style={{ visibility: displayTime }}
              />
              <img
                src={"/EyeMovements/NamingPictures/" + imageArray[18] + ".jpg"}
                style={{ visibility: displayTime }}
              />
              <img
                src={"/EyeMovements/NamingPictures/" + imageArray[19] + ".jpg"}
                style={{ visibility: displayTime }}
              />
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
      <NextCheckButtons displayFunc={displayPicture} />
    </div>
  );
}
