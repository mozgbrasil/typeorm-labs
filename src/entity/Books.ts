import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Reviews } from "./Reviews";
import { UsersBooks } from "./UsersBooks";

@Index("books_pkey", ["id"], { unique: true })
@Index("books_isbn_key", ["isbn"], { unique: true })
@Entity("books", { schema: "public" })
export class Books {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("character varying", { name: "title", length: 100 })
  title: string;

  @Column("character varying", { name: "author", length: 100 })
  author: string;

  @Column("timestamp without time zone", { name: "published_date" })
  publishedDate: Date;

  @Column("integer", { name: "isbn", nullable: true, unique: true })
  isbn: number | null;

  @OneToMany(() => Reviews, (reviews) => reviews.book)
  reviews: Reviews[];

  @OneToMany(() => UsersBooks, (usersBooks) => usersBooks.book)
  usersBooks: UsersBooks[];
}
