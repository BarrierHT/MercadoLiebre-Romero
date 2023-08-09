import * as path from 'path';
import { config } from 'dotenv';
import express from 'express';

const app = express();
config();

app.set('port', process.env.PORT);

app.use(express.static(path.join(path.resolve(), 'src', 'public')));

app.get('/', (req, res, next) => {
	res.sendFile(path.join(path.resolve(), 'src', 'views', 'home.html'));
});

app.get('/register', (req, res, next) => {
	res.sendFile(path.join(path.resolve(), 'src', 'views', 'register.html'));
});

app.get('/login', (req, res, next) => {
	res.sendFile(path.join(path.resolve(), 'src', 'views', 'login.html'));
});

app.listen(app.get('port') || 8000);
