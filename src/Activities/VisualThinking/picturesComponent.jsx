import Dropdown from "react-bootstrap/Dropdown";

export default function FlashingPictureButtons(props) {
  return (
    <div style={{ display: "flex" }}>
      <Dropdown style={{ display: props.FlashRateDisplay }}>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Flash Rate
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item onClick={() => props.flashRate(100)}>
            0.10
          </Dropdown.Item>
          <Dropdown.Item onClick={() => props.flashRate(250)}>
            0.25
          </Dropdown.Item>
          <Dropdown.Item onClick={() => props.flashRate(500)}>
            0.50
          </Dropdown.Item>
          <Dropdown.Item onClick={() => props.flashRate(600)}>
            0.60
          </Dropdown.Item>
          <Dropdown.Item onClick={() => props.flashRate(700)}>
            0.70
          </Dropdown.Item>
          <Dropdown.Item onClick={() => props.flashRate(800)}>
            0.80
          </Dropdown.Item>
          <Dropdown.Item onClick={() => props.flashRate(900)}>
            0.90
          </Dropdown.Item>
          <Dropdown.Item onClick={() => props.flashRate(1000)}>
            1.00
          </Dropdown.Item>
          <Dropdown.Item onClick={() => props.flashRate(1200)}>
            1.20
          </Dropdown.Item>
          <Dropdown.Item onClick={() => props.flashRate(1400)}>
            1.40
          </Dropdown.Item>
          <Dropdown.Item onClick={() => props.flashRate(1600)}>
            1.60
          </Dropdown.Item>
          <Dropdown.Item onClick={() => props.flashRate(1800)}>
            1.80
          </Dropdown.Item>
          <Dropdown.Item onClick={() => props.flashRate(2000)}>
            2.00
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Dropdown style={{ display: props.hiddenLetterDisplay }}>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Hidden Letter
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item
            onClick={() =>
              props.hiddenLetter("/VisualThinking/FlashingPicturesLetters/")
            }
          >
            Use Hidden Letter
          </Dropdown.Item>
          <Dropdown.Item
            onClick={() =>
              props.hiddenLetter("/VisualThinking/FlashingPictures/")
            }
          >
            Don't Use Hidden Letter
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Level
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item onClick={() => props.changeLevel("Level1")}>
            Level 1
          </Dropdown.Item>
          <Dropdown.Item onClick={() => props.changeLevel("Level2")}>
            Level 2
          </Dropdown.Item>
          <Dropdown.Item onClick={() => props.changeLevel("Level3")}>
            Level 3
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}
