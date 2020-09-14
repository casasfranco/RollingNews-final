
import mongoose, {Schema} from 'mongoose';
const usuarioSchema = new Schema({
    nombreUsuario : {
        type: String,
        maxlength : 30,
        required: true,
        unique : true
    },

    contraseñaUsuario: {
        type : String,
        required : true
    },

   



},{timestamps : true}

);

const Usuario = mongoose.model('usuario',usuarioSchema)

export default Usuario;
