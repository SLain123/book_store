import React from "react";
import Spinner from "../spinner";
import ErrorBoundry from "../error_boundry";
// import { Consumer } from "../bookstore_service_context";
// import Test from "../../utils/crashTest";

const App = () => {
  return (
    <ErrorBoundry>
      <p>app</p>
      <Spinner />
    </ErrorBoundry>
  );
};

export default App;
