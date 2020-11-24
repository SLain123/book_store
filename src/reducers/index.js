const initialState = {
    books: [],
    loading: true,
    error: false,
    cartItems: [],
    total: 500,
};

//---------------------------------------------------------------------------
//Функци для формирования item;
//--------------------------------------------------------------------------

// Под-функция для изменения содержимого уже добавленного ранее в корзину item; 
// Может прибавлять или отнимать значение количества через переданный аргумент opt: plus & minus;

const changeExistItem = (state, actionId, index, opt) => {
    const selectBook = state.books.find(({ id }) => id === actionId);
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

// Под-функция для создания нового item которого еще нет в корзине;

const createNewItem = (state, actionId) => {
    const selectBook = state.books.find(({ id }) => id === actionId);
    return {
        id: selectBook.id,
        titleBook: selectBook.title,
        countBook: 1,
        totalPrice: selectBook.price,
    };
};

// -----------------------------------------------------------------
// Функции для работы непосредственно в направлении state: add, change, remove;
//------------------------------------------------------------------

// Функция добавляет новый item ---> state;

const addItemToState = (state, actionId) => {
    return {
        ...state,
        cartItems: [...state.cartItems, createNewItem(state, actionId)],
    };
};

// Функция добавляет измененный item на зарезервированное им место в массиве cartItems в state;

const changeItemInState = (state, index, actionId, opt) => {
    return {
        ...state,
        cartItems: [
            ...state.cartItems.slice(0, index),
            changeExistItem(state, actionId, index, opt),
            ...state.cartItems.slice(index + 1),
        ],
    };
};

// Функция удаляет нужный item from state;

const removeItemToState = (state, index) => {
    return {
        ...state,
        cartItems: [
            ...state.cartItems.slice(0, index),
            ...state.cartItems.slice(index + 1),
        ],
    };
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
            const index = state.cartItems.findIndex(
                ({ id }) => id === action.id,
            );

            if (index !== -1) {
                return changeItemInState(state, index, action.id, 'plus');
            } else {
                return addItemToState(state, action.id);
            }
        }
        case 'DECREASE_ITEM_COUNT': {
            const index = state.cartItems.findIndex(
                ({ id }) => id === action.id,
            );

            if (state.cartItems[index].countBook === 1) {
                return removeItemToState(state, index);
            } else {
                return changeItemInState(state, index, action.id, 'minus');
            }
        }
        case 'INCREASE_ITEM_COUNT': {
            const index = state.cartItems.findIndex(
                ({ id }) => id === action.id,
            );

            return changeItemInState(state, index, action.id, 'plus');
        }
        case 'REMOVE_ITEM': {
            const index = state.cartItems.findIndex(
                ({ id }) => id === action.id,
            );

            return removeItemToState(state, index);
        }
        default:
            return state;
    }
};

export default reducer;
