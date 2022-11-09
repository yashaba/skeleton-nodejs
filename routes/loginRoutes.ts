import express, {Request, Response} from 'express'
import {UserService} from '../services/loginService'
const router = express.Router();
const userService = new UserService()
///Get All
router.post('/user',(req,res) => {
    if(req.body.username == userService.users[0].userName && req.body.password == userService.users[0].passWord){
        const session: any=req.session;
        session.userid = userService.users[0].id;
        console.log(req.session)
        res.send(`Hey there, welcome <a href=\'/logout'>click to logout</a>`);
    }
    else{
        res.send('Invalid username or password');
    }
})

router.get('/logout',(req,res) => {
    req.session.destroy(()=>{
        res.redirect('/')
    });
    console.log('logged out');
});

export default router






















