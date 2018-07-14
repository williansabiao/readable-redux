export const FEEDBACK_SHOW = 'FEEDBACK_SHOW'

export const showFeedback = ({ message }) => ({
  type: FEEDBACK_SHOW,
  message,
})
