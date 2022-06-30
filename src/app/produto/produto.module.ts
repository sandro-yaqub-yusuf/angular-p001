import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProdutoListaComponent } from './lista/produto-lista.component';
import { ProdutoCardDetalheComponent } from './componentes/produto-card-detalhe.component';
import { ProdutoCountComponent } from './componentes/produto-count.component';
import { ProdutoRoutingModule } from './produto.routes';

@NgModule({
  declarations: [
    ProdutoListaComponent,
    ProdutoCardDetalheComponent,
    ProdutoCountComponent
  ],
  imports: [
    CommonModule,
    ProdutoRoutingModule
  ]
})
  
export class ProdutoModule {}
