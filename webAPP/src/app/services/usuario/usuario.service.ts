import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from 'src/app/models/usuario';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http : HttpClient) { }

  save(usuario: Usuario) {
    return this.http.post(environment.urlAPI+"Usuarios/", usuario);
  }

  update(usuario: Usuario) {
    return this.http.put(environment.urlAPI+"Usuarios/"+usuario.idusuario, usuario);
  }
  
  findAll(){
    return this.http.get(environment.urlAPI+"Usuarios/");
  }
  
  delete(id: number) {
    return this.http.delete(environment.urlAPI+"Usuarios/"+id);
  }
}
