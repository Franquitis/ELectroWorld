import { Component } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  destacados=[
    {nombre:"Cafetera Express Peabody", precio:"$77.500", img:'./assets/Electrodomesticos/Cafetera Express Peabody.webp'},
    {nombre:"Heladera ciclica Drean 314 Lts", precio:"$410.200", img:'./assets/Electrodomesticos/Heladera ciclica Drean 314 Lts.webp'},
    {nombre:"iPhone 13 128GB Starlight", precio:"$2.377.500", img:'./assets/Tecnologia/iPhone 13 128GB Starlight.webp'},
    {nombre:"Notebook Lenovo Gamer 15,6'", precio:"$899.999", img:'./assets/Tecnologia/Notebook Lenovo Gamer 15,6.webp'},
    {nombre:"Parlante Bluetooth Bose", precio:"$1.535.999", img:'./assets/TV y Audio/Parlante Bluetooth Bose.webp'},
    {nombre:"Parlante Torre Aiwa", precio:"$77.500", img:'./assets/TV y Audio/Parlante Torre Aiwa.webp'}
  ]
}
