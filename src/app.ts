import express from 'express'
import { userRoute } from './modules/user/user.route';
import { authRoute } from './modules/auth/auth.route';

const app=express();

app.use(express.json());

app.get('/',(req, res)=>{
    res.send({
        message: "Welcome to Express Learning Phase-2",
        success: true,
        email: 'ceo@touchandgreet.com',
        author: "Md. Moniruzzaman"

    })
})

app.use('/api/users',userRoute )
app.use('/api/auth/login',authRoute)

export default app