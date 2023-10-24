import {Router} from 'express';
import usuarioRouter from '../resources/usuario/usuario.router';

const router = Router();

router.use("/usuario",usuarioRouter);

export default router;
