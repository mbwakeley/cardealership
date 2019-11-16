import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import TopNav from "./components/layout/TopNav";
import { Container, Row, Col } from "reactstrap";
import Dashboard from "./components/dashboard/Dashboard";
import { connect } from "react-redux";
import { fetchAllCars } from "./store/car/actions";
import { fetchAllLocations } from "./store/location/actions";
import NewCarForm from "./components/dashboard/NewCarFrom";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(fetchAllCars());
    this.props.dispatch(fetchAllLocations());
  }
  render() {
    return (
      <Router>
        <div className="App">
          <TopNav />
          <Container>
            <Row>
              <Col>
                <Switch>
                  <Route exact path="/" component={Dashboard} />
                  <Route path="/newcar" component={NewCarForm} />
                </Switch>
              </Col>
            </Row>
          </Container>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => {
  return {
    cars: state.cars
  };
};

export default connect(mapStateToProps)(App);
