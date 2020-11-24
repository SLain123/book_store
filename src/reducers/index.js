const initialState = {
    books: [],
    loading: true,
    error: false,
    cartItems: [],
    total: 500,
};

const changeExistItem = (state, selectBook, index, opt = 'minus') => {
    const item = {
        id: selectBook.id,
        titleBook: selectBook.title,
    };
    if (opt === 'plus') {
        item.countBook = state.cartItems[index].countBook + 1;
        item.totalPrice = state.cartItems[index].totalPrice + selectBook.price;
    } else {
        item.countBook = state.cartItems[index].countBook - 1;
        item.totalPrice = state.cartItems[index].totalPrice - selectBook.price;
    }
    return item;
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
                        changeExistItem(state, selectBook, index, 'plus'),
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
            const selectBook = state.books.find(({ id }) => id === action.id);
            const items = state.cartItems;
            const index = items.findIndex(({ id }) => id === action.id);

            if (state.cartItems[index].countBook === 1) {
                return {
                    ...state,
                    cartItems: [
                        ...items.slice(0, index),
                        ...items.slice(index + 1),
                    ],
                };
            }
            else {
                return {
                    ...state,
                    cartItems: [
                        ...items.slice(0, index),
                        changeExistItem(state, selectBook, index),
                        ...items.slice(index + 1),
                    ],
                };
            }
        }
        case 'INCREASE_ITEM_COUNT': {
            const selectBook = state.books.find(({ id }) => id === action.id);
            const items = state.cartItems;
            const index = items.findIndex(({ id }) => id === action.id);
            return {
                ...state,
                cartItems: [
                    ...items.slice(0, index),
                    changeExistItem(state, selectBook, index, 'plus'),
                    ...items.slice(index + 1),
                ],
            };
        }
        case 'REMOVE_ITEM': {
            const items = state.cartItems;
            const index = items.findIndex(({ id }) => id === action.id);
            return {
                ...state,
                cartItems: [
                    ...items.slice(0, index),
                    ...items.slice(index + 1),
                ],
            };
        }
        default:
            return state;
    }
};

export default reducer;
