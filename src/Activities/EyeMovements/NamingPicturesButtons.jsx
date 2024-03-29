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
          Rows
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item onClick={() => props.ChangeRow(1)}>
            1 Rows
          </Dropdown.Item>
          <Dropdown.Item onClick={() => props.ChangeRow(2)}>
            2 Rows
          </Dropdown.Item>
          <Dropdown.Item onClick={() => props.ChangeRow(3)}>
            3 Rows
          </Dropdown.Item>
          <Dropdown.Item onClick={() => props.ChangeRow(4)}>
            4 Rows
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Mode
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item onClick={() => props.changeLevel("Level1")}>
            Normal
          </Dropdown.Item>
          <Dropdown.Item onClick={() => props.changeLevel("Level2")}>
            To a beat
          </Dropdown.Item>
          <Dropdown.Item onClick={() => props.changeLevel("Level3")}>
            Jumping Symbols
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}
