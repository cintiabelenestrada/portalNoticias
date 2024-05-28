import { Component } from '@angular/core';
import { PortalNoticiasService } from '../../services/portal-noticias.service';
import { NoticiaOriginal, Noticias } from '../../models/portal-noticias';

@Component({
  selector: 'app-portal-noticias',
  standalone: true,
  imports: [],
  templateUrl: './portal-noticias.component.html',
  styleUrl: './portal-noticias.component.css',
})
export class PortalNoticiasComponent {
  noticias: Noticias[] = [];
  noticias2: Noticias[] = [];
  constructor(private portalNoticiasService: PortalNoticiasService) {}
  mostrarNoticias() {
    this.portalNoticiasService.getObtenerNoticias().subscribe(
      (data: any) => {
        // console.log("data: ", JSON.stringify(data));

        // 2 FORMAS DE ITERAR LOS ARRAY DE NOTICIAS:
        // 1ra forma me trae todos los elementos del array, y en el html solo muestro lo que necesito y me evito de hacer interface
        for (const item of data.categories) {
          this.noticias.push(item);
        }

        // 2da Forma va limpiando el array y solo me trae lo que le solicito, title y description
        this.noticias2 = data.categories.map((item: NoticiaOriginal) => {
          return {
            seo: {
              title: item.seo.title,
              description: item.seo.description,
            },
          };
        });

        console.log('data.categories: ', JSON.stringify(data.categories));
        console.log('noticias: ', JSON.stringify(this.noticias));
        console.log('noticias2: ', JSON.stringify(this.noticias2));
      },
      (error:any) => {
        console.log(error);
      }
    );
  }
}
