 import {Usuario} from "@prisma/client";

 export  type CreateUsuarioDto = Pick<Usuario, 'nome'|'email'|'senha'>;
 export type UpdateUsuarioDto = Pick<Usuario,  'nome'|'email'|'senha'>;
