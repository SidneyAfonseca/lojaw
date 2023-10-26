import { Request, Response } from "express";
import { getAllUsuarios, createUsuario, jaExiste, readUsuario, updateUsuario, deleteUsuario } from "./usuario.service";
import { CreateUsuarioDto, UpdateUsuarioDto } from "./usuario.types";


async function index(req: Request, res: Response) {
    try {
        const Usuarios = await getAllUsuarios();
        res.status(200).json(Usuarios);
    } catch (error) {
        res.status(500).json(error);
    }
}

async function create(req: Request, res: Response) {
    const Usuario = req.body as CreateUsuarioDto;

    try {
        if (await jaExiste(Usuario.nome)) {
            return res.status(400).json({ msg: "Usuario já existe" })
        }
        const newUsuario = await createUsuario(Usuario);
        res.status(201).json(newUsuario);
    } catch (error) {
        res.status(500).json({ msg: "Erro Criar Usuario" })
    }
}

async function read(req: Request, res: Response) {
    const id = req.params.id;
    try {
        const Usuario = await readUsuario(id);
        if (!Usuario) return res.status(404).json({ msg: "Usuario não encontrado" })
        res.status(200).json(Usuario);
    } catch (error) {
        res.status(500).json(error);
    }
}

async function update(req: Request, res: Response) {
    const id = req.params.id;
    const Usuario = req.body as UpdateUsuarioDto;
    try {
        const UsuarioAtual = await readUsuario(id);
        if (UsuarioAtual?.email != Usuario.email && await jaExiste(Usuario.email)) {
            return res.status(400).json({ msg: "Já Existe um Usuario com o email informado" })
        }
        const UsuarioAtualizado = await updateUsuario(id, Usuario);
        res.status(204).json(UsuarioAtualizado);
    } catch (error) {
        res.status(500).json({ error });
    }
}
async function remove(req: Request, res: Response) {
    const id = req.params.id;
    console.log('', id);
    try {
        await deleteUsuario(id);
        res.status(200).json({ msg: "Usuario deletado" });
    } catch (error) {
        console.log('', error);
        res.status(500).json({ error });
    }
}

export default { index, read, create, update, remove };
