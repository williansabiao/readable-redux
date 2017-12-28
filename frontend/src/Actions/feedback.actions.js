export const FEEDBACK_SHOW = 'FEEDBACK_SHOW'

export const showFeedback = ({message}) => {
  return {
    type: FEEDBACK_SHOW,
    message,
  }
}
