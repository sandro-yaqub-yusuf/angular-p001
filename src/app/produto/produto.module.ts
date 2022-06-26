import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaProdutosComponent } from './lista-produtos/lista-produtos.component';
import { ProdutoCardDetalheComponent } from './components/produto-card-detalhe.component';
import { ProdutoCountComponent } from './components/produto-count.component';
import { ProdutoRoutingModule } from './produto.routes';

@NgModule({
  declarations: [
    ListaProdutosComponent,
    ProdutoCardDetalheComponent,
    ProdutoCountComponent
  ],
  imports: [
    CommonModule,
    ProdutoRoutingModule
  ],
  exports: []
})
  
export class ProdutoModule {}
