import express from 'express';
import cors from 'cors';
import userRouter from './routes/userRoute';
import companyRouter from './routes/companyRoute';

const app = express();

app.use(express.json());
app.use(cors());

app.use('/api/users', userRouter);
app.use('/api/companies', companyRouter)

app.get('/api/test', async(req, res) => {
  res.json({ message: 'Success'});
});

app.listen(3300, () => {
  console.log('Server running on localhost:5000');
});