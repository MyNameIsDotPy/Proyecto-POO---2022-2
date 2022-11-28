import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import PrimaryPinkButton from '../components/primary-pink-button'
import Footer from '../components/footer'
import UploadPhoto from "../components/upload-photo";
import "./../styles/form-container.css";
import './home.css'
import FormInfo from "../components/form-info";
import BackGround from "../svg/layered-waves-haikei.svg"
import SVGBackground from "../components/SVGBackground";

const Home2 = (props) => {

    return (
        <div className="home-container">
            <SVGBackground image={BackGround}>
                <FormInfo/>
            </SVGBackground>
        </div>
    )
}

export default Home2
