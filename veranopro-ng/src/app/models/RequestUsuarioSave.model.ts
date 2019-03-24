export class RequestUsuarioSaveModel {
    nombre: String;
    rutUsuario: String;
    correo: String;
    telefono: String;
    idUsuario: String; // usado para buscar un usuario
    id: String; // Usado para guardar un usuario
    
    constructor()
    constructor(nombreUsuario?: string, rutUsuario?: String, correoUsuario?: String, telefonoUsuario?: String,idUsuario?: String, id?: String) {
      this.nombre = nombreUsuario;
      this.rutUsuario = rutUsuario;
      this.correo = correoUsuario;
      this.telefono = telefonoUsuario;
      this.idUsuario = idUsuario;
      this.id = id;
    }
  }