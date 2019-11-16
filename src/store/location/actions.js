import axios from "axios";
import {
  FETCH_ALL_LOCATIONS_PENDING,
  BASE_URL,
  FETCH_ALL_LOCATIONS_SUCCESS,
  FETCH_ONE_LOCATION_FAILED,
  FETCH_ONE_LOCATION_PENDING,
  FETCH_ONE_LOCATION_SUCCESS,
  ADD_LOCATION_FAILED,
  ADD_LOCATION_PENDING,
  ADD_LOCATION_SUCCESS,
  REMOVE_LOCATION_PENDING,
  REMOVE_LOCATION_SUCCESS,
  REMOVE_LOCATION_FAILED
} from "./constants";

export const fetchAllLocations = () => async dispatch => {
  dispatch({
    type: FETCH_ALL_LOCATIONS_PENDING
  });
  try {
    let response = await axios.get(BASE_URL);
    dispatch({
      type: FETCH_ALL_LOCATIONS_SUCCESS,
      payload: response.data
    });
  } catch (err) {
    dispatch({
      type: FETCH_ONE_LOCATION_FAILED,
      payload: err
    });
  }
};

export const fetchOneLocation = id => async dispatch => {
  dispatch({
    type: FETCH_ONE_LOCATION_PENDING
  });
  try {
    let response = await axios.get(BASE_URL + `/${id}`);
    dispatch({
      type: FETCH_ONE_LOCATION_SUCCESS,
      payload: response.data
    });
  } catch (err) {
    dispatch({
      type: FETCH_ONE_LOCATION_FAILED,
      payload: err
    });
  }
};

export const addLocation = newLocation => async dispatch => {
  dispatch({
    type: ADD_LOCATION_PENDING
  });
  try {
    let response = await axios.post(BASE_URL, newLocation);
    dispatch({
      type: ADD_LOCATION_SUCCESS,
      payload: response.data
    });
  } catch (err) {
    dispatch({
      type: ADD_LOCATION_FAILED,
      payload: err
    });
  }
};

export const removeLocation = id => async dispatch => {
  dispatch({
    type: REMOVE_LOCATION_PENDING
  });
  try {
    let response = await axios.delete(BASE_URL + `${id}`);
    dispatch({
      type: REMOVE_LOCATION_SUCCESS,
      payload: response.data
    });
  } catch (err) {
    dispatch({
      type: REMOVE_LOCATION_FAILED,
      payload: err
    });
  }
};
