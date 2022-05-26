import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html'
})

export class DataBindingComponent { 
  public contadorClique: number = 0;  
  public urlImagem: string = "https://angular.io/assets/images/logos/angular/angular.svg";
  public nome1: string = "";
  public nome2: string = "";
  public nome3: string = "";

  adicionarContador(){
    if (this.contadorClique < 15) this.contadorClique++;
  }

  zerarContador(){
    this.contadorClique = 0;
  }

  KeyUp(event: any){
    this.nome1 = event.target.value;
  }
}
