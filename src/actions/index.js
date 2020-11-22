const booksLoad = () => {
    return {
        type: 'FETCH_BOOKS_LOAD',
    };
};

const booksLoadedSuccess = (newBooks) => {
    return {
        type: 'FETCH_BOOKS_SUCCESS',
        payload: newBooks,
    };
};

const booksLoadedFailure = (error) => {
    return {
        type: 'FETCH_BOOKS_FAILURE',
        payload: error,
    };
};

const downloadBooks = (bookstoreService, dispatch) => () => {
    dispatch(booksLoad());
    bookstoreService
        .getBooks()
        .then((data) => {
            dispatch(booksLoadedSuccess(data));
        })
        .catch((err) => {
            dispatch(booksLoadedFailure(err));
        });
};

export { downloadBooks };
