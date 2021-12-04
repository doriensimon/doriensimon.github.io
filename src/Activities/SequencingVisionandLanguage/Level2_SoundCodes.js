import Button from "react-bootstrap/Button";
import React from 'react';

class Level2_SoundCodes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            display0: <div></div>,
            display1: <div></div>,
            display2: <div></div>,
        };
        this.nextActivity = this.nextActivity.bind(this);
        this.playSounds = this.playSounds.bind(this);
    }

    componentDidMount() {
        console.log(React.version);
    }

    playSounds(){
        //TODO: play long and short beeping sounds corresponding to display
    }

    nextActivity(e){
        this.setState({show: false})
        for(let i = 0; i < 3; i++){
            let circle_display = Math.random()
            if(circle_display < 0.5){
                console.log("long" + (i))
                //long
                this.setState({["display" + i]: "long_rectangle"})
            }
            else{
                console.log("short" + (i))
                //short
                this.setState({["display" + i]: "short_rectangle"})

            }
        }
        this.playSounds();
        this.setState({show: true})
    }

    render() {
        return (
            <div className="activity_box">
                {this.state.show &&
                    <div className="container">
                        <div className={this.state.display0}/>
                        <div className={this.state.display1}/>
                        <div className={this.state.display2}/>
                    </div>
                }
                <div className="button_section">
                    <Button onClick={() => this.nextActivity()}>Start</Button>
                </div>
            </div>
        );
    }
}

export default Level2_SoundCodes;