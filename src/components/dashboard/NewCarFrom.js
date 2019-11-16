import React from "react";
import { connect } from "react-redux";
import { Form, FormGroup, Input, Button, Col, Label, Row } from "reactstrap";
import { addCar } from "../../store/car/actions";

class NewCarForm extends React.Component {
  state = {
    model: "",
    make: "",
    year: 0,
    miles: 0,
    price: 0,
    is_sold: false,
    sold_date: "",
    location_id: 0,
    vin: ""
  };

  handleSelect = e => {
    const { name, value } = e.target;
    this.setState({ [name]: Number(value) });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addCar({
      model: this.state.model,
      make: this.state.make,
      year: this.state.year,
      miles: this.state.miles,
      price: this.state.price,
      is_sold: this.state.is_sold,
      sold_date: this.state.is_sold,
      location_id: this.state.location_id,
      vin: this.state.vin
    });
    this.setState({
      model: "",
      make: "",
      year: 0,
      miles: 0,
      price: 0,
      is_sold: false,
      sold_date: "",
      location_id: 0,
      vin: ""
    });
  };

  render() {
    console.log("newcarfrom", this.state);
    const locationOptions =
      this.props.locations.length > 0 &&
      this.props.locations.map((location, i) => {
        return (
          <option
            key={i}
            id="location_id"
            name="location_id"
            value={location.id}
          >
            {location.name}, {location.address}
          </option>
        );
      });
    return (
      <div style={{ display: "flex" }}>
        <div class="container">
          <h2 class="text-center mt-5">Add New Car</h2>
          <button
            class="btn btn-primary"
            onClick={() => this.props.history.goBack()}
          >
            GO BACK
          </button>
          <div class="col">
            <hr />
            <Form onSubmit={this.handleSubmit}>
              <FormGroup className="mr-2">
                <Label for="location">Location</Label>
                <Input
                  type="select"
                  name="location_id"
                  id="locationId"
                  onChange={e => this.handleSelect(e)}
                >
                  value={this.state.location_id}
                  <option></option>
                  {locationOptions}
                </Input>
              </FormGroup>
              <Row form>
                <Col md={4}>
                  <FormGroup>
                    <Label for="year">Year</Label>
                    <Input
                      type="text"
                      name="year"
                      id="year"
                      value={this.state.year}
                      onChange={e => this.setState({ year: e.target.value })}
                    />
                  </FormGroup>
                </Col>
                <Col md={4}>
                  <FormGroup>
                    <Label for="make">Make</Label>
                    <Input
                      type="text"
                      name="make"
                      id="make"
                      value={this.state.make}
                      onChange={e => this.setState({ make: e.target.value })}
                    />
                  </FormGroup>
                </Col>
                <Col md={4}>
                  <FormGroup>
                    <Label for="model">Model</Label>
                    <Input
                      type="model"
                      name="model"
                      id="model"
                      value={this.state.model}
                      onChange={e => this.setState({ model: e.target.value })}
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row form>
                <Col md={4}>
                  <FormGroup>
                    <Label for="price">Price</Label>
                    <Input
                      type="text"
                      name="price"
                      id="price"
                      value={this.state.price}
                      onChange={e => this.setState({ price: e.target.value })}
                    />
                  </FormGroup>
                </Col>
                <Col md={4}>
                  <FormGroup>
                    <Label for="miles">Miles</Label>
                    <Input
                      type="text"
                      name="miles"
                      id="miles"
                      value={this.state.miles}
                      onChange={e => this.setState({ miles: e.target.value })}
                    />
                  </FormGroup>
                </Col>
                <Col md={4}>
                  <FormGroup>
                    <Label for="vin">Vin Number</Label>
                    <Input
                      type="text"
                      name="vin"
                      id="vin"
                      value={this.state.vin}
                      onChange={e => this.setState({ vin: e.target.value })}
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Button>Add Car</Button>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    locations: state.locations.all,
    cars: state.cars.all
  };
};
export default connect(
  mapStateToProps,
  { addCar }
)(NewCarForm);
