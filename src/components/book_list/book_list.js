import React, { Component } from 'react';
import { connect } from 'react-redux';

import withBookstoreServiceConsumer from '../../HOC';
import { downloadBooks } from '../../actions';
import Spinner from '../spinner';
import ErrorIndicator from '../error_indicator';

import './book_list.scss';

class BookList extends Component {
    componentDidMount() {
        this.props.downloadBooks();
    }

    render() {
        const { books, loading, error } = this.props;

        if (loading) {
            return <Spinner />;
        }

        if (error) {
            return <ErrorIndicator />;
        }

        return (
            <section>
                <ul className='book-list row'>
                    {books.map(
                        ({
                            title,
                            author,
                            year,
                            id,
                            price,
                            imgUrlJPG,
                            imgUrlWEBP,
                        }) => {
                            return (
                                <li
                                    key={id}
                                    className='book-list__item col-xl-6 col-12'
                                >
                                    <picture>
                                        <source
                                            srcSet={imgUrlWEBP}
                                            type='image/webp'
                                        ></source>
                                        <img
                                            className='book-list__img'
                                            src={imgUrlJPG}
                                            alt='Обложка'
                                            width='220'
                                            height='310'
                                        />
                                    </picture>
                                    <div className='book-list__info-container'>
                                        <p className='book-list__title'>
                                            {title}
                                        </p>
                                        <p className='book-list__describe'>
                                            Автор: {author}
                                        </p>
                                        <p className='book-list__describe'>
                                            Год издания: {year}
                                        </p>
                                        <p className='book-list__price'>
                                            {price} руб.
                                        </p>
                                        <button
                                            type='button'
                                            className='book-list__add-btn btn btn-info'
                                        >
                                            Добавить в корзину
                                        </button>
                                    </div>
                                </li>
                            );
                        },
                    )}
                </ul>
            </section>
        );
    }
}

const mapStateToProps = ({ books, loading, error }) => {
    return {
        books,
        loading,
        error,
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        downloadBooks: downloadBooks(ownProps.bookstoreService, dispatch),
    };
};

export default withBookstoreServiceConsumer(
    connect(mapStateToProps, mapDispatchToProps)(BookList),
);
