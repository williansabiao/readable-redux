import React from 'react'
import PropTypes from 'prop-types'
import { Snackbar } from 'rmwc'

function Feedback({
  isOpen, onClose, onDismiss, message,
}) {
  return (
    <Snackbar
      show={isOpen}
      onClose={onClose}
      actionHandler={onDismiss}
      message={message}
      actionText="Dismiss"
      alignStart
      timeout="5000"
    />
  )
}

Feedback.propTypes = {
  message: PropTypes.string.isRequired,
  onClose: PropTypes.func,
  onDismiss: PropTypes.func,
  isOpen: PropTypes.bool.isRequired,
}

Feedback.defaultProps = {
  onClose: () => {},
  onDismiss: () => {},
}

export default Feedback
