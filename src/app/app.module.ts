import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { registerLocaleData } from '@angular/common';

import localePt from '@angular/common/locales/pt';

registerLocaleData(localePt);

import { CustomFormsModule } from 'ng2-validation';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routes';
import { AuthGuard } from './services/app.guard';
import { ContatoGuard } from './services/contato.guard';
import { NavegacaoModule } from './navegacao/navegacao.module';
import { SobreComponent } from './institucional/sobre/sobre.component';
import { ContatoComponent } from './institucional/contato/contato.component';
import { DataBindingComponent } from './exemplos/data-binding/data-binding.component';

@NgModule({
  declarations: [		
    AppComponent,
    SobreComponent,
    ContatoComponent,
    DataBindingComponent
   ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    CustomFormsModule,
    NavegacaoModule    
  ],
  providers: [
    AuthGuard,
    ContatoGuard
  ],
  bootstrap: [
    AppComponent
  ]
})

export class AppModule {}
