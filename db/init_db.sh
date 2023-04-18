sqlite3 early_education.db 'CREATE TABLE IF NOT EXISTS ee_books(
   ID INTEGER PRIMARY KEY AUTOINCREMENT,
   NAME           TEXT    NOT NULL,
   AGE            INT     NOT NULL,
   RECOS          INT     NOT NULL
);'
