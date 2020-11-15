import React, { Component } from 'react';
import ErrorIndicator from '../error_indicator';

class ErrorBoundry extends Component {
    state = {
        hasError: false,
    };

    static getDerivedStateFromError() {
        return { hasError: true };
    }

    render() {
        if (this.state.hasError) {
            return (
                <>
                    <h2>Возникла ошибка в данном блоке</h2>
                    <ErrorIndicator />
                </>
            );
        }
        return this.props.children;
    }
}

export default ErrorBoundry;
