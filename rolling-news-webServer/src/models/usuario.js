
import mongoose, {Schema} from 'mongoose';
const usuarioSchema = new Schema({
    nombreUsuario : {
        type: String,
        maxlength : 100,
        required: true,
        unique : true
    },

    contraseñaUsuario: {
        type : String,
        required : true
    },

   



},{timestamps : true}

);

const Producto = mongoose.model('producto',productoSchema)

export default Producto;
