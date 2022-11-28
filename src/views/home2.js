import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import PrimaryPinkButton from '../components/primary-pink-button'
import Footer from '../components/footer'
import UploadPhoto from "../components/upload-photo";
import "./../styles/form-container.css";
import './home.css'
import FormInfo from "../components/form-info";


const Home2 = (props) => {

    return (
        <div className="home-container">
            <FormInfo/>
        </div>
    )
}

export default Home2
