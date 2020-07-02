import Server from './classes/server';
import router from './routes/router';
import bodyParser from 'body-parser';
import cors from 'cors';

const server = Server.instance;

// BodyParser: parse application/x-www-form-urlencoded
server.app.use( bodyParser.urlencoded({ extended: true}));

// parse application/json
server.app.use( bodyParser.json());

// CORS
server.app.use( cors({ origin: true, credentials: true}));

// Rutas de servicios
server.app.use('/', router);

server.start( () => {
    console.log(`Servidor corriendo en el puerto ${server.port}`);
});
