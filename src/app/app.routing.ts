import { Routes } from '@angular/router';
import { DataBindingComponent } from './exemplos/data-binding/data-binding.component';
import { HomeComponent } from './navegacao/home/home.component';
import { ListaProdutosComponent } from './produtos/lista-produtos/lista-produtos.component';
import { SobreComponent } from './institucional/sobre/sobre.component';
import { ContatoComponent } from './institucional/contato/contato.component';

export const rootRouterConfig: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'produtos', component: ListaProdutosComponent },
  { path: 'sobre', component: SobreComponent },
  { path: 'contato', component: ContatoComponent },
  { path: 'exemplos', component: DataBindingComponent }
];
