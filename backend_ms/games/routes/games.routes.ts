import { Request, Response, Router } from "express";

const router = Router();

router.get("/", (req: Request, res: Response) => {
  res.json({
    message: "game test",
  });
});

router.get("/:id", (req: Request, res: Response) => {
  res.json({
    message: "game idd " + req.params.id,
  });
});

router.get("/filter/:filter", (req: Request, res: Response) => {
  res.json({
    message: "game filter " + req.params.filter,
  });
});

export default router;
