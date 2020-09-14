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

usuarioctrl.editarUsuario = async (req, res) => {
    try {
     await Usuario.findByIdAndUpdate(req.params.id, req.body)
     res.status(200).json({mensaje : "usuario actualizado"}); 
    } catch (error) {
      console.log(error);
      res.status(500).json({mensaje : "Ocurrio un error"});
      next(error);
    }
  };
  
  usuarioctrl.deleteUsuario = async (req, res) => {
    try {
      await Usuario.findByIdAndDelete(req.params.id)
      res.status(200).json({mensaje : "se elimino el usuario"})
    } catch (error) {
      res.status(500).json({mensaje : "ocurrio un error"});
      next(error);
    }
  };
  
  usuarioctrl.getUsuario = async (req, res) => {
    try {
      console.log(req.params.id)
      const usuarioEncontrado = await Usuario.findById(req.params.id)
      res.status(200).json(usuarioEncontrado)
    } catch (error) {
      console.log(error);
      res.status(500).json({mensaje : "Ocurrio un error"})
    }
  };

export default usuarioctrl;
