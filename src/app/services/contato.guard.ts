import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { ContatoComponent } from '../institucional/contato/contato.component';

@Injectable()
export class ContatoGuard implements CanDeactivate<ContatoComponent> {
  canDeactivate(component: ContatoComponent): boolean {
    if (component.mudancasNaoSalvas) {
      return window.confirm('Tem certeza que deseja abandonar o preenchimento do Contato ?');
    }

    return true;
  }
}
