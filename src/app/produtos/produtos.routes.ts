import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaProdutosComponent } from './lista-produtos/lista-produtos.component';

const produtoRouterConfig: Routes = [
  {
    path: '', component: ListaProdutosComponent
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(produtoRouterConfig)
  ],
  exports: [
    RouterModule
  ]
})

export class ProdutoRoutingModule {}
