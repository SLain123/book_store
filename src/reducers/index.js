const initialState = {
    books: [],
    loading: true,
    error: false,
    cartItems: [],
    total: 500,
};

const isDouble = (booksFromCart, selectBookId) => {
    let result = false;
    booksFromCart.forEach(({ id }) => {
        if (id === selectBookId) {
            result = true;
        }
    });
    return result;
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
            const dataForCart = {
                id: selectBook.id,
                titleBook: selectBook.title,
                totalPrice: selectBook.price,
            };

            if (isDouble(state.cartItems, selectBook.id)) {
                let indx;
                items.forEach((item, i) => {
                    if (item.id === action.id) {
                        indx = i;
                    }
                });

                dataForCart.countBook = state.cartItems[indx].countBook + 1;

                return {
                    ...state,
                    cartItems: [
                        ...items.slice(0, indx),
                        dataForCart,
                        ...items.slice(indx + 1),
                    ],
                };
            } else {
                dataForCart.countBook = 1;

                return {
                    ...state,
                    cartItems: [...state.cartItems, dataForCart],
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
