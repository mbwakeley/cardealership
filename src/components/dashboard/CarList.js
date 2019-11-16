import React from "react";
import { connect } from "react-redux";
import { ListGroup } from "reactstrap";
import CarListItem from "./CarListItem";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const CarList = () => {
  const cars = useSelector(state => state.cars.all);
  let listOfCars = cars.map(car => <CarListItem key={car.id} car={car} />);
  console.log("carList", cars);

  return (
    <div style={{ display: "flex" }}>
      <div className="container">
        <div className="col">
          <Link to="/newcar">
            <button className="btn btn-primary btn-lg mt-3 mb-3">
              Add New Car
            </button>
          </Link>
          <hr />
          <ListGroup>{listOfCars}</ListGroup>
        </div>
      </div>
    </div>
  );
};

export default connect()(CarList);
