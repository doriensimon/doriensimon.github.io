import Button from "react-bootstrap/Button";
import React from 'react';

class Level4_VisualSequence extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            shape1: null,
            shape2: null,
            shape3: null,
            showShape1: false,
            showShape2: false,
            showShape3: false,
            showAll: false,
            disableStart: false,
            disableCheck: true,
        };
        this.startActivity = this.startActivity.bind(this);
        this.checkActivity = this.checkActivity.bind(this);
    }

    componentDidMount() {
        console.log(React.version);
    }

    startActivity(e){
        this.setState({disableStart: true})
        this.setState({disableCheck: true})
        if(e >= 4){
            this.setState({disableCheck: false})
            return
        }
        this.setState({showAll: false})
        let shape = Math.random()
        if(shape < 0.33){
            this.setState({["shape" + e]: "blue_triangle"})
        } else if (shape < 0.66){
            this.setState({["shape" + e]: "yellow_square"})
        } else {
            this.setState({["shape" + e]: "red_diamond"})
        }
        this.setState({["showShape" + e]: true})
        setTimeout(() => {
            this.setState({["showShape" + e]: false})
            this.startActivity(e + 1)
        }, 1000);
    }

    checkActivity(){
        this.setState({showAll: true})
        this.setState({disableCheck: true})
        this.setState({disableStart: false})
    }

    render() {
        return (
            <div className="activity_box">
                <div className="white_container">
                    {this.state.showShape1 && <div className={this.state.shape1} id="shape1"></div>}
                    {this.state.showShape2 && <div className={this.state.shape2} id="shape2"></div>}
                    {this.state.showShape3 && <div className={this.state.shape3} id="shape3"></div>}
                </div>
                {this.state.showAll && 
                    <div className="white_container_flex">
                        <div className={this.state.shape1}/>
                        <div className={this.state.shape2}/>
                        <div className={this.state.shape3}/>
                    </div>
                }
                <div className="button_section">
                    <Button disabled={this.state.disableCheck} onClick={() => this.checkActivity()}>Check</Button>
                    <Button disabled={this.state.disableStart} onClick={() => this.startActivity(1)}>Start</Button>
                </div>
            </div>
        );
    }
}

export default Level4_VisualSequence;