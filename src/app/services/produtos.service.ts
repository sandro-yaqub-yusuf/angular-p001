import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Produto } from '../models/produto';

@Injectable({
  providedIn: 'root'
})

export class ProdutosService {
  constructor(private http: HttpClient) {}

  protected urlServiceV1: string = 'http://localhost:3000/';

  obterProdutos(): Observable<Produto[]> {
    return this.http.get<Produto[]>(this.urlServiceV1 + 'produtos');
  }
}
