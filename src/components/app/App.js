import React from "react";
import Spinner from "../spinner";
import ErrorBoundry from "../error_boundry";
import { BookstoreServiceProvider } from "../bookstore_service_context";
// import withBookstoreServiceConsumer from "../../HOC/withConsumer";
// import Test from "../../utils/crashTest";

const App = () => {
  return (
    <ErrorBoundry>
      <BookstoreServiceProvider>
        <p>app</p>
        <Spinner />
      </BookstoreServiceProvider>
    </ErrorBoundry>
  );
};

export default App;
