import { Router } from "express";
import produtoController from "./produto.controller";
const router = Router();
// Produto controller
router.get('/', produtoController.index);
router.post('/', produtoController.create);
router.get('/:id', produtoController.read);
router.put('/:id', produtoController.update);
router.delete('/:id', produtoController.remove);
export default router;
