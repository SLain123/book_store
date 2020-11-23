const initialState = {
    books: [],
    loading: true,
    error: false,
    cartItems: [
        { id: 1, titleBook: 123, countBook: 2, totalPrice: 246 },
        { id: 2, titleBook: 1, countBook: 2, totalPrice: 2 },
    ],
    total: 500,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_BOOKS_LOAD': {
            return {
                ...state,
                books: [],
                loading: true,
                error: false,
            };
        }
        case 'FETCH_BOOKS_SUCCESS': {
            return {
                ...state,
                books: action.payload,
                loading: false,
                error: false,
            };
        }
        case 'FETCH_BOOKS_FAILURE': {
            return {
                ...state,
                books: [],
                loading: false,
                error: action.payload,
            };
        }
        case 'DECREASE_ITEM_COUNT': {
            console.log(action.id);
            return {
                ...state,
            };
        }
        case 'INCREASE_ITEM_COUNT': {
            console.log(action.id);
            return {
                ...state,
            };
        }
        case 'REMOVE_ITEM': {
            console.log(action.id);
            return {
                ...state,
            };
        }
        default:
            return state;
    }
};

export default reducer;
