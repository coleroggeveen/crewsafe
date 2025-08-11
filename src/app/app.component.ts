import { Component } from '@angular/core';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { filter } from 'rxjs/operators';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'crew-safe';
  year = new Date().getFullYear();
  showNavbar = true;

  // Hide navbar on dashboard and other logged-in pages
  constructor(private router: Router) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      const url = (event.urlAfterRedirects || event.url).split('?')[0];
      console.log('Navigated to:', url);
    
      this.showNavbar = !url.startsWith('/dashboard');
    });
  }
}
