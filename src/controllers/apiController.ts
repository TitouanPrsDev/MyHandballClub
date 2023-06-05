import dataSource from '../../config/datasource';
import User from '../entities/User';
import Club from '../entities/Club';
import Committee from '../entities/Committee';
import League from '../entities/League';
import {stat} from "fs";

const index_get = async (req, res) => {
    res.end();
};

const docs_get = async (req, res) => {
    res.end();
};

const status_get = async (req, res) => {
    res.end();
};

const database_user_list_get = async (req, res) => {
    const users = await dataSource.manager.find(User);

    if (!users.length) res.json({ users: null });
    else res.json(users);
};

const database_user_detail_get = async (req, res) => {
    const user = await dataSource.manager.findOne(User, {
        where: { _id: req.params.id }
    });

    res.json(user);
};

const database_club_list_get = async (req, res) => {
    const clubs = await dataSource.manager.find(Club);

    if (!clubs.length) res.json({ clubs: null });
    else res.json(clubs);
};

const database_club_detail_get = async (req, res) => {
    const club = await dataSource.manager.findOne(Club, {
        where: [
            { _id: req.params.id },
            { fullname: req.params.id },
            { shortname: req.params.id }
        ]
    });

    res.json(club);
};

const database_committee_list_get = async (req, res) => {
    const committees = await dataSource.manager.find(Committee);

    if (!committees.length) res.json({ committees: null });
    else res.json(committees);
};

const database_commitee_detail_get = async (req, res) => {
    const committee = await dataSource.manager.findOne(Committee, {
        where: [
            { _id: req.params.id },
            { name: req.params.id }
        ]
    });

    res.json(committee);
};

const database_league_list_get = async (req, res) => {
    const leagues = await dataSource.manager.find(League);

    if (!leagues.length) res.json({ leagues: null });
    else res.json(leagues);
};

const database_league_detail_get = async (req, res) => {
    const league = await dataSource.manager.findOne(League, {
        where: [
            { _id: req.params.id },
            { name: req.params.id }
        ]
    });

    res.json(league);
};

export default {
    index: { get: index_get },
    docs: { get: docs_get },
    status: { get: status_get },
    database: {
        user: {
            list: database_user_list_get,
            detail: database_user_detail_get
        },
        club: {
            list: database_club_list_get,
            detail: database_club_detail_get
        },
        committee: {
            list: database_committee_list_get,
            detail: database_commitee_detail_get
        },
        league: {
            list: database_league_list_get,
            detail: database_league_detail_get
        }
    }
};