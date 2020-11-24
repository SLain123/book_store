const initialState = {
    books: [],
    loading: true,
    error: false,
    cartItems: [],
    total: 500,
};

const addExistItem = (state, selectBook, index) => {
    return {
        id: selectBook.id,
        titleBook: selectBook.title,
        countBook: state.cartItems[index].countBook + 1,
        totalPrice: state.cartItems[index].totalPrice + selectBook.price,
    };
};

const addNewItem = (selectBook) => {
    return {
        id: selectBook.id,
        titleBook: selectBook.title,
        countBook: 1,
        totalPrice: selectBook.price,
    };
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
            const items = state.cartItems;
            const index = items.findIndex(({ id }) => id === action.id);

            if (index !== -1) {
                return {
                    ...state,
                    cartItems: [
                        ...items.slice(0, index),
                        addExistItem(state, selectBook, index),
                        ...items.slice(index + 1),
                    ],
                };
            } else {
                return {
                    ...state,
                    cartItems: [...state.cartItems, addNewItem(selectBook)],
                };
            }
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
