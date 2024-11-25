// Importando o framework Express para criar a aplicação web
import express from "express";
import routes from "./src/routes/postRoutes.js";


// Criando uma instância do Express
const app = express();
app.use(express.static("uploads"));
routes(app)

// Definindo a porta em que o servidor irá escutar
app.listen(3000, () => {
    console.log("Servidor escutando na porta 3000");
});

