import dataSource from '../../config/datasource';

import User from '../entities/User';

const index_get = async (req, res) => {
    res.render('dashboard/index', {
        title: "Tableau de bord",
        breadcrumb: []
    });
};

const messages_index_get = async (req, res) => {
    res.render('dashboard/messages', {
        title: "Messages",
        breadcrumb: [
            { title: "Tableau de bord", url: "/dashboard" }
        ]
    })
};

const messages_detail_get = async (req, res) => {
    res.end();
}

const profile_get = async (req, res) => {
    res.end();
}

const settings_get = async (req, res) => {
    /*const settings = await dataSource.manager.findOne(User, {
        where: { id: userId }
    });*/

    res.render('dashboard/settings', {
        title: "Paramètres du compte",
        breadcrumb: [
            { title: "Tableau de bord", url: "/dashboard" },
        ],
        formValues: {

        }
    });
};

const settings_post = async (req, res) => {
    let post = {
        'account': {},
        'security': {},
        'invoicing': {}
    };

    Object.entries(req.body).forEach(input => {
        const [ key, value ] = input;
        const keyCategory = key.split('_')[0];
        const keyValue = key.split('_')[1];

        if (keyCategory == 'account') {
            post.account[keyValue] = value;

        } else if (keyCategory == 'security') {
            post.security[keyValue] = value;

        } else if (keyCategory == 'invoicing') {
            post.invoicing[keyValue] = value
        }
    });
}

export default {
    index: { get: index_get },
    messages: {
        index: { get: messages_index_get },
        detail: { get: messages_detail_get }
    },
    profile: { get: profile_get },
    settings: {
        get: settings_get,
        post: settings_post
    }
};