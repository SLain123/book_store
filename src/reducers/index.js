import updateBookList from './updateBookList';
import updateCartData from './updateCartData';

const reducer = (state, action) => {
    return {
        bookList: updateBookList(state, action),
        cartData: updateCartData(state, action),
    };
};

export default reducer;
