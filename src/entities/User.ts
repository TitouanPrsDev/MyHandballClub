import { Entity, PrimaryColumn, Column, ManyToOne } from 'typeorm';
import Club from './Club';

export enum LicenseType {
    A = "A",
    B = "B",
    C = "C",
    D = "D",
    E = "E",
    EA_EB_EC_ED = "EA_EB_EC_ED",
    UEA_UEB_UEC_UED = "UEA_UEB_UEC_UED",
    JEA_JEB_JEC_JED = "JEA_JEB_JEC_JED"
}

@Entity()
export default class User {
    @PrimaryColumn({ type: 'int', width: 13 })
    _id: number;

    @Column({ type: 'varchar', length: 255, unique: true })
    email: string

    @Column({ type: 'char', length: 60 })
    password: string

    @Column({ type: 'varchar', length: 50 })
    firstname: string

    @Column({ type: 'varchar', length: 50 })
    lastname: string

    @Column({ type: 'date', nullable: true, default: null })
    birthdate: string

    @Column({ type: 'char', length: 20, nullable: true, default: null })
    profilepicture: string

    @Column({ type: 'enum', enum: LicenseType })
    licensetype: LicenseType

    @ManyToOne(() => Club, (club) => club.users)
    club: Club
}