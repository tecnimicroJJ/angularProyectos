import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ImagenService } from 'src/app/services/imagen.service';

@Component({
  selector: 'app-listar-imagen',
  templateUrl: './listar-imagen.component.html',
  styleUrls: ['./listar-imagen.component.css']
})
export class ListarImagenComponent implements OnInit {
  termino ='';
  suscription: Subscription;
  listImagenes:any[] = [];
  loading = false;
  imagenesPorPagina = 30;
  paginaActual = 1;
  calcularTotalPaginas = 0;


constructor(private _imagenService:ImagenService){
  this.suscription = this._imagenService.getTerminoBusqueda().subscribe(data =>{
    this.paginaActual = 1;
    this.termino = data;
    this.loading = true;
    this.obtenerImagenes();
  })
}

ngOnInit(): void {
}

//TODO
obtenerImagenes(){
  this._imagenService.getImagenes(this.termino,this.imagenesPorPagina, this.paginaActual).subscribe({
    next: data => {
       console.log(data);
       this.loading = false;
       this.listImagenes = data.hits
       this.calcularTotalPaginas = Math.ceil(data.totalHits / this.imagenesPorPagina);
      },
    error: (data) => {
      if(data.hits.length === 0){
      this.loading = false;
      return this._imagenService.setError("No hay resultados");
      }
    },
    });
  }

  paginaAnterior(){
    this.paginaActual--;
    this.loading = true;
    this.listImagenes = [];
    this.obtenerImagenes();
  }

  paginaAnteriorClass(){
    if(this.paginaActual === 1){
      return false;
    }else{
      return true;
    }
  }

  paginaPosterior(){
    this.paginaActual++;
    this.loading = true;
    this.listImagenes = [];
    this.obtenerImagenes();
  }

  paginaPosteriorClass(){
    if(this.paginaActual === this.calcularTotalPaginas){
      return false;
    }else{
      return true;
    }
  }


}
