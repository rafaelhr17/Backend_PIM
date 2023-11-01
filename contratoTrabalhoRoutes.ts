import { Express, Request, Response } from 'express';
import myDataSource from '../app-data-source';
import { ContratoTrabalho } from '/Users/Marcela Emely/Downloads/Arquivos Backend/src/Entidades/ContratoTrabalho';

export function contratoTrabalhoRoutes(app: Express) {
  
  app.get("/contratos", async function (req: Request, res: Response) {
      const contratos = await myDataSource.getRepository(ContratoTrabalho).find();
      res.json(contratos);
  });

  app.get("/contratos/:idcontrato", async function (req: Request, res: Response) {
    const results = await myDataSource.getRepository(ContratoTrabalho).findOneBy({
        idcontrato: +req.params.idcontrato,
    });
    return res.send(results);
  });

  app.post("/contratos", async function (req: Request, res: Response) {
    const contrato = await myDataSource.getRepository(ContratoTrabalho).create(req.body);
    const results = await myDataSource.getRepository(ContratoTrabalho).save(contrato);
    return res.send(results);
  });

  app.put("/contratos/:idcontrato", async function (req: Request, res: Response) {
    const contrato = await myDataSource.getRepository(ContratoTrabalho).findOneBy({
        idcontrato: +req.params.idcontrato,
    });

    if (contrato) {  
        myDataSource.getRepository(ContratoTrabalho).merge(contrato, req.body);
        const results = await myDataSource.getRepository(ContratoTrabalho).save(contrato);
        return res.send(results);
    } else {
        res.status(404).send({ message: 'Contrato de Trabalho não encontrado' });
    }
  });  

  app.delete("/contratos/:idcontrato", async function (req: Request, res: Response) {
    const results = await myDataSource.getRepository(ContratoTrabalho).delete(req.params.idcontrato);
    return res.send(results);
  });
  
}
