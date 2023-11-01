import { Express, Request, Response } from 'express';
import myDataSource from '../app-data-source';
import { ReciboFerias } from '/Users/Marcela Emely/Downloads/Arquivos Backend/src/Entidades/ReciboFerias';

export function reciboFeriasRoutes(app: Express) {
  
  app.get("/reciboferias", async function (req: Request, res: Response) {
      const recibosFerias = await myDataSource.getRepository(ReciboFerias).find();
      res.json(recibosFerias);
  });

  app.get("/reciboferias/:idreciboferias", async function (req: Request, res: Response) {
    const results = await myDataSource.getRepository(ReciboFerias).findOneBy({
      idrecibo: +req.params.idrecibo,
    });
    return res.send(results);
  });

  app.post("/reciboferias", async function (req: Request, res: Response) {
    const reciboFerias = await myDataSource.getRepository(ReciboFerias).create(req.body);
    const results = await myDataSource.getRepository(ReciboFerias).save(reciboFerias);
    return res.send(results);
  });

  app.put("/reciboferias/:idreciboferias", async function (req: Request, res: Response) {
    const reciboFerias = await myDataSource.getRepository(ReciboFerias).findOneBy({
        idrecibo: +req.params.idrecibo,
    });

    if (reciboFerias) {  
        myDataSource.getRepository(ReciboFerias).merge(reciboFerias, req.body);
        const results = await myDataSource.getRepository(ReciboFerias).save(reciboFerias);
        return res.send(results);
    } else {
        // Tratando o caso em que "reciboFerias" é null.
        res.status(404).send({ message: 'Recibo de Férias não encontrado' });
    }
  });  

  app.delete("/reciboferias/:idreciboferias", async function (req: Request, res: Response) {
    const results = await myDataSource.getRepository(ReciboFerias).delete(req.params.idrecibo);
    return res.send(results);
  });
  
}
