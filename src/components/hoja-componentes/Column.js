import React from "react";

import "../../styles/Column.css";

class Column extends React.Component{
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return(
            <div className={"column-container"}>
                {this.props.children}
            </div>
        );
    }
}

export default Column;