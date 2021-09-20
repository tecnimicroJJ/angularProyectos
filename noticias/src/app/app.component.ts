import { NoticiaService } from './service/noticia.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  
  listNoticias: any[] = [];
  loading =false;


  constructor(private _NoticiaService: NoticiaService){



  }


  buscarNoticias(parametros:any){
      this.loading = true;
      this.listNoticias =[];
      this._NoticiaService.getNoticias(parametros).subscribe(data => {
      this.loading =false;
      this.listNoticias = data.articles;

    }, error => {
       console.log(error);
       this.loading =false;
    }
    
    )
  }

}


//e26b4987048e494598089a7d3b012361 APIKEY
