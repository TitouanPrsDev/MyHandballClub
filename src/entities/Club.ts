import { Entity, PrimaryColumn, Column, OneToMany, ManyToOne } from 'typeorm';
import User from './User';
import Committee from './Committee';

@Entity()
export default class Club {
    @PrimaryColumn({ type: 'int', width: 7 })
    _id: number

    @Column({ type: 'varchar', length: 100, unique: true})
    fullname: string

    @Column({ type: 'varchar', length: 50, nullable: true, default: null })
    shortname: string

    @Column({ type: 'varchar', length: 50 })
    city: string

    @ManyToOne(() => Committee, (committee) => committee.clubs)
    committee: Committee

    @OneToMany(() => User, (user) => user.club)
    users: User[]
}