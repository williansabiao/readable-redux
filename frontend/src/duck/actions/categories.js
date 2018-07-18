export const CATEGORY_LIST_REQUEST = 'CATEGORY_LIST_REQUEST'
export const CATEGORY_LIST_FAILED = 'CATEGORY_LIST_FAILED'
export const CATEGORY_LIST_SUCCESS = 'CATEGORY_LIST_SUCCESS'

export const listCategoriesRequest = () => ({
  type: CATEGORY_LIST_REQUEST,
})

export const listCategoriesFailed = errorData => ({
  type: CATEGORY_LIST_FAILED,
  payload: { errorData },
})

export const listCategoriesSuccess = categories => ({
  type: CATEGORY_LIST_SUCCESS,
  payload: { categories },
})

export default {
  listCategoriesRequest,
  listCategoriesFailed,
  listCategoriesSuccess,
}
