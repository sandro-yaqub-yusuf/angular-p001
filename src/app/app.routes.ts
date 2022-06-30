import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './services/app.guard';
import { ContatoGuard } from './services/contato.guard';
import { HomeComponent } from './navegacao/home/home.component';
import { SobreComponent } from './institucional/sobre/sobre.component';
import { ContatoComponent } from './institucional/contato/contato.component';
import { DataBindingComponent } from './exemplos/data-binding/data-binding.component';
import { FilmeComponent } from './filme/filme.component';
import { NotFoundComponent } from './navegacao/not-found/not-found.component';

const rootRouterConfig: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'sobre', component: SobreComponent },
  { path: 'contato', component: ContatoComponent, canDeactivate: [ContatoGuard] },
  { path: 'exemplos', component: DataBindingComponent },
  { path: 'filmes', component: FilmeComponent },
  { path: 'produtos', loadChildren: () => import('./produto/produto.module').then(m => m.ProdutoModule) },
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule), canLoad: [AuthGuard], canActivate: [AuthGuard] },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports:[
    RouterModule.forRoot(rootRouterConfig, { enableTracing: false })
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {}
