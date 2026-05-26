import express from 'express'
import { userRoute } from './modules/user/user.route';

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

export default app