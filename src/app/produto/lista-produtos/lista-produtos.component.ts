import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { fromEvent, Observable } from 'rxjs';
import { Produto } from '../../models/produto';
import { ProdutoService } from '../../services/produto.service';
import { ProdutoCardDetalheComponent } from '../components/produto-card-detalhe.component';
import { ProdutoCountComponent } from '../components/produto-count.component';

@Component({
  selector: 'app-lista-produtos',
  templateUrl: './lista-produtos.component.html'
})

export class ListaProdutosComponent implements OnInit, AfterViewInit { 
  constructor(private produtoService: ProdutoService) {}

  public produtos: Produto[] = [];

  @ViewChild('titulo', { static: false }) mensagemTela!: ElementRef;
  @ViewChild(ProdutoCountComponent, { static: false }) contador!: ProdutoCountComponent;
  @ViewChildren(ProdutoCardDetalheComponent) botoes!: QueryList<ProdutoCardDetalheComponent>;

  ngOnInit(): void {
    this.produtoService.obterProdutos().subscribe({
      next: (produtos: Produto[]): void => {
        this.produtos = produtos;
      },
      error: (error): void => { 
        console.log(error); 
      }
    });
  }

  ngAfterViewInit(): void {
    console.log('Objetos do Contador: ', this.contador);

    let clickTexto: Observable<any> = fromEvent(this.mensagemTela.nativeElement, 'click');
    
    clickTexto.subscribe(() =>{
      alert('Você clicou no título !!!');

      return;
    });

    console.log("Lista de Botões: ", this.botoes);

    this.botoes.forEach(p => {
      console.log("Produto do Botão: ", p.produto);
    });
  }

  mudarStatus(event: Produto) {
    event.ativo = !event.ativo;
  }
}
