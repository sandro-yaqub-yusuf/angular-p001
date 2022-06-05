import { Component, OnInit } from '@angular/core';
import { Produto } from '../../models/produto';
import { ProdutosService } from '../../services/produtos.service';

@Component({
  selector: 'app-lista-produtos',
  templateUrl: './lista-produtos.component.html'
})

export class ListaProdutosComponent implements OnInit { 
  constructor(private produtoService: ProdutosService) {}

  public produtos: Produto[] = [];

  ngOnInit(): void {
    this.produtoService.obterProdutos().subscribe(
      produtos => { this.produtos = produtos; },
      error => { console.log(error); }
    )   
  }
}
