import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import ErrorBoundry from './components/error_boundry';
import { BookstoreServiceProvider } from './components/bookstore_service_context';
import { BrowserRouter } from 'react-router-dom';
import App from './components/app';

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <ErrorBoundry>
                <BookstoreServiceProvider>
                    <BrowserRouter>
                        <App />
                    </BrowserRouter>
                </BookstoreServiceProvider>
            </ErrorBoundry>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root'),
);
