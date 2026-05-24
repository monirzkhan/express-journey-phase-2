import express from 'express'

const app=express();


app.get('/',(req, res)=>{
    res.send({
        message: "Welcome to Express Learning Phase-2",
        success: true,
        email: 'ceo@touchandgreet.com',
        author: "Md. Moniruzzaman"

    })
})

export default app