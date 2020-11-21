import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from '../header';
import BookList from '../book_list';

const App = () => {
    return (
        <div className='container'>
            <Header />

            <Switch>
                <Route exact path='/' component={BookList} />
                <Route
                    path='/card'
                    render={() => {
                        return <p>Card</p>;
                    }}
                />
            </Switch>
        </div>
    );
};

export default App;
