import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { OrderComponent } from './pages/order/order.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RouterLink,OrderComponent],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Examen-DavidJalon';
}
