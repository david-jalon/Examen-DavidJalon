import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CocktailsComponent } from './pages/cocktails/cocktails.component';
import { OrderComponent } from './pages/order/order.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
    {
        path:'',
        component: HomeComponent
    },
    {
        path:'cocktails',
        component: CocktailsComponent
    },
    {
        path:'order',
        component: OrderComponent
    }
];
