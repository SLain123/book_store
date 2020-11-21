const initialState = {
    books: [],
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'BOOKS_LOADED_TO_STORE': {
            return {
                books: action.payload,
            };
        }
        default:
            return state;
    }
};

export default reducer;
