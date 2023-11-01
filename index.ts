import "reflect-metadata";
import myDataSource from "./app-data-source";
import express from "express";
//import {Funcionario } from "./entity/Funcionario";
import { funcionarioRoutes } from './routes/funcionarioRoutes';
import { contratoTrabalhoRoutes } from './routes/contratoTrabalhoRoutes';
import { empresaRoutes } from './routes/empresaRoutes';
import { controlePontoRoutes } from "./routes/controlePontoRoutes";
import { reciboFeriasRoutes } from "./routes/reciboFeriasRoutes";
import { folhaPagamentoRoutes } from "./routes/folhaPagamentoRoutes";

import cors from 'cors';
import { Request, Response } from 'express';


// estabelecendo conexão com o banco de dados
myDataSource
  .initialize()
  .then(() => {
    console.log("Data Source has been initialized!");
  })
  .catch((err) => {
    console.error("Error during Data Source initialization:", err);
  });

const app = express();
app.use(express.json());
app.use(cors());

funcionarioRoutes(app);  
contratoTrabalhoRoutes(app);
empresaRoutes(app);
controlePontoRoutes(app);
reciboFeriasRoutes(app);
folhaPagamentoRoutes (app);

  // start express server
app.listen(3333, () => {
    console.log('Servidor Backend em execução...');
});