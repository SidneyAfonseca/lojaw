import { Router } from "express";
import usuarioController from "./usuario.controller";
const router = Router();
// usuario controller
router.get('/', usuarioController.index);
router.post('/', usuarioController.create);
router.get('/:id', usuarioController.read);
router.put('/:id', usuarioController.update);
router.delete('/:id', usuarioController.remove);
export default router;
