import { Component } from '@angular/core';

@Component({
  selector: 'app-cocktails',
  imports: [],
  standalone:true,
  templateUrl: './cocktails.component.html',
  styleUrl: './cocktails.component.css'
})
export class CocktailsComponent {
  cocktails = [
    {
      nombre: 'Mojito',
      descripcion: 'Ron blanco, hierbabuena, lima, azúcar y soda.',
      precio: 8.5,
      imagen: 'https://via.placeholder.com/300x200'
    },
    {
      nombre: 'Margarita',
      descripcion: 'Tequila, triple sec, jugo de lima y sal en el borde.',
      precio: 9.0,
      imagen: 'https://via.placeholder.com/300x200'
    },
    {
      nombre: 'Piña Colada',
      descripcion: 'Ron, crema de coco y jugo de piña.',
      precio: 7.5,
      imagen: 'https://via.placeholder.com/300x200'
    }
  ];

  guardarEnLocalStorage(item: any) {
    const guardados = JSON.parse(localStorage.getItem('cocktails') || '[]');
    guardados.push(item);
    localStorage.setItem('cocktails', JSON.stringify(guardados));
    alert(`"${item.nombre}" guardado en localStorage.`);
  }

   guardarItem(nombre: string, descripcion: string, precio: number, imagen: string) {
    // Obtener lista guardada o crear una nueva
    const guardados = JSON.parse(localStorage.getItem('cocktails') || '[]');

    // Añadir nuevo cocktail
    guardados.push({ nombre, descripcion, precio, imagen });

   
    localStorage.setItem('cocktails', JSON.stringify(guardados));

  }
}
