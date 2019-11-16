import {
  FETCH_ALL_CARS_PENDING,
  ADD_CAR_PENDING,
  REMOVE_CAR_PENDING,
  FETCH_ONE_CAR_PENDING,
  FETCH_ALL_CARS_FAILED,
  FETCH_ONE_CAR_FAILED,
  ADD_CAR_FAILED,
  REMOVE_CAR_FAILED,
  FETCH_ALL_CARS_SUCCESS,
  ADD_CAR_SUCCESS,
  REMOVE_CAR_SUCCESS,
  EDIT_CAR_SUCCESS,
  EDIT_CAR_PENDING,
  EDIT_CAR_FAILED
} from "./constants";

const initialState = {
  all: [],
  err: {},
  editCarId: 0
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ALL_CARS_PENDING:
    case ADD_CAR_PENDING:
    case REMOVE_CAR_PENDING:
    case FETCH_ONE_CAR_PENDING:
    case EDIT_CAR_PENDING:
      return state;

    case FETCH_ALL_CARS_FAILED:
    case FETCH_ONE_CAR_FAILED:
    case ADD_CAR_FAILED:
    case REMOVE_CAR_FAILED:
    case EDIT_CAR_FAILED:
      return {
        ...state,
        err: action.payload
      };

    case FETCH_ALL_CARS_SUCCESS:
      return {
        ...state,
        all: action.payload
      };

    case ADD_CAR_SUCCESS:
      return {
        ...state,
        all: [action.payload, ...state.all]
      };

    case REMOVE_CAR_SUCCESS:
      return {
        ...state,
        all: state.all.filter(car => car.id !== action.payload.id)
      };

    case EDIT_CAR_SUCCESS:
      return {
        ...state,
        editCarId: action.payload
      };

    default:
      return state;
  }
};
