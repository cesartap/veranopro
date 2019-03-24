import { Component } from "@angular/core";
import { RequestUsuarioSaveModel } from "./models/RequestUsuarioSave.model";
import { UsuariosService } from "./usuarios.service";
import { MatSnackBar } from "@angular/material";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title1 = "Cursos de Verano Pro";
  subtitle = "No dejes pasar esta increible oportunidad, inscribete aca";

  statusServiceResponse = "";

  nombre: String = "";
  rut: String = "";
  correo: String = "";
  telefono: String = "";

  constructor(
    private usuariosService: UsuariosService,
    private snackBar: MatSnackBar
  ) {}

  validate() {
    if (
      this.nombre == "" ||
      this.rut == "" ||
      this.correo == "" ||
      this.telefono == ""
    ) {
      this.snackBar.open("Favor ingrese los campos solicitados");
    } else {
      this.validaUsuarioExiste(this.rut);
    }
  }

  public validaUsuarioExiste(rut: String) {
    console.log("llamando al servicio --> Validar si el usuario existe");

    const request: RequestUsuarioSaveModel = new RequestUsuarioSaveModel();
    request.idUsuario = rut;
    this.usuariosService
      .getUsuario(request)
      .then(res => {
        if (res != null) {
          this.snackBar.open("Ya ha sido ingresada su solicitud.");
        } else {
          // proceder con el ingreso del usuario
          let request: RequestUsuarioSaveModel = new RequestUsuarioSaveModel();
          request.id = this.rut;
          request.correo = this.correo;
          request.nombre = this.nombre;
          request.telefono = this.telefono;

          this.usuariosService
            .agregarUsuario(request)
            .then(res => {
              if (res != null) {
                this.snackBar.open("Gracias Nos contactaremos con usted.");
              } else {
                this.snackBar.open(
                  "No se ha podido guardar su solcicitud, Intente nuevamente"
                );
              }
            })
            .catch(error => {
              this.snackBar.open(
                "ERROR: " +
                  error +
                  "No se ha podido guardar su solcicitud, Intente nuevamente"
              );
            });
        }
      })

      .catch(error => {
        this.snackBar.open(
          "ERROR: " +
            error +
            "No se ha podido guardar su solcicitud, Contacte al administrador"
        );
      });
  }
}
