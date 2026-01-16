import 'dotenv/config'
import express from 'express';
import http from 'http';
import cors from 'cors';
import contactRouter from './routes/contact';

const app = express()
const port = process.env.PORT;
// 미들웨어
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const allowedOrigins = [
    'https://enaeble.co.kr', // 메인 도메인
    'https://www.enaeble.co.kr', // 메인 도메인
    'https://portfolio2026.pages.dev', // Cloudflare 기본 주소
    'http://localhost:3000' // 로컬 테스트용
];

app.use(cors({
    origin(origin, callback) {
        // 서버 → 서버 요청 (origin 없음)
        if (!origin) return callback(null, true);
    
        if (allowedOrigins.includes(origin)) {
            return callback(null, true);
        }
    
        callback(new Error('Not allowed by CORS'));
    },
    credentials: true,
}));

const httpServer = http.createServer(app);

/** 라우트 */
app.use('/api/contact', contactRouter);

httpServer.listen(port, () => {
    console.log(`> Ready on ${port} (Everything is Enaeble)`);
});

httpServer.on('error', (err) => {
    console.error('Server failed to start:', err);
    process.exit(1);
});