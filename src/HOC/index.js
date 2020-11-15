import React from 'react';
import { BookstoreServiceConsumer } from '../components/bookstore_service_context';

const withBookstoreServiceConsumer = (Wrapped) => {
    return (props) => {
        return (
            <BookstoreServiceConsumer>
                {(bookstoreService) => {
                    return (
                        <Wrapped
                            {...props}
                            bookstoreService={bookstoreService}
                        />
                    );
                }}
            </BookstoreServiceConsumer>
        );
    };
};

export default withBookstoreServiceConsumer;
