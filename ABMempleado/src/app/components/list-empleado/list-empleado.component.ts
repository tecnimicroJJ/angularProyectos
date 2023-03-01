import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { EmpleadoService } from 'src/app/services/empleado.service';
import { Empleado } from 'src/app/models/empleado';
import { MatDialog } from '@angular/material/dialog';
import { MensajeConfirmacionComponent } from '../shared/mensaje-confirmacion/mensaje-confirmacion.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-list-empleado',
  templateUrl: './list-empleado.component.html',
  styleUrls: ['./list-empleado.component.css']
})
export class ListEmpleadoComponent implements OnInit {
  displayedColumns: string[] = ['nombreCompleto', 'correo', 'estadoCivil', 'fechaIngreso','sexo','telefono','acciones'];
  dataSource = new MatTableDataSource<Empleado>();//aqui hay Indicar el tipo de elemento que contendra pues da un fallo.
  listEmpleado: Empleado[];


  @ViewChild(MatPaginator, { static: true })
  paginator!: MatPaginator;
  @ViewChild(MatSort, {static:true}) sort!: MatSort;

  constructor(private empleadoService: EmpleadoService,public dialog: MatDialog,
              public snackbar: MatSnackBar) {
    this.listEmpleado = [];
  }

  ngOnInit(): void {
    this.cargarEmpleados();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  cargarEmpleados(){
    this.listEmpleado = this.empleadoService.getEmpleados();
    this.dataSource = new MatTableDataSource(this.listEmpleado);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  eliminarEmpleado(index: number){

    const dialogRef = this.dialog.open(MensajeConfirmacionComponent ,{
      data: {mensaje: '¿Esta seguro de eliminar el empleado?'},
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result === 'aceptar'){
        this.empleadoService.eliminarEmpleado(index);
        this.cargarEmpleados();
        this.snackbar.open('!El empleado fue eliminado con exito!','',{
          duration: 3000
        });
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
    });
  }

}
