import {
  Column,
  Entity,
  Index,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Addresses } from "./Addresses";
import { Reviews } from "./Reviews";
import { UsersBooks } from "./UsersBooks";

@Index("users_pkey", ["id"], { unique: true })
@Entity("users", { schema: "public" })
export class Users {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("character varying", { name: "username", length: 25 })
  username: string;

  @Column("boolean", { name: "enabled", nullable: true, default: () => "true" })
  enabled: boolean | null;

  @Column("timestamp without time zone", {
    name: "last_login",
    default: () => "now()",
  })
  lastLogin: Date;

  @OneToOne(() => Addresses, (addresses) => addresses.user)
  addresses: Addresses;

  @OneToMany(() => Reviews, (reviews) => reviews.user)
  reviews: Reviews[];

  @OneToMany(() => UsersBooks, (usersBooks) => usersBooks.user)
  usersBooks: UsersBooks[];
}
