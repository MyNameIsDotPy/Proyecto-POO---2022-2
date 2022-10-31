import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import PrimaryPinkButton from './primary-pink-button'
import './header.css'

const Header = (props) => {
  return (
    <div data-role="Header" className={`header-header ${props.rootClassName} `}>
      <nav className="header-nav">
        <div className="header-container">
          <div className="header-menu">
            <img
              alt={props.image_alt}
              src={props.image_src}
              className="header-image"
            />
          </div>
          <div className="header-container1">
            <div className="header-container2">
              <PrimaryPinkButton
                button="Ingresar"
                className=""
              ></PrimaryPinkButton>
            </div>
            <div data-type="BurgerMenu" className="header-burger-menu">
              <svg viewBox="0 0 1024 1024" className="header-icon">
                <path
                  d="M128 256h768v86h-768v-86zM128 554v-84h768v84h-768zM128 768v-86h768v86h-768z"
                  className=""
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </nav>
      <div data-type="MobileMenu" className="header-mobile-menu">
        <div className="header-top">
          <Link to="/" className="header-navlink large">
            Soft UI Design System
          </Link>
          <div data-type="CloseMobileMenu" className="header-close-menu">
            <svg viewBox="0 0 1024 1024" className="header-icon2">
              <path
                d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"
                className=""
              ></path>
            </svg>
          </div>
        </div>
        <div className="header-mid">
          <div className="header-menu1">
            <Link to="/" className="header-navlink1 large">
              Home
            </Link>
            <Link to="/profile" className="header-navlink2 large">
              Profile
            </Link>
            <Link to="/coming-soon" className="header-navlink3 large">
              Coming Soon
            </Link>
          </div>
        </div>
        <div className="header-bot">
          <PrimaryPinkButton button="buy now" className=""></PrimaryPinkButton>
        </div>
      </div>
    </div>
  )
}

Header.defaultProps = {
  image_alt: 'image',
  image_src1: '736e2826-a577-44bc-8a94-eec111f12550',
  image_src: '/playground_assets/logo%20cvc-200h.png',
  rootClassName: '',
}

Header.propTypes = {
  image_alt: PropTypes.string,
  image_src1: PropTypes.string,
  image_src: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Header
