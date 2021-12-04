import NextCheckButtons from "../VisualThinking/nextCheckButtons";
import FlashingPictureButtons from "./wordListComponent";
import { useState } from "react";

export default function Level1_FlashingPictures() {
  var [displayTime, setDisplayTime] = useState("hidden");
  var [font, setFont] = useState("24pt");
  var [casing, setCasing] = useState("lowercase");
  var [time, setTime] = useState(1000);
  var [line1, setLine1] = useState("");
  var [line2, setLine2] = useState("");
  var [line3, setLine3] = useState("");
  var [line4, setLine4] = useState("");

  const rawText =
    "bad bag bam ban bat cab can cap cat dab dad dam fad fan fat gap had ham hat jab jam Lad lag lap mad man map mat nag nap pad pan pat rag ram ran rap rat sad sag sap sat Tab tag tan tap van vat wag Bed beg bet den fed gem get hem hen jet keg leg let men met net peg pen pet set ten vet Bid big bin bit dig dim din dip fig fin fit hid him his hit jig kid kin kit lid lip lit mit nib nip pig pit Pin rid rig rim rip sip sit tin tip bog cod cog cot dog dot fog got hog hop hot jot lot mop nod not pod pot rob rot sod top bud bug bun but cup cut dug fun gun gum gut hub hum hut mud mug nun nut rub rug run Sun sum tub tug";
  var rawTextArray = rawText.split(" ");
  var chart = [];
  var chartcheck = [];

  for (let i = 0; i < 20; i++) {
    let random = Math.floor(Math.random() * rawTextArray.length);
    chart.push(rawTextArray[random]);
  }

  function displayPicture(buttonName) {
    chartcheck = chart;
    if (buttonName !== "check") {
      console.log(chart);
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
      <FlashingPictureButtons flashRate={setTime} hiddenLetterDisplay="block" />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
        }}
      >
        <div style={{ visibility: displayTime }}>
          <div
            class="chartText"
            style={{ fontSize: font, textTransform: casing }}
          >
            {chart[0] +
              " " +
              chart[1] +
              " " +
              chart[2] +
              " " +
              chart[3] +
              " " +
              chart[4]}
          </div>
          <div
            class="chartText"
            style={{ fontSize: font, textTransform: casing }}
          >
            {chart[5] +
              " " +
              chart[6] +
              " " +
              chart[7] +
              " " +
              chart[8] +
              " " +
              chart[9]}
          </div>
          <div
            class="chartText"
            style={{ fontSize: font, textTransform: casing }}
          >
            {chart[10] +
              " " +
              chart[11] +
              " " +
              chart[12] +
              " " +
              chart[13] +
              " " +
              chart[14]}
          </div>
          <div
            class="chartText"
            style={{ fontSize: font, textTransform: casing }}
          >
            {chart[15] +
              " " +
              chart[16] +
              " " +
              chart[17] +
              " " +
              chart[18] +
              " " +
              chart[19]}
          </div>
        </div>
      </div>
      <NextCheckButtons displayFunc={displayPicture} />
    </div>
  );
}
