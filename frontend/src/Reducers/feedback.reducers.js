
import {
  FEEDBACK_SHOW,
} from './../Actions/feedback.actions'

const initialState = {
  message: '',
}

export function feedback (state = initialState, action) {
  switch (action.type) {
    case FEEDBACK_SHOW :
      let { message } = action

      if(message) {
        state.message = message
      }

      return {
        ...state,
      }
    default :
      return state
  }
}
