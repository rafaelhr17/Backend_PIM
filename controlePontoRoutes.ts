import { Express, Request, Response } from 'express';
import myDataSource from '../app-data-source';
import { ControlePonto } from '/Users/Marcela Emely/Downloads/Arquivos Backend/src/Entidades/ControlePonto';

export function controlePontoRoutes(app: Express) {
  
  app.get("/controlepontos", async function (req: Request, res: Response) {
      const controlePontos = await myDataSource.getRepository(ControlePonto).find();
      res.json(controlePontos);
  });

  app.get("/controlepontos/:idcontroleponto", async function (req: Request, res: Response) {
    const results = await myDataSource.getRepository(ControlePonto).findOneBy({
      idponto: +req.params.idponto,
    });
    return res.send(results);
  });

  app.post("/controlepontos", async function (req: Request, res: Response) {
    const controlePonto = await myDataSource.getRepository(ControlePonto).create(req.body);
    const results = await myDataSource.getRepository(ControlePonto).save(controlePonto);
    return res.send(results);
  });

  app.put("/controlepontos/:idcontroleponto", async function (req: Request, res: Response) {
    const controlePonto = await myDataSource.getRepository(ControlePonto).findOneBy({
        idponto: +req.params.idponto,
    });

    if (controlePonto) {  
        myDataSource.getRepository(ControlePonto).merge(controlePonto, req.body);
        const results = await myDataSource.getRepository(ControlePonto).save(controlePonto);
        return res.send(results);
    } else {
        // Tratando o caso em que "controlePonto" é null.
        res.status(404).send({ message: 'Controle de Ponto não encontrado' });
    }
  });  

  app.delete("/controlepontos/:idcontroleponto", async function (req: Request, res: Response) {
    const results = await myDataSource.getRepository(ControlePonto).delete(req.params.idponto);
    return res.send(results);
  });
  
}
