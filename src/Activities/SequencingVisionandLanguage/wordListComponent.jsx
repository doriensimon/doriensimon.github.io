import Dropdown from "react-bootstrap/Dropdown";

export default function FlashingPictureButtons(props) {
  return (
    <div style={{ display: "flex" }}>
      <Dropdown style={{ display: props.FlashRateDisplay }}>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Beat/Flash Rate
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
          Word List
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item
            onClick={() =>
              props.hiddenLetter("/VisualThinking/FlashingPicturesLetters/")
            }
          >
            Real Worlds 1
          </Dropdown.Item>
          <Dropdown.Item
            onClick={() =>
              props.hiddenLetter("/VisualThinking/FlashingPictures/")
            }
          >
            Real Words 2
          </Dropdown.Item>
          <Dropdown.Item
            onClick={() =>
              props.hiddenLetter("/VisualThinking/FlashingPictures/")
            }
          >
            Everything
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Presentation
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item onClick={() => props.changeLevel("Level1")}>
            Word Chart To A Beat
          </Dropdown.Item>
          <Dropdown.Item onClick={() => props.changeLevel("Level2")}>
            Fast Naming
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Letter Case
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item onClick={() => props.changeLevel("Level1")}>
            Upper
          </Dropdown.Item>
          <Dropdown.Item onClick={() => props.changeLevel("Level2")}>
            Lower
          </Dropdown.Item>
          <Dropdown.Item onClick={() => props.changeLevel("Level3")}>
            Mixed
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Character Size
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item onClick={() => props.changeLevel("Level1")}>
            Small (24 point)
          </Dropdown.Item>
          <Dropdown.Item onClick={() => props.changeLevel("Level2")}>
            Normal (36 point)
          </Dropdown.Item>
          <Dropdown.Item onClick={() => props.changeLevel("Level3")}>
            Medium (48 point)
          </Dropdown.Item>
          <Dropdown.Item onClick={() => props.changeLevel("Level3")}>
            Large (60 point)
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}
