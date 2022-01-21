import { Column, Entity, Index, JoinColumn, OneToOne } from "typeorm";
import { Users } from "./Users";

@Index("addresses_pkey", ["userId"], { unique: true })
@Entity("addresses", { schema: "public" })
export class Addresses {
  @Column("integer", { primary: true, name: "user_id" })
  userId: number;

  @Column("character varying", { name: "street", length: 30 })
  street: string;

  @Column("character varying", { name: "city", length: 30 })
  city: string;

  @Column("character varying", { name: "state", length: 30 })
  state: string;

  @OneToOne(() => Users, (users) => users.addresses)
  @JoinColumn([{ name: "user_id", referencedColumnName: "id" }])
  user: Users;
}
