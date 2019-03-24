import {
  SPECIFICATION_GET_BY_SPACE_ID,
  SPECIFICATION_SAVING,
  SPECIFICATION_SAVED,
} from '../constants';

const initialState = {
  data: [],
  isSaving: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SPECIFICATION_GET_BY_SPACE_ID: {
      const payload = action.payload;
      return {
        ...state,
        data: payload,
      };
    }
    case SPECIFICATION_SAVING: {
      return {
        ...state,
        ...action.payload,
        isSaving: true,
      };
    }
    case SPECIFICATION_SAVED: {
      return {
        ...state,
        ...action.payload,
        isSaving: false,
      };
    }
    default:
      return state;
  }
};
