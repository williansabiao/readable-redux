import {
  CATEGORY_LIST_REQUEST,
  CATEGORY_LIST_FAILED,
  CATEGORY_LIST_SUCCESS,
} from '../actions/categories'

const initialState = {
  status: null,
  list: [],
  error: {},
}

const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
  case CATEGORY_LIST_REQUEST: {
    return {
      ...initialState,
      status: CATEGORY_LIST_REQUEST,
    }
  }
  case CATEGORY_LIST_SUCCESS: {
    const { categories } = action.payload
    
    if (!categories) {
      return state
    }

    return {
      ...initialState,
      status: CATEGORY_LIST_SUCCESS,
      list: categories,
    }
  }
  case CATEGORY_LIST_FAILED: {
    const { errorData } = action.payload

    return {
      ...initialState,
      status: CATEGORY_LIST_FAILED,
      error: errorData,
    }
  }
  default:
    return state
  }
}

export default categoriesReducer
