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


  constructor(private _shortUrlService: ShortUrlService) { 
    this.nombreUrl ="";
    this.urlShort ="";
    this.urlProcesada = false;
  }

  ngOnInit(): void {
  }

  procesarUrl(){
    //console.log(this.nombreUrl);

    this._shortUrlService.getUrlShort(this.nombreUrl).subscribe(data =>{
      console.log(data);
    });
  }

}

/*
ae98da484c3e4cf669bc050342301d0ea092ae7d token
*/