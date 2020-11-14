import React from 'react';
import Spinner from './components/spinner';
import ErrorBoundry from './components/error_boundry';
import Test from './crashTest';

const App = () => {
    return (
        <ErrorBoundry>
            <p>App</p>
            <Spinner />
        </ErrorBoundry>
    )
}

export default App;