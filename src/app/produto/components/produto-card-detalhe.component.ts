import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Produto } from 'src/app/models/produto';

@Component({
  selector: 'produto-card-detalhe',
  templateUrl: './produto-card-detalhe.component.html'
})

export class ProdutoCardDetalheComponent {
  @Input()
  produto!: Produto;

  @Output()
  status: EventEmitter<Produto> = new EventEmitter();

  emitirEvento() {
    this.status.emit(this.produto);
  }
}
