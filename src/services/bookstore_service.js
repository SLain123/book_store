class BookstoreService {
    getBooks() {
        return [
            {
                id: 1,
                title: 'Реактивное программирование с использованием RxJava',
                author: ' Нуркевич Томаш, Кристенсен Бен',
                year: 2017,
                price: 1399,
                imgUrlWEBP: 'https://downloader.disk.yandex.ru/preview/b3d139376679d9e1467d5077beede9647d18d397e8ea8eefab3a707d1d61d164/5fb81cc0/hV2--GqchJFz4Gkmx0oyBSyJEZJ7PmP4mIKucSFlcU0PLFXJksDWbn1lP9pt03EyOTpQZ6QL7WpzNJbyZfHo_w%3D%3D?uid=0&filename=1.webp&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=1920x952',
                imgUrlJPG: 'https://2.downloader.disk.yandex.ru/preview/b37030aa83d8133fa903d79f7c379d765dc409f8d4759ea71b2cc7913b9d10e5/inf/UZYwEOMZYTYkQK7yFtAFS9feN1O8bzGe9OFN4G4XPveSu_QNV2RNxVnlGdGj9OcurW3_wFa2AvTUGm4_INcifQ%3D%3D?uid=15171382&filename=1.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=15171382&tknv=v2&size=1903x969',
            },
            {
                id: 2,
                title: 'React и Redux. Функциональная веб-разработка',
                author: 'Бэнкс Алекс, Порселло Ева',
                year: 2018,
                price: 1299,
                imgUrlWEBP: 'https://4.downloader.disk.yandex.ru/preview/03d3df916cf035a8eb39bdc25537e940c9fe481fe66bfa974c1ea4f97ada8246/inf/q23fRa3bujPrOUKirmnDUdfeN1O8bzGe9OFN4G4XPvc9Y3VDrzovDoGN1nwCJ2Q3yGRRfd_gY5pCUVUa3-66hQ%3D%3D?uid=15171382&filename=2.webp&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=15171382&tknv=v2&size=1903x969',
                imgUrlJPG: 'https://3.downloader.disk.yandex.ru/preview/defb035a1a914ee5e4a3da234a6d2f38dd84bd7f5fad733da4b7da645ed9efa2/inf/fbB7ybcn3mDKMikNKRqu5dfeN1O8bzGe9OFN4G4XPvcuQb8qOxsQt0eYDDalZUvvyiiZ2TbNUZQV4c9Buuvf9g%3D%3D?uid=15171382&filename=2.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=15171382&tknv=v2&size=1903x969',
            },
            {
                id: 3,
                title: 'React.js. Быстрый старт',
                author: 'Стефанов Стоян',
                year: 2018,
                price: 999,
                imgUrlWEBP: 'https://3.downloader.disk.yandex.ru/preview/46d3e45de3544e6716146cb3f2b5b6042d1b52bca225477bd357cbf27a6877e5/inf/ZxI03Hpb3KBaE8opddmhmyyJEZJ7PmP4mIKucSFlcU16Wugr69e6OIULsYGVSFL5jBPedb-XCnCp3tQPBeAEzQ%3D%3D?uid=15171382&filename=3.webp&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=15171382&tknv=v2&size=1903x969',
                imgUrlJPG: 'https://2.downloader.disk.yandex.ru/preview/3ce44ac79813d2132e2dcfb0c4d0b0d8c39bc7bd759c8c118162078f7969134d/inf/S94qiO8JZNz5hX57H-SGpfHSDl-pJhHUjPuN554G-rwYGZICNbzfkYsqWlmzNZFbwc-6riOdASB9AauRfcUZ4g%3D%3D?uid=15171382&filename=3.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=15171382&tknv=v2&size=1903x969',
            },
            {
                id: 4,
                title: 'Изучаем React',
                author: 'Чиннатамби Кирупа',
                year: 2019,
                price: 990,
                imgUrlWEBP: 'https://2.downloader.disk.yandex.ru/preview/3e65c300818750a9f7a13ad852f70f570ea467f92c4ffc31f0a2c51aed258c6a/inf/WUhBKiIGIH7eSEILbqjSzyyJEZJ7PmP4mIKucSFlcU1mR7eEns6qpfWRV3XV9Uq5AVCIo0GH8Oo2VuQ5-CSPlQ%3D%3D?uid=15171382&filename=4.webp&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=15171382&tknv=v2&size=1903x969',
                imgUrlJPG: 'https://1.downloader.disk.yandex.ru/preview/0657cf68517c0728e8b56164cb8d969916f8cd30d4bc567b6138743eb36761f5/inf/knJcAM_33VRue6OYVWnIuSyJEZJ7PmP4mIKucSFlcU3wbxTO01OJLGedh5_ns6uu_pDqWoWXcaHXJaZfAG010w%3D%3D?uid=15171382&filename=4.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=15171382&tknv=v2&size=1903x969',
            },
            {
                id: 5,
                title: 'React в действии',
                author: 'Томас Марк Тиленс',
                year: 2019,
                price: 1095,
                imgUrlWEBP: 'https://1.downloader.disk.yandex.ru/preview/83b7ed57c0177a7362d9520378121b28a28606e7dff9cfbf09d2978924e8df68/inf/DDPlw5SRg3eeomnXz7dXHSWT8QJpGZJa5I4AtNAY03j4TS_7qA_6R8T-VTVq30FrntvEjKVRatVAm45vCrozGw%3D%3D?uid=15171382&filename=5.webp&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=15171382&tknv=v2&size=1903x969',
                imgUrlJPG: 'https://4.downloader.disk.yandex.ru/preview/4e49573ff480c4b89677efefb6fbc94c697bb1b7237170a77a211d6e83867d9e/inf/5ezphohdbEKsaaeyRNs03iWT8QJpGZJa5I4AtNAY03gDhT3c3DS1ZeJwH61yQLOpqBWMMvI-SFcEOSn_uiBrbg%3D%3D?uid=15171382&filename=5.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=15171382&tknv=v2&size=1903x969',
            },
            {
                id: 6,
                title: 'Веб-приложения на React, JSX, Redux и GraphQL',
                author: 'Мардан Азат',
                year: 2019,
                price: 1200,
                imgUrlWEBP: 'https://2.downloader.disk.yandex.ru/preview/e3d6a3afdc7da9074397d4ff86143d23ab52af8bdeea07633b75bbb223714348/inf/nwkL-Z8MCrThg9TkskuJSdfeN1O8bzGe9OFN4G4XPve8Wz2nO1KCsR6G32-cFilPocqwsiOkoNE42KvvPKAzSA%3D%3D?uid=15171382&filename=6.webp&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=15171382&tknv=v2&size=1903x969',
                imgUrlJPG: 'https://3.downloader.disk.yandex.ru/preview/d49a3b43e99591da1bccaead013515ee79ecdbfcd0697df14c3e8e32e03ae2d9/inf/k2OGRqbigwBee1Le5tvEZyWT8QJpGZJa5I4AtNAY03jjugdwm0-B3wLT8ufxNUDnK6nJIJij_F_iDoW7geN0Lg%3D%3D?uid=15171382&filename=6.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=15171382&tknv=v2&size=1903x969',
            },
            {
                id: 7,
                title: 'Реактивные шаблоны проектирования',
                author: 'Кун Роланд, Аллен Джейми, Ханафи Брайан',
                year: 2018,
                price: 1100,
                imgUrlWEBP: 'https://3.downloader.disk.yandex.ru/preview/dfb23067bb88aeac9046b7b654b6f93516c20f6bab030492238af8e0858e0191/inf/gERiFdjmIi9vJN4jXmtTItfeN1O8bzGe9OFN4G4XPveWGKWCdxCPr_O6fVZNrC6X5q7TgGt-b7K33DGUuueNpA%3D%3D?uid=15171382&filename=7.webp&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=15171382&tknv=v2&size=1903x969',
                imgUrlJPG: 'https://4.downloader.disk.yandex.ru/preview/b2f5528f79efe74a1b0ffa7fe8bd70df36af8798cccbb3d665e6324ab686a3cd/inf/MqrXVPdbgIFvc_F-Rm4oyyWT8QJpGZJa5I4AtNAY03iDzA1VC1BvIrA-rr8baow0e9JEeM6ZaMAD45WMXhTHCA%3D%3D?uid=15171382&filename=7.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=15171382&tknv=v2&size=1903x969',
            },
            {
                id: 8,
                title: '{Вы не знаете JS} Асинхронная обработка и оптимизация',
                author: 'Симпсон Кайл',
                year: 2019,
                price: 970,
                imgUrlWEBP: 'https://3.downloader.disk.yandex.ru/preview/1283369ca7399e2b04c69fcef500a2064ce09923494445daa49749e3b85948e8/inf/tm800Zmi4lNeiRSoOKmIZdfeN1O8bzGe9OFN4G4XPvesj8gwIs25XxvCXwUDZps_NMftpXWqKsSDkkaAxf65Bw%3D%3D?uid=15171382&filename=8.webp&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=15171382&tknv=v2&size=1903x969',
                imgUrlJPG: 'https://3.downloader.disk.yandex.ru/preview/3b98db5f8a42efde92e3176f7229d80b2bb9a7900bcd5f9aa7585c7f7e69b66a/inf/ZR28dtgi8EC1ilt1wdlyjtfeN1O8bzGe9OFN4G4XPvccNan4lD5X0UFinhiLO4Ylz5etPIdKM6U3ocykpCYaog%3D%3D?uid=15171382&filename=8.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=15171382&tknv=v2&size=1903x969',
            },
        ];
    }
}

export default BookstoreService;
