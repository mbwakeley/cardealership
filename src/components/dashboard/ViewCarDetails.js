import React from "react";
import { Row, Col, Card, CardTitle, CardText, Button } from "reactstrap";
import { connect } from "react-redux";
import Moment from "react-moment";
import { removeCar, editCar } from "../../store/car/actions";

class ViewCarDetails extends React.Component {
  handleClick(e, id) {
    console.log("delete", e);
    this.props.removeCar(id);
  }

  handleEdit(e, car) {
    console.log("edit", e);
    this.props.editCar(car);
  }

  render() {
    let carLocation = {};
    this.props.locations.forEach(location => {
      if (location.id === this.props.car.location_id) {
        carLocation = location;
      }
    });
    console.log("cars", this.props);

    const epochTime = parseInt(this.props.car.sold_date) * 1000;
    const time = new Date(epochTime);
    return (
      <Card body>
        <CardTitle>
          <h3>
            {this.props.car.year} {this.props.car.make} {this.props.car.model}
          </h3>
        </CardTitle>
        <Row>
          <Col xs="5">
            <CardText>
              <div>Price: {this.props.car.price}</div>
              <div>Miles: {this.props.car.miles}</div>
              {this.props.car.is_sold ? (
                <div>
                  Status: Car Sold On{" "}
                  <Moment format="MM-DD-YYYY">{time}</Moment>
                </div>
              ) : (
                <div>Status: Available</div>
              )}

              <div>Vin: {this.props.car.vin}</div>
            </CardText>
          </Col>
          <Col>
            <CardText>
              <div>Locaiton Name: {carLocation.name}</div>
              <div>Phone: {carLocation.phone}</div>
              <div>Address: {carLocation.address}</div>
              <Row>
                <Button
                  className="mr-1"
                  color="warning"
                  onClick={e => this.handleEdit(e, this.props.car.id)}
                >
                  Edit
                </Button>
                <Button
                  color="danger"
                  onClick={e => this.handleClick(e, this.props.car.id)}
                >
                  Delete
                </Button>
              </Row>
            </CardText>
          </Col>
        </Row>
      </Card>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    locations: state.locations.all
    // editCarId: state.cars.editCarId
  };
};

export default connect(
  mapStateToProps,
  { removeCar, editCar }
)(ViewCarDetails);
