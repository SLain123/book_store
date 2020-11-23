const initialState = {
    books: [],
    loading: true,
    error: false,
    cartItems: [],
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
        case 'ADD_ITEM': {
            const selectBook = state.books.find(({ id }) => id === action.id);
            const dataForCart = {
                id: selectBook.id,
                titleBook: selectBook.title,
                countBook: 1,
                totalPrice: selectBook.price,
            };
            return {
                ...state,
                cartItems: [...state.cartItems, dataForCart],
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
