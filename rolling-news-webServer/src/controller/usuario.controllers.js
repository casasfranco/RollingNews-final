import Usuario from "../models/usuario";

const usuarioctrl = {};

usuarioctrl.altaUsuario = async (req, res) => {
  console.log(req.body);
  const { nombreUsuario, contraseñaUsuario } = req.body;

  try {
    const usuarioNuevo = new Usuario({
      nombreUsuario: nombreUsuario,
      contraseñaUsuario: contraseñaUsuario,
    });
    await usuarioNuevo.save();
    res.status(201).json({ mensaje: "Nuevo Usuario Alta" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ mensaje: "fallo Alta Usuario" });
    next(error);
  }
};

usuarioctrl.getUsuarios = async (req, res) => {
  try {
    const datos = await Usuario.find(); // busca todos los documentos(select)
    res.status(200).json(datos);
  } catch (error) {
    res.status(500).json({ mensaje: "ocurrio un error" });
    next(error);
  }
};

export default usuarioctrl;
