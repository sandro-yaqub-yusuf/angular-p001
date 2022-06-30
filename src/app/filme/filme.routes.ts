import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FilmeListaComponent } from './lista/filme-lista.component';

const FilmeRouterConfig: Routes = [
  { path: '', component: FilmeListaComponent }
]

@NgModule({
  imports: [
    RouterModule.forChild(FilmeRouterConfig)
  ],
  exports: [
    RouterModule
  ]
})

export class FilmeRoutingModule {}
