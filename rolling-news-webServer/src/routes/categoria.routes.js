import { Router } from "express";
import categoriaController from "../controllers/categoria.controller";
const router = Router();

//destructuramiento
const {
    getCategoria,
    getNoticiaById,
    crearNoticia,
    editarNoticia,
    deleteNoticia,
} = categoriaController;


router.route("/").get(getNoticia).post(crearNoticia);

router
  .route("/:id")
  .get(getNoticiaById)
  .put(editarNoticia)
  .delete(deleteNoticia);

export default router;