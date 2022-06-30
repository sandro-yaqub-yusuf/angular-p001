import { Component, OnInit } from '@angular/core';
import { ImageFormaterPipe } from '../../pipes/imageformater.pipe';
import { Filme } from '../../models/filme';
import { FilmeService } from '../../services/filme.service';

@Component({
  selector: 'app-filme',
  templateUrl: './filme-lista.component.html',
  providers: [
    ImageFormaterPipe
  ]
})

export class FilmeListaComponent implements OnInit {
  constructor(private filmeService: FilmeService, private imageFormat: ImageFormaterPipe) {}

  public filmes: Filme[] = [];

  ngOnInit() {
    this.filmeService.obterFilmes().subscribe({
      next: (filmes: Filme[]): void => {
        this.filmes = filmes.map(filme => {
          return {
            nome: filme.nome,
            dataLancamento: filme.dataLancamento,
            valor: filme.valor,
            tamanho: filme.tamanho,
            imagem: this.imageFormat.transform(filme.imagem, 'filmes', true)
          }
        });
      },
      error: (error): void => { 
        console.log(error); 
      }
    });
  }
}
