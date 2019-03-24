import { SPACE_SETUP_START } from '../constants'

const initialState = {}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SPACE_SETUP_START: {
      return {
        ...state
      }
    }
    default:
      return state
  }
}

export default reducer
