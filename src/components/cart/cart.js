import React, { Component } from 'react';
import { connect } from 'react-redux';
import { decreaseItem, increaseItem, removeItem } from '../../actions';

import './cart.scss';

class CartContainer extends Component {
    render() {
        return <Cart props={this.props} />;
    }
}

const Cart = ({ props }) => {
    const { total, cartItems, decreaseItem, increaseItem, removeItem } = props;
    return (
        <section className='cart'>
            <p className='cart__title'>Ваш заказ:</p>
            <table className='table'>
                <thead className='thead-light'>
                    <tr>
                        <th scope='col'>№</th>
                        <th scope='col'>Название</th>
                        <th scope='col'>Количество</th>
                        <th scope='col'>Цена</th>
                        <th scope='col'>Действия</th>
                    </tr>
                </thead>
                <tbody>
                    {cartItems.map((book, indx) => (
                        <TableRaw
                            book={book}
                            indx={indx}
                            key={book.id}
                            decrease={decreaseItem}
                            increase={increaseItem}
                            remove={removeItem}
                        />
                    ))}
                </tbody>
            </table>
            <p className='cart__result'>Общая стоимость: {total} руб.</p>
        </section>
    );
};

const TableRaw = ({ book, indx, decrease, increase, remove }) => {
    const { titleBook, countBook, totalPrice, id } = book;
    return (
        <tr>
            <th scope='row'>{indx}</th>
            <td>{titleBook}</td>
            <td>{countBook}</td>
            <td>{totalPrice}</td>
            <td>
                <button
                    className='cart__minus-btn cart__btn'
                    onClick={() => decrease(id)}
                >
                    <svg
                        width='1.5em'
                        height='1.5em'
                        viewBox='0 0 16 16'
                        className='bi bi-bag-dash-fill'
                        fill='#FF9900'
                        xmlns='http://www.w3.org/2000/svg'
                    >
                        <path
                            fillRule='evenodd'
                            d='M5.5 3.5a2.5 2.5 0 0 1 5 0V4h-5v-.5zm6 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0zM6 9.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1H6z'
                        />
                    </svg>
                </button>
                <button
                    className='cart__plus-btn cart__btn'
                    onClick={() => increase(id)}
                >
                    <svg
                        width='1.5em'
                        height='1.5em'
                        viewBox='0 0 16 16'
                        className='bi bi-bag-plus-fill'
                        fill='#009900'
                        xmlns='http://www.w3.org/2000/svg'
                    >
                        <path
                            fillRule='evenodd'
                            d='M5.5 3.5a2.5 2.5 0 0 1 5 0V4h-5v-.5zm6 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0zM8.5 8a.5.5 0 0 0-1 0v1.5H6a.5.5 0 0 0 0 1h1.5V12a.5.5 0 0 0 1 0v-1.5H10a.5.5 0 0 0 0-1H8.5V8z'
                        />
                    </svg>
                </button>
                <button
                    className='cart__remove-btn cart__btn'
                    onClick={() => remove(id)}
                >
                    <svg
                        width='1.5em'
                        height='1.5em'
                        viewBox='0 0 16 16'
                        className='bi bi-bag-x-fill'
                        fill='#CC3333'
                        xmlns='http://www.w3.org/2000/svg'
                    >
                        <path
                            fillRule='evenodd'
                            d='M5.5 3.5a2.5 2.5 0 0 1 5 0V4h-5v-.5zm6 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0zM6.854 8.146a.5.5 0 1 0-.708.708L7.293 10l-1.147 1.146a.5.5 0 0 0 .708.708L8 10.707l1.146 1.147a.5.5 0 0 0 .708-.708L8.707 10l1.147-1.146a.5.5 0 0 0-.708-.708L8 9.293 6.854 8.146z'
                        />
                    </svg>
                </button>
            </td>
        </tr>
    );
};

const mapStateToProps = (state) => {
    return {
        cartItems: state.cartItems,
        total: state.total,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        decreaseItem: (id) => {
            dispatch(decreaseItem(id));
        },
        increaseItem: (id) => {
            dispatch(increaseItem(id));
        },
        removeItem: (id) => {
            dispatch(removeItem(id));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);
