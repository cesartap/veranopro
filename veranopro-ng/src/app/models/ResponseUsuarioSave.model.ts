export class ResponseUsuarioSaveModel {
    nombreUsuario: any;
    rutUsuario: string;
    correoUsuario: string;
    telefonoUsuario: string;
    status: string;
    
    constructor()
    constructor(nombreUsuario?: string, rutUsuario?: string, correoUsuario?: string, telefonoUsuario?: string, status?: string) {
      this.nombreUsuario = nombreUsuario;
      this.rutUsuario = rutUsuario;
      this.correoUsuario = correoUsuario;
      this.status = status;
    }
  }