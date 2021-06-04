const data = [
    {
        id: 1,
        title: 'Реактивное программирование с использованием RxJava',
        author: ' Нуркевич Томаш, Кристенсен Бен',
        year: 2017,
        price: 1399,
        imgUrlWEBP: 'https://i.ibb.co/SDjS92b/1.webp',
        imgUrlJPG: 'https://i.ibb.co/gM9gRmJ/1.png',
    },
    {
        id: 2,
        title: 'React и Redux. Функциональная веб-разработка',
        author: 'Бэнкс Алекс, Порселло Ева',
        year: 2018,
        price: 1299,
        imgUrlWEBP: 'https://i.ibb.co/tmTfgZr/2.webp',
        imgUrlJPG: 'https://i.ibb.co/SXZ3Fnz/2.png',
    },
    {
        id: 3,
        title: 'React.js. Быстрый старт',
        author: 'Стефанов Стоян',
        year: 2018,
        price: 999,
        imgUrlWEBP: 'https://i.ibb.co/NYjm1JC/3.webp',
        imgUrlJPG: 'https://i.ibb.co/GdpJ8HB/3.png',
    },
    {
        id: 4,
        title: 'Изучаем React',
        author: 'Чиннатамби Кирупа',
        year: 2019,
        price: 990,
        imgUrlWEBP: 'https://i.ibb.co/XC6b8YP/4.webp',
        imgUrlJPG: 'https://i.ibb.co/dJcVZvX/4.png',
    },
    {
        id: 5,
        title: 'React в действии',
        author: 'Томас Марк Тиленс',
        year: 2019,
        price: 1095,
        imgUrlWEBP: 'https://i.ibb.co/MnqVW7K/5.webp',
        imgUrlJPG: 'https://i.ibb.co/kHgq2fS/5.png',
    },
    {
        id: 6,
        title: 'Веб-приложения на React, JSX, Redux и GraphQL',
        author: 'Мардан Азат',
        year: 2019,
        price: 1200,
        imgUrlWEBP: 'https://i.ibb.co/PCKJ9QM/6.webp',
        imgUrlJPG: 'https://i.ibb.co/p1Yk0kz/6.png',
    },
    {
        id: 7,
        title: 'Реактивные шаблоны проектирования',
        author: 'Кун Роланд, Аллен Джейми, Ханафи Брайан',
        year: 2018,
        price: 1100,
        imgUrlWEBP: 'https://i.ibb.co/W32MKqs/7.webp',
        imgUrlJPG: 'https://i.ibb.co/9Gppx38/7.png',
    },
    {
        id: 8,
        title: '{Вы не знаете JS} Асинхронная обработка и оптимизация',
        author: 'Симпсон Кайл',
        year: 2019,
        price: 970,
        imgUrlWEBP: 'https://i.ibb.co/jMVwZYZ/8.webp',
        imgUrlJPG: 'https://i.ibb.co/0QL9pmn/8.png',
    },
];

class BookstoreService {
    getBooks() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const random = Math.random();
                if (random < 1) {
                    // оставить для тестов сервиса;
                    resolve(data);
                } else {
                    reject(
                        new Error(
                            'Что-то сломалось, книги не были загружены...',
                        ),
                    );
                }
            }, 1000);
        });
    }
}

export default BookstoreService;
