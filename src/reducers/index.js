const initialState = {
    books: [],
    loading: true,
    error: false,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'BOOKS_REQUEST': {
            return {
                books: [],
                loading: true,
                error: false,
            };
        }
        case 'BOOKS_LOADED_TO_STORE': {
            return {
                books: action.payload,
                loading: false,
                error: false,
            };
        }
        case 'BOOKS_ERROR': {
            return {
                books: [],
                loading: false,
                error: action.payload,
            };
        }
        default:
            return state;
    }
};

export default reducer;
