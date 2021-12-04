import "react-pdf/dist/umd/Page/AnnotationLayer.css";
import React from "react";
import { pdfjs } from "react-pdf";
import PDFViewer from "./PDFViewer";
import Collapsible from "react-collapsible";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import Activity from "./ActivityHolder.js";

import "bootstrap/dist/css/bootstrap.min.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

export default function HomePage() {
  var [Pdf, setPdf] = useState("sample.pdf");
  var [ActivityName, setActivityName] = useState("empty_activity");
  var [ActivityShown, setActivityShown] = useState(false);

  function nextView(want) {
    if (want === "Activity") {
      if (Pdf.includes("Record")) {
        let activityName = Pdf.slice(0, Pdf.length - 10);
        setActivityName(activityName);
        setActivityShown(true);

        console.log("pdf when last is record and I want activity: ", Pdf);
      } else {
        let activityName = Pdf.slice(0, Pdf.length - 12);
        setActivityName(activityName);
        setActivityShown(true);

        console.log("pdf when last is not record and I want activity: ", Pdf);
      }
    }
    if (want === "Instruction") {
      if (Pdf.includes("Record")) {
        setActivityShown(false);
        setPdf(Pdf.slice(0, Pdf.length - 10) + "Instruct" + ".pdf");

        console.log("pdf when last is record and I want instruction: ", Pdf);
      } else {
        setActivityShown(false);
        setPdf(Pdf);

        console.log(
          "pdf when last is not record and I want instruction: ",
          Pdf
        );
      }
    }
    if (want === "Record") {
      if (Pdf.includes("Record")) {
        setActivityShown(false);
        setPdf(Pdf.slice(0, Pdf.length - 10) + "Record" + ".pdf");
      } else {
        setActivityShown(false);
        setPdf(Pdf.slice(0, Pdf.length - 12) + "Record" + ".pdf");
        console.log("pdf when last is idk and I want record: ", Pdf);
      }
    }
  }

  return (
    <div className>
      <div>
        <div className="options">
          <Dropdown>
            <Dropdown.Toggle id="dropdown-basic">File</Dropdown.Toggle>
            <Dropdown.Menu className="option_select">
              <Dropdown.Item href="#/action-1">
                Activate Piggyback
              </Dropdown.Item>
              <Dropdown.Item href="#/action-2">
                Manually Activate Piggyback
              </Dropdown.Item>
              <Dropdown.Item href="#/action-3">Exit Piggyback</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Beat
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Off</Dropdown.Item>
              <Dropdown.Item href="#/action-2">60bpm</Dropdown.Item>
              <Dropdown.Item href="#/action-3">120bpm</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Help
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">About Piggyback</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Piggyback Manual</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div className="layout">
          <div className="topics">
            <div>
              <Collapsible trigger="⇰ Sequencing, Vision &amp; Language">
                <Collapsible trigger="⇰ Introduction" open="true">
                  <div
                    onClick={() => {
                      setPdf("SequencingVision&Learning/IntroBugInstruct.pdf");
                      setActivityShown(false);
                    }}
                  >
                    Bug
                  </div>
                  <div
                    onClick={() => {
                      setPdf(
                        "SequencingVision&Learning/IntroRockingHorseInstruct.pdf"
                      );
                      setActivityShown(false);
                    }}
                  >
                    Rocking Horse
                  </div>
                </Collapsible>
                <Collapsible trigger="⇰ Level 1" open="true">
                  <div
                    onClick={() => {
                      setPdf(
                        "SequencingVision&Learning/1SpiderMapInstruct.pdf"
                      );
                      setActivityShown(false);
                    }}
                  >
                    Spider Tap
                  </div>
                  <div
                    onClick={() => {
                      setPdf("SequencingVision&Learning/1BackMapInstruct.pdf");
                      setActivityShown(false);
                    }}
                  >
                    Back Map
                  </div>
                </Collapsible>
                <Collapsible trigger="⇰ Level 2" open="true">
                  <div
                    onClick={() => {
                      setPdf(
                        "SequencingVision&Learning/2SoundCodesInstruct.pdf"
                      );
                      setActivityShown(false);
                    }}
                  >
                    Sound Codes
                  </div>
                  <div
                    onClick={() => {
                      setPdf(
                        "SequencingVision&Learning/2ArmLegLiftsInstruct.pdf"
                      );
                      setActivityShown(false);
                    }}
                  >
                    Arm &amp; Leg Lifts
                  </div>
                </Collapsible>
                <Collapsible trigger="⇰ Level 3" open="true">
                  <div
                    onClick={() => {
                      setPdf("SequencingVision&Learning/3TimingInstruct.pdf");
                      setActivityShown(false);
                    }}
                  >
                    Timing
                  </div>
                  <div
                    onClick={() => {
                      setPdf("SequencingVision&Learning/3TurtleInstruct.pdf");
                      setActivityShown(false);
                    }}
                  >
                    Turtle
                  </div>
                </Collapsible>
                <Collapsible trigger="⇰ Level 4" open="true">
                  <div
                    onClick={() => {
                      setPdf(
                        "SequencingVision&Learning/4VisualSequenceInstruct.pdf"
                      );
                      setActivityShown(false);
                    }}
                  >
                    Visual Sequence
                  </div>
                  <div
                    onClick={() => {
                      setPdf(
                        "SequencingVision&Learning/4RandolphShuffleInstruct.pdf"
                      );
                      setActivityShown(false);
                    }}
                  >
                    Randolph Shuffle
                  </div>
                </Collapsible>
                <Collapsible trigger="⇰ Level 5" open="true">
                  <div
                    onClick={() => {
                      setPdf(
                        "SequencingVision&Learning/5MemoryDotsInstruct.pdf"
                      );
                      setActivityShown(false);
                    }}
                  >
                    Memory Dots
                  </div>
                  <div
                    onClick={() => {
                      setPdf(
                        "SequencingVision&Learning/5ClapPatternsInstruct.pdf"
                      );
                      setActivityShown(false);
                    }}
                  >
                    Clap Patterns
                  </div>
                  <div
                    onClick={() => {
                      setPdf(
                        "SequencingVision&Learning/5SeeAndSoundCodesInstruct.pdf"
                      );
                      setActivityShown(false);
                    }}
                  >
                    See And Sound Codes
                  </div>
                </Collapsible>
                <Collapsible trigger="⇰ Level 6" open="true">
                  <div
                    onClick={() => {
                      setPdf(
                        "SequencingVision&Learning/6WordBlocksInstruct.pdf"
                      );
                      setActivityShown(false);
                    }}
                  >
                    Word Blocks
                  </div>
                </Collapsible>
                <Collapsible trigger="⇰ Level 7" open="true">
                  <div
                    onClick={() => {
                      setPdf(
                        "SequencingVision&Learning/7SoundPatternsInstruct.pdf"
                      );
                      setActivityShown(false);
                    }}
                  >
                    Sound Patterns
                  </div>
                </Collapsible>
                <Collapsible trigger="⇰ Level 8" open="true">
                  <div
                    onClick={() => {
                      setPdf(
                        "SequencingVision&Learning/8TheShortVowelSoundInstruct.pdf"
                      );
                      setActivityShown(false);
                    }}
                  >
                    The Short Vowel Sound
                  </div>
                  <div
                    onClick={() => {
                      setPdf(
                        "SequencingVision&Learning/8TheLongVowelSoundInstruct.pdf"
                      );
                      setActivityShown(false);
                    }}
                  >
                    The Long Vowel Sound
                  </div>
                </Collapsible>
                <Collapsible trigger="⇰ Level 9" open="true">
                  <div
                    onClick={() => {
                      setPdf(
                        "SequencingVision&Learning/9TheVowelsWithRInstruct.pdf"
                      );
                      setActivityShown(false);
                    }}
                  >
                    The Vowels With 'r'
                  </div>
                  <div
                    onClick={() => {
                      setPdf(
                        "SequencingVision&Learning/9Othera&oSoundsInstruct.pdf"
                      );
                      setActivityShown(false);
                    }}
                  >
                    Other 'a' &amp; 'o' Sounds
                  </div>
                  <div
                    onClick={() => {
                      setPdf(
                        "SequencingVision&Learning/9TheRuleBreakersInstruct.pdf"
                      );
                      setActivityShown(false);
                    }}
                  >
                    The Rule Breakers and Multiple Syllables
                  </div>
                </Collapsible>
              </Collapsible>
              <Collapsible trigger="⇰ Visual Thinking">
                <Collapsible trigger="⇰ Introduction" open="true">
                  <div
                    onClick={() => {
                      setPdf(
                        "VisualThinking/IntroVisuallyCodedMovementInstruct.pdf"
                      );
                      setActivityShown(false);
                    }}
                  >
                    Visually Coded Movement
                  </div>
                  <div
                    onClick={() => {
                      setPdf("VisualThinking/IntroMatchingCubesInstruct.pdf");
                      setActivityShown(false);
                    }}
                  >
                    Matching Cubes
                  </div>
                </Collapsible>
                <Collapsible trigger="⇰ Level 1" open="true">
                  <div
                    onClick={() => {
                      setPdf("VisualThinking/1MatchingBlocksInstruct.pdf");
                      setActivityShown(false);
                    }}
                  >
                    Matching Blocks
                  </div>
                  <div
                    onClick={() => {
                      setPdf(
                        "VisualThinking/1CodesForClapPatternsInstruct.pdf"
                      );
                      setActivityShown(false);
                    }}
                  >
                    Codes for Clap Patterns
                  </div>
                  <div
                    onClick={() => {
                      setPdf("VisualThinking/1FlashingPicturesInstruct.pdf");
                      setActivityShown(false);
                    }}
                  >
                    Flashing Pictures
                  </div>
                </Collapsible>
                <Collapsible trigger="⇰ Level 2" open="true">
                  <div
                    onClick={() => {
                      setPdf(
                        "VisualThinking/2FlashingClapPatternsInstruct.pdf"
                      );
                      setActivityShown(false);
                    }}
                  >
                    Flashing Clap Patterns
                  </div>
                  <div
                    onClick={() => {
                      setPdf("VisualThinking/2FlashingCubesInstruct.pdf");
                      setActivityShown(false);
                    }}
                  >
                    Flashing Cubes
                  </div>
                </Collapsible>
                <Collapsible trigger="⇰ Level 3" open="true">
                  <div
                    onClick={() => {
                      setPdf("VisualThinking/3MatchingBlocks2Instruct.pdf");
                      setActivityShown(false);
                    }}
                  >
                    Matching Blocks 2
                  </div>
                  <div
                    onClick={() => {
                      setPdf("VisualThinking/3RememberingShapesInstruct.pdf");
                      setActivityShown(false);
                    }}
                  >
                    Remembering Shapes
                  </div>
                  <div
                    onClick={() => {
                      setPdf("VisualThinking/3FlashingNumbersInstruct.pdf");
                      setActivityShown(false);
                    }}
                  >
                    Flashing Numbers
                  </div>
                </Collapsible>
                <Collapsible trigger="⇰ Level 4" open="true">
                  <div
                    onClick={() => {
                      setPdf("VisualThinking/4FlashingLettersInstruct.pdf");
                      setActivityShown(false);
                    }}
                  >
                    Flashing Letters
                  </div>
                  <div
                    onClick={() => {
                      setPdf(
                        "VisualThinking/4Feeling&MatchingWithBlocksInstruct.pdf"
                      );
                      setActivityShown(false);
                    }}
                  >
                    Feeling &amp; Matching with Blocks
                  </div>
                </Collapsible>
                <Collapsible trigger="⇰ Level 5" open="true">
                  <div
                    onClick={() => {
                      setPdf(
                        "VisualThinking/5FlashingDotToDotPatternsInstruct.pdf"
                      );
                      setActivityShown(false);
                    }}
                  >
                    Flashing Dot to Dot Patterns
                  </div>
                  <div
                    onClick={() => {
                      setPdf(
                        "VisualThinking/5RememberingBlockPatternsInstruct.pdf"
                      );
                      setActivityShown(false);
                    }}
                  >
                    Remembering Block Patterns
                  </div>
                  <div
                    onClick={() => {
                      setPdf("VisualThinking/5FlashingWordsInstruct.pdf");
                      setActivityShown(false);
                    }}
                  >
                    Flashing Words
                  </div>
                </Collapsible>
                <Collapsible trigger="⇰ Level 6" open="true">
                  <div
                    onClick={() => {
                      setPdf("VisualThinking/6StickManInstruct.pdf");
                      setActivityShown(false);
                    }}
                  >
                    Stick Man
                  </div>
                  <div
                    onClick={() => {
                      setPdf("VisualThinking/6FlashingWords2Instruct.pdf");
                      setActivityShown(false);
                    }}
                  >
                    Flashing Words 2
                  </div>
                  <div
                    onClick={() => {
                      setPdf(
                        "VisualThinking/6Flipping&RotatingCirclesInstruct.pdf"
                      );
                      setActivityShown(false);
                    }}
                  >
                    Flipping &amp; Rotating Circles
                  </div>
                  <div
                    onClick={() => {
                      setPdf("VisualThinking/6DominoesInstruct.pdf");
                      setActivityShown(false);
                    }}
                  >
                    Dominoes
                  </div>
                </Collapsible>
                <Collapsible trigger="⇰ Level 7" open="true">
                  <div
                    onClick={() => {
                      setPdf(
                        "VisualThinking/7Flipping&RotatingCubesInstruct.pdf"
                      );
                      setActivityShown(false);
                    }}
                  >
                    Flipping &amp; Rotating Cubes
                  </div>
                  <div
                    onClick={() => {
                      setPdf(
                        "VisualThinking/7Flipping&RotatingDotToDotInstruct.pdf"
                      );
                      setActivityShown(false);
                    }}
                  >
                    Flipping &amp; Rotating Dot to Dot Patterns
                  </div>
                  <div
                    onClick={() => {
                      setPdf("VisualThinking/7BlocksInAHoleInstruct.pdf");
                      setActivityShown(false);
                    }}
                  >
                    Blocks in a Hole
                  </div>
                </Collapsible>
                <Collapsible trigger="⇰ Level 8" open="true">
                  <div
                    onClick={() => {
                      setPdf(
                        "VisualThinking/8Flipping&RotatingBlocksInstruct.pdf"
                      );
                      setActivityShown(false);
                    }}
                  >
                    Flipping &amp; Rotating Blocks
                  </div>
                  <div
                    onClick={() => {
                      setPdf("VisualThinking/8FisherCubesInstruct.pdf");
                      setActivityShown(false);
                    }}
                  >
                    Fisher Cubes
                  </div>
                  <div
                    onClick={() => {
                      setPdf(
                        "VisualThinking/8Flipping&RotatingShapesInstruct.pdf"
                      );
                      setActivityShown(false);
                    }}
                  >
                    Flipping &amp; Rotating Shapes
                  </div>
                </Collapsible>
                <Collapsible trigger="⇰ Level 9" open="true">
                  <div
                    onClick={() => {
                      setPdf(
                        "VisualThinking/9DescribingBlockPatternsInstruct.pdf"
                      );
                      setActivityShown(false);
                    }}
                  >
                    Describing Block Patterns
                  </div>
                </Collapsible>
              </Collapsible>
              <Collapsible trigger="⇰ Organising Space">
                <Collapsible trigger="⇰ Introduction" open="true">
                  <div
                    onClick={() => {
                      setPdf("OrganisingSpace/IntroWheelbarrowInstruct.pdf");
                      setActivityShown(false);
                    }}
                  >
                    Wheelbarro
                  </div>
                  <div
                    onClick={() => {
                      setPdf("OrganisingSpace/IntroStarfishInstruct.pdf");
                      setActivityShown(false);
                    }}
                  >
                    Starfish
                  </div>
                  <div
                    onClick={() => {
                      setPdf("OrganisingSpace/IntroBallRollInstruct.pdf");
                      setActivityShown(false);
                    }}
                  >
                    Ball Roll
                  </div>
                </Collapsible>
                <Collapsible trigger="⇰ Level 1" open="true">
                  <div
                    onClick={() => {
                      setPdf("OrganisingSpace/1LineRollingInstruct.pdf");
                      setActivityShown(false);
                    }}
                  >
                    Line Rolling
                  </div>
                  <div
                    onClick={() => {
                      setPdf("OrganisingSpace/1JointsInstruct.pdf");
                      setActivityShown(false);
                    }}
                  >
                    Joints
                  </div>
                  <div
                    onClick={() => {
                      setPdf("OrganisingSpace/1WallWalkingInstruct.pdf");
                      setActivityShown(false);
                    }}
                  >
                    Wall Walking
                  </div>
                  <div
                    onClick={() => {
                      setPdf("OrganisingSpace/1SteppingArrowsInstruct.pdf");
                      setActivityShown(false);
                    }}
                  >
                    Stepping Arrows
                  </div>
                </Collapsible>
                <Collapsible trigger="⇰ Level 2" open="true">
                  <div
                    onClick={() => {
                      setPdf("OrganisingSpace/2PlutoInstruct.pdf");
                      setActivityShown(false);
                    }}
                  >
                    Pluto
                  </div>
                  <div
                    onClick={() => {
                      setPdf("OrganisingSpace/2CrabWalkInstruct.pdf");
                      setActivityShown(false);
                    }}
                  >
                    Crab Walk
                  </div>
                  <div
                    onClick={() => {
                      setPdf("OrganisingSpace/2TightropeWalkInstruct.pdf");
                      setActivityShown(false);
                    }}
                  >
                    Tightrope Walk
                  </div>
                  <div
                    onClick={() => {
                      setPdf("OrganisingSpace/2CowboyAndStorkWalkInstruct.pdf");
                      setActivityShown(false);
                    }}
                  >
                    Cowboy and Stork Walk
                  </div>
                </Collapsible>
                <Collapsible trigger="⇰ Level 3" open="true">
                  <div
                    onClick={() => {
                      setPdf("OrganisingSpace/3CrocodileSwimInstruct.pdf");
                      setActivityShown(false);
                    }}
                  >
                    Crocodile Swim
                  </div>
                  <div
                    onClick={() => {
                      setPdf("OrganisingSpace/3WhichIsMyRightHandInstruct.pdf");
                      setActivityShown(false);
                    }}
                  >
                    Which is my Right Hand?
                  </div>
                  <div
                    onClick={() => {
                      setPdf("OrganisingSpace/3BearWalkInstruct.pdf");
                      setActivityShown(false);
                    }}
                  >
                    Bear Walk?
                  </div>
                  <div
                    onClick={() => {
                      setPdf("OrganisingSpace/3SquareAndCircleInstruct.pdf");
                      setActivityShown(false);
                    }}
                  >
                    Square and Circle
                  </div>
                </Collapsible>
                <Collapsible trigger="⇰ Level 4" open="true">
                  <div
                    onClick={() => {
                      setPdf("OrganisingSpace/4SoldierWalksInstruct.pdf");
                      setActivityShown(false);
                    }}
                  >
                    Soldier Walks
                  </div>
                  <div
                    onClick={() => {
                      setPdf("OrganisingSpace/4BallBounceInstruct.pdf");
                      setActivityShown(false);
                    }}
                  >
                    Ball Bouncing
                  </div>
                  <div
                    onClick={() => {
                      setPdf("OrganisingSpace/4ElephantWalkInstruct.pdf");
                      setActivityShown(false);
                    }}
                  >
                    Elephant Walk
                  </div>
                </Collapsible>
                <Collapsible trigger="⇰ Level 5" open="true">
                  <div
                    onClick={() => {
                      setPdf("OrganisingSpace/5DoWhatIDoInstruct.pdf");
                      setActivityShown(false);
                    }}
                  >
                    'Do What I do'
                  </div>
                  <div
                    onClick={() => {
                      setPdf("OrganisingSpace/5HalopinHandsInstruct.pdf");
                      setActivityShown(false);
                    }}
                  >
                    Halopin Hands
                  </div>
                </Collapsible>
                <Collapsible trigger="⇰ Level 6" open="true">
                  <div
                    onClick={() => {
                      setPdf("OrganisingSpace/6DoWhatIDo2Instruct.pdf");
                      setActivityShown(false);
                    }}
                  >
                    'Do What I do' 2
                  </div>
                  <div
                    onClick={() => {
                      setPdf("OrganisingSpace/6ArrowsInstruct.pdf");
                      setActivityShown(false);
                    }}
                  >
                    Arrows
                  </div>
                  <div
                    onClick={() => {
                      setPdf("OrganisingSpace/6HalopinHands2Instruct.pdf");
                      setActivityShown(false);
                    }}
                  >
                    Halopin Hands 2
                  </div>
                </Collapsible>
                <Collapsible trigger="⇰ Level 7" open="true">
                  <div
                    onClick={() => {
                      setPdf("OrganisingSpace/7RobotInTheMirrorInstruct.pdf");
                      setActivityShown(false);
                    }}
                  >
                    Robot in the Mirror
                  </div>
                  <div
                    onClick={() => {
                      setPdf("OrganisingSpace/7PointingInstruct.pdf");
                      setActivityShown(false);
                    }}
                  >
                    Pointing
                  </div>
                  <div
                    onClick={() => {
                      setPdf(
                        "OrganisingSpace/7DirectionalTrianglesInstruct.pdf"
                      );
                      setActivityShown(false);
                    }}
                  >
                    Directional Triangles
                  </div>
                </Collapsible>
                <Collapsible trigger="⇰ Level 8" open="true">
                  <div
                    onClick={() => {
                      setPdf("OrganisingSpace/8bdpAndqInstruct.pdf");
                      setActivityShown(false);
                    }}
                  >
                    b, d, p and q
                  </div>
                  <div
                    onClick={() => {
                      setPdf("OrganisingSpace/8RobotOnALineInstruct.pdf");
                      setActivityShown(false);
                    }}
                  >
                    Robot on a Line
                  </div>
                  <div
                    onClick={() => {
                      setPdf(
                        "OrganisingSpace/8RobotWithoutTheMirrorInstruct.pdf"
                      );
                      setActivityShown(false);
                    }}
                  >
                    Robot without the Mirror
                  </div>
                </Collapsible>
                <Collapsible trigger="⇰ Level 9" open="true">
                  <div
                    onClick={() => {
                      setPdf("OrganisingSpace/9FindTheWrongLetterInstruct.pdf");
                      setActivityShown(false);
                    }}
                  >
                    Find the Wrong Letter
                  </div>
                  <div
                    onClick={() => {
                      setPdf("OrganisingSpace/9MouseInAMazeInstruct.pdf");
                      setActivityShown(false);
                    }}
                  >
                    Mouse in a Maze
                  </div>
                </Collapsible>
              </Collapsible>
              <Collapsible trigger="⇰ Eye Movements">
                <Collapsible trigger="⇰ Introduction" open="true">
                  <div
                    onClick={() => {
                      setPdf("EyeMovements/IntroRainbowInstruct.pdf");
                      setActivityShown(false);
                    }}
                  >
                    Rainbow
                  </div>
                  <div
                    onClick={() => {
                      setPdf("EyeMovements/IntroLizardInstruct.pdf");
                      setActivityShown(false);
                    }}
                  >
                    Lizard
                  </div>
                  <div
                    onClick={() => {
                      setPdf("EyeMovements/IntroEyeControlInstruct.pdf");
                      setActivityShown(false);
                    }}
                  >
                    Eye Control
                  </div>
                </Collapsible>
                <Collapsible trigger="⇰ Level 1" open="true">
                  <div
                    onClick={() => {
                      setPdf("EyeMovements/1EyeSwingsInstruct.pdf");
                      setActivityShown(false);
                    }}
                  >
                    Eye Swings
                  </div>
                  <div
                    onClick={() => {
                      setPdf("EyeMovements/1PenStabInstruct.pdf");
                      setActivityShown(false);
                    }}
                  >
                    Pen Stab
                  </div>
                  <div
                    onClick={() => {
                      setPdf("EyeMovements/1MarbleRollsInstruct.pdf");
                      setActivityShown(false);
                    }}
                  >
                    Marble Rolls
                  </div>
                </Collapsible>
                <Collapsible trigger="⇰ Level 2" open="true">
                  <div
                    onClick={() => {
                      setPdf("EyeMovements/2HeadSwingsInstruct.pdf");
                      setActivityShown(false);
                    }}
                  >
                    Head Swings
                  </div>
                  <div
                    onClick={() => {
                      setPdf("EyeMovements/2CatchTheFingerInstruct.pdf");
                      setActivityShown(false);
                    }}
                  >
                    Catch the Finger
                  </div>
                  <div
                    onClick={() => {
                      setPdf("EyeMovements/2NamingPicturesInstruct.pdf");
                      setActivityShown(false);
                    }}
                  >
                    Naming Pictures
                  </div>
                </Collapsible>
                <Collapsible trigger="⇰ Level 3" open="true">
                  <div
                    onClick={() => {
                      setPdf("EyeMovements/3CallingNumbersInstruct.pdf");
                      setActivityShown(false);
                    }}
                  >
                    Calling Numbers
                  </div>
                  <div
                    onClick={() => {
                      setPdf("EyeMovements/3FollowTheSpoonInstruct.pdf");
                      setActivityShown(false);
                    }}
                  >
                    Follow the Spoon
                  </div>
                  <div
                    onClick={() => {
                      setPdf("EyeMovements/3ClosedEyeLookingInstruct.pdf");
                      setActivityShown(false);
                    }}
                  >
                    'Closed Eye' Looking
                  </div>
                </Collapsible>
                <Collapsible trigger="⇰ Level 4" open="true">
                  <div
                    onClick={() => {
                      setPdf("EyeMovements/4CallingLettersInstruct.pdf");
                      setActivityShown(false);
                    }}
                  >
                    Calling Letters
                  </div>
                  <div
                    onClick={() => {
                      setPdf("EyeMovements/4FollowTheSpoon2Instruct.pdf");
                      setActivityShown(false);
                    }}
                  >
                    Follow the Spoon 2
                  </div>
                  <div
                    onClick={() => {
                      setPdf("EyeMovements/4LookReadyTouchBackInstruct.pdf");
                      setActivityShown(false);
                    }}
                  >
                    Look, Ready, Touch, Back
                  </div>
                </Collapsible>
                <Collapsible trigger="⇰ Level 5" open="true">
                  <div
                    onClick={() => {
                      setPdf("EyeMovements/5NamingSoundsInstruct.pdf");
                      setActivityShown(false);
                    }}
                  >
                    Naming Sounds
                  </div>
                  <div
                    onClick={() => {
                      setPdf("EyeMovements/5LetterChartsInstruct.pdf");
                      setActivityShown(false);
                    }}
                  >
                    Letter Charts
                  </div>
                  <div
                    onClick={() => {
                      setPdf("EyeMovements/5LookRingTouchBackInstruct.pdf");
                      setActivityShown(false);
                    }}
                  >
                    Look, Ring, Touch, Back
                  </div>
                </Collapsible>
                <Collapsible trigger="⇰ Level 6" open="true">
                  <div
                    onClick={() => {
                      setPdf("EyeMovements/6LetterCharts2Instruct.pdf");
                      setActivityShown(false);
                    }}
                  >
                    Letter Charts 2
                  </div>
                  <div
                    onClick={() => {
                      setPdf("EyeMovements/6ThumbRotationInstruct.pdf");
                      setActivityShown(false);
                    }}
                  >
                    Thumb Rotation
                  </div>
                </Collapsible>
                <Collapsible trigger="⇰ Level 7" open="true">
                  <div
                    onClick={() => {
                      setPdf("EyeMovements/7StarJumpsInstruct.pdf");
                      setActivityShown(false);
                    }}
                  >
                    Star Jumps
                  </div>
                  <div
                    onClick={() => {
                      setPdf("EyeMovements/7LetterCharts3Instruct.pdf");
                      setActivityShown(false);
                    }}
                  >
                    Letter Charts 3
                  </div>
                </Collapsible>
                <Collapsible trigger="⇰ Level 8" open="true">
                  <div
                    onClick={() => {
                      setPdf("EyeMovements/8MovingLetterChartInstruct.pdf");
                      setActivityShown(false);
                    }}
                  >
                    Moving Letter Chart
                  </div>
                </Collapsible>
                <Collapsible trigger="⇰ Level 9" open="true">
                  <div
                    onClick={() => {
                      setPdf("EyeMovements/9RotatingLetterChartInstruct.pdf");
                      setActivityShown(false);
                    }}
                  >
                    Rotating Letter Chart
                  </div>
                </Collapsible>
              </Collapsible>
              <Collapsible trigger="⇰ Turning on your Brain">
                <Collapsible trigger="⇰ Level 1" open="true">
                  <div
                    onClick={() => {
                      setPdf("TurningOnYourBrain/1AngelsInTheSnowInstruct.pdf");
                      setActivityShown(false);
                    }}
                  >
                    Angels in the Snow
                  </div>
                  <div
                    onClick={() => {
                      setPdf("TurningOnYourBrain/1DimensionsInstruct.pdf");
                      setActivityShown(false);
                    }}
                  >
                    Dimensions
                  </div>
                  <div
                    onClick={() => {
                      setPdf("TurningOnYourBrain/1FingerThinkingInstruct.pdf");
                      setActivityShown(false);
                    }}
                  >
                    Finger Thinking
                  </div>
                  <div
                    onClick={() => {
                      setPdf("TurningOnYourBrain/1FingerThinking2Instruct.pdf");
                      setActivityShown(false);
                    }}
                  >
                    Finger Thinking 2
                  </div>
                  <div
                    onClick={() => {
                      setPdf("TurningOnYourBrain/1FindTheShapeInstruct.pdf");
                      setActivityShown(false);
                    }}
                  >
                    Find the Shape
                  </div>
                </Collapsible>
                <Collapsible trigger="⇰ Level 2" open="true">
                  <div
                    onClick={() => {
                      setPdf("TurningOnYourBrain/2EyeTracingInstruct.pdf");
                      setActivityShown(false);
                    }}
                  >
                    Eye Tracing
                  </div>
                  <div
                    onClick={() => {
                      setPdf("TurningOnYourBrain/2FingerThinking3Instruct.pdf");
                      setActivityShown(false);
                    }}
                  >
                    Finger Thinking 3
                  </div>
                  <div
                    onClick={() => {
                      setPdf(
                        "TurningOnYourBrain/2AngelsInTheSnowStopInstruct.pdf"
                      );
                      setActivityShown(false);
                    }}
                  >
                    Angels in the Snow - Stop
                  </div>
                </Collapsible>
                <Collapsible trigger="⇰ Level 3" open="true">
                  <div
                    onClick={() => {
                      setPdf("TurningOnYourBrain/3FingerThinking4Instruct.pdf");
                      setActivityShown(false);
                    }}
                  >
                    Finger Thinking 4
                  </div>
                  <div
                    onClick={() => {
                      setPdf(
                        "TurningOnYourBrain/3AngelsInTheSnowStopStartInstruct.pdf"
                      );
                      setActivityShown(false);
                    }}
                  >
                    Angels in the Snow - Stop/Start
                  </div>
                  <div
                    onClick={() => {
                      setPdf(
                        "TurningOnYourBrain/3SpatialRelationsInstruct.pdf"
                      );
                      setActivityShown(false);
                    }}
                  >
                    Spatial Relations
                  </div>
                </Collapsible>
                <Collapsible trigger="⇰ Level 4" open="true">
                  <div
                    onClick={() => {
                      setPdf(
                        "TurningOnYourBrain/4AngelsInTheSnowStopStart2Instruct.pdf"
                      );
                      setActivityShown(false);
                    }}
                  >
                    Angels in the Snow - Stop/Start 2
                  </div>
                  <div
                    onClick={() => {
                      setPdf("TurningOnYourBrain/4CountingLettersInstruct.pdf");
                      setActivityShown(false);
                    }}
                  >
                    Counting Letters
                  </div>
                </Collapsible>
                <Collapsible trigger="⇰ Level 5" open="true">
                  <div
                    onClick={() => {
                      setPdf(
                        "TurningOnYourBrain/5AngelsInTheSnowCodedInstruct.pdf"
                      );
                      setActivityShown(false);
                    }}
                  >
                    Angels in the Snow - Coded
                  </div>
                </Collapsible>
                <Collapsible trigger="⇰ Level 6" open="true">
                  <div
                    onClick={() => {
                      setPdf("TurningOnYourBrain/6BinocularStringInstruct.pdf");
                      setActivityShown(false);
                    }}
                  >
                    Binocular String
                  </div>
                </Collapsible>
                <Collapsible trigger="⇰ Level 7" open="true">
                  <div
                    onClick={() => {
                      setPdf(
                        "TurningOnYourBrain/7BinocularString2Instruct.pdf"
                      );
                      setActivityShown(false);
                    }}
                  >
                    Binocular String 2
                  </div>
                </Collapsible>
                <Collapsible trigger="⇰ Level 8" open="true">
                  <div
                    onClick={() => {
                      setPdf("TurningOnYourBrain/8FindingLettersInstruct.pdf");
                      setActivityShown(false);
                    }}
                  >
                    Finding Letters
                  </div>
                  <div
                    onClick={() => {
                      setPdf("TurningOnYourBrain/83DotCardInstruct.pdf");
                      setActivityShown(false);
                    }}
                  >
                    3 Dot Card
                  </div>
                </Collapsible>
                <Collapsible trigger="⇰ Level 9" open="true">
                  <div
                    onClick={() => {
                      setPdf("TurningOnYourBrain/9WordsOnTheRunInstruct.pdf");
                      setActivityShown(false);
                    }}
                  >
                    Words on the Run
                  </div>
                </Collapsible>
              </Collapsible>
              <Collapsible trigger="⇰ Eye &amp; Hand">
                <Collapsible trigger="⇰ Level 1" open="true">
                  <div
                    onClick={() => {
                      setPdf("Eye&Hand/1TemplatesInstruct.pdf");
                      setActivityShown(false);
                    }}
                  >
                    Templates
                  </div>
                </Collapsible>
                <Collapsible trigger="⇰ Level 2" open="true">
                  <div
                    onClick={() => {
                      setPdf("Eye&Hand/2ChalkboardRotationsInstruct.pdf");
                      setActivityShown(false);
                    }}
                  >
                    Chalkboard Rotations
                  </div>
                  <div
                    onClick={() => {
                      setPdf("Eye&Hand/2TwoHandedLinesInstruct.pdf");
                      setActivityShown(false);
                    }}
                  >
                    Two Handed Lines
                  </div>
                </Collapsible>
                <Collapsible trigger="⇰ Level 3" open="true">
                  <div
                    onClick={() => {
                      setPdf("Eye&Hand/3RacetrackInstruct.pdf");
                      setActivityShown(false);
                    }}
                  >
                    Racetrack
                  </div>
                </Collapsible>
                <Collapsible trigger="⇰ Level 4" open="true">
                  <div
                    onClick={() => {
                      setPdf("Eye&Hand/4TwoHandedCirclesInstruct.pdf");
                      setActivityShown(false);
                    }}
                  >
                    Two Handed Circles
                  </div>
                  <div
                    onClick={() => {
                      setPdf("Eye&Hand/4CirclingNumbersInstruct.pdf");
                      setActivityShown(false);
                    }}
                  >
                    Circling Numbers
                  </div>
                </Collapsible>
                <Collapsible trigger="⇰ Level 5" open="true">
                  <div
                    onClick={() => {
                      setPdf("Eye&Hand/5TwoHandedSquaresInstruct.pdf");
                      setActivityShown(false);
                    }}
                  >
                    Two Handed Squares
                  </div>
                </Collapsible>
                <Collapsible trigger="⇰ Level 6" open="true">
                  <div
                    onClick={() => {
                      setPdf("Eye&Hand/6WritingPatternsInstruct.pdf");
                      setActivityShown(false);
                    }}
                  >
                    Writing Patterns
                  </div>
                </Collapsible>
                <Collapsible trigger="⇰ Level 7" open="true">
                  <div
                    onClick={() => {
                      setPdf("Eye&Hand/7TwoHandedSquare&TriangleInstruct.pdf");
                      setActivityShown(false);
                    }}
                  >
                    Two Handed Square &amp; Triangle
                  </div>
                </Collapsible>
              </Collapsible>
              <Collapsible trigger="⇰ Charts">
                <div
                  onClick={() => {
                    setPdf("Charts/FindTheShape.pdf");
                    setActivityShown(false);
                  }}
                >
                  Find The Shape
                </div>
                <div
                  onClick={() => {
                    setPdf("Charts/SteppingArrows.pdf");
                    setActivityShown(false);
                  }}
                >
                  Stepping Arrows
                </div>
                <div
                  onClick={() => {
                    setPdf("Charts/Pluto.pdf");
                    setActivityShown(false);
                  }}
                >
                  Pluto
                </div>
                <div
                  onClick={() => {
                    setPdf("Charts/Square&Circle.pdf");
                    setActivityShown(false);
                  }}
                >
                  Square &amp; Circle
                </div>
                <div
                  onClick={() => {
                    setPdf("Charts/BallBounce.pdf");
                    setActivityShown(false);
                  }}
                >
                  Ball Bounce
                </div>
                <div
                  onClick={() => {
                    setPdf("Charts/LetterCharts.pdf");
                    setActivityShown(false);
                  }}
                >
                  Letter Charts
                </div>
                <div
                  onClick={() => {
                    setPdf("Charts/AngelsInTheSnowCoded.pdf");
                    setActivityShown(false);
                  }}
                >
                  Angels in The Snow - Coded
                </div>
                <div
                  onClick={() => {
                    setPdf("Charts/HalopinHands1.pdf");
                    setActivityShown(false);
                  }}
                >
                  Halopin Hands 1
                </div>
                <div
                  onClick={() => {
                    setPdf("Charts/HalopinHands2.pdf");
                    setActivityShown(false);
                  }}
                >
                  Halopin Hands 2
                </div>
                <div
                  onClick={() => {
                    setPdf("Charts/Pointing.pdf");
                    setActivityShown(false);
                  }}
                >
                  Pointing
                </div>
                <div
                  onClick={() => {
                    setPdf("Charts/DirectionalTriangles.pdf");
                    setActivityShown(false);
                  }}
                >
                  Directional Triangles
                </div>
                <div
                  onClick={() => {
                    setPdf("Charts/StarJumps.pdf");
                    setActivityShown(false);
                  }}
                >
                  Star Jumps
                </div>
                <div
                  onClick={() => {
                    setPdf("Charts/MouseInAMaze.pdf");
                    setActivityShown(false);
                  }}
                >
                  Mouse In A Maze
                </div>
                <div
                  onClick={() => {
                    setPdf("Charts/Timing.pdf");
                    setActivityShown(false);
                  }}
                >
                  Timing
                </div>
              </Collapsible>
            </div>
          </div>
          <div className="pdfbox">
            <div>
              <Button
                variant="outline-dark"
                onClick={() => {
                  nextView("Instruction");
                }}
              >
                Instruction Sheet
              </Button>
              <Button
                variant="outline-secondary"
                onClick={() => {
                  nextView("Activity");
                }}
              >
                Activity{" "}
              </Button>
              <Button
                variant="outline-secondary"
                onClick={() => {
                  nextView("Record");
                }}
              >
                Recording Sheet
              </Button>
            </div>
            <div className={ActivityShown ? "activity" : "pdf"}>
              {ActivityShown && (
                <Activity
                  activityName={ActivityName}
                  className="activity"
                ></Activity>
              )}
              {!ActivityShown && <PDFViewer file={Pdf} />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
