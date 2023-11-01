import { DataSource } from "typeorm"
import { Funcionario } from "./src/Entidades/Funcionario";
import { Empresa } from "./src/Entidades/Empresa";
import { ContratoTrabalho } from "./src/Entidades/ContratoTrabalho";
import { ControlePonto } from "./src/Entidades/ControlePonto";
import { FolhaPagamento } from "./src/Entidades/FolhaPagamento";
import { ReciboFerias } from "./src/Entidades/ReciboFerias";

const myDataSource = new DataSource({
    type: "postgres",
    "host": "ruby.db.elephantsql.com",
    port: 5432,
    username: "divnpkat",
    "password": "t7V6tZaCBCahG2aH0NQsHd0Gvphx1roJ",
    database: "divnpkat",    
    entities: [Empresa, Funcionario, ContratoTrabalho, ControlePonto, FolhaPagamento, ReciboFerias],    
    logging: true,
    synchronize: false,
})

export default myDataSource;