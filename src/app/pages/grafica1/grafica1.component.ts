import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component {

  // Doughnut
  public labels1: string[] = ['Ventas x Descarga', 'Ventas en Tienda', 'Ventas e-mail'];
  public data1 = [
    [350, 450, 100],
  ];
  public labels2: string[] = ['Alquiler semanal', 'Alquiler Mensual', 'Alquiler diario'];
  //public chartType: string = 'doughnut';

}
