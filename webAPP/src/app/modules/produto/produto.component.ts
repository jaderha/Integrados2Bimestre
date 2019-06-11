import { Component, OnInit, ViewChild } from '@angular/core';
import { Produto } from 'src/app/models/produto';
import { ProdutoService } from 'src/app/services/produto/produto.service';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';


@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.scss']
})
export class ProdutoComponent implements OnInit {
  displayedColumns: string[] = ['codigo', 'desc', 'unid', 'ativo', 'acao'];
  produto: Produto;
  produtos: any;
  dataSource: any;
  edit: boolean;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(private produtoService: ProdutoService) {
  }

  ngOnInit() {
    this.produto = new Produto();
    this.produtos = new Array<Produto>();
    this.listAll();
  }


  listAll() {
    this.produtoService.findAll().subscribe(response => {
      this.loadTable(response);
      console.log(response)
    }, error => {
      console.log(error);
    });
  }

  loadTable(produtos: any) {
    this.dataSource = new MatTableDataSource<Produto>(produtos);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  salvar() {
    this.produtoService.save(this.produto).subscribe(response => {
      if (response) {
        alert('Salvou!!!!');
        this.listAll();
      }
    }, error => {
      console.log(error);
    });
    this.produto = new Produto();
  }



  excluir(idProduto: number) {
    this.produtoService.delete(idProduto).subscribe(response => {
      if (response)
        alert('Excluiu!')
      this.listAll();
    }, error => {
      console.log(error);
    });
  }


  markEdit(produto: any) {
    this.produto = produto;
    this.edit = true;
  }


  atualizar() {
    console.log(this.produto.idproduto);
    this.produtoService.update(this.produto).subscribe(response => {
      if (response) {
        alert('Atualizou!!!!');
        this.listAll();
        this.edit = false;
        this.produto = new Produto();
      }
    }, error => {
      console.log(error);
    });
  }

  cancelar() {
    this.produto = new Produto();
  }

}
