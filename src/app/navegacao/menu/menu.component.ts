import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html'
})

export class MenuComponent { 
  nav: Nav[] = [
    {
      link: '/home',
      name: 'Início',
      exact: true,
      admin: false
    },
    {
      link: '/produtos',
      name: 'Produtos',
      exact: false,
      admin: false
    },
    {
      link: '/sobre',
      name: 'Sobre',
      exact: true,
      admin: false
    },
    {
      link: '/contato',
      name: 'Contato',
      exact: true,
      admin: false
    },
    {
      link: '/exemplos',
      name: 'Exemplos',
      exact: true,
      admin: false
    }
  ];
}

interface Nav {
  link: string,
  name: string,
  exact: boolean,
  admin: boolean
}
