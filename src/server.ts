import express, { request, response } from 'express';

const app = express();


app.get("/", (response, request) => {
    return request.json({message: 'ola'})
});


app.listen(8000);