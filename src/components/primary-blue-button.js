import React from 'react'

import PropTypes from 'prop-types'

import '../styles/primary-blue-button.css'

const PrimaryBlueButton = (props) => {
  return (
    <div className="primary-blue-button-container">
      <button className="primary-blue-button-button button buttonSmall">
        {props.button}
      </button>
    </div>
  )
}

PrimaryBlueButton.defaultProps = {
  button: 'Button',
}

PrimaryBlueButton.propTypes = {
  button: PropTypes.string,
}

export default PrimaryBlueButton
