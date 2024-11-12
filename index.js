import express from "express";      // Requisição do pacote do express

const app = express();              // Instancia o Express
const port = 3000;                  // Define a porta

app.get("/", (req, res) => {        // Cria a rota da raiz do projeto     req=informações adicionais        res=resposta
  console.log("Rota GET/ solicitada");
  res.json({
    nome: "WASHINGTON PEREIRA DE MELO SOUZA",      // Substitua pelo seu nome
  });
});

app.listen(port, () => {            // Um socket para "escutar" as requisições
  console.log(`Serviço escutando na porta:  ${port}`);
});