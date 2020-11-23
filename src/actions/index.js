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

const addItem = (id) => {
    return {
        type: 'ADD_ITEM',
        id,
    };
};

const decreaseItem = (id) => {
    return {
        type: 'DECREASE_ITEM_COUNT',
        id,
    };
};

const increaseItem = (id) => {
    return {
        type: 'INCREASE_ITEM_COUNT',
        id,
    };
};

const removeItem = (id) => {
    return {
        type: 'REMOVE_ITEM',
        id,
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

export { downloadBooks, addItem, decreaseItem, increaseItem, removeItem };
