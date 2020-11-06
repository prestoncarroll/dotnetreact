import React, { Component, Fragment } from "react";
import AppHeader from "./AppHeader";
import AppFooter from "./AppFooter";
class App extends Component {
  render() {
    return (
      <Fragment>
        <AppHeader />
        <AppFooter />
      </Fragment>
    );
  }
}
export default App;
