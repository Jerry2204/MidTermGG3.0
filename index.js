import express from 'express';

import 'dotenv/config';

import connector from './services/db/connector.js';

import withError from './utils/response/withError.js';

import cors from 'cors';

// Router
import { Router as VideoRouter } from './routes/video/index.js';
import { Router as CommentRouter } from './routes/comment/index.js';
import { Router as ProductRouter } from './routes/product/index.js';

const app = express();

app.use(express.json());
app.use(cors());

connector(process.env.MONGO_URL);

app.use('/api/video', VideoRouter);
app.use('/api/comment', CommentRouter);
app.use('/api/product', ProductRouter);

app.use((req, res) => {
  withError(res, 404, `Not Found`);
});

app.listen(process.env.PORT, () => {
  console.log(`Server berjalan pada ${process.env.PORT}`);
});
