const data = [
    {
        id: 1,
        title: 'Реактивное программирование с использованием RxJava',
        author: ' Нуркевич Томаш, Кристенсен Бен',
        year: 2017,
        price: 1399,
        imgUrlWEBP:
            'https://downloader.disk.yandex.ru/preview/bbc647a6ce92f89ff599c9e497922d4aed0ba1b5a6b9852a436a8e1980564674/60ba51ce/hV2--GqchJFz4Gkmx0oyBSyJEZJ7PmP4mIKucSFlcU0PLFXJksDWbn1lP9pt03EyOTpQZ6QL7WpzNJbyZfHo_w%3D%3D?uid=0&filename=1.webp&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=2048x2048',
        imgUrlJPG:
            'https://downloader.disk.yandex.ru/preview/00550c1e6aa219109105586f4eedbc5e1be748e4192a92b656eca9e2caf66cf3/60ba51a5/UZYwEOMZYTYkQK7yFtAFS9feN1O8bzGe9OFN4G4XPveSu_QNV2RNxVnlGdGj9OcurW3_wFa2AvTUGm4_INcifQ%3D%3D?uid=0&filename=1.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=0&tknv=v2&size=2048x2048',
    },
    {
        id: 2,
        title: 'React и Redux. Функциональная веб-разработка',
        author: 'Бэнкс Алекс, Порселло Ева',
        year: 2018,
        price: 1299,
        imgUrlWEBP:
            'https://downloader.disk.yandex.ru/preview/77dc9a9cfff6f6799bd09769f90d74e5e6931bf6cfd34e3565532815d15ac957/60ba52ee/q23fRa3bujPrOUKirmnDUdfeN1O8bzGe9OFN4G4XPvc9Y3VDrzovDoGN1nwCJ2Q3yGRRfd_gY5pCUVUa3-66hQ%3D%3D?uid=0&filename=2.webp&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=2048x2048',
        imgUrlJPG:
            'https://downloader.disk.yandex.ru/preview/0f0ad2fc4d675d3387ac6079a7f7212c25bedac5ee5191b01ab73573302a706b/60ba52d2/fbB7ybcn3mDKMikNKRqu5dfeN1O8bzGe9OFN4G4XPvcuQb8qOxsQt0eYDDalZUvvyiiZ2TbNUZQV4c9Buuvf9g%3D%3D?uid=0&filename=2.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=0&tknv=v2&size=2048x2048',
    },
    {
        id: 3,
        title: 'React.js. Быстрый старт',
        author: 'Стефанов Стоян',
        year: 2018,
        price: 999,
        imgUrlWEBP:
            'https://downloader.disk.yandex.ru/preview/dbfc815f9721def166c10be407c51f4f9fa8da67328f43808756ce94e47d816f/60ba5316/ZxI03Hpb3KBaE8opddmhmyyJEZJ7PmP4mIKucSFlcU16Wugr69e6OIULsYGVSFL5jBPedb-XCnCp3tQPBeAEzQ%3D%3D?uid=0&filename=3.webp&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=2048x2048',
        imgUrlJPG:
            'https://downloader.disk.yandex.ru/preview/a4ace034959111c057b5726eda2151e44be25464f3e66c03efaf139455c19039/60ba5302/S94qiO8JZNz5hX57H-SGpfHSDl-pJhHUjPuN554G-rwYGZICNbzfkYsqWlmzNZFbwc-6riOdASB9AauRfcUZ4g%3D%3D?uid=0&filename=3.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=0&tknv=v2&size=2048x2048',
    },
    {
        id: 4,
        title: 'Изучаем React',
        author: 'Чиннатамби Кирупа',
        year: 2019,
        price: 990,
        imgUrlWEBP:
            'https://downloader.disk.yandex.ru/preview/a832123e7ad53ec86863007405df672540c9301550bfba44018a2017c65b6ffc/60ba534c/WUhBKiIGIH7eSEILbqjSzyyJEZJ7PmP4mIKucSFlcU1mR7eEns6qpfWRV3XV9Uq5AVCIo0GH8Oo2VuQ5-CSPlQ%3D%3D?uid=0&filename=4.webp&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=2048x2048',
        imgUrlJPG:
            'https://downloader.disk.yandex.ru/preview/c97232dd569b1ff788723c5e5a87d8503132de3c0b5317fb5d0e53708ed07c0a/60ba5332/knJcAM_33VRue6OYVWnIuSyJEZJ7PmP4mIKucSFlcU3wbxTO01OJLGedh5_ns6uu_pDqWoWXcaHXJaZfAG010w%3D%3D?uid=0&filename=4.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=0&tknv=v2&size=2048x2048',
    },
    {
        id: 5,
        title: 'React в действии',
        author: 'Томас Марк Тиленс',
        year: 2019,
        price: 1095,
        imgUrlWEBP:
            'https://downloader.disk.yandex.ru/preview/8744dafc2324c95660e42d0b429fad0656fe0881d21fb2054d3b2087a99d3eef/60ba5380/DDPlw5SRg3eeomnXz7dXHSWT8QJpGZJa5I4AtNAY03j4TS_7qA_6R8T-VTVq30FrntvEjKVRatVAm45vCrozGw%3D%3D?uid=0&filename=5.webp&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=2048x2048',
        imgUrlJPG:
            'https://downloader.disk.yandex.ru/preview/b59a2a07e4893fc90f72f6a33b5aad11634c6e57b32b018117361772db2ff581/60ba536a/5ezphohdbEKsaaeyRNs03iWT8QJpGZJa5I4AtNAY03gDhT3c3DS1ZeJwH61yQLOpqBWMMvI-SFcEOSn_uiBrbg%3D%3D?uid=0&filename=5.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=0&tknv=v2&size=2048x2048',
    },
    {
        id: 6,
        title: 'Веб-приложения на React, JSX, Redux и GraphQL',
        author: 'Мардан Азат',
        year: 2019,
        price: 1200,
        imgUrlWEBP:
            'https://downloader.disk.yandex.ru/preview/6fb4a3f93fd27c57b4cbeff3eb7224f510a54e3480aa6487f0cdba25bbe6a6cf/60ba53a7/nwkL-Z8MCrThg9TkskuJSdfeN1O8bzGe9OFN4G4XPve8Wz2nO1KCsR6G32-cFilPocqwsiOkoNE42KvvPKAzSA%3D%3D?uid=0&filename=6.webp&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=2048x2048',
        imgUrlJPG:
            'https://downloader.disk.yandex.ru/preview/94d711b16fbdfd9c0731d1b70450a8d7418f0763b0aa34a78291f62c646d1d87/60ba5393/k2OGRqbigwBee1Le5tvEZyWT8QJpGZJa5I4AtNAY03jjugdwm0-B3wLT8ufxNUDnK6nJIJij_F_iDoW7geN0Lg%3D%3D?uid=0&filename=6.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=0&tknv=v2&size=2048x2048',
    },
    {
        id: 7,
        title: 'Реактивные шаблоны проектирования',
        author: 'Кун Роланд, Аллен Джейми, Ханафи Брайан',
        year: 2018,
        price: 1100,
        imgUrlWEBP:
            'https://downloader.disk.yandex.ru/preview/a8c328dcdc9cba43a052da0fcb91c43eff98c13cda4379be83d03194f73415dc/60ba53d7/gERiFdjmIi9vJN4jXmtTItfeN1O8bzGe9OFN4G4XPveWGKWCdxCPr_O6fVZNrC6X5q7TgGt-b7K33DGUuueNpA%3D%3D?uid=0&filename=7.webp&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=2048x2048',
        imgUrlJPG:
            'https://downloader.disk.yandex.ru/preview/08ca9c8e2d41b989c12aa8890e20065bfe3df846cd7d061c0a398eb6e78e5c80/60ba53c2/MqrXVPdbgIFvc_F-Rm4oyyWT8QJpGZJa5I4AtNAY03iDzA1VC1BvIrA-rr8baow0e9JEeM6ZaMAD45WMXhTHCA%3D%3D?uid=0&filename=7.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=0&tknv=v2&size=2048x2048',
    },
    {
        id: 8,
        title: '{Вы не знаете JS} Асинхронная обработка и оптимизация',
        author: 'Симпсон Кайл',
        year: 2019,
        price: 970,
        imgUrlWEBP:
            'https://downloader.disk.yandex.ru/preview/cb3ab8d284aac4e542f507d5283b76e85daaef0151de4aa5dbc7947183124d4e/60ba53fb/tm800Zmi4lNeiRSoOKmIZdfeN1O8bzGe9OFN4G4XPvesj8gwIs25XxvCXwUDZps_NMftpXWqKsSDkkaAxf65Bw%3D%3D?uid=0&filename=8.webp&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=2048x2048',
        imgUrlJPG:
            'https://downloader.disk.yandex.ru/preview/9225ef6af78b27267b9f90393f6f66de7d9b14b1eeff257997df60521f82d96d/60ba53e9/ZR28dtgi8EC1ilt1wdlyjtfeN1O8bzGe9OFN4G4XPvccNan4lD5X0UFinhiLO4Ylz5etPIdKM6U3ocykpCYaog%3D%3D?uid=0&filename=8.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=0&tknv=v2&size=2048x2048',
    },
];

class BookstoreService {
    getBooks() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const random = Math.random();
                if (random < 1) {  // оставить для тестов сервиса;
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
