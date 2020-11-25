const initialState = {
    books: [],
    loading: true,
    error: false,
    cartItems: [],
    total: 500,
};

const createEditRemoveItemToState = (state, actionId, count) => {
    const selectBook = state.books.find(({ id }) => id === actionId);
    const index = state.cartItems.findIndex(({ id }) => id === actionId);
    const item = {
        id: selectBook.id,
        titleBook: selectBook.title,
    };

    if (index !== -1) {
        item.countBook = state.cartItems[index].countBook + count;
        item.totalPrice =
            state.cartItems[index].totalPrice + count * selectBook.price;

        if (item.countBook < 1) {
            return {
                ...state,
                cartItems: [
                    ...state.cartItems.slice(0, index),
                    ...state.cartItems.slice(index + 1),
                ],
            };
        }

        return {
            ...state,
            cartItems: [
                ...state.cartItems.slice(0, index),
                item,
                ...state.cartItems.slice(index + 1),
            ],
        };
    } else {
        item.countBook = 1;
        item.totalPrice = selectBook.price;

        return {
            ...state,
            cartItems: [...state.cartItems, item],
        };
    }
};

//---------------------------------------------
// REDUCER;
//---------------------------------------------

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
            return createEditRemoveItemToState(state, action.id, 1);
        }
        case 'DECREASE_ITEM_COUNT': {
            return createEditRemoveItemToState(state, action.id, -1);
        }
        case 'INCREASE_ITEM_COUNT': {
            return createEditRemoveItemToState(state, action.id, 1);
        }
        case 'REMOVE_ITEM': {
            const itemInCart = state.cartItems.find(
                ({ id }) => id === action.id,
            );

            return createEditRemoveItemToState(
                state,
                action.id,
                -itemInCart.countBook,
            );
        }
        default:
            return state;
    }
};

export default reducer;
