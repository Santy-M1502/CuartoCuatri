import { Routes } from '@angular/router';
import { BienvenidaComponent } from './components/bienvenida/bienvenida';

export const routes: Routes = [
    {
        path : "",
        redirectTo : "/bienvenida",
        pathMatch : 'full'
    },
    {
        path : "bienvenida",
        component : BienvenidaComponent
    }
];
