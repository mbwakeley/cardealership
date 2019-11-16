import React from "react";
import CarList from "./CarList";

const Dashboard = props => {
  let viewCar = Number(props.match.params.id) || 0;
  return (
    <div>
      <div className="container">
        <h2 className="text-center mt-5">List of Cars</h2>
        <hr />
        <div className="container">
          <div>
            <CarList viewCar={viewCar} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
