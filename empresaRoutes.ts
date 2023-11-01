import { Express, Request, Response } from 'express';
import myDataSource from '../app-data-source';
import { Empresa } from '/Users/Marcela Emely/Downloads/Arquivos Backend/src/Entidades/Empresa';

export function empresaRoutes(app: Express) {
  
  app.get("/empresas", async function (req: Request, res: Response) {
      const empresas = await myDataSource.getRepository(Empresa).find();
      res.json(empresas);
  });

  app.get("/empresas/:idempresa", async function (req: Request, res: Response) {
    const results = await myDataSource.getRepository(Empresa).findOneBy({
      idempresa: +req.params.idempresa,
    });
    return res.send(results);
  });

  app.post("/empresas", async function (req: Request, res: Response) {
    const empresa = await myDataSource.getRepository(Empresa).create(req.body);
    const results = await myDataSource.getRepository(Empresa).save(empresa);
    return res.send(results);
  });

  app.put("/empresas/:idempresa", async function (req: Request, res: Response) {
    const empresa = await myDataSource.getRepository(Empresa).findOneBy({
        idempresa: +req.params.idempresa,
    });

    if (empresa) {  
        myDataSource.getRepository(Empresa).merge(empresa, req.body);
        const results = await myDataSource.getRepository(Empresa).save(empresa);
        return res.send(results);
    } else {
        // Tratando o caso em que "empresa" é null.
        res.status(404).send({ message: 'Empresa não encontrada' });
    }
});  

app.delete("/empresas/:idempresa", async function (req: Request, res: Response) {
  const results = await myDataSource.getRepository(Empresa).delete(req.params.idempresa);
  return res.send(results);
});
  
}
