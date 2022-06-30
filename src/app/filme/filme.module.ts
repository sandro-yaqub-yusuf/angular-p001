import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileSizePipe } from '../pipes/filesize.pipe';
import { FilmeListaComponent } from './lista/filme-lista.component';
import { FilmeRoutingModule } from './filme.routes';

@NgModule({
  declarations: [
    FilmeListaComponent,
    FileSizePipe
  ],
  imports: [
    CommonModule,
    FilmeRoutingModule
  ]
})
  
export class FilmeModule {}
