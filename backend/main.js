import express from 'express';
import cors from 'cors';
import 'dotenv/config'
import { router } from './routes/router.js';


const PORT = process.env.PORT;
const app = express()

app.use(express.json());
app.use(cors());

app.use('/',router);



app.listen(PORT, (err) => {
    if(err) return console.error(err);
    console.log(`server running on http://localhost:${PORT}...`);
    
})
