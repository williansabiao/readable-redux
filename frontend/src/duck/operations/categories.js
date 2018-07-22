import {
  listCategoriesRequest,
  listCategoriesFailed,
  listCategoriesSuccess,
} from '../actions/categories'

import api from '../../utils/api'

export const fetchGetCategories = () => (dispatch) => {
  dispatch(listCategoriesRequest())
  return api
    .getCategories()
    .then(({ categories = [] }) => dispatch(listCategoriesSuccess(categories)))
    .catch(error => dispatch(listCategoriesFailed(error)))
}

export default {
  fetchGetCategories,
}
