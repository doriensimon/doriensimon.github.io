import React from "react";
import "./App.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import Level2_SoundCodes from "./Activities/SequencingVisionandLanguage/Level2_SoundCodes";
import Level4_VisualSequence from "./Activities/SequencingVisionandLanguage/Level4_VisualSequence";
import Level5_ClapPatterns from "./Activities/SequencingVisionandLanguage/Level5_ClapPatterns";
import Level1_FlashingPictures from "./Activities/VisualThinking/Level1_FlashingPictures";
import Level5_RememberingBlockPatterns from "./Activities/VisualThinking/Level5_RememberingBlockPatterns";
import Level2_EyeTracing from "./Activities/TurningOnYourBrain/Level2_EyeTracing";
import Level2_NamingPictures from "./Activities/EyeMovements/Level2_NamingPictures";
import Level8_TheShortVowelSound from "./Activities/SequencingVisionandLanguage/Level8_TheShortVowelSound";
import Level5_MemoryDots from "./Activities/SequencingVisionandLanguage/Level5_MemoryDots";
import Level5_LetterCharts from "./Activities/EyeMovements/Level5_LetterCharts";
import Level7_LetterCharts3 from "./Activities/EyeMovements/Level7_LetterCharts3";
import Level5_FlashingWords from "./Activities/VisualThinking/Level5_FlashingWords";
import Level6_FlashingWords2 from "./Activities/VisualThinking/Level6_FlashingWords2";

class ActivityHolder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activityName: null,
      activity: <div></div>,
    };
  }

  componentDidMount() {
    console.log(React.version);
    this.setState({ activityName: this.props.activityName });
  }

  render() {
    return (
      <div className="activity_box">
        {this.state.activityName ==
          "SequencingVision&Learning/4VisualSequence" && (
          <Level4_VisualSequence />
        )}
        {this.state.activityName ==
          "SequencingVision&Learning/5ClapPatterns" && <Level5_ClapPatterns />}
        {this.state.activityName == "SequencingVision&Learning/2SoundCodes" && (
          <Level2_SoundCodes />
        )}
        {this.state.activityName == "VisualThinking/1FlashingPictures" && (
          <Level1_FlashingPictures />
        )}
        {this.state.activityName ==
          "VisualThinking/5RememberingBlockPatterns" && (
          <Level5_RememberingBlockPatterns />
        )}
        {this.state.activityName == "TurningOnYourBrain/2EyeTracing" && (
          <Level2_EyeTracing />
        )}
        {this.state.activityName == "EyeMovements/2NamingPictures" && (
          <Level2_NamingPictures />
        )}
        {this.state.activityName ==
          "SequencingVision&Learning/8TheShortVowelSound" && (
          <Level8_TheShortVowelSound />
        )}
        {this.state.activityName == "SequencingVision&Learning/5MemoryDots" && (
          <Level5_MemoryDots />
        )}
        {this.state.activityName == "EyeMovements/5LetterCharts" && (
          <Level5_LetterCharts />
        )}
        {this.state.activityName == "EyeMovements/7LetterCharts3" && (
          <Level7_LetterCharts3 />
        )}
        {this.state.activityName == "VisualThinking/5FlashingWords" && (
          <Level5_FlashingWords />
        )}
        {this.state.activityName == "VisualThinking/6FlashingWords2" && (
          <Level6_FlashingWords2 />
        )}
        {this.state.activityName == "SequencingVision&Learning/5MemoryDots" && (
          <Level5_MemoryDots />
        )}
      </div>
    );
  }
}

export default ActivityHolder;
