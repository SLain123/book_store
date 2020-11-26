const createEditRemoveItemToState = (state, actionId, count) => {
    const {
        bookList: { books },
        cartData: { cartItems },
    } = state;
    const selectBook = books.find(({ id }) => id === actionId);
    const index = cartItems.findIndex(({ id }) => id === actionId);
    const item = {
        id: selectBook.id,
        titleBook: selectBook.title,
    };

    if (index !== -1) {
        item.countBook = cartItems[index].countBook + count;
        item.totalPrice =
            cartItems[index].totalPrice + count * selectBook.price;

        if (item.countBook < 1) {
            return {
                cartItems: [
                    ...cartItems.slice(0, index),
                    ...cartItems.slice(index + 1),
                ],
                total: 0
            };
        }

        return {
            cartItems: [
                ...cartItems.slice(0, index),
                item,
                ...cartItems.slice(index + 1),
            ],
            total: 0
        };
    } else {
        item.countBook = 1;
        item.totalPrice = selectBook.price;

        return {
            cartItems: [...cartItems, item],
            total: 0
        };
    }
};

const updateCartData = (state, action) => {
    if (state === undefined) {
        return {
            cartItems: [],
            total: 500,
        };
    }

    switch (action.type) {
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
            const itemInCart = state.cartData.cartItems.find(
                ({ id }) => id === action.id,
            );

            return createEditRemoveItemToState(
                state,
                action.id,
                -itemInCart.countBook,
            );
        }
        default:
            return state.cartData;
    }
};

export default updateCartData;