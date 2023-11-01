import { Express, Request, Response } from 'express';
import myDataSource from '../app-data-source';
import { FolhaPagamento } from '/Users/Marcela Emely/Downloads/Arquivos Backend/src/Entidades/FolhaPagamento';

export function folhaPagamentoRoutes(app: Express) {
  
  app.get("/folhapagamento", async function (req: Request, res: Response) {
      const folhasPagamento = await myDataSource.getRepository(FolhaPagamento).find();
      res.json(folhasPagamento);
  });

  app.get("/folhapagamento/:idfolhapagamento", async function (req: Request, res: Response) {
    const results = await myDataSource.getRepository(FolhaPagamento).findOneBy({
      idfolhapagamento: +req.params.idfolhapagamento,
    });
    return res.send(results);
  });

  app.post("/folhapagamento", async function (req: Request, res: Response) {
    const folhaPagamento = await myDataSource.getRepository(FolhaPagamento).create(req.body);
    const results = await myDataSource.getRepository(FolhaPagamento).save(folhaPagamento);
    return res.send(results);
  });

  app.put("/folhapagamento/:idfolhapagamento", async function (req: Request, res: Response) {
    const folhaPagamento = await myDataSource.getRepository(FolhaPagamento).findOneBy({
        idfolhapagamento: +req.params.idfolhapagamento,
    });

    if (folhaPagamento) {  
        myDataSource.getRepository(FolhaPagamento).merge(folhaPagamento, req.body);
        const results = await myDataSource.getRepository(FolhaPagamento).save(folhaPagamento);
        return res.send(results);
    } else {
        // Tratando o caso em que "folhaPagamento" é null.
        res.status(404).send({ message: 'Folha de Pagamento não encontrada' });
    }
  });  

  app.delete("/folhapagamento/:idfolhapagamento", async function (req: Request, res: Response) {
    const results = await myDataSource.getRepository(FolhaPagamento).delete(req.params.idfolhapagamento);
    return res.send(results);
  });
  
}
