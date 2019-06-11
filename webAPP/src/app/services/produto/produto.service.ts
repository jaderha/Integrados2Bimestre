import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Produto } from 'src/app/models/produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(private http : HttpClient) { }

  save(produto: Produto) {
    return this.http.post(environment.urlAPI+"Produtos/", produto);
  }

  update(produto: Produto) {
    return this.http.put(environment.urlAPI+"Produtos/"+produto.idproduto, produto);
  }
  
  findAll(){
    return this.http.get(environment.urlAPI+"Produtos/");
  }
  
  delete(id: number) {
    return this.http.delete(environment.urlAPI+"Produtos/"+id);
  }
}
