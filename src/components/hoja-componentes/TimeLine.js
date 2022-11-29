import React from "react";
import "../../styles/Timeline.css";

class TimeLine extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            events: []
        }
        this.setTimes.bind(this);
        this.componentDidMount.bind(this);
    }

    componentDidMount() {
        this.setTimes()
    }

    setTimes(){
        let elements = [];
        for(let i = 0; i<this.props.children.length; i++)
        {
            elements.push(this.props.children[i].props.children);
        }
        this.setState({events: elements});
    }

    render() {
        let elements = [];
        for(let i = 0; i<this.state.events.length; i++)
        {
            elements.push(
                <li className={"timeline-element"}>
                    {this.state.events[i]}
                </li>
            )
        }
        return(
            <div className="container">
                <div className="wrapper">
                    <h1> My Experience</h1>
                    <ul className="sessions">
                        {elements}
                    </ul>
                </div>
            </div>
        );
    }
}

export default TimeLine;