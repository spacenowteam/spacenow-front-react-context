import { 
  LISTING_SETUP_START 
} from '../actions/listing'

export const initialState = {}

export const listingReducer = (state = initialState, action) => {
  switch (action.type) {
    case LISTING_SETUP_START: {
      return {
        ...state
      }
    }
    default:
      return state
  }
}