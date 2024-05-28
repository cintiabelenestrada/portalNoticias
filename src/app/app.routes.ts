import { Routes } from '@angular/router';
import { PortalNoticiasComponent } from './components/portal-noticias/portal-noticias.component';

export const routes: Routes = [
    {
        path: 'noticias',
        component: PortalNoticiasComponent,
        title: 'Últimas noticias',
      },
];
