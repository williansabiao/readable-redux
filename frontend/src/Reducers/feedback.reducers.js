import {
  FEEDBACK_SHOW,
} from '../Actions/feedback.actions'

const initialState = {
  message: '',
}

const feedbackReducer = (state = initialState, action) => {
  switch (action.type) {
  case FEEDBACK_SHOW: {
    const { message } = action

    if (!message) return state

    return {
      ...state,
      message,
    }
  }
  default:
    return state
  }
}

export default feedbackReducer
