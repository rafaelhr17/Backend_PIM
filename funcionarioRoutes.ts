import { Express, Request, Response } from 'express';
import myDataSource from '../app-data-source';
import { Funcionario } from '/Users/Marcela Emely/Downloads/Arquivos Backend/src/Entidades/Funcionario';

export function funcionarioRoutes(app: Express) {
  
  app.get("/funcionarios", async function (req: Request, res: Response) {
      const funcionarios = await myDataSource.getRepository(Funcionario).find();
      res.json(funcionarios);
  });

  app.get("/funcionarios/:idfuncionario", async function (req: Request, res: Response) {
    const results = await myDataSource.getRepository(Funcionario).findOneBy({
      idfuncionario: +req.params.idfuncionario,
    });
    return res.send(results);
  });

  app.post("/funcionarios", async function (req: Request, res: Response) {
    const funcionario = await myDataSource.getRepository(Funcionario).create(req.body);
    const results = await myDataSource.getRepository(Funcionario).save(funcionario);
    return res.send(results);
  });

  app.put("/funcionarios/:idfuncionario", async function (req: Request, res: Response) {
    const funcionario = await myDataSource.getRepository(Funcionario).findOneBy({
        idfuncionario: +req.params.idfuncionario,
    });

    if (funcionario) {  
        myDataSource.getRepository(Funcionario).merge(funcionario, req.body);
        const results = await myDataSource.getRepository(Funcionario).save(funcionario);
        return res.send(results);
    } else {
        // Tratando o caso em que "funcionario" é null.
        res.status(404).send({ message: 'Funcionário não encontrado' });
    }
});  

app.delete("/funcionarios/:idfuncionario", async function (req: Request, res: Response) {
  const results = await myDataSource.getRepository(Funcionario).delete(req.params.idfuncionario);
  return res.send(results);
});
  
}
