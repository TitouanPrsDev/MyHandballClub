import express from 'express';
import dotenv from 'dotenv';

dotenv.config()

import dataSource from '../config/datasource';

import indexRoutes from './routes/indexRoutes';
import dashboardRoutes from './routes/dashboardRoutes';
import apiRoutes from './routes/apiRoutes';

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'src/views/pages');

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.listen(+process.env.SERVER_PORT, process.env.SERVER_HOSTNAME, () => {
    console.info(`[HTTP SERVER :80] Server listening on 'localhost:3000'`);

    dataSource.initialize()
        .then(() => console.info(`[MYSQL DATABASE :3306] Connection has been established successfully`))
        .catch((err) => console.error(err))
});

app.use('/', indexRoutes);
app.use('/dashboard', dashboardRoutes);
app.use('/api', apiRoutes);

app.use((req, res) => {
    res.status(404).render('404', {
        title: "Erreur 404"
    });
});