import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
  id:string;
  fistName:string;
  lastName:string;
  email:string;
  urlImg: string;
  loading = true;

  constructor(private aRoute:ActivatedRoute,
              private usuarioService: UsuarioService) {
    this.id = this.aRoute.snapshot.paramMap.get('id');

  }

  ngOnInit(): void {
    this.getUsuario();
  }

  getUsuario():void{
    this.usuarioService.getUsuario(this.id).subscribe(data =>{
       this.fistName = data.data.first_name;
       this.lastName = data.data.last_name;
       this.email = data.data.email;
       this.urlImg = data.data.avatar;
       this.loading = false;
    })
  }

}
