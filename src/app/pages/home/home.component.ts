import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  menuItems = [
    {
      nombre: 'Pizza Margarita',
      descripcion: 'Pizza clásica con tomate natural, mozzarella y albahaca fresca.',
      precio: 8.5,
      imagen: 'assets/public/pizza-margarita.webp'
    },
    {
      nombre: 'Hamburguesa BBQ',
      descripcion: 'Carne de res, cebolla caramelizada, queso cheddar y salsa barbacoa.',
      precio: 9.95,
      imagen: 'assets/public/hamburguesa-bbq.webp'
    },
    {
      nombre: 'Ensalada César',
      descripcion: 'Lechuga romana, crutones, parmesano y aderezo César casero.',
      precio: 7.5,
      imagen: 'assets/public/ensalada-cesar.webp'
    }
  ];

  guardarEnLocalStorage(item: any) {
    const guardados = JSON.parse(localStorage.getItem('menuItems') || '[]');
    guardados.push(item);
    localStorage.setItem('menuItems', JSON.stringify(guardados));
    alert(`"${item.nombre}" guardado en localStorage.`);
  }
}
