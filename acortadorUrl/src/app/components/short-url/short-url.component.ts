import { ShortUrlService } from './../../services/short-url.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-short-url',
  templateUrl: './short-url.component.html',
  styleUrls: ['./short-url.component.css']
})
export class ShortUrlComponent implements OnInit {

  nombreUrl:string;
  urlShort:string;
  urlProcesada: boolean;
  loading:boolean;
  mostrarError:boolean;
  textError:string;


  constructor(private _shortUrlService: ShortUrlService) { 
    this.nombreUrl ="";
    this.urlShort ="";
    this.urlProcesada = false;
    this.loading = false;
    this.mostrarError=false;
    this.textError ="";

  }

  ngOnInit(): void {
  }

  procesarUrl(){

    //validar si la url es vacia
    if(this.nombreUrl == ""){
      this.error("Por favor ingrese una URL");
    }

    this.urlProcesada = false;
    this.loading = true;

    setTimeout(()=> {
      this.obtenerUrlShort();
    },2000)

  
  }

  obtenerUrlShort(){

      this._shortUrlService.getUrlShort(this.nombreUrl).subscribe(data =>{
      this.loading=false;
      this.urlProcesada = true;
      this.urlShort = data.link;
    },error =>{
      this.loading = false;
      console.log(error);
      if(error.error.description === 'The value provided is invalid.'){
        this.nombreUrl ="";
        this.error("La URL ingresada es invalida");
      }
     
    });
  }

  error(valor:string){

    this.mostrarError = true;
    this.textError =valor;

    //mostarmos error por 4 segundos
    setTimeout(() => {
      this.mostrarError = false;
    }, 4000);
    return;
  }

}

/*
ae98da484c3e4cf669bc050342301d0ea092ae7d token
*/