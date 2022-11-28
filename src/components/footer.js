import React from 'react'

import PropTypes from 'prop-types'

import '../styles/footer.css'

const Footer = (props) => {
  return (
    <footer className="footer-footer">
      <div className="footer-container">
        <div className="footer-container1"></div>
        <img
          alt={props.image_alt}
          src={props.image_src}
          className="footer-image"
        />
      </div>
      <img
        alt="image"
        src="/playground_assets/waves-white.svg"
        className="footer-image1"
      />
    </footer>
  )
}

Footer.defaultProps = {
  image_alt: 'image',
  image_src:
    '/playground_assets/whatsapp-image-2022-09-29-at-19.03.38-removebg-preview-300w.png',
}

Footer.propTypes = {
  image_alt: PropTypes.string,
  image_src: PropTypes.string,
}

export default Footer
