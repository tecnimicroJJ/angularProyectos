import { Injectable } from '@angular/core';
import { Empleado } from '../models/empleado';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {
listEmpleado: Empleado[] = [
{ nombreCompleto: 'Lucas Martinez',correo: 'lmartinez@gmail.com',telefono: 351321456,
sexo: 'Masculino', fechaIngreso: new Date () , estadoCivil: 'Soltero/a'
},
{ nombreCompleto: 'Lucia Mara',correo: 'lmara@gmail.com',telefono: 987321456,
sexo: 'Femenino', fechaIngreso: new Date () , estadoCivil: 'Soltero/a'
},
{ nombreCompleto: 'Juan Antunez',correo: 'jantunez@gmail.com',telefono: 478921456,
sexo: 'Masculino', fechaIngreso: new Date () , estadoCivil: 'Casado/a'
},
{ nombreCompleto: 'Maria lucidez',correo: 'malucidez@gmail.com',telefono: 987147258,
sexo: 'Femenino', fechaIngreso: new Date () , estadoCivil: 'Casado/a'
},
{ nombreCompleto: 'Pepe Martin',correo: 'pmartin@gmail.com',telefono: 478921456,
sexo: 'Masculino', fechaIngreso: new Date () , estadoCivil: 'Soltero/a'
},
{ nombreCompleto: 'Antonia Mara',correo: 'amara@gmail.com',telefono: 987321456,
sexo: 'Femenino', fechaIngreso: new Date () , estadoCivil: 'Soltero/a'
},
{ nombreCompleto: 'Daniel Anet',correo: 'danet@gmail.com',telefono: 789421456,
sexo: 'Masculino', fechaIngreso: new Date () , estadoCivil: 'Casado/a'
},
{ nombreCompleto: 'Lucinda manzano',correo: 'lmanzano@gmail.com',telefono: 987144562,
sexo: 'Femenino', fechaIngreso: new Date () , estadoCivil: 'Casado/a'
}];
  constructor() { }

  getEmpleados(){
   return  this.listEmpleado.slice();
  }

  eliminarEmpleado(index: number){
    this.listEmpleado.splice(index, 1);
  }

  agregarEmpleado(empleado: Empleado){
    this.listEmpleado.unshift(empleado);
  }

    getEmpleado(index : number){
    return this.listEmpleado[index];
  }

  editEmpleado(empleado: Empleado, idEmpleado: number){
    this.listEmpleado[idEmpleado].nombreCompleto = empleado.nombreCompleto,
    this.listEmpleado[idEmpleado].correo = empleado.correo,
    this.listEmpleado[idEmpleado].fechaIngreso = empleado.fechaIngreso,
    this.listEmpleado[idEmpleado].telefono = empleado.telefono,
    this.listEmpleado[idEmpleado].estadoCivil = empleado.estadoCivil,
    this.listEmpleado[idEmpleado].sexo = empleado.sexo

  }
}
