import { Entity, PrimaryColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import Committee from "./Committee";

@Entity()
export default class League {
    @PrimaryColumn({ type: 'int', width: 7 })
    _id: number

    @PrimaryColumn({ type: 'varchar', length: 100, unique: true })
    name: string

    @OneToMany(() => Committee, (committee) => committee.league)
    committees: Committee[]
}