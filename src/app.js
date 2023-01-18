import express from 'express';
import bodyParser from 'body-parser';
// import routes from './routes';
// import middleware from './middleware';

const app = express();

app.use(bodyParser.json());

// app.use(middleware.logger);
// app.use(middleware.authenticator);
// app.use(routes);
// app.use(middleware.errorHandler);

module.exports = app;
