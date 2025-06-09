import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-order',
  imports: [],
  standalone: true,
  templateUrl: './order.component.html',
  styleUrl: './order.component.css'
})
export class OrderComponent implements OnInit {
  cocktailsGuardados: any[] = [];

  ngOnInit() {
    this.cocktailsGuardados = JSON.parse(localStorage.getItem('cocktails') || '[]');
  }
}
