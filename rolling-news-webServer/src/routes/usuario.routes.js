import { Router } from "express";

import usuarioControler from "../controller/usuario.controllers";

const router = Router();

const {
  getUsuarios,
  altaUsuario,
  getUsuario,
  deleteUsuario,
  editarUsuario,
} = usuarioControler;

router.route("/").get(getUsuarios).post(altaUsuario);

router.route("/:id").get(getUsuario).delete(deleteUsuario).put(editarUsuario);

export default router;
