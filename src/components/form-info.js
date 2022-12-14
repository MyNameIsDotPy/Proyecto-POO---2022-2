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
                <form onSubmit={"#"}>
                    <div className={"form-column-section"}>
                        <div className={"section-head"}>
                            Datos Personales
                        </div>
                        <div className={"form-row-section"}>
                            <div className={"form-column-section"}>
                                <div className={"input-section"}>
                                    <label> Nombre </label>
                                    <input type={"text"} id="Nombre" placeholder={"Nombre"}/>
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
                                    <input type={"text"} placeholder={"Apellido"} id="Apellido" />
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
                                    <label> Profesi??n </label>
                                    <input type={"text"} placeholder={"Profesi??n"} id="Profesion" />
                                </div>
                                <div className={"input-section"}>
                                    <label> Correo Electronico </label>
                                    <input type={"email"} placeholder={"Correo Electronico"} id="email" />
                                </div>
                                <div className={"form-row-section"}>
                                    <div className={"input-section"}>
                                        <label> Telefono </label>
                                        <input type={"tel"} placeholder={"Telefono"}  id="telefono" />
                                    </div>
                                    <div className={"input-section"}>
                                        <label> LinkedIn </label>
                                        <input type={"search"} placeholder={"LinkedIn"} id="linkedin" />
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className={"section-head"}>
                            Descripci??n del perfil
                        </div>
                        <div className={"form-row-section"}>
                            <div className={"input-section"}>
                                <label> Descripci??n </label>
                                <RecomendationComponent>
                                    <div className={"titulo"}>
                                        Recomendacion!
                                    </div>
                                    <div className={"contenido"}>
                                        Para esta secci??n, se permite un m??ximo de 250 caracteres, de igual forma, en el siguiente enlace encontrar??s informaci??n importante a la hora de escribir la descripci??n de tu perfil
                                    </div>
                                </RecomendationComponent>
                                <textarea maxLength={250}  id="Descr1" >

                                </textarea>
                            </div>
                        </div>
                        <div className={"section-head"}>
                            Formaci??n
                        </div>
                        <div className={"form-row-section"}>

                            <div className={"input-section"}>
                                <label> Institucion </label>
                                <input type={"text"} placeholder={"Institucion"} id="Institucion" />
                            </div>
                            <div className={"input-section"}>
                                <label> Titulo </label>
                                <input type={"text"} placeholder={"Titulo"} id="Titulo" />
                            </div>
                        </div>
                        <div className={"form-row-section"}>
                            <div className={"form-row-section"}>
                                <div className={"input-section"}>
                                    <label> Fecha inicio </label>
                                    <input type={"date"} placeholder={"Fecha Inicial"} id="InitDate" />
                                </div>
                                <div className={"input-section"}>
                                    <label> Fecha final </label>
                                    <input type={"date"} placeholder={"Fecha Final"}  id="FinDate" />
                                </div>
                            </div>

                            <div className={"input-section"}>
                                <label> Ciudad </label>
                                <input type={"text"} placeholder={"Ciudad"}  id="City" />
                            </div>
                        </div>
                        <div className={"form-row-section"}>
                            <div className={"input-section"}>
                                <label> Descripci??n </label>
                                <textarea  id="Descr2" >

                                </textarea>
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
                                    A la hora de ingresar tus habilidades, es obligatorio, que agregues m??nimo 4 habilidades, para que as?? este campo de tu hoja de vida quede completo.
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