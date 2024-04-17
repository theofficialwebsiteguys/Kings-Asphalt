import { Routes } from '@angular/router';
import { AsphaltServicesComponent } from './asphalt-services/asphalt-services.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'asphalt-services', component: AsphaltServicesComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' }, // Redirect to /home
    { path: '**', redirectTo: '/home' }, // Wildcard route for a 404 page, redirected to /home
];
