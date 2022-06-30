import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProdutoListaComponent } from './lista/produto-lista.component';

const produtoRouterConfig: Routes = [
  { path: '', component: ProdutoListaComponent }
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
