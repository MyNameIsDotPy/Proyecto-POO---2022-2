import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import PrimaryPinkButton from '../components/primary-pink-button'
import Footer from '../components/footer'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Soft UI Pro</title>
        <meta property="og:title" content="Soft UI Pro" />
      </Helmet>
      <Header rootClassName="header-root-class-name"></Header>
      <div className="home-hero">
        <div className="home-container1">
          <div className="home-card">
            <div className="home-container2"></div>
            <h1 className="home-text">Descubre la </h1>
            <h1 className="home-text1">nueva forma de presentar tu CV</h1>
            <span className="home-text2">
              Con indicaciones paso a paso para que potencies todo lo que eres,
              sin costo
            </span>
            <PrimaryPinkButton
              button="Ingresar"
              rootClassName="primary-pink-button-root-class-name"
            ></PrimaryPinkButton>
            <div className="home-container3">
              <div className="home-container4"></div>
            </div>
          </div>
        </div>
      </div>
      <img
        alt="image"
        src="/playground_assets/curved6-1500h.jpg"
        className="home-image"
      />
      <section className="home-testimonials">
        <img
          alt="image"
          src="/playground_assets/waves-white.svg"
          className="home-image1"
        />
      </section>
      <section className="home-contaier">
        <div className="home-container5">
          <div className="home-container6">
            <PrimaryPinkButton
              button="Ingresar"
              rootClassName="primary-pink-button-root-class-name"
            ></PrimaryPinkButton>
          </div>
          <div className="home-container7">
            <PrimaryPinkButton
              button="Ingresar"
              rootClassName="primary-pink-button-root-class-name"
            ></PrimaryPinkButton>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </div>
  )
}

export default Home
