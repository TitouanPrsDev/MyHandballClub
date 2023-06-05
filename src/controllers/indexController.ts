import dataSource from '../../config/datasource';

const test = (req, res) => {
    res.render('test', {
        title: "Page de test",
        breadcrumb: [
            { title: "Page de test" }
        ]
    });
}
const index_get = async (req, res) => {
    res.render('index', {
        title: "Accueil"
    });
};

const features_get = async (req, res) => {
    res.end();
};

const pricing_get = async (req, res) => {
    res.end();
};

const signup_get = async (req, res) => {
    res.end();
};

const signup_post = async (req, res) => {
    res.end();
};

const signin_get = async (req, res) => {
    res.render('signin', {
        title: "Connexion"
    });
};

const signin_post = async (req, res) => {
    res.end();
};

const forgotPassword_get = async (req, res) => {
    res.end();
};

const forgotPassword_post = async (req, res) => {
    res.end();
};

const signout_get = async (req, res) => {
    res.end();
};

export default {
    test: { get: test },
    index: { get: index_get },
    features: { get: features_get },
    pricing: { get: pricing_get },
    signup: {
        get: signup_get,
        post: signup_post
    },
    signin: {
        get: signin_get,
        post: signin_post
    },
    signout: { get: signout_get },
    forgotPassword: {
        get: forgotPassword_get,
        post: forgotPassword_post
    }
};