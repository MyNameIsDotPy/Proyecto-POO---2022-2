import React from "react";
import "../../styles/Container.css";
class Container extends React.Component{
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return(
            <div className={"section-container"}>
                {this.props.children}
            </div>
        );
    }
}

export default Container;