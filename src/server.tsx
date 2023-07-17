import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());

// Add your other server routes and middleware here

const port = 8000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
