const booksLoadedToStore = (newBooks) => {
    return {
        type: 'BOOKS_LOADED_TO_STORE',
        payload: newBooks,
    };
};

const booksRequest = () => {
    return {
        type: 'BOOKS_REQUEST',
    };
};

const booksError = (error) => {
    return {
        type: 'BOOKS_ERROR',
        payload: error,
    };
};

export { booksLoadedToStore, booksRequest, booksError };
