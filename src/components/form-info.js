import React from "react";
import UploadPhoto from "./upload-photo";
import RecomendationComponent from "./recomendation-component";

import "../styles/modal.css"

class FromInfo extends React.Component{
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <div className={"form-container"}>
                <form>
                    <div className={"form-column-section"}>
                        <div className={"section-head"}>
                            Datos Personales
                        </div>
                        <div className={"form-row-section"}>
                            <div className={"form-column-section"}>
                                <div className={"input-section"}>
                                    <label> Nombre </label>
                                    <input type={"text"} placeholder={"Nombre"}/>
                                    <RecomendationComponent>
                                        <div className={"titulo"}>
                                            Recomendacion!
                                        </div>
                                        <div className={"contenido"}>
                                            Recuerda escribir bien tu nombre!
                                        </div>
                                    </RecomendationComponent>
                                </div>
                                <div className={"input-section"}>
                                    <label> Apellido </label>
                                    <input type={"text"} placeholder={"Apellido"}/>
                                </div>
                            </div>
                            <div className={"form-column-section"}>
                                <UploadPhoto/>
                                <RecomendationComponent>
                                    <div className={"titulo"}>
                                        Recomendacion!
                                    </div>
                                    <div className={"contenido"}>
                                        Recuerda subir tu foto con una buena calidad y en formato png, si quieres recibir recomendaciones para una buena foto, da clic en el siguiente enlace <a target="_blank" href={"https://fundacionadecco.org/blog/foto-curriculum/"}>https://fundacionadecco.org/blog/foto-curriculum/</a>
                                    </div>
                                </RecomendationComponent>
                            </div>
                        </div>
                        <div className={"form-row-section"}>
                            <div className={"form-column-section"}>
                                <div className={"input-section"}>
                                    <label> Profesión </label>
                                    <input type={"text"} placeholder={"Profesión"}/>
                                </div>
                                <div className={"input-section"}>
                                    <label> Correo Electronico </label>
                                    <input type={"email"} placeholder={"Correo Electronico"}/>
                                </div>
                                <div className={"form-row-section"}>
                                    <div className={"input-section"}>
                                        <label> Telefono </label>
                                        <input type={"tel"} placeholder={"Telefono"}/>
                                    </div>
                                    <div className={"input-section"}>
                                        <label> LinkedIn </label>
                                        <input type={"search"} placeholder={"LinkedIn"}/>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className={"section-head"}>
                            Descripción del perfil
                        </div>
                        <div className={"form-row-section"}>
                            <div className={"input-section"}>
                                <label> Descripción </label>
                                <RecomendationComponent>
                                    <div className={"titulo"}>
                                        Recomendacion!
                                    </div>
                                    <div className={"contenido"}>
                                        Para esta sección, se permite un máximo de 250 caracteres, de igual forma, en el siguiente enlace encontrarás información importante a la hora de escribir la descripción de tu perfil
                                    </div>
                                </RecomendationComponent>
                                <textarea maxLength={1000}>

                                </textarea>
                            </div>
                        </div>
                        <div className={"section-head"}>
                            Formación
                        </div>
                        <div className={"form-row-section"}>

                            <div className={"input-section"}>
                                <label> Institucion </label>
                                <input type={"text"} placeholder={"Institucion"}/>
                            </div>
                            <div className={"input-section"}>
                                <label> Titulo </label>
                                <input type={"text"} placeholder={"Titulo"}/>
                            </div>
                        </div>
                        <div className={"form-row-section"}>
                            <div className={"form-row-section"}>
                                <div className={"input-section"}>
                                    <label> Fecha inicio </label>
                                    <input type={"date"} placeholder={"Fecha Inicial"}/>
                                </div>
                                <div className={"input-section"}>
                                    <label> Fecha final </label>
                                    <input type={"date"} placeholder={"Fecha Final"}/>
                                </div>
                            </div>

                            <div className={"input-section"}>
                                <label> Ciudad </label>
                                <input type={"text"} placeholder={"Ciudad"}/>
                            </div>
                        </div>
                        <div className={"form-row-section"}>
                            <div className={"input-section"}>
                                <label> Descripción </label>
                                <textarea></textarea>
                            </div>
                        </div>
                        <div className={"section-head"}>
                            Habilidades
                        </div>
                        <div className={"form-row-section"}>
                            <RecomendationComponent>
                                <div className={"titulo"}>
                                    Recomendacion!
                                </div>
                                <div className={"contenido"}>
                                    A la hora de ingresar tus habilidades, es obligatorio, que agregues mínimo 4 habilidades, para que así este campo de tu hoja de vida quede completo.
                                    <a href={"https://www.orientacionparaelempleo.com/perfil-profesional-curriculum/"}>https://www.orientacionparaelempleo.com/perfil-profesional-curriculum/</a>
                                </div>
                            </RecomendationComponent>
                        </div>

                    </div>

                </form>
            </div>
        );
    }

}

export default FromInfo;