import React, { Component } from 'react';
import { connect } from 'react-redux';

import withBookstoreServiceConsumer from '../../HOC';
import { booksLoadedToStore } from '../../actions';

import './book_list.scss';

class BookList extends Component {
    componentDidMount() {
        const data = this.props.bookstoreService.getBooks();
        this.props.booksLoadedToStore(data);
    }

    render() {
        const booksData = this.props.books;

        return (
            <ul className='book-list row'>
                {booksData.map(
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
                                    <p className="book-list__title">{title}</p>
                                    <p className="book-list__describe">Автор: {author}</p>
                                    <p className="book-list__describe">Год издания: {year}</p>
                                    <p className="book-list__price">{price} руб.</p>
                                    <button type="button" className="book-list__add-btn btn btn-info">Добавить в корзину</button>
                                </div>
                            </li>
                        );
                    },
                )}
            </ul>
        );
    }
}

const mapStateToProps = ({ books }) => {
    return {
        books,
    };
};

const mapDispatchToProps = {
    booksLoadedToStore,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(withBookstoreServiceConsumer(BookList));
