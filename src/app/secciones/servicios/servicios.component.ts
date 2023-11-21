import { Component } from '@angular/core';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: string;
  symbol: string;
  categoria:string;

}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Cafetera Express Peabody', weight: 'r', symbol: '$77.500', categoria:'Eectrodomesticos'},
  {position: 2, name: 'Cafetera Nespresso Inissia Black', weight: 'r', symbol: '$56.700', categoria:'Eectrodomesticos'},
  {position: 3, name: 'Heladera ciclica Drean 314 Lts', weight: 'r', symbol: '$410.200', categoria:'Eectrodomesticos'},
  {position: 4, name: 'Heladera No Frost Inverter Electrolux', weight: 'r', symbol: '$599.999', categoria:'Eectrodomesticos'},
  {position: 5, name: 'Lavarropas Carga Frontal Inverter Midea', weight: 'r', symbol: '$500.999', categoria:'Eectrodomesticos'},
  {position: 6, name: 'Lavarropas Inverter Carga Frontal Drean', weight: 'r', symbol: '$589.999', categoria:'Eectrodomesticos'},
  {position: 7, name: 'PS5 Estandar God of War', weight: 'r', symbol: '$891.500', categoria:'Tecnologia'},
  {position: 8, name: 'PS4 1TB', weight: 'r', symbol: '$665.700', categoria:'Tecnologia'},
  {position: 9, name: 'Notebook Lenovo Gamer 15,6', weight: 'r', symbol: '$899.999', categoria:'Tecnologia'},
  {position: 10, name: 'Notebook Delll 15,6', weight: 'r', symbol: '$549.999', categoria:'Tecnologia'},
  {position: 12, name: 'iPhone 13 128GB Starlight', weight: 'r', symbol: '$2.377.500', categoria:'Tecnologia'},
  {position: 13, name: 'Celular Samsung Galaxy A54', weight: 'r', symbol: '$289.999', categoria:'Tecnologia'},
  {position: 14, name: 'Parlante Bluetooth Philco', weight: 'r', symbol: '$29.999', categoria:'TV y Audio'},
  {position: 15, name: 'Parlante Torre Aiwa', weight: 'r', symbol: '$109.999', categoria:'TV y Audio'},
  {position: 16, name: 'Smart TV Philips 32', weight: 'r', symbol: '$119.999', categoria:'TV y Audio'},
  {position: 17, name: 'TV Led 65 Samsung', weight: 'r', symbol: '$550.999', categoria:'TV y Audio'},
  {position: 18, name: 'Soundbar Noblex Sb100sw', weight: 'r', symbol: '$135.999', categoria:'TV y Audio'},
  {position: 18, name: 'Parlante Bluetooth Bose', weight: 'r', symbol: '$1.535.999', categoria:'TV y Audio'}
  
];

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
  
})
export class ServiciosComponent {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'categoria'];
  dataSource = ELEMENT_DATA;
} 

