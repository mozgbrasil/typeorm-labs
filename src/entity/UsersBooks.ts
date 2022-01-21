import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Books } from "./Books";
import { Users } from "./Users";

@Index("users_books_pkey", ["bookId", "userId"], { unique: true })
@Entity("users_books", { schema: "public" })
export class UsersBooks {
  @Column("integer", { primary: true, name: "user_id" })
  userId: number;

  @Column("integer", { primary: true, name: "book_id" })
  bookId: number;

  @Column("timestamp without time zone", {
    name: "checkout_date",
    nullable: true,
  })
  checkoutDate: Date | null;

  @Column("timestamp without time zone", {
    name: "return_date",
    nullable: true,
  })
  returnDate: Date | null;

  @ManyToOne(() => Books, (books) => books.usersBooks, { onUpdate: "CASCADE" })
  @JoinColumn([{ name: "book_id", referencedColumnName: "id" }])
  book: Books;

  @ManyToOne(() => Users, (users) => users.usersBooks, { onUpdate: "CASCADE" })
  @JoinColumn([{ name: "user_id", referencedColumnName: "id" }])
  user: Users;
}
