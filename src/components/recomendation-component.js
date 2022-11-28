import React from "react";
import "./../styles/recomendation-component.css"


import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import {faStar} from "@fortawesome/free-solid-svg-icons";
import "../styles/modal.css"

class RecomendationComponent extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            text: props.text || "DEFAULT TOOLTIP",
            id: Math.random()
        }
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e){

    }
    render() {

        return (
            <div className={"recomendation-component"}>

                <div className={"modal-container"}>
                    <input id={this.state.id} type="checkbox"></input>
                    <label htmlFor={this.state.id}><FontAwesomeIcon icon={faStar}/></label>
                    <div className="modal">
                        <div className="content">{this.props.children}</div>
                    </div>
                </div>
            </div>
        );
    }


}

export default RecomendationComponent;