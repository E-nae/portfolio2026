import 'dotenv/config'
import express from 'express';
import next from 'next';
import http from 'http';
import contactRouter from './routes/contact';

const dev = process.env.NODE_ENV !== 'production';
const port = Number(process.env.PORT);

console.log(process.env.NODE_ENV);
console.log(port);
const hostname = '0.0.0.0'; // 외부 접속 허용 

const app = next({ dev, dir: './views' });
const handle = app.getRequestHandler();

app.prepare().then(() => {
    const server = express();

    server.use(express.json());
    server.use(express.urlencoded({ extended: true }));

    /** 라우트 */
    server.use('/api/contact', contactRouter);

    server.use((req, res) => {
        return handle(req, res);
    });

    const httpServer = http.createServer(server);
    
    httpServer.listen(port, hostname, () => {
        console.log(`> Ready on http://${hostname}:${port} (Everything is Enaeble)`);
    });

    httpServer.on('error', (err) => {
        console.error('Server failed to start:', err);
        process.exit(1);
    });
});