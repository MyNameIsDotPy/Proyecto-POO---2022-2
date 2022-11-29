import React from "react";

import "../styles/modal.css"
import "../styles/hoja.css";


import TimeLine from "../components/hoja-componentes/TimeLine";
import Column from "../components/hoja-componentes/Column";
import Container from "../components/hoja-componentes/container";
import ProfilePhoto from "../components/hoja-componentes/ProfilePhoto";
import Description from "../components/hoja-componentes/Description";
import Habilities from "../components/hoja-componentes/Habilities";

class Hoja extends React.Component{
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <div className={"hoja-componentes-container"}>
                <Container>
                    <Column>
                        <TimeLine>
                            <div>
                                HOLAsa
                            </div>
                            <div>
                                HOLAd
                            </div>
                            <div>
                                HOLAs
                            </div>
                            <div>
                                HOLAs
                            </div>
                            <div>
                                HOLAs
                            </div>
                            <div>
                                HOLAs
                            </div>
                            <div>
                                HOLAs
                            </div>

                        </TimeLine>
                    </Column>
                    <Column>
                        <TimeLine>
                            <div>
                                HOLA
                            </div>
                            <div>
                                HOLA1
                            </div>
                            <div>
                                HOLA2
                            </div>
                            <div>
                                HOLA3
                            </div>
                        </TimeLine>
                    </Column>
                </Container>
            </div>
        );
    }

}

export default Hoja;