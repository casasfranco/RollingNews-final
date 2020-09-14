import { Router } from "express";

import usuarioControler from "../controller/usuario.controllers";

const router = Router();

const { getUsuarios, altaUsuario } = usuarioControler;

router.route("/").get(getUsuarios).post(altaUsuario);

export default router;
