import express, { Response, Request } from 'express';
import basicRoutes from './routes/basicRoutes';
import * as bodyParser from 'body-parser';
import cookieParser from "cookie-parser";
import session from 'express-session';
const app = express();
const port = 8080
const oneDay = 1000 * 60 * 60 * 24;

app.use(bodyParser.json());
app.use(cookieParser())
app.use(session({
    secret: "thisismysecrctekeyfhrgfgrfrty84fwir767",
    saveUninitialized:true,
    cookie: { maxAge: oneDay },
    resave: false 
}));
app.get('/test', (req: Request, res: Response)=> {
    console.log('I am alive')
    res.send('Response is alive')
} );

app.use('/api', basicRoutes)

app.listen(port,()=>{
    console.log(`Server is listening on port: ${port}`)
})