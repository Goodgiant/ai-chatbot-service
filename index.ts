import { chitchat } from "./chitchat";
const PORT = 8000;
import express  from 'express';
import cors from 'cors';
const app = express();
app.use(cors());
app.use(express.json({
  type: ['application/json', 'text/plain']
}));

// routes
app.post('/chatbot', (req: any, res: any) => {
    const {
        message,
        history,
    } = req.body;

    console.log({
        message,
        history,
        body: req.body,
    });
    
    chitchat({
        message,
        history,
    })
    .then((reply)=> {
        res.json(reply);
    })
    .catch((err)=> {
        console.log({err})
    });
})


app.listen(PORT, ()=> console.log('listening on port: ' + PORT));
