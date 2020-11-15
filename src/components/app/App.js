import React from 'react';
import Spinner from '../spinner';
import withBookstoreServiceConsumer from "../../HOC";
// import Test from "../../utils/crashTest";

const App = ({bookstoreService}) => {
    return (
        <>
            <p>{bookstoreService}</p>
            <Spinner />
        </>
    );
};

export default withBookstoreServiceConsumer(App);
