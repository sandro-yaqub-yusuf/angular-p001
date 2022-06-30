import { Component, OnInit } from '@angular/core';
import { Filme } from '../models/filme';
import { FilmeService } from '../services/filme.service';

@Component({
  selector: 'app-filme',
  templateUrl: './filme.component.html'
})

export class FilmeComponent implements OnInit {
  constructor(private filmeService: FilmeService) {}

  public filmes: Filme[] = [];

  ngOnInit() {
    this.filmeService.obterFilmes().subscribe({
      next: (filmes: Filme[]): void => {
        this.filmes = filmes;
      },
      error: (error): void => { 
        console.log(error); 
      }
    });
  }
}
