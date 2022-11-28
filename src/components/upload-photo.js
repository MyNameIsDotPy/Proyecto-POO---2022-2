import React from "react";
import "./../styles/form-container.css"


import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus} from "@fortawesome/free-solid-svg-icons";
class UploadComponent extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            file:  props.file || ""
        }
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e){
        console.log(e.target.files);
        console.log("(ZXS#)1")
        this.setState({file: e.target.files[0]});
        console.log("(ZXS#)2")
    }
    render() {
        let content;
        if(this.state.file === ""){

            content = (<FontAwesomeIcon icon={faPlus} />);
        }
        else{
            content = this.state.file && (<img id={"UploadedImage"} src={URL.createObjectURL(this.state. file)} alt={""}/>);
        }

        return (
            <div className={"upload-component"}>
                <label className={"upload-button button-component"}>
                    <input type={"file"} onChange={this.handleChange}/>
                    {content}


                </label>
            </div>
        );
    }


}

export default UploadComponent;