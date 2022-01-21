import { MigrationInterface, QueryRunner } from "typeorm";

// https://launchschool.com/books/sql_first_edition/read/multi_tables

export class MultiTables1642792063013 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      CREATE TABLE users (
        id serial,
        username VARCHAR(25) NOT NULL,
        enabled boolean DEFAULT TRUE,
        last_login timestamp NOT NULL DEFAULT NOW(),
        PRIMARY KEY (id)
      );

      /*
       one to one: User has one address
      */

      CREATE TABLE addresses (
        user_id int NOT NULL,
        street VARCHAR(30) NOT NULL,
        city VARCHAR(30) NOT NULL,
        state VARCHAR(30) NOT NULL,
        PRIMARY KEY (user_id),
        CONSTRAINT fk_user_id FOREIGN KEY (user_id) REFERENCES users (id)
      );

      /*

      */

      CREATE TABLE books (
        id serial,
        title VARCHAR(100) NOT NULL,
        author VARCHAR(100) NOT NULL,
        published_date timestamp NOT NULL,
        isbn int,
        PRIMARY KEY (id),
        UNIQUE (isbn)
      );

      /*
       one to many: Book has many reviews
      */

      DROP TABLE IF EXISTS reviews;
      CREATE TABLE reviews (
        id serial,
        book_id int NOT NULL,
        user_id int NOT NULL,
        review_content VARCHAR(255),
        rating int,
        published_date timestamp DEFAULT CURRENT_TIMESTAMP,
        PRIMARY KEY (id),
        FOREIGN KEY (book_id) REFERENCES books(id) ON DELETE CASCADE,
        FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
      );

      /*
      many to many: User has many books
      */

      CREATE TABLE users_books (
        user_id int NOT NULL,
        book_id int NOT NULL,
        checkout_date timestamp,
        return_date timestamp,
        PRIMARY KEY (user_id, book_id),
        FOREIGN KEY (user_id) REFERENCES users(id) ON UPDATE CASCADE,
        FOREIGN KEY (book_id) REFERENCES books(id) ON UPDATE CASCADE
      );
  `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
    DROP TABLE users_books;
    DROP TABLE reviews;
    DROP TABLE books;
    DROP TABLE addresses;
    DROP TABLE users;
`);
  }
}
