import DB from '../db/db';

export default class Book {
  id: number;

  name: string;

  age: number;

  recos: number;

  constructor(id: number, name: string, age: number, recos: number) {
    this.id = id;
    this.name = name;
    this.age = age;
    this.recos = recos;
  }

  static db: DB | null = null;

  static books: Book[];

  static listener;

  static init(listener) {
    console.log('Book.init');
    Book.listener = listener;
    Book.db = new DB('/Users/admin/Documents/zhushanbao/projects/early_education/db/early_education.db');
    Book.db.open();
    Book.db.queryData('SELECT * FROM ee_books;', (err, rows) => {
      if(err) {
        console.log('Book.queryData cb err=' + JSON.stringify(err));
        return;
      }
      console.log('Book.queryData cb rows=' + JSON.stringify(rows));
      Book.books = rows.map((item, index, arr) => {
        console.log('Book.queryData cb item=' + JSON.stringify(item));
        return new Book(item.ID, item.NAME, item.AGE, item.RECOS);
      });
      if (listener && listener.onAllBooks) {
        listener.onAllBooks(Book.books);
      }
    });
  }

  static uninit() {
    console.log('Book.uninit');
    if (Book.db) {
      Book.db.close();
    }
  }

  static getBooks(): Book[] {
    return Book.books;
  }
}

// function dataDeal(objects) {
//   for (let i = 0; i < objects.length; i+=1) {
//     console.log(objects[i]);
//   }
// }

//  // for test
//  const createTileTableSql =
//  'create table if not exists tiles(level INTEGER, column INTEGER, row INTEGER, content BLOB);';
// db.createTable(createTileTableSql);

// const tileData = [
//  [1, 10, 10],
//  [1, 11, 11],
//  [1, 10, 9],
//  [1, 11, 9],
// ];
// const insertTileSql = 'insert into tiles(level, column, row) values(?, ?, ?)';
// db.insertData(insertTileSql, tileData);

// const querySql =
//  'select * from tiles where level = 1 and column >= 10 and column <= 11 and row >= 10 and row <=11';
// db.queryData(querySql, dataDeal);
