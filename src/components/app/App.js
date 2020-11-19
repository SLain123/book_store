import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import BookList from '../book_list';
// import Test from "../../utils/crashTest";

const App = () => {
    return (
        <>
            <header>
                <nav>
                    <Link to='/'>Home</Link>
                    <Link to='/card/'>Card</Link>
                </nav>
            </header>
            <Switch>
                <Route
                    exact
                    path='/'
                    component={BookList}
                />
                <Route
                    path='/card'
                    render={() => {
                       return <p>Card</p>;
                    }}
                />
            </Switch>
        </>
    );
};

export default App;
