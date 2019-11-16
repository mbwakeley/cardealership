import {
  FETCH_ALL_LOCATIONS_PENDING,
  ADD_LOCATION_PENDING,
  REMOVE_LOCATION_PENDING,
  FETCH_ONE_LOCATION_PENDING,
  FETCH_ALL_LOCATIONS_FAILED,
  FETCH_ONE_LOCATION_FAILED,
  ADD_LOCATION_FAILED,
  REMOVE_LOCATION_FAILED,
  FETCH_ALL_LOCATIONS_SUCCESS,
  ADD_LOCATION_SUCCESS,
  REMOVE_LOCATION_SUCCESS
} from "./constants";

const initialState = {
  all: [],
  err: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ALL_LOCATIONS_PENDING:
    case ADD_LOCATION_PENDING:
    case REMOVE_LOCATION_PENDING:
    case FETCH_ONE_LOCATION_PENDING:
      return state;

    case FETCH_ALL_LOCATIONS_FAILED:
    case FETCH_ONE_LOCATION_FAILED:
    case ADD_LOCATION_FAILED:
    case REMOVE_LOCATION_FAILED:
      return {
        ...state,
        err: action.payload
      };

    case FETCH_ALL_LOCATIONS_SUCCESS:
      return {
        ...state,
        all: action.payload
      };

    case ADD_LOCATION_SUCCESS:
      return {
        ...state,
        all: [...state.all, action.payload]
      };

    case REMOVE_LOCATION_SUCCESS:
      return {
        ...state,
        all: state.all.filter(location => location.id === action.payload.id)
      };

    default:
      return state;
  }
};
