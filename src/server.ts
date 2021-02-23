import express, { response } from 'express';
import { request } from 'http';

const app = express();


/*
GET=> Buscar
POST=> Salvar
PUT=> Alterar
DELETE=> Deletar
PATCH => Alteração específica
*/

app.get("/", (request, response) => {
    return response.json({ message: "Hello World - NLW04" });
});

//1 param => Rota(Recurso API)
//2 param => resquest, response
app.post("/", (request, response) => {
    //Recebeu os dados para salvar
    return response.json({ message: "Save Success!" });
});

app.listen(3309, () => console.log("Server is running!"));