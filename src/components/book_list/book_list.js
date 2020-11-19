import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import withBookstoreServiceConsumer from '../../HOC';
import * as actions from '../../actions';

class BookList extends Component {
    componentDidMount() {
        const data = this.props.bookstoreService.getBooks();
        this.props.booksLoadedToStore(data);
    }

    render() {
        const booksData = this.props.books;
        
        return (
            <ul>
                {booksData.map(({ title, author, year, id }) => {
                    return (
                        <li key={id}>
                            <h2>{title}</h2>
                            <h3>{author}</h3>
                            <p>{year}</p>
                        </li>
                    );
                })}
            </ul>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        books: state.books,
    };
};

const mapDispatchToProps = (dispatch) => {
    const { booksLoaded } = bindActionCreators(actions, dispatch);
    return {
        booksLoadedToStore: (data) => booksLoaded(data),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(withBookstoreServiceConsumer(BookList));
