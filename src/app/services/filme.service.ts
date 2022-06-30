import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Filme } from '../models/filme';

@Injectable({
  providedIn: 'root'
})

export class FilmeService {
  constructor(private http: HttpClient) {}

  protected urlServiceV1: string = 'http://localhost:3000';

  obterFilmes(): Observable<Filme[]> {
    return this.http.get<Filme[]>(this.urlServiceV1 + '/filmes');
  }
}
