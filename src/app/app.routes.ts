import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PricingComponent } from './pages/pricing/pricing.component';
import { ContactComponent } from './pages/contact/contact.component';
import { FeaturesComponent } from './pages/features/features.component';
import { DashboardComponent } from './dashboard/dashboard.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'CrewSafe — Safety made simple' },
  { path: 'features', component: FeaturesComponent, title: 'Features — CrewSafe' },
  { path: 'pricing', component: PricingComponent, title: 'Pricing — CrewSafe' },
  { path: 'contact', component: ContactComponent, title: 'Contact — CrewSafe' },
  { path: 'dashboard', component: DashboardComponent, title: 'Dashboard — CrewSafe' },
  { path: '**', redirectTo: '' }
];
