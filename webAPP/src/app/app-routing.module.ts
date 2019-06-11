import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsuarioComponent } from './modules/usuario/usuario.component';
import { ProdutoComponent } from './modules/produto/produto.component';

const routes: Routes = [
  { path: 'users', component: UsuarioComponent },
  { path: 'produtos', component: ProdutoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
