import Button from "react-bootstrap/Button";
import React from 'react';
import { random } from "lodash";
import Dropdown from "react-bootstrap/Dropdown";

class Level5_MemoryDots extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            numDots: 3,
            level: 1,
            gridSize: 5,
            level1Indexes:  [1, 2, 4, 7, 8],
            level2Indexes: [1, 2, 3, 4, 5, 6, 7, 8, 9],
            correctIndexes: [0, 0, 0, 0, 0, 0],
            clickNum: 0,
            clickedDots: [0, 0, 0, 0, 0, 0],
            checked: true,
            started: false,
        };
        this.startActivity = this.startActivity.bind(this);
        this.checkActivity = this.checkActivity.bind(this);
        this.setLevel = this.setLevel.bind(this);
        this.setNumDots = this.setNumDots.bind(this);
        this.clickDot = this.clickDot.bind(this);
        this.iterateCorrectDots = this.iterateCorrectDots.bind(this);
    }

    componentDidMount() {
        console.log(React.version);
    }

    resetGrid(gridSize){
        for(let i = 0; i < 9; i++){
            this.setState({["number" + i ]: ""})
            this.setState({["circle" + i ]: "silverfill"})
        }
    }

    startActivity(){
        this.setState({started: true})
        this.setState({checked: true})
        this.setState({clickNum: 1})

        let indexList = []
        let correctIndexList = this.state.correctIndexes
        if(this.state.level == 1){
            indexList = this.state.level1Indexes
        } else{
            indexList = this.state.level2Indexes
        }

        //set all numbers in dots to null and all dots to silver
        this.resetGrid()

        //select x=numDots dots randomly and play each for x seconds
        for(let i = 0; i < this.state.numDots; i++){
            let cont = true
            while(cont){
                let randomIndex = Math.floor(Math.random() * indexList.length)
                let currDot = indexList[randomIndex]
                if( !correctIndexList.includes(currDot)){
                    cont = false
                    console.log(currDot)
                    correctIndexList[i] = currDot
                }
            }
        }
        this.iterateCorrectDots(correctIndexList, 0, this.state.numDots)
        this.setState({correctIndexes: correctIndexList})
        console.log(correctIndexList)
    }

    iterateCorrectDots(correctIndexes, i, numDots){
        this.setState({["circle" + correctIndexes[i]]: "greenfill"})
        setTimeout(() => {
            this.setState({["circle" + correctIndexes[i]]: "silverfill"})
            if(i < numDots){
                this.iterateCorrectDots(correctIndexes, i+1, numDots)
            } else{
                this.setState({started: false})
                this.setState({checked: false})
            }
        }, 1000);
    }

    checkActivity(){
        //just turn circles red or green depending on if the order and placement was correct
        for(let i = 0; i < this.state.gridSize; i++){
            console.log("correctIndex[i] " + this.state.correctIndexes[i])
            console.log("clickedDots[i] " + this.state.clickedDots[i])
            if(this.state.correctIndexes[i] == this.state.clickedDots[i]){
                this.setState({["circle" + this.state.clickedDots[i]] : "greenfill"})
            } else{
                this.setState({["circle" + this.state.clickedDots[i]] : "redfill"})
            }
        }
        this.setState({checked: true})
    }

    clickDot(dotIndex){
        if(!this.state.started){
            if(this.state.clickNum <= this.state.numDots){
                this.setState({["number" + dotIndex] : this.state.clickNum  })
                let clickedDots = this.state.clickedDots
                clickedDots[this.state.clickNum - 1] = dotIndex
                console.log("clicked " + dotIndex + " as #" + (this.state.clickNum-1) + " click" ) 

                this.state.clickNum = this.state.clickNum + 1
                this.state.clickedDots = clickedDots
                console.log("clicked dots " + this.state.clickedDots)
            } 
        }
    }

    setLevel(e){
        this.setState({level: e})
        if(e == 1){
            this.setState({gridSize: 5})
        } else{
            this.setState({gridSize: 9})
        }
        this.resetGrid()
    }

    setNumDots(e){
        this.setState({numDots: e})
        this.resetGrid(this.state.gridSize)
    }

    render() {
        return (
            <div className="activity_box">
                <div className="options">
                    <Dropdown>
                        <Dropdown.Toggle id="dropdown-basic">Level</Dropdown.Toggle>
                        <Dropdown.Menu className="option_select">
                            <Dropdown.Item onClick={() => this.setLevel(1)}  active={this.state.level == 1 ? true : false}>
                                Level 1
                            </Dropdown.Item>
                            <Dropdown.Item onClick={() => this.setLevel(2)} active={this.state.level == 2 ? true : false}>
                                Level 2
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown>
                        <Dropdown.Toggle id="dropdown-basic">Number</Dropdown.Toggle>
                        <Dropdown.Menu className="option_select">
                            <Dropdown.Item onClick={() => this.setNumDots(3)} active={this.state.numDots == 3 ? true : false}>
                                3 Dots
                            </Dropdown.Item>
                            <Dropdown.Item onClick={() => this.setNumDots(4)} active={this.state.numDots == 4 ? true : false}>
                                4 Dots
                            </Dropdown.Item>
                            <Dropdown.Item onClick={() => this.setNumDots(5)} active={this.state.numDots == 5 ? true : false}>
                                5 Dots
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
                <div className="container">
                    <div id="columns">
                        <div id="row1">
                            <div className="circle" id={this.state.circle1} onClick={() => this.clickDot(1)}>{this.state.number1}</div>
                            <div className="circle" id={this.state.circle2} onClick={() => this.clickDot(2)}>{this.state.number2}</div>
                            {this.state.level == 2 && <div className="circle" id={this.state.circle3} onClick={() => this.clickDot(3)}>{this.state.number3}</div>}
                        </div>
                        <div id="row2">
                            <div className="circle" id={this.state.circle4} onClick={() => this.clickDot(4)}>{this.state.number4}</div>
                            {this.state.level == 2 && <div className="circle" id={this.state.circle5} onClick={() => this.clickDot(5)}>{this.state.number5}</div>}
                            {this.state.level == 2 && <div className="circle" id={this.state.circle6} onClick={() => this.clickDot(6)}>{this.state.number6}</div>}
                        </div> 
                        <div id="row3">
                            <div className="circle" id={this.state.circle7} onClick={() => this.clickDot(7)}>{this.state.number7}</div>
                            <div className="circle" id={this.state.circle8} onClick={() => this.clickDot(8)}>{this.state.number8}</div>
                            {this.state.level == 2 && <div className="circle" id={this.state.circle9} onClick={() => this.clickDot(9)}>{this.state.number9}</div>}
                        </div>
                    </div>
                </div>
                <div className="button_section">
                    <Button disabled={this.state.checked} onClick={() => this.checkActivity()}>Check</Button>
                    <Button disabled={this.state.started} onClick={() => this.startActivity()}>Start</Button>
                </div>
            </div>
        );
    }
}

export default Level5_MemoryDots;