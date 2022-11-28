import React from "react";
import "../styles/SVGBack.css";
class SVGBackground extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            image: props.image
        }
    }
    render() {
        return (
            <div className={"SVGBack"}>
                <img src={this.state.image}/>
                {this.props.children}
            </div>
        );
    }
}

export default SVGBackground;