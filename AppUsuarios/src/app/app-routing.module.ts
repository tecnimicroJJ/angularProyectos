import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ListUsuariosComponent } from './dashboard/list-usuarios/list-usuarios.component';
import { UsuarioComponent } from './dashboard/usuario/usuario.component';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {path:'', redirectTo: 'layout', pathMatch: 'full'} , //configuracion para que la direccion vacia nos mande a la
  //direccion de layout ... pathMath para que machee la ruta completa.
  {path: 'layout',  component: LayoutComponent}, //configuramos las rutas de nuesta aplicacion.
  {path: 'dashboard',  component: DashboardComponent, children: [
    { path: '', component: ListUsuariosComponent },
    { path: 'usuario/:id', component: UsuarioComponent }
  ]},
  {path: '**', redirectTo: 'layout' , pathMatch: 'full'} //direccion no valida lo manda a layout.
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
