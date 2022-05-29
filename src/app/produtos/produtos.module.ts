import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaProdutosComponent } from './lista-produtos/lista-produtos.component';
import { ProdutoRoutingModule } from './produtos.routes';

@NgModule({
  declarations: [
    ListaProdutosComponent
  ],
  imports: [
    CommonModule,
    ProdutoRoutingModule
  ],
  exports: []
})
  
export class ProdutosModule {}
