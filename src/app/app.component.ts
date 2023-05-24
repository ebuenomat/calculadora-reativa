import { Component, computed, signal } from '@angular/core';
import { count } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'teste-OAS';

  v1: number = 0;
  v2: number = 0;
  r = signal<number>(0) ;
  rDoubled = computed(() => this.r() * 2)

  operacao: any;

  constructor() { }

  sum() {
    this.r.update(r => Number(this.v1) + Number(this.v2));
  }

  sub() {
    this.r.update(r => Number(this.v1) - Number(this.v2));
    // this.r = Number(this.v1) - Number(this.v2);
  }

  mult() {
    this.r.update(r => Number(this.v1) * Number(this.v2));
    // this.r = Number(this.v1) * Number(this.v2);
  }

  div() {
    if(Number(this.v2) != 0) {
      this.r.update(r => Number(this.v1) / Number(this.v2));
      // this.r = Number(this.v1) / Number(this.v2);
    }
    else {
      alert('Não é possível dividir por zero!!');
    }
   
  }

  calcular(operacao: string) {

    switch (operacao) {
      case 'soma':
        this.sum();
      break;
      case 'subtração':
        this.sub();
      break;
      case 'multiplicação':
        this.mult();
      break;
      case 'divisão':
        this.div();
      break;

    }

  }
}
