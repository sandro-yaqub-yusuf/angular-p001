import { Component, Input } from '@angular/core';
import { Produto } from '../../models/produto';

@Component({
  selector: 'produto-count',
  template: `
    <div>
      <br />
      <div><p>Produtos Ativos: {{ contadorAtivos() }} no total de {{ produtos.length }} produtos</p></div>
      <div><p>Produtos em Promoção: {{ contadorPromocao() }} no total de {{ produtos.length }} produtos</p></div>
      <br />
    </div>
  `
})

export class ProdutoCountComponent {
  @Input()
  produtos!: Produto[];

  contadorAtivos(): number {
    if (!this.produtos) return 0;

    return this.produtos.filter((produto: Produto) => produto.ativo).length;
  }

  contadorPromocao(): number {
    if (!this.produtos) return 0;

    return this.produtos.filter((produto: Produto) => produto.promocao).length;
  }
}
