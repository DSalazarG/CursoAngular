import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CounterComponent } from './counter/counter.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, CounterComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Hello World! From Angular';
  
  subTitle: string = 'Contador con estado de sesión'

  users = ["Pepe", "Maria", "Juan", 'Andres']

  visible: boolean = false;

  setVisible(): void{
    this.visible = this.visible? false:true;
    console.log("Hemos hecho click en setVisible");
  }
  
  //Recomendable usar comilla simple para código. 
  //Tambien se puede declarar como users: string[] para decir que es de tipo arreglo de strings.
}
