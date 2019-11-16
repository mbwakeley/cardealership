import axios from "axios";
import {
  FETCH_ALL_CARS_PENDING,
  BASE_URL,
  FETCH_ALL_CARS_SUCCESS,
  FETCH_ONE_CAR_FAILED,
  FETCH_ONE_CAR_PENDING,
  FETCH_ONE_CAR_SUCCESS,
  ADD_CAR_FAILED,
  ADD_CAR_PENDING,
  ADD_CAR_SUCCESS,
  REMOVE_CAR_PENDING,
  REMOVE_CAR_SUCCESS,
  REMOVE_CAR_FAILED,
  EDIT_CAR_SUCCESS,
  EDIT_CAR_PENDING,
  EDIT_CAR_FAILED
} from "./constants";

export const fetchAllCars = () => async dispatch => {
  dispatch({
    type: FETCH_ALL_CARS_PENDING
  });
  try {
    let response = await axios.get(BASE_URL);
    console.log("data", response.data);
    dispatch({
      type: FETCH_ALL_CARS_SUCCESS,
      payload: response.data
    });
  } catch (err) {
    dispatch({
      type: FETCH_ONE_CAR_FAILED,
      payload: err
    });
  }
};

export const fetchOneCar = id => async dispatch => {
  dispatch({
    type: FETCH_ONE_CAR_PENDING
  });
  try {
    let response = await axios.get(BASE_URL + `/${id}`);
    dispatch({
      type: FETCH_ONE_CAR_SUCCESS,
      payload: response.data
    });
  } catch (err) {
    dispatch({
      type: FETCH_ONE_CAR_FAILED,
      payload: err
    });
  }
};

export const addCar = newCar => async dispatch => {
  dispatch({
    type: ADD_CAR_PENDING
  });
  try {
    let response = await axios.post(BASE_URL, newCar);
    dispatch({
      type: ADD_CAR_SUCCESS,
      payload: response.data
    });
  } catch (err) {
    dispatch({
      type: ADD_CAR_FAILED,
      payload: err
    });
  }
};

export const removeCar = id => async dispatch => {
  dispatch({
    type: REMOVE_CAR_PENDING
  });
  try {
    let response = await axios.delete(BASE_URL + `/${id}`);
    dispatch({
      type: REMOVE_CAR_SUCCESS,
      payload: response.data
    });
  } catch (err) {
    dispatch({
      type: REMOVE_CAR_FAILED,
      payload: err
    });
  }
};

export const editCar = id => async dispatch => {
  console.log("editcarid", id);
  dispatch({
    type: EDIT_CAR_PENDING
  });
  try {
    let response = await axios.patch(BASE_URL + `/${id}`);
    dispatch({
      type: EDIT_CAR_SUCCESS,
      payload: id
    });
  } catch (err) {
    dispatch({
      type: EDIT_CAR_FAILED,
      payload: err
    });
  }
};
