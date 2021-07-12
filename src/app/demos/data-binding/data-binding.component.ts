import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styles: [
  ]
})
export class DataBindingComponent {

  public contadorClique: number = 0;

  public urlImagem: string = "https://angular.io/assets/images/logos/angular/angular.svg";

  public nome: string = "";

  adicionarCLique(){
    this.contadorClique++;
  }

  zerarContador(){
    this.contadorClique = 0;
  }

  KeyUp(event: any){ /*event(nome que dei). Any, ou seja, pode ser qualquer tipo */
    this.nome = event.target.value;  /*target se refere ao objeto que estou referenciando, no caso, a caixa de texto. E o value é o valor dele */
  } 

}


