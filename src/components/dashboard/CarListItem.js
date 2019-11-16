import ViewCarDetails from "./ViewCarDetails";
import React from "react";
import { connect } from "react-redux";
import EditCarDetails from "./EditCarDetails";

const CarListItem = props => {
  return (
    <div>
      {props.editCarId === props.car.id ? (
        <EditCarDetails />
      ) : (
        <ViewCarDetails car={props.car} />
      )}
    </div>
  );
};

const mapStateToProp = state => {
  return {
    editCarId: state.cars.editCarId
  };
};

export default connect(mapStateToProp)(CarListItem);
