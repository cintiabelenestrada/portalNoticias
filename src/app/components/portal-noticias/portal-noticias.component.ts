import { Component } from '@angular/core';
import { PortalNoticiasService } from '../../services/portal-noticias.service';
import {  InterfaceCategorias } from '../../models/portal-noticias';

@Component({
  selector: 'app-portal-noticias',
  standalone: true,
  imports: [],
  templateUrl: './portal-noticias.component.html',
  styleUrl: './portal-noticias.component.css',
})
export class PortalNoticiasComponent {
  categorias: InterfaceCategorias[] = [];
  constructor(private portalNoticiasService: PortalNoticiasService) {}
  mostrarCategorias() {
    this.portalNoticiasService.getObtenerNoticias().subscribe(
      (data: any) => {
        this.categorias = data.categories;
        console.log('data.categories: ', JSON.stringify(data.categories));
      },
      (error:any) => {
        console.log(error);
      }
    );
  }
}
