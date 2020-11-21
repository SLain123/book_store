import React from 'react';

import './cart.scss';

const Cart = () => {
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
                    <tr>
                        <th scope='row'>1</th>
                        <td>Первая книга</td>
                        <td>2</td>
                        <td>100</td>
                        <td>
                            <button className='cart__minus-btn cart__btn'>
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
                            <button className='cart__plus-btn cart__btn'>
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
                            <button className='cart__remove-btn cart__btn'>
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
                </tbody>
            </table>
            <p className='cart__result'>Общая стоимость: 100 руб.</p>
        </section>
    );
};

export default Cart;
