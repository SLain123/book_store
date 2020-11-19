import React from 'react';
import BookstoreService from '../../services/bookstore_service';
const { Provider, Consumer } = React.createContext();

const BookstoreServiceProvider = (props) => {
    const bookstoreData = new BookstoreService();
    return (
        <Provider value={bookstoreData}>{props.children}</Provider>
    );
};

export { BookstoreServiceProvider, Consumer as BookstoreServiceConsumer };
