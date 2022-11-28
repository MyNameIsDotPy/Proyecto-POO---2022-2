import React from "react";
import "./../styles/recomendation-component.css"


import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import {faStar, faXmark} from "@fortawesome/free-solid-svg-icons";
import "../styles/modal.css"

class RecomendationComponent extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            text: props.text || "DEFAULT TOOLTIP",
            id: this.uid(),
            idInner: Math.random()
        }
        this.handleChange = this.handleChange.bind(this);
    }

    uid() {
        return (performance.now().toString(36)+Math.random().toString(36)).replace(/\./g,"");
    };

    handleChange(e){

    }
    render() {

        return (

            <section className="wrp">
                <span className="modal-trigger"><a href={"#"+this.state.id} className="bt" aria-role="button"><FontAwesomeIcon icon={faStar}/></a></span>
                <div className="wf-modal" aria-hidden="true" id={this.state.id}>
                    <article className="wf-dialog-modal">
                        <header className="wf-header-modal">
                            <h2 className="tit">{this.props.children[0]}</h2>
                            <span className="close"><a href="#" className="bt" aria-hidden="true"><FontAwesomeIcon icon={faXmark}/></a></span>
                        </header>
                        <div className="wf-content-modal">
                            <p>{this.props.children[1]}</p>
                        </div>
                        <footer className="wf-footer-modal">
                            <span className="ok"><a href="#" className="bt" aria-hidden="true">ok</a></span>
                        </footer>
                    </article>
                </div>
            </section>

        );
    }


}

export default RecomendationComponent;