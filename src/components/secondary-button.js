import React from 'react'

import PropTypes from 'prop-types'

import '../styles/secondary-button.css'

const SecondaryButton = (props) => {
  return (
    <div className="secondary-button-container">
      <button className="secondary-button-button button buttonSmall">
        {props.button}
      </button>
    </div>
  )
}

SecondaryButton.defaultProps = {
  button: 'Button',
}

SecondaryButton.propTypes = {
  button: PropTypes.string,
}

export default SecondaryButton
