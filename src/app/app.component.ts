import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PortalNoticiasComponent } from './components/portal-noticias/portal-noticias.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PortalNoticiasComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portalNoticias';
}
