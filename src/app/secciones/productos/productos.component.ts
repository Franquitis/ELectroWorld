import { Component } from '@angular/core';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent {
  mostrar1=false
  mostrar2=false
  mostrar3=false
  electrodomesticos = [
    { nombre: "Cafetera Express Peabody", precio: "$77.500", img: './assets/Electrodomesticos/Cafetera Express Peabody.webp' },
    { nombre: "Cafetera Nespresso Inissia Black", precio: "$56.700", img: './assets/Electrodomesticos/Cafetera Nespresso Inissia Black.webp' },
    { nombre: "Heladera ciclica Drean 314 Lts", precio: "$410.200", img: './assets/Electrodomesticos/Heladera ciclica Drean 314 Lts.webp' },
    { nombre: "Heladera No Frost Inverter Electrolux", precio: "$599.999", img: './assets/Electrodomesticos/Heladera No Frost Inverter Electrolux.webp' },
    { nombre: "Lavarropas Carga Frontal Inverter Midea", precio: "$500.999", img: './assets/Electrodomesticos/Lavarropas Carga Frontal Inverter Midea.webp' },
    { nombre: "Lavarropas Inverter Carga Frontal Drean", precio: "$589.999", img: './assets/Electrodomesticos/Lavarropas Inverter Carga Frontal Drean.webp' }
  ]

  tecnologia = [
    { nombre: "PS5 Estandar God of War", precio: "$891.500", img: './assets/Tecnologia/PS5 Estandar God of War.webp' },
    { nombre: "PS4 1TB", precio: "$665.700", img: './assets/Tecnologia/PS4 1TB.webp' },
    { nombre: "Notebook Lenovo Gamer 15,6", precio: "$899.999", img: './assets/Tecnologia/Notebook Lenovo Gamer 15,6.webp' },
    { nombre: "Notebook Delll 15,6", precio: "$549.999", img: './assets/Tecnologia/Notebook Delll 15,6.webp' },
    { nombre: "iPhone 13 128GB Starlight", precio: "$2.377.500", img: './assets/Tecnologia/iPhone 13 128GB Starlight.webp' },
    { nombre: "Celular Samsung Galaxy A54", precio: "$289.999", img: './assets/Tecnologia/Celular Samsung Galaxy A54.webp' }
  ]

  TVAudio = [
    { nombre: "Parlante Bluetooth Philco", precio: "$29.999", img: './assets/TV y Audio/Parlante Bluetooth Philco.webp' },
    { nombre: "Parlante Torre Aiwa", precio: "$109.999", img: './assets/TV y Audio/Parlante Torre Aiwa.webp' },
    { nombre: "Smart TV Philips 32", precio: "$119.999", img: './assets/TV y Audio/Smart TV Philips 32.webp' },
    { nombre: "TV Led 65 Samsung", precio: "$550.999", img: './assets/TV y Audio/TV Led 65 Samsung.webp' },
    { nombre: "Soundbar Noblex Sb100sw", precio: "$135.999", img: './assets/TV y Audio/Soundbar Noblex Sb100sw.webp' },
    { nombre: "Parlante Bluetooth Bose", precio: "$1.535.999", img: './assets/TV y Audio/Parlante Bluetooth Bose.webp' }
  ]
}
