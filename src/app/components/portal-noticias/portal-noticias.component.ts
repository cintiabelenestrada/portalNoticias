import { Component } from '@angular/core';
import { PortalNoticiasService } from '../../services/portal-noticias.service';

@Component({
  selector: 'app-portal-noticias',
  standalone: true,
  imports: [],
  templateUrl: './portal-noticias.component.html',
  styleUrl: './portal-noticias.component.css'
})
export class PortalNoticiasComponent {
  constructor(private portalNoticiasService: PortalNoticiasService){
  }
  mostrarNoticias(){
    this.portalNoticiasService.getObtenerNoticias().subscribe(
      (data:any) => {
      console.log(data);
      },
      (error:any) => {
        console.log(error);
      }
    )
  };
}