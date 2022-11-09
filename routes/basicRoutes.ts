import express, {Request, Response} from 'express'
const router = express.Router();

///Get All
router.get("/", (req: Request, res: Response)=> {

    res.send("get all");
  });

router.get("/:id", (req: Request, res: Response)=> {

    res.send("get by id");
  });

router.delete("/:id", (req: Request, res: Response)=> {

    res.send("delete by id");
  });
router.post("/", (req: Request, res: Response)=> {
    const body = req.body
    console.log("🚀 ~ file: basicRoutes.ts ~ line 21 ~ router.post ~ body", body)
    res.send(body);
  });

router.put("/", (req: Request, res: Response)=> {

    res.send("update");
  });
  

export default router
