import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})
export class UsuarioComponent implements OnInit {
  displayedColumns: string[] = ['codigo', 'nome', 'username', 'ativo', 'acao'];
  usuario: Usuario;
  usuarios: any;
  dataSource: any;
  edit: boolean;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(private usuarioService : UsuarioService) { }

  ngOnInit() {
    this.usuario = new Usuario();
    this.usuarios = new Array<Usuario>();
    this.listAll();  
  }

  
  listAll(){
    this.usuarioService.findAll().subscribe(response => {
      if (response)
        this.loadTable(response);
    }, error => {
      console.log(error);
    });
  }

  loadTable(usuarios: any) {
    this.dataSource = new MatTableDataSource<Usuario>(usuarios);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  
  salvar(){
    this.usuarioService.save(this.usuario).subscribe(response => {
      if (response){
        alert('Salvou!!!!');
        this.listAll();
      }
    }, error => {
      console.log(error);
    });
    this.usuario = new Usuario();
  }
  
  
  
  excluir(idUsuario: number){
    this.usuarioService.delete(idUsuario).subscribe(response => {
      if (response)
        this.listAll();
    }, error => {
      console.log(error);
    });
  }

  
  markEdit(usuario: any){
    this.usuario = usuario;
    console.log(usuario)
    this.edit = true;
  }

  
  atualizar(){
    this.usuarioService.update(this.usuario).subscribe(response => {
      if (response){
        alert('Atualizou!!!!');
        this.listAll();
        this.edit = false;
        this.usuario = new Usuario();
      }        
    }, error => {
      console.log(error);
    });
  }

  cancelar() {
    this.usuario = new Usuario();
  }

}
