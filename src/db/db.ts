/* eslint-disable class-methods-use-this */
const sqlite3 = require('sqlite3').verbose();

export default class DB {
  url: string;

  db: sqlite3.Database;

  constructor(url: string) {
    this.url = url;
  }

  open(): void {
    this.db = new sqlite3.Database(this.url);
  }

  createTable(sql: string): void {
    this.db.serialize(() => {
      const stmt = this.db.prepare(sql);
      stmt.run();
      stmt.finalize();
    });
  }

  insertData(sql: string, objects: any[]) {
    this.db.serialize(() => {
      const stmt = this.db.prepare(sql);
      for (let i = 0; i < objects.length; i += 1) {
        stmt.run(objects[i]);
      }

      stmt.finalize();
    });
  }

  queryData(sql: string, callback: (err, rows) => {}) {
    this.db.all(sql, (err: any, rows: any[]) => {
      // if (err != null) {
      //   this.printError(err);
      //   return;
      // }

      /// deal query data.
      if (callback) {
        callback(err, rows);
      }
    });
  }

  executeSql(sql: string) {
    this.db.run(sql, (err) => {
      if (err != null) {
        this.printError(err);
      }
    });
  }

  close() {
    this.db.close();
  }

  printError(err: any): void {
    console.log(`Error Message:${JSON.stringify(err)}`);
  }
}
