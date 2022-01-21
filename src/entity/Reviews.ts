import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Books } from "./Books";
import { Users } from "./Users";

@Index("reviews_pkey", ["id"], { unique: true })
@Entity("reviews", { schema: "public" })
export class Reviews {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("character varying", {
    name: "review_content",
    nullable: true,
    length: 255,
  })
  reviewContent: string | null;

  @Column("integer", { name: "rating", nullable: true })
  rating: number | null;

  @Column("timestamp without time zone", {
    name: "published_date",
    nullable: true,
    default: () => "CURRENT_TIMESTAMP",
  })
  publishedDate: Date | null;

  @ManyToOne(() => Books, (books) => books.reviews, { onDelete: "CASCADE" })
  @JoinColumn([{ name: "book_id", referencedColumnName: "id" }])
  book: Books;

  @ManyToOne(() => Users, (users) => users.reviews, { onDelete: "CASCADE" })
  @JoinColumn([{ name: "user_id", referencedColumnName: "id" }])
  user: Users;
}
