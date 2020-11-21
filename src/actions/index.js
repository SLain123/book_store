const booksLoadedToStore = (newBooks) => {
    return {
        type: 'BOOKS_LOADED_TO_STORE',
        payload: newBooks,
    };
};

export { booksLoadedToStore };
