import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { AsphaltServicesComponent } from './asphalt-services/asphalt-services.component';
import { HomeComponent } from './home/home.component';
import { EstimateComponent } from './estimate/estimate.component';
import { HardscapingServicesComponent } from './hardscaping-services/hardscaping-services.component';
import { SealcoatingComponent } from './sealcoating/sealcoating.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'asphalt-services', component: AsphaltServicesComponent },
    { path: 'hardscaping-services', component: HardscapingServicesComponent },
    { path: 'sealcoating', component: SealcoatingComponent },
    { path: 'gallery', component: GalleryComponent },
    { path: 'reviews', component: ReviewsComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'about', component: AboutComponent },
    { path: 'estimate', component: EstimateComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' }, // Redirect to /home
    { path: '**', redirectTo: '/home' } // Wildcard route for a 404 page, redirected to /home
    ];

