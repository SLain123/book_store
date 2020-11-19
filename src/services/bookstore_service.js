class BookstoreService {
    getBooks() {
        return [
            {
                id: 1,
                title: 'Отцы и дети',
                author: 'Тургенев Иван Сергеевич',
                year: 1862,
            },
            {
                id: 2,
                title: 'Идиот',
                author: 'Достоевский Федор Михайлович',
                year: 1869,
            }, {
                id: 3,
                title: 'Капитанская дочка',
                author: 'Пушкин Александр Сергеевич',
                year: 1836,
            }
        ];
    }
}

export default BookstoreService;
