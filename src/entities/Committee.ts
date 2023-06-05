import { Entity, PrimaryColumn, Column, OneToMany, ManyToOne } from 'typeorm';
import League from './League';
import Club from './Club';

@Entity()
export default class Committee {
    @PrimaryColumn({ type: 'int', width: 7 })
    _id: number

    @Column({ type: 'varchar', length: 100, unique: true })
    name: string

    @ManyToOne(() => League, (league) => league.committees)
    league: League

    @OneToMany(() => Club, (club) => club.committee)
    clubs: Club[]
}