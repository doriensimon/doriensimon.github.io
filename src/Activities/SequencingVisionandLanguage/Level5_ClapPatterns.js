import Button from "react-bootstrap/Button";
import React from 'react';

class Level5_ClapPatterns extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            display0: <div></div>,
            display1: <div></div>,
            display2: <div></div>,
            display3: <div></div>,
        };
        this.nextActivity = this.nextActivity.bind(this);
    }

    componentDidMount() {
        console.log(React.version);
    }

    nextActivity(e){
        this.setState({show: false})
        for(let i = 0; i < 4; i++){
            let circle_display = Math.random()
            if(circle_display < 0.5){
                //pair
                this.setState({["display" + (i)]: 
                    <div>
                        <span className="green_circle"></span>
                        <span className="green_circle"></span>
                    </div>
                })
            }
            else{
                //single
                this.setState({["display" + (i)]: 
                    <span className="green_circle"></span>
                })
            }
        }
        this.setState({show: true})
    }

    render() {
        return (
            <div className="activity_box">
                {this.state.show &&
                    <div className="container">
                        {this.state.display0}
                        {this.state.display1}
                        {this.state.display2}
                        {this.state.display3}
                    </div>
                }
                <div className="button_section">
                    <Button onClick={() => this.nextActivity()}>Next</Button>
                </div>
            </div>
        );
    }
}

export default Level5_ClapPatterns;